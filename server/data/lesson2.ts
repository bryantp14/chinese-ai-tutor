// server/data/lesson2.ts
import { Module } from "./types";

export const lesson2: Module = {
  id: "unit-2",
  title: "Lesson 2: Family",
  vocabulary: [
    { word: "家", pinyin: "jiā", english: "family; home" },
    { word: "几", pinyin: "jǐ", english: "how many; some; a few" },
    { word: "口", pinyin: "kǒu", english: "(measure word for number of family members)" },
    { word: "哥哥", pinyin: "gēge", english: "older brother" },
    { word: "两", pinyin: "liǎng", english: "two (counting); a couple of" },
    { word: "妹妹", pinyin: "mèimei", english: "younger sister" },
    { word: "和", pinyin: "hé", english: "and; with (connecting nouns)" },
    { word: "大姐", pinyin: "dàjiě", english: "eldest sister" },
    { word: "二姐", pinyin: "èrjiě", english: "second oldest sister" },
    { word: "做", pinyin: "zuò", english: "to do; to make" },
    { word: "工作", pinyin: "gōngzuò", english: "job; to work" },
    { word: "律师", pinyin: "lǜshī", english: "lawyer" },
    { word: "英文", pinyin: "Yīngwén", english: "English language" },
    { word: "都", pinyin: "dōu", english: "both; all" },
    { word: "大学生", pinyin: "dàxuéshēng", english: "college student" },
    { word: "大学", pinyin: "dàxué", english: "university; college" },
    { word: "医生", pinyin: "yīshēng", english: "doctor; physician" },
    { word: "白英爱", pinyin: "Bái Yīng'ài", english: "a girl’s name" },
    { word: "那", pinyin: "nà", english: "that" },
    { word: "的", pinyin: "de", english: "possessive or descriptive particle" },
    { word: "照片", pinyin: "zhàopiàn", english: "photo; picture" },
    { word: "这", pinyin: "zhè", english: "this" },
    { word: "爸爸", pinyin: "bàba", english: "dad" },
    { word: "妈妈", pinyin: "māma", english: "mom" },
    { word: "个", pinyin: "gè", english: "(general measure word)" },
    { word: "女", pinyin: "nǚ", english: "female" },
    { word: "孩子", pinyin: "háizi", english: "child" },
    { word: "谁", pinyin: "shéi", english: "who" },
    { word: "她", pinyin: "tā", english: "she; her" },
    { word: "姐姐", pinyin: "jiějie", english: "older sister" },
    { word: "男", pinyin: "nán", english: "male" },
    { word: "弟弟", pinyin: "dìdi", english: "younger brother" },
    { word: "他", pinyin: "tā", english: "he; him" },
    { word: "大哥", pinyin: "dàgē", english: "eldest brother" },
    { word: "儿子", pinyin: "érzi", english: "son" },
    { word: "有", pinyin: "yǒu", english: "to have; to exist" },
    { word: "女儿", pinyin: "nǚ'ér", english: "daughter" },
    { word: "没", pinyin: "méi", english: "not have; not" },
    { word: "高文中", pinyin: "Gāo Wénzhōng", english: "a boy’s name" },
    { word: "高", pinyin: "Gāo", english: "a surname; tall; high" }
  ],
  conversations: [
    {
      title: "Sample Conversation 1",
      context: "Discussing family size and professions",
      dialogue: [
        { speaker: "李友", chinese: "白英爱，你家有几口人？", pinyin: "Lǐ Yǒu, nǐ jiā yǒu jǐ kǒu rén?", english: "Bai Ying’ai, how many people are in your family?" },
        { speaker: "白英爱", chinese: "我家有六口人：我爸爸、我妈妈、一个哥哥、两个妹妹和我。李友，你家有几口人？", pinyin: "Wǒ jiā yǒu liù kǒu rén: wǒ bàba, wǒ māma, yí ge gēge, liǎng ge mèimei hé wǒ. Lǐ Yǒu, nǐ jiā yǒu jǐ kǒu rén?", english: "My family has six people: my dad, my mom, one older brother, two younger sisters, and me. Li You, how many people are in your family?" },
        { speaker: "李友", chinese: "我家有五口人：爸爸、妈妈、大姐、二姐和我。你爸爸妈妈做什么工作？", pinyin: "Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, dàjiě, èrjiě hé wǒ. Nǐ bàba māma zuò shénme gōngzuò?", english: "My family has five people: my dad, my mom, eldest sister, second sister, and me. What do your parents do?" },
        { speaker: "白英爱", chinese: "我爸爸是律师，妈妈是英文老师。哥哥、妹妹都是大学生。", pinyin: "Wǒ bàba shì lǜshī, māma shì Yīngwén lǎoshī. Gēge, mèimei dōu shì dàxuéshēng.", english: "My dad is a lawyer, and my mom is an English teacher. My older brother and younger sisters are all college students." },
        { speaker: "李友", chinese: "我妈妈也是老师，我爸爸是医生。", pinyin: "Wǒ māma yě shì lǎoshī, wǒ bàba shì yīshēng.", english: "My mom is also a teacher. My dad is a doctor." }
      ]
    },
    {
      title: "Sample Conversation 2",
      context: "Identifying people in a photo",
      dialogue: [
        { speaker: "王朋", chinese: "高文中，那是你的照片吗？", pinyin: "Wáng Péng, nà shì nǐ de zhàopiàn ma?", english: "Gao Wenzhong, is that your photo?" },
        { speaker: "高文中", chinese: "是。这是我爸爸，这是我妈妈。", pinyin: "Shì. Zhè shì wǒ bàba, zhè shì wǒ māma.", english: "Yes. This is my dad, and this is my mom." },
        { speaker: "王朋", chinese: "这个女孩子是谁？", pinyin: "Zhè ge nǚ háizi shì shéi?", english: "Who is this girl?" },
        { speaker: "高文中", chinese: "她是我姐姐。", pinyin: "Tā shì wǒ jiějie.", english: "She is my older sister." },
        { speaker: "王朋", chinese: "这个男孩子是你弟弟吗？", pinyin: "Zhè ge nán háizi shì nǐ dìdi ma?", english: "Is this boy your younger brother?" },
        { speaker: "高文中", chinese: "不是，他是我大哥的儿子。", pinyin: "Bú shì, tā shì wǒ dàgē de érzi.", english: "No, he is my eldest brother’s son." },
        { speaker: "王朋", chinese: "你大哥有女儿吗？", pinyin: "Nǐ dàgē yǒu nǚ'ér ma?", english: "Does your eldest brother have a daughter?" },
        { speaker: "高文中", chinese: "他没有女儿。", pinyin: "Tā méiyǒu nǚ'ér.", english: "He does not have a daughter." }
      ]
    }
  ],
  patterns: [
    {
      function: "Describing family members (This is...)",
      patterns: [
        "这是我的爸爸，他是医生。",
        "她是我姐姐。"
      ]
    },
    {
      function: "Asking about Identity (Who is...?)",
      patterns: [
        "这个女孩子是谁？",
        "这个男孩子是你弟弟吗？"
      ]
    },
    {
      function: "Describing family size (My family has...)",
      patterns: [
        "我家有六口人。",
        "他没有女儿。"
      ]
    },
    {
      function: "Describing professions",
      patterns: [
        "我爸爸是律师，妈妈是英文老师。",
        "哥哥、妹妹都是大学生。"
      ]
    }
  ],
  grammar: [
    {
      topic: "Modifier (Possessor) + 的 (de)",
      points: [
        {
          structure: "Possessor + 的 + Noun",
          usage: "Indicates possession. '的' can be omitted for close relationships.",
          examples: ["我的爸爸 (My dad)", "你的名字 (Your name)", "我爸爸 (My dad - omitted 'de')"]
        }
      ]
    },
    {
      topic: "Measure Words (个 / 口)",
      points: [
        {
          structure: "Number + Measure Word + Noun",
          usage: "Must use a measure word between number and noun.",
          examples: ["一个人 (one person)", "我家有三口人 (My family has 3 people - 'kou' for family members)"]
        }
      ]
    },
    {
      topic: "Forming Questions (什么 / 谁 / 几)",
      points: [
        { structure: "Subject + Verb + 什么?", usage: "What?", examples: ["她姓什么？"] },
        { structure: "Subject + Verb + 谁?", usage: "Who?", examples: ["这个女孩子是谁？"] },
        { structure: "Subject + Verb + 几 + MW + Noun?", usage: "How many?", examples: ["你有几个弟弟？"] }
      ]
    },
    {
      topic: "The Verb 有 (to have / to exist)",
      points: [
        { structure: "Subject + 有 + Object", usage: "Possession", examples: ["我有两个姐姐。"] },
        { structure: "Subject + 没(有) + Object", usage: "Negation (Don't have)", examples: ["我没有弟弟。"] }
      ]
    },
    {
      topic: "Two: 二 (èr) vs 两 (liǎng)",
      points: [
        { rule: "Use 两 before measure words", examples: ["两个人 (Correct)", "二个人 (Incorrect)"] },
        { rule: "Use 二 for counting/numbers", examples: ["一, 二, 三", "二十二 (22)"] }
      ]
    },
    {
      topic: "Adverb 都 (Both/All)",
      points: [
        { 
          structure: "Subject (Plural) + 都 + Verb", 
          usage: "Indicates inclusiveness", 
          examples: ["我和他都是律师 (We are both lawyers)", "哥哥、妹妹都是大学生"] 
        }
      ]
    }
  ]
};