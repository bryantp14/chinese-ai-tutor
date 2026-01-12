// server/data/lesson3.ts
import { Module } from "./types";

export const lesson3: Module = {
  id: "unit-3",
  title: "Lesson 3: Dates, Ages, and Invitations",
  vocabulary: [
    { word: "九月", pinyin: "jiǔyuè", english: "September" },
    { word: "月", pinyin: "yuè", english: "month" },
    { word: "十二", pinyin: "shí'èr", english: "twelve" },
    { word: "号", pinyin: "hào", english: "day of the month; number in a series" },
    { word: "星期", pinyin: "xīngqī", english: "week" },
    { word: "星期四", pinyin: "xīngqīsì", english: "Thursday" },
    { word: "天", pinyin: "tiān", english: "day" },
    { word: "生日", pinyin: "shēngrì", english: "birthday" },
    { word: "生", pinyin: "shēng", english: "to give birth; to be born" },
    { word: "日", pinyin: "rì", english: "day; sun" },
    { word: "今年", pinyin: "jīnnián", english: "this year" },
    { word: "年", pinyin: "nián", english: "year" },
    { word: "多", pinyin: "duō", english: "how many/much; many" },
    { word: "大", pinyin: "dà", english: "big; old (of age)" },
    { word: "十八", pinyin: "shíbā", english: "eighteen" },
    { word: "岁", pinyin: "suì", english: "years old" },
    { word: "吃", pinyin: "chī", english: "to eat" },
    { word: "饭", pinyin: "fàn", english: "meal; (cooked) rice" },
    { word: "怎么样", pinyin: "zěnmeyàng", english: "How is that? How does that sound?" },
    { word: "太...了", pinyin: "tài...le", english: "too; extremely" },
    { word: "谢谢", pinyin: "xièxie", english: "to thank" },
    { word: "喜欢", pinyin: "xǐhuan", english: "to like" },
    { word: "菜", pinyin: "cài", english: "dishes; cuisine" },
    { word: "还是", pinyin: "háishì", english: "\"or\" in questions" },
    { word: "可是", pinyin: "kěshì", english: "but" },
    { word: "我们", pinyin: "wǒmen", english: "we" },
    { word: "点", pinyin: "diǎn", english: "o'clock" },
    { word: "半", pinyin: "bàn", english: "half; half an hour" },
    { word: "晚上", pinyin: "wǎnshàng", english: "evening; night" },
    { word: "见", pinyin: "jiàn", english: "to see" },
    { word: "再见", pinyin: "zàijiàn", english: "goodbye; see you again" },
    { word: "再", pinyin: "zài", english: "again" },
    { word: "英国", pinyin: "Yīngguó", english: "Britain; England" },
    { word: "现在", pinyin: "xiànzài", english: "now" },
    { word: "刻", pinyin: "kè", english: "quarter (of an hour)" },
    { word: "事儿", pinyin: "shìr", english: "matter; affair; event" },
    { word: "今天", pinyin: "jīntiān", english: "today" },
    { word: "很", pinyin: "hěn", english: "very" },
    { word: "忙", pinyin: "máng", english: "busy" },
    { word: "明天", pinyin: "míngtiān", english: "tomorrow" },
    { word: "晚饭", pinyin: "wǎnfàn", english: "dinner; supper" },
    { word: "为什么", pinyin: "wèishénme", english: "why" },
    { word: "为", pinyin: "wèi", english: "for" },
    { word: "因为", pinyin: "yīnwèi", english: "because" },
    { word: "还", pinyin: "hái", english: "also; too; as well" },
    { word: "同学", pinyin: "tóngxué", english: "classmate" },
    { word: "认识", pinyin: "rènshi", english: "to know; to recognize" },
    { word: "朋友", pinyin: "péngyou", english: "friend" }
  ],
  conversations: [
    {
      title: "Sample Conversation 1",
      context: "Asking about a date, birthday, and arranging a dinner invitation.",
      dialogue: [
        { speaker: "高文中", chinese: "白英爱，九月十二号是星期几？", pinyin: "Bái Yīng'ài, jiǔyuè shí'èr hào shì xīngqī jǐ?", english: "Bai Ying'ai, what day is September 12th?", function: "ask about the day of the week" },
        { speaker: "白英爱", chinese: "是星期四。", pinyin: "Shì xīngqīsì.", english: "It’s Thursday.", function: "provide information" },
        { speaker: "高文中", chinese: "那天是我的生日。", pinyin: "Nà tiān shì wǒ de shēngrì.", english: "That day is my birthday.", function: "explain reason" },
        { speaker: "白英爱", chinese: "是吗？你今年多大？", pinyin: "Shì ma? Nǐ jīnnián duō dà?", english: "Really? How old are you this year?", function: "express surprise and ask about age" },
        { speaker: "高文中", chinese: "十八岁。", pinyin: "Shíbā suì.", english: "Eighteen.", function: "provide age information" },
        { speaker: "白英爱", chinese: "我星期四请你吃饭，怎么样？", pinyin: "Wǒ xīngqīsì qǐng nǐ chī fàn, zěnmeyàng?", english: "I’ll treat you to dinner on Thursday, how about it?", function: "make invitation" },
        { speaker: "高文中", chinese: "太好了！谢谢，谢谢。", pinyin: "Tài hǎo le! Xièxie, xièxie.", english: "Great! Thank you, thank you.", function: "express excitement and gratitude" },
        { speaker: "白英爱", chinese: "你喜欢吃中国菜还是美国菜？", pinyin: "Nǐ xǐhuan chī Zhōngguó cài háishì Měiguó cài?", english: "Do you like Chinese food or American food?", function: "ask preference" },
        { speaker: "高文中", chinese: "我是英国人，可是我喜欢吃中国菜。", pinyin: "Wǒ shì Yīngguó rén, kěshì wǒ xǐhuan chī Zhōngguó cài.", english: "I am British, but I like Chinese food.", function: "explain preference" },
        { speaker: "白英爱", chinese: "好，我们吃中国菜。", pinyin: "Hǎo, wǒmen chī Zhōngguó cài.", english: "Okay, let’s eat Chinese food.", function: "confirm arrangement" },
        { speaker: "高文中", chinese: "星期四几点？", pinyin: "Xīngqīsì jǐ diǎn?", english: "What time on Thursday?", function: "ask about time" },
        { speaker: "白英爱", chinese: "七点半怎么样？", pinyin: "Qī diǎn bàn zěnmeyàng?", english: "How about 7:30?", function: "propose time" },
        { speaker: "高文中", chinese: "好，星期四晚上见。", pinyin: "Hǎo, xīngqīsì wǎnshàng jiàn.", english: "Okay, see you Thursday evening.", function: "agree and confirm" },
        { speaker: "白英爱", chinese: "再见！", pinyin: "Zàijiàn!", english: "Goodbye!", function: "say goodbye" }
      ]
    },
    {
      title: "Sample Conversation 2",
      context: "Asking about time, availability, and giving a reason for an invitation.",
      dialogue: [
        { speaker: "王朋", chinese: "白英爱，现在几点？", pinyin: "Bái Yīng'ài, xiànzài jǐ diǎn?", english: "Bai Ying'ai, what time is it now?", function: "ask time" },
        { speaker: "白英爱", chinese: "五点三刻。", pinyin: "Wǔ diǎn sān kè.", english: "It’s 5:45.", function: "provide time" },
        { speaker: "王朋", chinese: "我六点一刻有事儿。", pinyin: "Wǒ liù diǎn yí kè yǒu shìr.", english: "I have something to do at 6:15.", function: "state schedule" },
        { speaker: "白英爱", chinese: "你今天很忙，明天忙不忙？", pinyin: "Nǐ jīntiān hěn máng, míngtiān máng bù máng?", english: "You’re very busy today, will you be busy tomorrow?", function: "ask availability" },
        { speaker: "王朋", chinese: "我今天很忙，可是明天不忙。有事儿吗？", pinyin: "Wǒ jīntiān hěn máng, kěshì míngtiān bù máng. Yǒu shìr ma?", english: "I’m very busy today, but not tomorrow. What’s the matter?", function: "explain and ask reason" },
        { speaker: "白英爱", chinese: "明天我请你吃晚饭，怎么样？", pinyin: "Míngtiān wǒ qǐng nǐ chī wǎnfàn, zěnmeyàng?", english: "Tomorrow I’ll treat you to dinner, how about it?", function: "make invitation" },
        { speaker: "王朋", chinese: "你为什么请我吃饭？", pinyin: "Nǐ wèishénme qǐng wǒ chī fàn?", english: "Why are you inviting me to dinner?", function: "ask reason" },
        { speaker: "白英爱", chinese: "因为明天是高文中的生日。", pinyin: "Yīnwèi míngtiān shì Gāo Wénzhōng de shēngrì.", english: "Because tomorrow is Gao Wenzhong’s birthday.", function: "give reason" },
        { speaker: "王朋", chinese: "是吗？好。还请谁？", pinyin: "Shì ma? Hǎo. Hái qǐng shéi?", english: "Really? Okay. Who else are you inviting?", function: "express surprise and ask about others" },
        { speaker: "白英爱", chinese: "还请我的同学李友。", pinyin: "Hái qǐng wǒ de tóngxué Lǐ Yǒu.", english: "I’m also inviting my classmate Li You.", function: "add information" },
        { speaker: "王朋", chinese: "那太好了，我认识李友，她也是我的朋友。明天几点?", pinyin: "Nà tài hǎo le, wǒ rènshi Lǐ Yǒu, tā yě shì wǒ de péngyou. Míngtiān jǐ diǎn?", english: "That’s great, I know Li You, she’s also my friend. What time tomorrow?", function: "express happiness and confirm time" },
        { speaker: "白英爱", chinese: "明天晚上七点半。", pinyin: "Míngtiān wǎnshàng qī diǎn bàn.", english: "Tomorrow evening at 7:30.", function: "set time" },
        { speaker: "王朋", chinese: "好，明天七点半见。", pinyin: "Hǎo, míngtiān qī diǎn bàn jiàn.", english: "Okay, see you at 7:30 tomorrow.", function: "confirm plan" }
      ]
    }
  ],
  key_sentence_patterns: [
    { function: "ask about the day of the week", patterns: [ "今天是星期几？", "九月十二号是星期几？" ] },
    { function: "ask about the date", patterns: [ "今天是几月几号？", "星期四是几月几号？" ] },
    { function: "ask age", patterns: [ "你今年多大？", "我今年十八岁。" ] },
    { function: "ask birthday", patterns: [ "你的生日是几月几号？", "我的生日是九月十二号。" ] },
    { function: "ask time", patterns: [ "现在几点？", "七点半。" ] },
    { function: "ask availability", patterns: [ "你明天忙不忙？", "你明天有没有事儿？" ] },
    { function: "make invitation", patterns: [ "我请你吃饭，怎么样？" ] },
    { function: "ask preference", patterns: [ "你喜欢吃中国菜还是美国菜？" ] },
    { function: "ask reason", patterns: [ "你为什么……？", "因为……。" ] },
    { function: "express feelings", patterns: [ "是吗？", "太好了！" ] },
    { function: "close conversation", patterns: [ "再见！", "明天晚上见！" ] }
  ],
  grammar: [
    {
      topic: "Dates and Days",
      points: [
        {
          structure: "Year + Month + Day + 星期",
          usage: "Dates follow the order Year → Month → Day → Day of week.",
          examples: [
            { statement: "今天是九月十二号，星期四。", negation: "今天不是九月十二号。", question: "今天是几月几号？" }
          ]
        }
      ]
    },
    {
      topic: "Asking Ages and Birthdays",
      points: [
        {
          structure: "Subject + 今年 + 多大？",
          usage: "Used to ask a person’s age.",
          examples: [
            { statement: "我今年十八岁。", negation: "我今年不是十八岁。", question: "你今年多大？" }
          ]
        },
        {
          structure: "Subject + 的生日是 + Date",
          usage: "Expressing someone’s birthday.",
          examples: [
            { statement: "我的生日是九月十二号。", negation: "我的生日不是九月十二号。", question: "你的生日是几月几号？" }
          ]
        }
      ]
    },
    {
      topic: "Telling Time",
      points: [
        {
          structure: "#点 / #点半 / #点一刻 / #点三刻",
          usage: "To state the current time.",
          examples: [
            { statement: "现在七点半。", negation: "现在不是七点半。", question: "现在几点？" }
          ],
          note: "Use 两点 instead of 二点 for 2 o’clock."
        }
      ]
    },
    {
      topic: "Affirmative-Negative Questions",
      points: [
        {
          structure: "Verb + 不 + Verb",
          usage: "Basic yes-no question using A-not-A structure.",
          examples: [
            { statement: "你今天很忙。", negation: "我今天不忙。", question: "你今天忙不忙？" }
          ]
        },
        {
          structure: "有没有",
          usage: "Used with 有 to ask possession or availability.",
          examples: [
            { statement: "我有事儿。", negation: "我没有事儿。", question: "你今天有没有事儿？" }
          ]
        }
      ]
    },
    {
      topic: "Invitations and Preferences",
      points: [
        {
          structure: "A + 请 + B + Verb phrase",
          usage: "A invites or treats B to do something.",
          examples: [
            { statement: "我请你吃饭。", negation: "我不请你吃饭。", question: "我请你吃饭，怎么样？" }
          ]
        },
        {
          structure: "喜欢 + A + 还是 + B",
          usage: "Used to offer a choice.",
          examples: [
            { statement: "我喜欢中国菜。", negation: "我不喜欢中国菜。", question: "你喜欢中国菜还是美国菜？" }
          ]
        }
      ]
    },
    {
      topic: "Inquiring and Explaining Reasons",
      points: [
        {
          structure: "为什么…？ 因为…。",
          usage: "Used to ask and explain reasons.",
          examples: [
            { statement: "我今天很忙。", negation: "我今天不忙。", question: "你为什么很忙？" }
          ]
        }
      ]
    },
    {
      topic: "Adverb 还",
      points: [
        {
          structure: "Subject + Verb phrase，还 + Verb phrase",
          usage: "还 indicates an additional element.",
          examples: [
            { statement: "她请高文中，还请王朋。", negation: "她没请王朋。", question: "她还请谁？" }
          ],
          note: "Difference: 也 emphasizes similarity across subjects, while 还 introduces an addition."
        }
      ]
    }
  ]
};