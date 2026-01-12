// server/data/index.ts
import { lesson1 } from "./lesson1";
import { lesson2 } from "./lesson2";
import { lesson3 } from "./lesson3"; // <--- Uncommented
import { Module } from "./types";

const lessons: Record<string, Module> = {
  [lesson1.id]: lesson1,
  [lesson2.id]: lesson2,
  [lesson3.id]: lesson3, // <--- Uncommented
};

export function getLessonContext(unitId: string) {
  const lesson = lessons[unitId];
  
  if (!lesson) {
    return {
      topic: "General Practice",
      vocabList: "No restrictions.",
      grammarList: "Standard grammar."
    };
  }

  // Combine patterns from 'patterns' (Lesson 1/2) and 'key_sentence_patterns' (Lesson 3)
  const allPatterns = [...(lesson.patterns || []), ...(lesson.key_sentence_patterns || [])];

  return {
    topic: lesson.title,
    vocabList: lesson.vocabulary?.map(v => `${v.word} (${v.english})`).join(", ") || "",
    grammarList: lesson.grammar?.map(g => g.topic).join(", ") || "",
    // We can also pass patterns if your AI prompt needs them
    patterns: allPatterns.map(p => p.function).join(", ")
  };
}