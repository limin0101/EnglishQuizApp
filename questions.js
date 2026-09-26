// ==========================================
// 1. 格蘭英語 B 級核心字彙母庫 (120+ 詞彙，對標兒童英檢 Pre-A1～A1)
// ==========================================
const bLevelVocabMasterPool = [
  // 【居家物品與生活】
  { word: "closet", meaning: "衣櫥 / 衣櫃", kk: "[ˋklɑzɪt]", tip: "closet (衣櫥) KK: [ˋklɑzɪt]" },
  { word: "pillow", meaning: "枕頭", kk: "[ˋpɪlo]", tip: "pillow (枕頭) KK: [ˋpɪlo]" },
  { word: "blanket", meaning: "毛毯", kk: "[ˋblæŋkɪt]", tip: "blanket (毛毯) KK: [ˋblæŋkɪt]" },
  { word: "hanger", meaning: "衣架", kk: "[ˋhæŋɚ]", tip: "hanger (衣架) KK: [ˋhæŋɚ]" },
  { word: "drawer", meaning: "抽屜", kk: "[drɔr]", tip: "drawer (抽屜) KK: [drɔr]" },
  { word: "shelf", meaning: "架子", kk: "[ʃɛlf]", tip: "shelf (架子) KK: [ʃɛlf]" },
  { word: "sofa", meaning: "沙發", kk: "[ˋsofə]", tip: "sofa (沙發) KK: [ˋsofə]" },
  { word: "lamp", meaning: "檯燈", kk: "[læmp]", tip: "lamp (檯燈) KK: [læmp]" },
  { word: "vase", meaning: "花瓶", kk: "[ves]", tip: "vase (花瓶) KK: [ves]" },
  { word: "towel", meaning: "毛巾", kk: "[ˋtaʊəl]", tip: "towel (毛巾) KK: [ˋtaʊəl]" },
  { word: "soap", meaning: "肥皂", kk: "[sop]", tip: "soap (肥皂) KK: [sop]" },
  { word: "shampoo", meaning: "洗髮精", kk: "[ʃæmˋpu]", tip: "shampoo (洗髮精) KK: [ʃæmˋpu]" },
  { word: "radio", meaning: "收音機", kk: "[ˋredo]", tip: "radio (收音機) KK: [ˋredo]" },
  { word: "clock", meaning: "時鐘", kk: "[klɑk]", tip: "clock (時鐘) KK: [klɑk]" },
  { word: "plate", meaning: "盤子", kk: "[plet]", tip: "plate (盤子) KK: [plet]" },

  // 【日常動作與狀態】
  { word: "tremble", meaning: "發抖 / 顫抖", kk: "[ˋtrɛmb!]", tip: "tremble (顫抖) KK: [ˋtrɛmb!]" },
  { word: "yawn", meaning: "打哈欠", kk: "[jɔn]", tip: "yawn (打哈欠) KK: [jɔn]" },
  { word: "stretch", meaning: "伸展 / 伸懶腰", kk: "[strɛtʃ]", tip: "stretch (伸展) KK: [strɛtʃ]" },
  { word: "shut", meaning: "閉上 / 關閉", kk: "[ʃʌt]", tip: "shut (閉上) KK: [ʃʌt]" },
  { word: "brush", meaning: "刷 (牙/毛)", kk: "[brʌʃ]", tip: "brush (刷) KK: [brʌʃ]" },
  { word: "wash", meaning: "清洗", kk: "[wɑʃ]", tip: "wash (清洗) KK: [wɑʃ]" },
  { word: "borrow", meaning: "借入", kk: "[ˋbɑro]", tip: "borrow (借入) KK: [ˋbɑro]" },
  { word: "lend", meaning: "借出", kk: "[lɛnd]", tip: "lend (借出) KK: [lɛnd]" },
  { word: "prepare", meaning: "準備", kk: "[prɪˋpɛr]", tip: "prepare (準備) KK: [prɪˋpɛr]" },
  { word: "celebrate", meaning: "慶祝", kk: "[ˋsɛlə͵bret]", tip: "celebrate (慶祝) KK: [ˋsɛlə͵bret]" },
  { word: "invite", meaning: "邀請", kk: "[ɪnˋvaɪt]", tip: "invite (邀請) KK: [ɪnˋvaɪt]" },
  { word: "touch", meaning: "碰觸", kk: "[tʌtʃ]", tip: "touch (碰觸) KK: [tʌtʃ]" },
  { word: "swim", meaning: "游泳", kk: "[swɪm]", tip: "swim (游泳) KK: [swɪm]" },
  { word: "jump", meaning: "跳躍", kk: "[dʒʌmp]", tip: "jump (跳躍) KK: [dʒʌmp]" },
  { word: "run", meaning: "跑步", kk: "[rʌn]", tip: "run (跑步) KK: [rʌn]" },

  // 【飲食與點心】
  { word: "sausages", meaning: "香腸", kk: "[ˋsɔsɪdʒɪz]", tip: "sausages (香腸) KK: [ˋsɔsɪdʒɪz]" },
  { word: "sandwiches", meaning: "三明治", kk: "[ˋsændwɪtʃɪz]", tip: "sandwiches (三明治) KK: [ˋsændwɪtʃɪz]" },
  { word: "cookies", meaning: "餅乾", kk: "[ˋkʊkɪz]", tip: "cookies (餅乾) KK: [ˋkʊkɪz]" },
  { word: "noodles", meaning: "麵條", kk: "[ˋnud!z]", tip: "noodles (麵條) KK: [ˋnud!z]" },
  { word: "hamburgers", meaning: "漢堡", kk: "[ˋhæmbɚgɚz]", tip: "hamburgers (漢堡) KK: [ˋhæmbɚgɚz]" },
  { word: "vegetables", meaning: "蔬菜", kk: "[ˋvɛdʒətəb!z]", tip: "vegetables (蔬菜) KK: [ˋvɛdʒətəb!z]" },
  { word: "strawberries", meaning: "草莓", kk: "[ˋstrɔ͵bɛrɪz]", tip: "strawberries (草莓) KK: [ˋstrɔ͵bɛrɪz]" },
  { word: "breakfast", meaning: "早餐", kk: "[ˋbrɛkfəst]", tip: "breakfast (早餐) KK: [ˋbrɛkfəst]" },
  { word: "sugar", meaning: "糖", kk: "[ˋʃʊgɚ]", tip: "sugar (糖/不可數) KK: [ˋʃʊgɚ]" },
  { word: "soup", meaning: "湯", kk: "[sup]", tip: "soup (湯/不可數) KK: [sup]" },
  { word: "milk", meaning: "牛奶", kk: "[mɪlk]", tip: "milk (牛奶/不可數) KK: [mɪlk]" },
  { word: "corn", meaning: "玉米", kk: "[kɔrn]", tip: "corn (玉米) KK: [kɔrn]" },

  // 【休閒嗜好與運動】
  { word: "badminton", meaning: "羽毛球", kk: "[ˋbædmɪntən]", tip: "badminton (羽毛球) KK: [ˋbædmɪntən]" },
  { word: "bowling", meaning: "保齡球", kk: "[ˋbolɪŋ]", tip: "bowling (保齡球) KK: [ˋbolɪŋ]" },
  { word: "basketball", meaning: "籃球", kk: "[ˋbæskɪt͵bɔl]", tip: "basketball (籃球) KK: [ˋbæskɪt͵bɔl]" },
  { word: "football", meaning: "足球", kk: "[ˋfʊt͵bɔl]", tip: "football (足球) KK: [ˋfʊt͵bɔl]" },
  { word: "golf", meaning: "高爾夫", kk: "[gɑlf]", tip: "golf (高爾夫) KK: [gɑlf]" },
  { word: "guitar", meaning: "吉他", kk: "[gɪˋtɑr]", tip: "guitar (吉他) KK: [gɪˋtɑr]" },
  { word: "piano", meaning: "鋼琴", kk: "[pɪˋæno]", tip: "piano (鋼琴) KK: [pɪˋæno]" },
  { word: "violin", meaning: "小提琴", kk: "[͵vaɪəˋlɪn]", tip: "violin (小提琴) KK: [͵vaɪəˋlɪn]" },
  { word: "bicycle", meaning: "腳踏車", kk: "[ˋbaɪsɪk!]", tip: "bicycle (腳踏車) KK: [ˋbaɪsɪk!]" },

  // 【場所、地點與空間】
  { word: "kitchen", meaning: "廚房", kk: "[ˋkɪtʃɪn]", tip: "kitchen (廚房) KK: [ˋkɪtʃɪn]" },
  { word: "bedroom", meaning: "臥室", kk: "[ˋbɛd͵rum]", tip: "bedroom (臥室) KK: [ˋbɛd͵rum]" },
  { word: "bathroom", meaning: "浴室", kk: "[ˋbæθ͵rum]", tip: "bathroom (浴室) KK: [ˋbæθ͵rum]" },
  { word: "dining room", meaning: "飯廳", kk: "[ˋdaɪnɪŋ ͵rum]", tip: "dining room (飯廳) KK: [ˋdaɪnɪŋ ͵rum]" },
  { word: "garage", meaning: "車庫", kk: "[gəˋrɑʒ]", tip: "garage (車庫) KK: [gəˋrɑʒ]" },
  { word: "apartment", meaning: "公寓", kk: "[əˋpɑrtmənt]", tip: "apartment (公寓) KK: [əˋpɑrtmənt]" },
  { word: "hospital", meaning: "醫院", kk: "[ˋhɑspɪt!]", tip: "hospital (醫院) KK: [ˋhɑspɪt!]" },
  { word: "supermarket", meaning: "超級市場", kk: "[ˋsupɚ͵mɑrkɪt]", tip: "supermarket (超市) KK: [ˋsupɚ͵mɑrkɪt]" },
  { word: "restaurant", meaning: "餐廳", kk: "[ˋrɛstərənt]", tip: "restaurant (餐廳) KK: [ˋrɛstərənt]" },
  { word: "between", meaning: "在…兩者之間", kk: "[bɪˋtwin]", tip: "between (兩者之間) KK: [bɪˋtwin]" },
  { word: "beside", meaning: "在…旁邊", kk: "[bɪˋsaɪd]", tip: "beside (旁邊) KK: [bɪˋsaɪd]" },

  // 【學校、人物與社交】
  { word: "classmate", meaning: "同學", kk: "[ˋklæs͵met]", tip: "classmate (同學) KK: [ˋklæs͵met]" },
  { word: "grandparents", meaning: "祖父母", kk: "[ˋgrænd͵pɛrənts]", tip: "grandparents (祖父母) KK: [ˋgrænd͵pɛrənts]" },
  { word: "homework", meaning: "家庭作業", kk: "[ˋhom͵wɝk]", tip: "homework (家庭作業) KK: [ˋhom͵wɝk]" },
  { word: "difficult", meaning: "困難的", kk: "[ˋdɪfək!t]", tip: "difficult (困難的) KK: [ˋdɪfək!t]" },
  { word: "talented", meaning: "有才華的", kk: "[ˋtæləntɪd]", tip: "talented (有才華的) KK: [ˋtæləntɪd]" },
  { word: "scary", meaning: "恐怖的", kk: "[ˋskɛrɪ]", tip: "scary (恐怖的) KK: [ˋskɛrɪ]" },

  // 【時間與電影主題】
  { word: "second", meaning: "秒", kk: "[ˋsɛkənd]", tip: "second (秒) KK: [ˋsɛkənd]" },
  { word: "minute", meaning: "分鐘", kk: "[ˋmɪnɪt]", tip: "minute (分鐘) KK: [ˋmɪnɪt]" },
  { word: "quarter", meaning: "一刻鐘 (15分)", kk: "[ˋkwɔrtɚ]", tip: "quarter (一刻鐘) KK: [ˋkwɔrtɚ]" },
  { word: "rarely", meaning: "很少 / 幾乎不", kk: "[ˋrɛrlɪ]", tip: "rarely (幾乎不) KK: [ˋrɛrlɪ]" },
  { word: "always", meaning: "總是", kk: "[ˋɔlwez]", tip: "always (總是) KK: [ˋɔlwez]" },
  { word: "science fiction movie", meaning: "科幻電影", kk: "[ˋsaɪəns ˋfɪkʃən muvɪ]", tip: "science fiction movie (科幻片) KK: [ˋsaɪəns ˋfɪkʃən muvɪ]" }
];

