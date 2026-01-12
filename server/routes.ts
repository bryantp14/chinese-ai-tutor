import { appendToSheet } from "./sheets"; 
import type { Express } from "express";
import { createServer, type Server } from "http";
import { api } from "@shared/routes";
import { z } from "zod";
import OpenAI from "openai";
// NEW IMPORTS: Link to your new data engine and prompt file
import { getLessonContext } from "./data"; 
import { systemInstruction } from "./systemInstruction";
import { registerChatRoutes } from "./replit_integrations/chat";
import { registerImageRoutes } from "./replit_integrations/image";

// Initialize OpenAI with OpenRouter config
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY, 
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "X-Title": "My Chinese Tutor App",
  },
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Register integration routes
  registerChatRoutes(app);
  registerImageRoutes(app);

  app.post(api.chat.sendMessage.path, async (req, res) => {
    try {
      const { message, unitId, history } = api.chat.sendMessage.input.parse(req.body);

      // --- STEP 1: Get Dynamic Lesson Data ---
      // We now fetch specific vocab/grammar based on the unitId (e.g., "unit-3")
      const lessonContext = getLessonContext(unitId || "unit-1");

      // --- STEP 2: Construct the System Prompt ---
      // We combine the strict JSON rules (from systemInstruction.ts)
      // with the dynamic content for the current lesson.
      const systemMessageContent = `
      ${JSON.stringify(systemInstruction, null, 2)}

      *** CURRENT LESSON CONTEXT ***
      You are strictly limited to the following vocabulary and grammar:
      
      TOPIC: ${lessonContext.topic}
      
      ALLOWED VOCABULARY:
      ${lessonContext.vocabList}
      
      ALLOWED GRAMMAR POINTS:
      ${lessonContext.grammarList}

      ALLOWED SENTENCE PATTERNS:
      ${lessonContext.patterns || "None specified"}
      `;

      // Prepare conversation history
      const recentHistory = (history || []).slice(-10).map(msg => ({
        role: msg.role as "user" | "assistant", 
        content: msg.content
      }));

      const messages = [
        { role: "system" as const, content: systemMessageContent },
        ...recentHistory,
        { role: "user" as const, content: message }
      ];

      // Call OpenAI
      const response = await openai.chat.completions.create({
        model: "openai/gpt-4o", 
        messages: messages,
        // Use the temperature defined in your JSON rules
        temperature: systemInstruction.generation.temperature, 
      });

      const aiContent = response.choices[0].message.content || "Sorry, I couldn't understand that.";

      // Send response to User
      res.json({
        message: aiContent,
        role: "assistant"
      });

      // Log to Google Sheets
      await appendToSheet({
        unit: unitId,
        userMessage: message,
        aiResponse: aiContent
      });
      
    } catch (err) {
      console.error("Chat error:", err);
      if (!res.headersSent) {
        if (err instanceof z.ZodError) {
          res.status(400).json({
            message: "Invalid input",
            field: err.errors[0].path.join('.')
          });
        } else {
          res.status(500).json({ message: "Internal server error" });
        }
      }
    }
  });

  return httpServer;
}