// ==========================================
// 2. 單字題目動態組合器 (隨機抽取題目與動態生成干擾項)
// ==========================================
function buildDynamicVocabQuiz(count, stageTitle) {
  // 將母庫深層複製並洗牌
  const poolShuffled = [...bLevelVocabMasterPool].sort(() => Math.random() - 0.5);
  const selectedTargets = poolShuffled.slice(0, Math.min(count, poolShuffled.length));

  return selectedTargets.map((target) => {
    // 從剩餘單字隨機選 3 個做為干擾選項
    const distractors = bLevelVocabMasterPool
      .filter((item) => item.word !== target.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    // 結合目標單字與干擾選項並隨機排列
    const allOptions = [target, ...distractors].sort(() => Math.random() - 0.5);
    const correctIdx = allOptions.findIndex((item) => item.word === target.word);

    return {
      part: stageTitle,
      prompt: "🎧 請聽發音，選出正確的單字：",
      word: target.word,
      meaning: target.meaning,
      options: allOptions.map((item) => item.word),
      meanings: allOptions.map((item) => item.meaning),
      kkList: allOptions.map((item) => item.kk),
      ans: correctIdx,
      audioText: target.word,
      tip: `💡 ${target.tip}`
    };
  });
}

// 產生單字測驗兩大子階段題庫
const rawVocabHighFreq = buildDynamicVocabQuiz(15, "🔥 快速隨機抽測");
const rawVocabBLevel = buildDynamicVocabQuiz(50, "⭐ B級全範圍綜合測驗");

// ==========================================
// 3. 語法參數化生成器 (500 題多元情境題庫，無破折號)
// ==========================================
function generate500GrammarQuestions() {
  const names = ["Andy", "Julia", "Janice", "Henry", "Susan", "Tina", "Frank", "Stephen", "Lucy", "Jerry", "Maggie", "Kathy", "Jason", "Mike", "Peter", "Sandy", "Helen", "Paul", "David", "Emma"];
  const locations = ["in the kitchen", "in the living room", "in the bedroom", "in the dining room", "in the garage", "in the classroom", "at the library", "at the supermarket", "in front of the hospital", "beside the restaurant"];
  const uncountables = [
    { word: "sugar", hint: "糖" },
    { word: "shampoo", hint: "洗髮精" },
    { word: "milk", hint: "牛奶" },
    { word: "money", hint: "金錢" },
    { word: "water", hint: "水" },
    { word: "corn", hint: "玉米" },
    { word: "soup", hint: "湯" },
    { word: "juice", hint: "果汁" }
  ];
  const countables = [
    { word: "sausages", single: "sausage", hint: "香腸" },
    { word: "pillows", single: "pillow", hint: "枕頭" },
    { word: "hangers", single: "hanger", hint: "衣架" },
    { word: "lamps", single: "lamp", hint: "檯燈" },
    { word: "desks", single: "desk", hint: "書桌" },
    { word: "strawberries", single: "strawberry", hint: "草莓" },
    { word: "cookies", single: "cookie", hint: "餅乾" },
    { word: "sandwiches", single: "sandwich", hint: "三明治" },
    { word: "bicycles", single: "bicycle", hint: "腳踏車" },
    { word: "classmates", single: "classmate", hint: "同學" }
  ];
  const verbs = [
    { base: "play the guitar", ing: "playing the guitar", s: "plays the guitar", hint: "彈吉他" },
    { base: "brush teeth", ing: "brushing teeth", s: "brushes teeth", hint: "刷牙" },
    { base: "wash the face", ing: "washing the face", s: "washes the face", hint: "洗臉" },
    { base: "do homework", ing: "doing homework", s: "does homework", hint: "做作業" },
    { base: "cook breakfast", ing: "cooking breakfast", s: "cooks breakfast", hint: "煮早餐" },
    { base: "ride a bicycle", ing: "riding a bicycle", s: "rides a bicycle", hint: "騎腳踏車" },
    { base: "play badminton", ing: "playing badminton", s: "plays badminton", hint: "打羽毛球" },
    { base: "shut eyes", ing: "shutting eyes", s: "shuts eyes", hint: "閉眼" },
    { base: "clean the room", ing: "cleaning the room", s: "cleans the room", hint: "打掃房間" },
    { base: "prepare dinner", ing: "preparing dinner", s: "prepares dinner", hint: "準備晚餐" }
  ];

  const generated = [];

  for (let i = 0; i < 500; i++) {
    const type = i % 14;
    const name1 = names[i % names.length];
    const name2 = names[(i + 3) % names.length];
    const loc = locations[i % locations.length];
    const uncnt = uncountables[i % uncountables.length];
    const cnt = countables[i % countables.length];
    const v = verbs[i % verbs.length];
    const hour = (i % 11) + 1;
    const nextHour = hour + 1;

    let qObj = {};

    switch (type) {
      case 0:
        qObj = {
          part: "重點文法：時間表達 (Quarter Past)",
          prompt: `It's ${hour}:15 now. We can say it is ______ ${hour}.`,
          options: ["a quarter past", "a quarter to", "half past", "15 past to"],
          ans: 0,
          tip: `💡【時間讀法】${hour}:15 代表『過了一刻鐘』，使用 a quarter past ${hour}。`
        };
        break;

      case 1:
        qObj = {
          part: "重點文法：時間表達 (Quarter To)",
          prompt: `Look at the clock! It is ${hour}:45. It is ______ ${nextHour}.`,
          options: ["a quarter to", "a quarter past", "half to", "15 to past"],
          ans: 0,
          tip: `💡【時間讀法】差 15 分鐘到 ${nextHour} 點（${hour}:45），使用 a quarter to ${nextHour}。`
        };
        break;

      case 2:
        qObj = {
          part: "重點文法：不可數名詞數量",
          prompt: `How ______ ${uncnt.word} does ${name1} need in the kitchen?`,
          options: ["much", "many", "any", "little"],
          ans: 0,
          tip: `💡【不可數名詞】${uncnt.word}（${uncnt.hint}）為不可數名詞，詢問數量要用 How much。`
        };
        break;

      case 3:
        qObj = {
          part: "重點文法：可數複數數量",
          prompt: `How ______ ${cnt.word} can you see on ${name1}'s table?`,
          options: ["many", "much", "any", "some"],
          ans: 0,
          tip: `💡【可數名詞複數】${cnt.word}（${cnt.hint}）為可數複數名詞，詢問數量要用 How many。`
        };
        break;

      case 4:
        qObj = {
          part: "重點文法：現在進行式問答",
          prompt: `What is ${name1} doing ${loc}? She ______ now.`,
          options: [`is ${v.ing}`, v.s, v.base, `was ${v.ing}`],
          ans: 0,
          tip: `💡【現在進行式】問句是 What is ... doing，回答必須對應用主詞 + be動詞 + V-ing（is ${v.ing}）。`
        };
        break;

      case 5:
        qObj = {
          part: "重點文法：複數代名詞簡答",
          prompt: `Are ${name1} and ${name2} ${v.ing} right now? No, ______.`,
          options: ["they aren't", "he isn't", "they don't", "we aren't"],
          ans: 0,
          tip: `💡【代名詞與簡答】${name1} and ${name2} 為兩個人（they），be 動詞問句否定簡答用 No, they aren't。`
        };
        break;

      case 6:
        qObj = {
          part: "重點文法：存在句單數與不可數",
          prompt: `______ there any ${uncnt.word} in ${name1}'s apartment?`,
          options: ["Is", "Are", "Do", "Does"],
          ans: 0,
          tip: `💡【存在句】${uncnt.word}（${uncnt.hint}）是不可數名詞，疑問句需使用單數動詞 Is there。`
        };
        break;

      case 7:
        qObj = {
          part: "重點文法：存在句複數",
          prompt: `There ______ two ${cnt.word} ${loc}.`,
          options: ["are", "is", "have", "has"],
          ans: 0,
          tip: `💡【存在句】後方是複數名詞 two ${cnt.word}，be 動詞必須使用 are。`
        };
        break;

      case 8:
        qObj = {
          part: "重點文法：空間介系詞 (Between)",
          prompt: `The supermarket is ______ the hospital and ${name1}'s house.`,
          options: ["between", "next to", "beside", "behind"],
          ans: 0,
          tip: "💡【空間介系詞】between A and B 為固定片語，表示『在兩者之間』。"
        };
        break;

      case 9:
        qObj = {
          part: "重點文法：頻率副詞 (Rarely)",
          prompt: `${name1} ______ ${v.s}. He only does it once a year.`,
          options: ["rarely", "always", "usually", "often"],
          ans: 0,
          tip: "💡【頻率副詞】一年只做一次代表頻率極低，需用具否定意味的 rarely（幾乎不）。"
        };
        break;

      case 10:
        qObj = {
          part: "重點文法：情態助動詞轉折 (can / can't)",
          prompt: `${name1} can ${v.base}, but he ______ drive a car.`,
          options: ["can't", "can", "isn't", "doesn't"],
          ans: 0,
          tip: "💡【轉折句型】前半句為肯定的 can，連接詞 but 後方表示不會駕駛，需用 can't。"
        };
        break;

      case 11:
        qObj = {
          part: "重點文法：情態請求 (May I...)",
          prompt: `May I ______ your ${cnt.single} for my homework? Sure!`,
          options: ["borrow", "borrows", "borrowing", "to borrow"],
          ans: 0,
          tip: "💡【情態助動詞】May I 後方一律接原形動詞（borrow 借入）。"
        };
        break;

      case 12:
        qObj = {
          part: "重點文法：祈使句動詞原形",
          prompt: `Please ______ quiet! The baby is sleeping ${loc}.`,
          options: ["be", "is", "are", "being"],
          ans: 0,
          tip: "💡【祈使句】Please 後方直接接原形動詞，be 動詞的原形就是 be。"
        };
        break;

      case 13:
      default:
        qObj = {
          part: "重點文法：一般動詞問答 (Do you...)",
          prompt: `Do you and ${name1} have to go to school on time? No, we ______.`,
          options: ["don't", "haven't", "aren't", "can't"],
          ans: 0,
          tip: "💡【助動詞否定簡答】以 Do 開頭提問，主詞為 we，否定簡答使用 No, we don't。"
        };
        break;
    }

    generated.push(qObj);
  }

  return generated;
}

const rawGrammarQuestions = generate500GrammarQuestions();

// ==========================================
// 4. 官方聽力考點題庫 (8 題)
// ==========================================
const rawReviewQuestions = [
  { part: "【考點複習 1】時間辨析 (Quarter past / to)", prompt: "Focus: 聽懂 15 分的表達法", audioText: "Statement A: It's a quarter to 11. Statement B: It's a quarter past 10. Statement C: It's half past 10.", options: ["It's a quarter to 11. (10點45分)", "It's a quarter past 10. (10點15分)", "It's half past 10. (10點30分)"], ans: 1, tip: "💡 複習技巧：past 表示「過」，a quarter past 10 是 10:15；to 表示「差」，a quarter to 11 是差一刻 11 點（10:45）。" },
  { part: "【考點複習 2】位置介系詞 (Between / Next to / Beside)", prompt: "Focus: 聽懂三者空間相對位置", audioText: "Statement A: The hospital is beside the restaurant. Statement B: The supermarket is next to the post office. Statement C: The supermarket is between the hospital and the restaurant.", options: ["The hospital is beside the restaurant.", "The supermarket is next to the post office.", "The supermarket is between the hospital and the restaurant."], ans: 2, tip: "💡 複習技巧：between A and B 代表「在 A 與 B 之間」；beside / next to 代表「在…旁邊」。" },
  { part: "【考點複習 3】頻率副詞 (Rarely / Never / Always)", prompt: "Focus: 掌握發生的頻率程度", audioText: "Statement A: Andy rarely plays the guitar. Statement B: Andy never goes to science class. Statement C: Andy always goes to English class.", options: ["Andy rarely plays the guitar.", "Andy never goes to science class.", "Andy always goes to English class."], ans: 0, tip: "💡 複習技巧：always (總是 100%) > often (常常) > rarely (很少/幾乎不) > never (從未 0%)。" },
  { part: "【考點複習 4】疑問詞問答 (Where / 地點回答)", prompt: "Question: Where do you cook?", audioText: "Where do you cook? A: I have a big kitchen. B: I cook in the kitchen. C: I take a bath in the bathroom.", options: ["I have a big kitchen.", "I cook in the kitchen.", "I take a bath in the bathroom."], ans: 1, tip: "💡 複習技巧：聽到 Where 開頭問句，核心要回答「具體地點介系詞片語」（in the kitchen）。" },
  { part: "【考點複習 5】現在進行式問答 (What is she doing?)", prompt: "Question: What is she doing?", audioText: "What is she doing? A: She is playing the guitar. B: You are cooking in the kitchen. C: She does her homework every evening.", options: ["She is playing the guitar.", "You are cooking in the kitchen.", "She does her homework every evening."], ans: 0, tip: "💡 複習技巧：問句是現在進行式 (is she doing)，回答也必須對應用「She is + V-ing」。" },
  { part: "【考點複習 6】數量疑問詞 (How many vs How much)", prompt: "Question: How much sugar do you want?", audioText: "How much sugar do you want? A: Just a little. B: Too much. C: Not many.", options: ["Just a little.", "Too much.", "Not many."], ans: 0, tip: "💡 複習技巧：sugar（糖）是不可數名詞，因此要用 a little / much 回答，不能用 many。" },
  { part: "【考點複習 7】對話理解 (Why 問句與原因辨識)", prompt: "Question: Why does Helen have to run?", audioText: "Hi Helen, where are you going? I want to see a science fiction movie. I have to run now, the movie is about to start. Question: Why does Helen have to run?", options: ["She likes to run.", "She likes science fiction movies.", "The movie is about to start."], ans: 2, tip: "💡 複習技巧：聽對話時注意轉折與原因字眼，Helen 說 'the movie is about to start'，故答案為電影要開演了。" },
  { part: "【考點複習 8】短文資訊抓取 (Can vs Can't 辨識)", prompt: "Question: What can't Frank do?", audioText: "Frank can play the piano and guitar. He can also ride a bicycle, but he can't drive a car. Question: What can't Frank do?", options: ["Play the guitar.", "Ride a bicycle.", "Drive a car."], ans: 2, tip: "💡 複習技巧：注意聽清否定詞 can't（不能做什麼），文章中提及 'he can't drive a car'。" }
];

// ==========================================
// 5. Practice 1 題庫 (40 題)
// ==========================================
const rawMockP1 = [
  { part: "Part 1: Photographs", prompt: "Question 1", audioText: "Look at the picture and choose the best answer. Statement A: Julia brushes her teeth. Statement B: Julia washes her face. Statement C: Julia's mother brushes her teeth.", options: ["Julia brushes her teeth.", "Julia washes her face.", "Julia's mother brushes her teeth."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 2", audioText: "Look at the picture and choose the best answer. Statement A: Janice drinks milk for breakfast. Statement B: Janice has lunch at noon. Statement C: Janice eats fruit for breakfast.", options: ["Janice drinks milk for breakfast.", "Janice has lunch at noon.", "Janice eats fruit for breakfast."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 3", audioText: "Look at the picture and choose the best answer. Statement A: It's a quarter to 11. Statement B: It's a quarter past 10. Statement C: It's half past 10.", options: ["It's a quarter to 11.", "It's a quarter past 10.", "It's half past 10."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 4", audioText: "Look at the picture and choose the best answer. Statement A: The basketball game starts at 9:30. Statement B: The baseball game starts at 9:30. Statement C: There is no baseball game today.", options: ["The basketball game starts at 9:30.", "The baseball game starts at 9:30.", "There is no baseball game today."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 5", audioText: "Look at the picture and choose the best answer. Statement A: There is a television on the table. Statement B: There are some flowers on the TV. Statement C: There is a vase on the floor.", options: ["There is a television on the table.", "There are some flowers on the TV.", "There is a vase on the floor."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 6", audioText: "Look at the picture and choose the best answer. Statement A: Andy rarely plays the guitar. Statement B: Andy never goes to science class. Statement C: Andy always goes to English class.", options: ["Andy rarely plays the guitar.", "Andy never goes to science class.", "Andy always goes to English class."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 7", audioText: "Look at the picture and choose the best answer. Statement A: Susan has sausages, sandwiches and French fries for her picnic. Statement B: Susan has hot dogs, French fries, and cookies for her picnic. Statement C: Susan has noodles, milk, and hot dogs for her picnic.", options: ["Susan has sausages, sandwiches and French fries for her picnic.", "Susan has hot dogs, French fries, and cookies for her picnic.", "Susan has noodles, milk, and hot dogs for her picnic."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 8", audioText: "Look at the picture and choose the best answer. Statement A: Henry's hobby is swimming. Statement B: Henry's father's hobby is drawing. Statement C: Henry's mother's hobby is drawing.", options: ["Henry's hobby is swimming.", "Henry's father's hobby is drawing.", "Henry's mother's hobby is drawing."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 9", audioText: "Look at the picture and choose the best answer. Statement A: Please don't smoke outside. Statement B: Please don't speak too loud here. Statement C: Please don't smoke in the restaurant.", options: ["Please don't smoke outside.", "Please don't speak too loud here.", "Please don't smoke in the restaurant."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 10", audioText: "Look at the picture and choose the best answer. Statement A: There is not anything on the plate. Statement B: There is some corn on the plate. Statement C: There are no sausages on the plate.", options: ["There is not anything on the plate.", "There is some corn on the plate.", "There are no sausages on the plate."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 11", audioText: "Look at the picture and choose the best answer. Statement A: She can touch her head with her foot. Statement B: She can stand on one leg and touch the floor. Statement C: She can stand on her head.", options: ["She can touch her head with her foot.", "She can stand on one leg and touch the floor.", "She can stand on her head."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 12: Are there many students in the classroom?", audioText: "Are there many students in the classroom? A: Yes, there are 30 students in the classroom. B: No, the classroom is very big. C: I like to study in the classroom.", options: ["Yes, there are 30 students in the classroom.", "No. The classroom is very big.", "I like to study in the classroom."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 13: Where do you cook?", audioText: "Where do you cook? A: I have a big kitchen. B: I cook in the kitchen. C: I take a bath in the bathroom.", options: ["I have a big kitchen.", "I cook in the kitchen.", "I take a bath in the bathroom."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 14: What does Tina have?", audioText: "What does Tina have? A: She has a new car. B: She needs a bike. C: The books on her desk are mine.", options: ["She has a new car.", "She needs a bike.", "The books on her desk are mine."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 15: How many seconds are there in a minute?", audioText: "How many seconds are there in a minute? A: There are 16 seconds in a minute. B: There are 60 seconds in a minute. C: There are 60 minutes in an hour.", options: ["There are 16 seconds in a minute.", "There are 60 seconds in a minute.", "There are 60 minutes in an hour."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 16: What floor do your parents live on?", audioText: "What floor do your parents live on? A: I live on the eighth floor. B: She lives on the 9th floor. C: They live on the 2nd floor.", options: ["I live on the eighth floor.", "She lives on the 9th floor.", "They live on the 2nd floor."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 17: May I borrow some money?", audioText: "May I borrow some money? A: Sure, how much do you need? B: Sure, how many do you want? C: No, I don't need money.", options: ["Sure, how much do you need?", "Sure. How many do you want?", "No, I don't need money."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 18: Where are you doing your homework?", audioText: "Where are you doing your homework? A: You are doing your homework in front of the television. B: I am playing the piano in the dining room. C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 19: What can you see on the floor?", audioText: "What can you see on the floor? A: Yes, I can see the floor. B: I can clean my room quickly. C: I can see two skirts there.", options: ["Yes, I can see the floor.", "I can clean my room quickly.", "I can see two skirts there."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 20: Are there any pictures on the wall?", audioText: "Are there any pictures on the wall? A: He is looking for his pictures. B: He is painting a picture. C: No, there are not any pictures.", options: ["He is looking for his pictures.", "He is painting a picture.", "No, there are not any pictures."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 21: Where are you going to watch the movie?", audioText: "Where are you going to watch the movie? A: I am doing homework at school. B: At the movie theater. C: I am going to watch TV at home.", options: ["I am doing homework at school.", "At the movie theater.", "I am going to watch TV at home."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 22: People are trembling in their seats in the movie theater.", audioText: "People are trembling in their seats in the movie theater. A: They are watching a horror movie. B: They are watching an adventure movie. C: They are dreaming.", options: ["They are watching a horror movie.", "They are watching an adventure movie.", "They are dreaming."], ans: 0 },
  { part: "Part 3: Conversations (23-24)", prompt: "Question 23: Is Sally sad?", audioText: "Good evening, Tim. Good evening, Sally. How are you? I am fine. Thank you. And you? I am not feeling good. Why not? Because my parents will not come to my birthday party. Why won't they? They need to fly to America to work. Question 23. Is Sally sad?", options: ["Yes, she is not sad.", "Yes, she is sad.", "No, she is happy."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (23-24)", prompt: "Question 24: Why can't Sally's parents go to her birthday party?", audioText: "Good evening, Tim. Good evening, Sally. How are you? I am fine. Thank you. And you? I am not feeling good. Why not? Because my parents will not come to my birthday party. Why won't they? They need to fly to America to work. Question 24. Why can't Sally's parents go to her birthday party?", options: ["They will go to Sally's birthday party.", "They will go to work.", "They will come from America."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 25: What kind of movies does Helen like?", audioText: "Hi Helen, where are you going? I'm going to watch a movie. Really, what kind of movie are you going to watch? I want to see a science fiction movie. I have to run now, the movie is about to start. Okay, and I have to be home before lunch. See you. Question 25. What kind of movies does Helen like?", options: ["She wants to watch a movie with Paul.", "She likes science fiction movies.", "She likes romance movies."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 26: Why does Helen have to run?", audioText: "Why does Helen have to run?", options: ["She likes to run.", "She likes science fiction movies.", "The movie is about to start."], ans: 2 },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 27: Do Paul and Helen see the movie together?", audioText: "Do Paul and Helen see the movie together?", options: ["Yes, they do.", "No, they aren't.", "No, they don't."], ans: 2 },
  { part: "Part 4: Talks (28-30)", prompt: "Question 28: What kind of books does Kathy not read?", audioText: "Kathy likes to read books. She reads many different kinds of books. Chinese books, science books, and of course, English books. She also likes sports. She can play basketball, football, and golf well. Now she is learning how to play badminton. Her favorite food is hamburgers, but she is not fat. She is thin because she runs in the park every day and doesn't eat too much. I like her very much. Question 28: What kind of books does Kathy not read in her free time?", options: ["Chinese books.", "Science books.", "Math books."], ans: 2, repeat: true },
  { part: "Part 4: Talks (28-30)", prompt: "Question 29: What kind of sport is Kathy learning now?", audioText: "What kind of sport is Kathy learning now?", options: ["Basketball", "Badminton", "Football"], ans: 1 },
  { part: "Part 4: Talks (28-30)", prompt: "Question 30: Why is Kathy thin?", audioText: "Why is Kathy thin?", options: ["Because she runs a lot and eats a little.", "Because she doesn't eat.", "Because she likes eating hamburgers."], ans: 0 },
  { part: "Part 4: Talks (31-32)", prompt: "Question 31: What does Henry like to do in his free time?", audioText: "In my free time, I like to swim. I am a good swimmer. I can also play the piano and the guitar very well. But I can't play the violin. If you want to be my friend, please tell me after class. Question 31: What does Henry like to do in his free time?", options: ["To swim", "To study English", "To play basketball"], ans: 0, repeat: true },
  { part: "Part 4: Talks (31-32)", prompt: "Question 32: Where is Henry now?", audioText: "Where is Henry now?", options: ["In the living room.", "In the classroom.", "In the dining room."], ans: 1 },
  { part: "Part 4: Talks (33-35)", prompt: "Question 33: Who lives with Jerry?", audioText: "I live in a small apartment with my classmate. We share the kitchen and bathroom. It is very difficult in the morning. I like to take a shower in the morning, but my classmate often uses the bathroom for a long time. Question 33: Who lives with Jerry?", options: ["Jerry lives with his parents.", "Jerry lives with his classmate.", "Jerry lives with his teammate."], ans: 1, repeat: true },
  { part: "Part 4: Talks (33-35)", prompt: "Question 34: How many bathrooms are there in Jerry's house?", audioText: "How many bathrooms are there in Jerry's house?", options: ["2", "1", "0"], ans: 1 },
  { part: "Part 4: Talks (33-35)", prompt: "Question 35: Why does Jerry feel the morning is difficult?", audioText: "Why does Jerry feel the morning is difficult?", options: ["Because he can't use the bathroom.", "Because the bathroom is dirty.", "Because he does not want to go to school."], ans: 0 },
  { part: "Part 3/4: Conversation (36-37)", prompt: "Question 36: Whose birthday is coming?", audioText: "Hello. This is Stephen. May I talk to Tina? Hold on, please. Hello, Stephen. This is Tina speaking. I am just calling to tell you that I can't go to your birthday party. I am really sorry. Why can't you come? My parents will go to Singapore for work. They want me to go there with them, but I don't want to live in another country. Question 36: Whose birthday is coming?", options: ["Tina's birthday is coming.", "Steven's birthday is coming.", "Steven's father's birthday is coming."], ans: 1, repeat: true },
  { part: "Part 3/4: Conversation (36-37)", prompt: "Question 37: Why do Stephen's parents need to go to Singapore?", audioText: "Why do Stephen's parents need to go to Singapore?", options: ["Because they want to celebrate Stephen's birthday.", "Because they have to work in Singapore.", "Because they study in Singapore."], ans: 1 },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 38: What does Stephen think of his parents?", audioText: "Did you tell your parents that you don't want to go? I feel they never listen to me. I am afraid if I tell them, they will still want me to go to Singapore with them. If you stay here, who is going to take care of you? My brother also lives here, but I don't want to live with him. My grandparents live near us. I can live with them. I think you should tell your parents about your plan. They love you. Going to live in another country may not be good for you. I will think about it. I am really sorry about the birthday party. Never mind. Question 38: What does Stephen think of his parents?", options: ["His parents usually listen to him.", "His parents sometimes listen to him.", "His parents never listen to him."], ans: 2, repeat: true },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 39: Who does Stephen want to live with?", audioText: "Who does Stephen want to live with?", options: ["His parents.", "His brother.", "His grandparents."], ans: 2 },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 40: What does Tina tell Stephen to do?", audioText: "What does Tina tell Stephen to do?", options: ["She tells Stephen to tell his parents about his plan.", "She tells Stephen not to tell his parents about his plan.", "She tells Stephen to tell his brother about his plan."], ans: 0 }
];

// ==========================================
// 6. Practice 2 題庫 (50 題)
// ==========================================
const rawMockP2 = [
  { part: "Part 1: Photographs", prompt: "Question 1", audioText: "Look at the picture and choose the best answer. Statement A: There is a shirt in the closet. Statement B: There are two pillows on the bed. Statement C: There is a clock on the wall.", options: ["There is a shirt in the closet.", "There are two pillows on the bed.", "There is a clock on the wall."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 2", audioText: "Look at the picture and choose the best answer. Statement A: They are waiting in line. Statement B: They are in the movie theater. Statement C: They are shutting their eyes.", options: ["They are waiting in line.", "They are in the movie theater.", "They are shutting their eyes."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 3", audioText: "Look at the picture and choose the best answer. Statement A: The hospital is beside the restaurant. Statement B: The supermarket is next to the post office. Statement C: The supermarket is between the hospital and the restaurant.", options: ["The hospital is beside the restaurant.", "The supermarket is next to the post office.", "The supermarket is between the hospital and the restaurant."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 4", audioText: "Look at the picture and choose the best answer. Statement A: She doesn't know how to use the computer. Statement B: She can use the computer very well. Statement C: She is playing computer games happily.", options: ["She doesn't know how to use the computer.", "She can use the computer very well.", "She is playing the computer games happily."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 5", audioText: "Look at the picture and choose the best answer. Statement A: Tina yawns. Statement B: Jennifer yawns. Statement C: Tina stretches.", options: ["Tina yawns.", "Jennifer yawns.", "Tina stretches."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 6", audioText: "Look at the picture and choose the best answer. Statement A: It's 10 past 5. Statement B: It's a quarter past 5. Statement C: It's a quarter to 5.", options: ["It's 10 past 5.", "It's a quarter past five.", "It's a quarter to five."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 7", audioText: "Look at the picture and choose the best answer. Statement A: There is a radio on the table. Statement B: There is a hanger on the coffee table. Statement C: There is a sofa in the bedroom.", options: ["There is a radio on the table.", "There is a hanger on the coffee table.", "There is a sofa in the bedroom."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 8", audioText: "Look at the picture and choose the best answer. Statement A: Please don't speak too loud here. Statement B: Please don't smoke in the restaurant. Statement C: Please don't smoke outside.", options: ["Please don't speak too loud here.", "Please don't smoke in the restaurant.", "Please don't smoke outside."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 9", audioText: "Look at the picture and choose the best answer. Statement A: The girl is watching television. Statement B: The boy is drawing. Statement C: The man is flying a kite.", options: ["The girl is watching television.", "The boy is drawing.", "The man is flying a kite."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 10", audioText: "Look at the picture and choose the best answer. Statement A: My favorite food is noodles. Statement B: My father's favorite food is hamburgers. Statement C: My mother's favorite food is sandwiches.", options: ["My favorite food is noodles.", "My father's favorite food is hamburgers.", "My mother's favorite food is sandwiches."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 11: Do you have many friends here?", audioText: "Do you have many friends here? A: I often go swimming with my friends. B: I am friendly. C: No, I don't have many friends here.", options: ["I often go swimming with my friends.", "I am friendly.", "No, I don't have many friends here."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 12: What time do you usually go to school?", audioText: "What time do you usually go to school? A: You usually go to school at 7:00. B: I usually go to school at half past 7:00. C: I usually go to school on time.", options: ["You usually go to school at 7:00.", "I usually go to school at half past 7:00.", "I usually go to school on time."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 13: What is Sandy's favorite sport?", audioText: "What is Sandy's favorite sport? A: Her favorite food is vegetables. B: Her favorite sport is bowling. C: Her favorite fruit is strawberries.", options: ["Her favorite food is vegetables.", "Her favorite sport is bowling.", "Her favorite fruit is strawberries."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 14: How many lamps can you see?", audioText: "How many lamps can you see? A: Yes, I do. B: I can see three bags. C: I can see five lamps.", options: ["Yes, I do.", "I can see three bags.", "I can see five lamps."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 15: Where are you doing your homework?", audioText: "Where are you doing your homework? A: You are doing your homework in front of the television. B: I am playing the piano in the dining room. C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 16: Are there any pictures on the wall?", audioText: "Are there any pictures on the wall? A: No, there are not any pictures. B: He is looking for his pictures. C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 17: Are you listening to me?", audioText: "Are you listening to me? A: Yes, you are listening to me. B: Yes, I am listening to you. C: No, he is not listening to us.", options: ["Yes, you are listening to me.", "Yes, I am listening to you.", "No, he is not listening to us."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 18: What is she doing?", audioText: "What is she doing? A: She is playing the guitar. B: You are cooking in the kitchen. C: She does compulsory homework every evening.", options: ["She is playing the guitar.", "You are cooking in the kitchen.", "She does her homework every evening."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 19: Do you have to go to school on time?", audioText: "Do you have to go to school on time? A: Yes, I have. B: Yes, I can. C: No, I don't.", options: ["Yes, I have.", "Yes, I can.", "No, I don't."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 20: Thank you very much.", audioText: "Thank you very much. A: No thanks. B: You're welcome. C: I think so.", options: ["No thanks.", "You're welcome.", "I think so."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 21: May I borrow some money?", audioText: "May I borrow some money? A: Sure, how many do you want? B: Sure, how much do you need? C: No, I don't need money.", options: ["Sure, how many do you want?", "Sure, how much do you need?", "No, I don't need money."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 22: What does Tina have?", audioText: "What does Tina have? A: She has a new car. B: The books on her desk are mine. C: She needs a bike.", options: ["She has a new car.", "The books on her desk are mine.", "She needs a bike."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 23: Is there a car in the garage?", audioText: "Is there a car in the garage? A: Yes, I am. B: Yes, there is. C: He is sick.", options: ["Yes, I am.", "Yes, there is.", "He is sick."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 24: Are Mike and Jason washing their cars?", audioText: "Are Mike and Jason washing their cars? A: No, he is not. B: Yes, he is. C: No, they aren't.", options: ["No, he is not.", "Yes, he is.", "No, they aren't."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 25: Can Tony do kung fu?", audioText: "Can Tony do kung fu? A: Yes, he can. B: Yes, I do. C: Yes, I can.", options: ["Yes, he can.", "Yes, I do.", "Yes, I can."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 26: Is there any shampoo?", audioText: "Is there any shampoo? A: No, I don't. B: Yes, there are. C: Yes, there is.", options: ["No, I don't.", "Yes, there are.", "Yes, there is."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 27: How much sugar do you want?", audioText: "How much sugar do you want? A: Just a little. B: Too much. C: Not many.", options: ["Just a little.", "Too much.", "Not many."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 28: What is Timmy doing?", audioText: "What is Timmy doing? A: He doesn't shut his eyes because the movie is scary. B: He is shutting his eyes because of the scary movie. C: He shuts his eyes at scary movies.", options: ["He doesn't shut his eyes because the movie is scary.", "He is shutting his eyes because of the scary movie.", "He shuts his eyes at scary movies."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 29: Do you always do your homework before dinner?", audioText: "Do you always do your homework before dinner? A: Yes, I never eat first. B: Yes, it is always late when I do it. C: Yes, always do my homework.", options: ["Yes, I never eat first.", "Yes, it is always late when I do it.", "Yes, always do my homework."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 30: What is the girl doing?", audioText: "What is the girl doing? A: The girl is sick. B: The girl is painting. C: Her favorite sport is soccer.", options: ["The girl is sick.", "The girl is painting.", "Her favorite sport is soccer."], ans: 1 },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 31: What does Kevin's mom want him to do now?", audioText: "Kevin, what are you doing? I'm playing a video game, Mom. Is your homework done? I can't do my homework now because I can't stop this game before I win. Then I can stop the game for you. Now do your homework before dinner. Question 31: What does Kevin's mom want him to do now?", options: ["Stop playing games and do homework.", "Win the game.", "Eat dinner first."], ans: 0, repeat: true },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 32: What does Kevin want to do?", audioText: "What does Kevin want to do?", options: ["Do his homework.", "Win the game before stopping.", "Help his mom cook dinner."], ans: 1 },
  { part: "Part 3: Conversations (33-35)", prompt: "Question 33: Does Kevin finish his homework?", audioText: "Does Kevin finish his homework?", options: ["Yes, he does.", "No, he hasn't done it yet.", "He did it at school."], ans: 1 },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 34: How is Lucy?", audioText: "How are you, Lucy? Not bad. What about you? Great. I haven't seen you for a week. You know, I lived with my parents, but they moved to London. So I live in a big house alone. Question 34: How is Lucy?", options: ["Not bad.", "Very sick.", "Terrible."], ans: 0, repeat: true },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 35: Who lives with Lucy?", audioText: "Who lives with Lucy?", options: ["Her parents.", "She lives alone.", "Her classmates."], ans: 1 },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 36: What does Lucy want?", audioText: "Hi, Lucy, your birthday is coming. Do you want to have a birthday party? Sure. We can invite some friends. Who do you want to invite? Jerry, Susan, and Henry. Okay. Sounds good. I will help you prepare your birthday party. Thanks. I need the help. Question 36: What does Lucy want?", options: ["To have a birthday party.", "To go to London.", "To study alone."], ans: 0, repeat: true },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 37: Whose birthday is coming?", audioText: "Whose birthday is coming?", options: ["Jack's birthday.", "Lucy's birthday.", "Susan's birthday."], ans: 1 },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 38: How many friends may go to the party with Lucy and Jack?", audioText: "How many friends may go to the birthday party with Lucy and Jack?", options: ["2 friends.", "3 friends (Jerry, Susan, and Henry).", "5 friends."], ans: 1 },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 39: What kind of movies does Helen like?", audioText: "Hi Helen. Where are you going? I am going to watch a movie. Really? What kind of movie are you going to watch? I want to see a science fiction movie. I have to run now. The movie is about to start. Okay, and I have to be home before lunch. See you. Question 39: What kind of movies does Helen like?", options: ["Romance movies.", "Science fiction movies.", "Horror movies."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 40: Why does Helen have to run?", audioText: "Why does Helen have to run?", options: ["She wants to exercise.", "The movie is about to start.", "She needs to catch a bus."], ans: 1 },
  { part: "Part 4: Talks (41-42)", prompt: "Question 41: Where does Henry come from?", audioText: "Hello everyone, today I'd like to tell you something about my English studies. My name is Henry. I am from Japan. I am a student at Gram English. I like to study English very much, but my spoken English is not good. When I say R, I find it difficult to say it right. Question 41: Where does Henry come from?", options: ["Japan.", "Singapore.", "America."], ans: 0, repeat: true },
  { part: "Part 4: Talks (41-42)", prompt: "Question 42: Where does he learn English?", audioText: "Where does he learn English?", options: ["At school in Japan.", "At Gram English.", "At home by himself."], ans: 1 },
  { part: "Part 4: Talks (43-45)", prompt: "Question 43: What can't Frank do?", audioText: "Frank and Maggie are my good friends. They can do many things. Frank can play the piano and guitar. He can also ride a bicycle, but he can't drive a car. Maggie is very talented. She can sing and dance very well. She likes to practice Kung Fu on Mondays. We can all speak English very well. We often do our homework together before dinner. Then, after dinner, we play video games and practice our English because these are all things we can do together. Question 43: What can't Frank do?", options: ["Play the guitar.", "Ride a bicycle.", "Drive a car."], ans: 2, repeat: true },
  { part: "Part 4: Talks (43-45)", prompt: "Question 44: What do the three friends do together?", audioText: "What do the three friends do together?", options: ["Practice kung fu on Mondays.", "Do homework before dinner and play video games after dinner.", "Drive cars together."], ans: 1 },
  { part: "Part 4: Talks (43-45)", prompt: "Question 45: What are they very good at?", audioText: "What are they very good at?", options: ["They can all speak English very well.", "They can all play violin.", "They can all drive."], ans: 0 },
  { part: "Part 4: Talks (46-47)", prompt: "Question 46: Where does the speaker like to watch movies?", audioText: "People like to watch movies in different places. For example, some people like to watch movies in the theater, library, or restaurant. But I like to watch movies at home. People who like to watch movies in the theater like to be around many people. Question 46: Where does the speaker like to watch movies?", options: ["In the theater.", "At home.", "In the library."], ans: 1, repeat: true },
  { part: "Part 4: Talks (46-47)", prompt: "Question 47: Why do some people prefer to watch movies in the theater?", audioText: "Why do some people prefer to watch movies in the theater?", options: ["Because they like to be around many people.", "Because tickets are free.", "Because the food is delicious."], ans: 0 },
  { part: "Part 4: Talks (48-50)", prompt: "Question 48: Why does she have to study?", audioText: "Hi Jane, it's Sandy. I have to study for my English test and I need your help. Can you come to my house today? We can have dinner together at 6:00, and we can study at 6:30 until 8:00. Then we can watch TV. Thanks. Question 48: Why does she have to study?", options: ["For her English test.", "For her math contest.", "For fun."], ans: 0, repeat: true },
  { part: "Part 4: Talks (48-50)", prompt: "Question 49: What does Sandy want from Jane?", audioText: "What does Sandy want from Jane?", options: ["To buy her dinner.", "To help her study for the English test.", "To lend her a TV."], ans: 1 },
  { part: "Part 4: Talks (48-50)", prompt: "Question 50: Where does Sandy want to study?", audioText: "Where does Sandy want to study?", options: ["At Jane's house.", "At Sandy's house.", "At school."], ans: 1 }
];