/**
 * ===================================================================
 * @file data-vocab.js
 * @description 題庫共用工具函式與官方核心單字母庫 (各類別擴充與嚴格同類干擾版)
 * ===================================================================
 */

function generateQuestionHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return "q_" + Math.abs(hash).toString(36);
}

function localShuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

window.bLevelVocabMasterPool = [
  // 家具生活類 (house)
  { word: "closet", meaning: "衣櫥 / 衣櫃", category: "house", kk: "[ˋklɑzɪt]", tip: "closet (衣櫥) KK: [ˋklɑzɪt]" },
  { word: "pillow", meaning: "枕頭", category: "house", kk: "[ˋpɪlo]", tip: "pillow (枕頭) KK: [ˋpɪlo]" },
  { word: "blanket", meaning: "毛毯 / 被子", category: "house", kk: "[ˋblæŋkɪt]", tip: "blanket (毛毯) KK: [ˋblæŋkɪt]" },
  { word: "hanger", meaning: "衣架", category: "house", kk: "[ˋhæŋɚ]", tip: "hanger (衣架) KK: [ˋhæŋɚ]" },
  { word: "drawer", meaning: "抽屜", category: "house", kk: "[drɔr]", tip: "drawer (抽屜) KK: [drɔr]" },
  { word: "shelf", meaning: "架子", category: "house", kk: "[ʃɛlf]", tip: "shelf (架子) KK: [ʃɛlf]" },
  { word: "sofa", meaning: "沙發", category: "house", kk: "[ˋsofə]", tip: "sofa (沙發) KK: [ˋsofə]" },
  { word: "lamp", meaning: "檯燈", category: "house", kk: "[læmp]", tip: "lamp (檯燈) KK: [læmp]" },
  { word: "vase", meaning: "花瓶", category: "house", kk: "[ves]", tip: "vase (花瓶) KK: [ves]" },
  { word: "towel", meaning: "毛巾", category: "house", kk: "[ˋtaʊəl]", tip: "towel (毛巾) KK: [ˋtaʊəl]" },
  { word: "soap", meaning: "肥皂", category: "house", kk: "[sop]", tip: "soap (肥皂) KK: [sop]" },
  { word: "shampoo", meaning: "洗髮精", category: "house", kk: "[ʃæmˋpu]", tip: "shampoo (洗髮精) KK: [ʃæmˋpu]" },
  { word: "clock", meaning: "時鐘", category: "house", kk: "[klɑk]", tip: "clock (時鐘) KK: [klɑk]" },
  { word: "mirror", meaning: "鏡子", category: "house", kk: "[ˋmɪrɚ]", tip: "mirror (鏡子) KK: [ˋmɪrɚ]" },
  { word: "curtain", meaning: "窗簾", category: "house", kk: "[ˋkɝtn]", tip: "curtain (窗簾) KK: [ˋkɝtn]" },
  { word: "fan", meaning: "電風扇", category: "house", kk: "[fæn]", tip: "fan (電風扇) KK: [fæn]" },

  // 餐具飲食類 (food)
  { word: "plate", meaning: "盤子", category: "food", kk: "[plet]", tip: "plate (盤子) KK: [plet]" },
  { word: "bowl", meaning: "碗", category: "food", kk: "[bol]", tip: "bowl (碗) KK: [bol]" },
  { word: "fork", meaning: "叉子", category: "food", kk: "[fɔrk]", tip: "fork (叉子) KK: [fɔrk]" },
  { word: "spoon", meaning: "湯匙", category: "food", kk: "[spun]", tip: "spoon (湯匙) KK: [spun]" },
  { word: "sausages", meaning: "香腸", category: "food", kk: "[ˋsɔsɪdʒɪz]", tip: "sausages (香腸) KK: [ˋsɔsɪdʒɪz]" },
  { word: "sandwiches", meaning: "三明治", category: "food", kk: "[ˋsændwɪtʃɪz]", tip: "sandwiches (三明治) KK: [ˋsændwɪtʃɪz]" },
  { word: "cookies", meaning: "餅乾", category: "food", kk: "[ˋkʊkɪz]", tip: "cookies (餅乾) KK: [ˋkʊkɪz]" },
  { word: "noodles", meaning: "麵條", category: "food", kk: "[ˋnud!z]", tip: "noodles (麵條) KK: [ˋnud!z]" },
  { word: "hamburgers", meaning: "漢堡", category: "food", kk: "[ˋhæmbɚgɚz]", tip: "hamburgers (漢堡) KK: [ˋhæmbɚgɚz]" },
  { word: "vegetables", meaning: "蔬菜", category: "food", kk: "[ˋvɛdʒətəb!z]", tip: "vegetables (蔬菜) KK: [ˋvɛdʒətəb!z]" },
  { word: "strawberries", meaning: "草莓", category: "food", kk: "[ˋstrɔ͵bɛrɪz]", tip: "strawberries (草莓) KK: [ˋstrɔ͵bɛrɪz]" },
  { word: "sugar", meaning: "糖", category: "food", kk: "[ˋʃʊgɚ]", tip: "sugar (糖) KK: [ˋʃʊgɚ]" },
  { word: "corn", meaning: "玉米", category: "food", kk: "[kɔrn]", tip: "corn (玉米) KK: [kɔrn]" },
  { word: "butter", meaning: "奶油", category: "food", kk: "[ˋbʌtɚ]", tip: "butter (奶油) KK: [ˋbʌtɚ]" },
  { word: "cheese", meaning: "起司", category: "food", kk: "[tʃiz]", tip: "cheese (起司) KK: [tʃiz]" },
  { word: "snack", meaning: "點心", category: "food", kk: "[snæk]", tip: "snack (點心) KK: [snæk]" },
  { word: "oil", meaning: "食用油", category: "food", kk: "[ɔɪl]", tip: "oil (食用油) KK: [ɔɪl]" },

  // 動作動詞類 (action)
  { word: "tremble", meaning: "發抖 / 顫抖", category: "action", kk: "[ˋtrɛmb!]", tip: "tremble (顫抖) KK: [ˋtrɛmb!]" },
  { word: "yawn", meaning: "打哈欠", category: "action", kk: "[jɔn]", tip: "yawn (打哈欠) KK: [jɔn]" },
  { word: "stretch", meaning: "伸展 / 伸懶腰", category: "action", kk: "[strɛtʃ]", tip: "stretch (伸展) KK: [strɛtʃ]" },
  { word: "shut", meaning: "閉上 / 關閉", category: "action", kk: "[ʃʌt]", tip: "shut (閉上) KK: [ʃʌt]" },
  { word: "brush", meaning: "刷 (牙/毛)", category: "action", kk: "[brʌʃ]", tip: "brush (刷) KK: [brʌʃ]" },
  { word: "wash", meaning: "清洗", category: "action", kk: "[wɑʃ]", tip: "wash (清洗) KK: [wɑʃ]" },
  { word: "borrow", meaning: "借入", category: "action", kk: "[ˋbɑro]", tip: "borrow (借入) KK: [ˋbɑro]" },
  { word: "lend", meaning: "借出", category: "action", kk: "[lɛnd]", tip: "lend (借出) KK: [lɛnd]" },
  { word: "prepare", meaning: "準備", category: "action", kk: "[prɪˋpɛr]", tip: "prepare (準備) KK: [prɪˋpɛr]" },
  { word: "celebrate", meaning: "慶祝", category: "action", kk: "[ˋsɛlə͵bret]", tip: "celebrate (慶祝) KK: [ˋsɛlə͵bret]" },
  { word: "invite", meaning: "邀請", category: "action", kk: "[ɪnˋvaɪt]", tip: "invite (邀請) KK: [ɪnˋvaɪt]" },
  { word: "touch", meaning: "碰觸", category: "action", kk: "[tʌtʃ]", tip: "touch (碰觸) KK: [tʌtʃ]" },

  // 運動休閒類 (sports) - 補足至 10 字
  { word: "badminton", meaning: "羽毛球", category: "sports", kk: "[ˋbædmɪntən]", tip: "badminton (羽毛球) KK: [ˋbædmɪntən]" },
  { word: "bowling", meaning: "保齡球", category: "sports", kk: "[ˋbolɪŋ]", tip: "bowling (保齡球) KK: [ˋbolɪŋ]" },
  { word: "basketball", meaning: "籃球", category: "sports", kk: "[ˋbæskɪt͵bɔl]", tip: "basketball (籃球) KK: [ˋbæskɪt͵bɔl]" },
  { word: "baseball", meaning: "棒球", category: "sports", kk: "[ˋbes͵bɔl]", tip: "baseball (棒球) KK: [ˋbes͵bɔl]" },
  { word: "golf", meaning: "高爾夫球", category: "sports", kk: "[gɑlf]", tip: "golf (高爾夫) KK: [gɑlf]" },
  { word: "guitar", meaning: "吉他", category: "sports", kk: "[gɪˋtɑr]", tip: "guitar (吉他) KK: [gɪˋtɑr]" },
  { word: "piano", meaning: "鋼琴", category: "sports", kk: "[pɪˋæno]", tip: "piano (鋼琴) KK: [pɪˋæno]" },
  { word: "violin", meaning: "小提琴", category: "sports", kk: "[͵vaɪəˋlɪn]", tip: "violin (小提琴) KK: [͵vaɪəˋlɪn]" },
  { word: "bicycle", meaning: "腳踏車", category: "sports", kk: "[ˋbaɪsɪk!]", tip: "bicycle (腳踏車) KK: [ˋbaɪsɪk!]" },
  { word: "kung fu", meaning: "功夫", category: "sports", kk: "[ˋkʊŋ ˋfu]", tip: "kung fu (功夫) KK: [ˋkʊŋ ˋfu]" },
  { word: "video game", meaning: "電玩遊戲", category: "sports", kk: "[ˋvɪdɪo gem]", tip: "video game (電玩) KK: [ˋvɪdɪo gem]" },

  // 建築地點類 (places)
  { word: "kitchen", meaning: "廚房", category: "places", kk: "[ˋkɪtʃɪn]", tip: "kitchen (廚房) KK: [ˋkɪtʃɪn]" },
  { word: "bedroom", meaning: "臥室", category: "places", kk: "[ˋbɛd͵rum]", tip: "bedroom (臥室) KK: [ˋbɛd͵rum]" },
  { word: "bathroom", meaning: "浴室", category: "places", kk: "[ˋbæθ͵rum]", tip: "bathroom (浴室) KK: [ˋbæθ͵rum]" },
  { word: "living room", meaning: "客廳", category: "places", kk: "[ˋlɪvɪŋ ͵rum]", tip: "living room (客廳) KK: [ˋlɪvɪŋ ͵rum]" },
  { word: "dining room", meaning: "飯廳", category: "places", kk: "[ˋdaɪnɪŋ ͵rum]", tip: "dining room (飯廳) KK: [ˋdaɪnɪŋ ͵rum]" },
  { word: "supermarket", meaning: "超級市場", category: "places", kk: "[ˋsupɚ͵mɑrkɪt]", tip: "supermarket (超市) KK: [ˋsupɚ͵mɑrkɪt]" },
  { word: "hospital", meaning: "醫院", category: "places", kk: "[ˋhɑspɪt!]", tip: "hospital (醫院) KK: [ˋhɑspɪt!]" },
  { word: "restaurant", meaning: "餐廳", category: "places", kk: "[ˋrɛstərənt]", tip: "restaurant (餐廳) KK: [ˋrɛstərənt]" },
  { word: "post office", meaning: "郵局", category: "places", kk: "[post ˋɔfɪs]", tip: "post office (郵局) KK: [post ˋɔfɪs]" },
  { word: "library", meaning: "圖書館", category: "places", kk: "[ˋlaɪbrɛrɪ]", tip: "library (圖書館) KK: [ˋlaɪbrɛrɪ]" },

  // 學校課業類 (school)
  { word: "classmate", meaning: "同學", category: "school", kk: "[ˋklæs͵met]", tip: "classmate (同學) KK: [ˋklæs͵met]" },
  { word: "homework", meaning: "家庭作業", category: "school", kk: "[ˋhom͵wɝk]", tip: "homework (家庭作業) KK: [ˋhom͵wɝk]" },
  { word: "pencil", meaning: "鉛筆", category: "school", kk: "[ˋpɛns!]", tip: "pencil (鉛筆) KK: [ˋpɛns!]" },
  { word: "eraser", meaning: "橡皮擦", category: "school", kk: "[ɪˋresɚ]", tip: "eraser (橡皮擦) KK: [ɪˋresɚ]" },
  { word: "ruler", meaning: "尺", category: "school", kk: "[ˋrulɚ]", tip: "ruler (尺) KK: [ˋrulɚ]" },
  { word: "marker", meaning: "彩色筆", category: "school", kk: "[ˋmɑrkɚ]", tip: "marker (彩色筆) KK: [ˋmɑrkɚ]" },
  { word: "pencil case", meaning: "鉛筆盒", category: "school", kk: "[ˋpɛns! kes]", tip: "pencil case (鉛筆盒) KK: [ˋpɛns! kes]" },

  // 人物與親屬類 (people) - 補足至 8 字 (保證同類干擾)
  { word: "parents", meaning: "父母親", category: "people", kk: "[ˋpɛrənts]", tip: "parents (父母親) KK: [ˋpɛrənts]" },
  { word: "grandparents", meaning: "祖父母", category: "people", kk: "[ˋgrænd͵pɛrənts]", tip: "grandparents (祖父母) KK: [ˋgrænd͵pɛrənts]" },
  { word: "neighbor", meaning: "鄰居", category: "people", kk: "[ˋnebɚ]", tip: "neighbor (鄰居) KK: [ˋnebɚ]" },
  { word: "police officer", meaning: "警察", category: "people", kk: "[pəˋlis ͵ɔfɪsɚ]", tip: "police officer (警察) KK: [pəˋlis ͵ɔfɪsɚ]" },
  { word: "doctor", meaning: "醫生", category: "people", kk: "[ˋdɑktɚ]", tip: "doctor (醫生) KK: [ˋdɑktɚ]" },
  { word: "nurse", meaning: "護理師", category: "people", kk: "[nɝs]", tip: "nurse (護理師) KK: [nɝs]" },
  { word: "driver", meaning: "司機", category: "people", kk: "[ˋdraɪvɚ]", tip: "driver (司機) KK: [ˋdraɪvɚ]" },
  { word: "teacher", meaning: "老師", category: "people", kk: "[ˋtitʃɚ]", tip: "teacher (老師) KK: [ˋtitʃɚ]" },

  // 特徵形容詞類 (adjectives) - 補足至 8 字 (保證同類干擾)
  { word: "scary", meaning: "恐怖的", category: "adjectives", kk: "[ˋskɛrɪ]", tip: "scary (恐怖的) KK: [ˋskɛrɪ]" },
  { word: "thin", meaning: "瘦的 / 薄的", category: "adjectives", kk: "[θɪn]", tip: "thin (瘦的) KK: [θɪn]" },
  { word: "talented", meaning: "有天賦的", category: "adjectives", kk: "[ˋtæləntɪd]", tip: "talented (有天賦的) KK: [ˋtæləntɪd]" },
  { word: "difficult", meaning: "困難的", category: "adjectives", kk: "[ˋdɪfək!t]", tip: "difficult (困難的) KK: [ˋdɪfək!t]" },
  { word: "friendly", meaning: "友善的", category: "adjectives", kk: "[ˋfrɛndlɪ]", tip: "friendly (友善的) KK: [ˋfrɛndlɪ]" },
  { word: "polite", meaning: "有禮貌的", category: "adjectives", kk: "[pəˋlaɪt]", tip: "polite (有禮貌的) KK: [pəˋlaɪt]" },
  { word: "quiet", meaning: "安靜的", category: "adjectives", kk: "[ˋkwaɪət]", tip: "quiet (安靜的) KK: [ˋkwaɪət]" },
  { word: "famous", meaning: "著名的", category: "adjectives", kk: "[ˋfeməs]", tip: "famous (著名的) KK: [ˋfeməs]" },

  // 時間與頻率類 (time) - 補足至 9 字
  { word: "second", meaning: "秒", category: "time", kk: "[ˋsɛkənd]", tip: "second (秒) KK: [ˋsɛkənd]" },
  { word: "minute", meaning: "分鐘", category: "time", kk: "[ˋmɪnɪt]", tip: "minute (分鐘) KK: [ˋmɪnɪt]" },
  { word: "quarter", meaning: "一刻鐘 (15分)", category: "time", kk: "[ˋkwɔrtɚ]", tip: "quarter (一刻鐘) KK: [ˋkwɔrtɚ]" },
  { word: "noon", meaning: "中午", category: "time", kk: "[nun]", tip: "noon (中午) KK: [nun]" },
  { word: "always", meaning: "總是 (100%)", category: "time", kk: "[ˋɔlwez]", tip: "always (總是) KK: [ˋɔlwez]" },
  { word: "usually", meaning: "通常 (80%)", category: "time", kk: "[ˋjuʒʊəlɪ]", tip: "usually (通常) KK: [ˋjuʒʊəlɪ]" },
  { word: "rarely", meaning: "很少 (10%)", category: "time", kk: "[ˋrɛrlɪ]", tip: "rarely (很少) KK: [ˋrɛrlɪ]" },
  { word: "never", meaning: "從未 (0%)", category: "time", kk: "[ˋnɛvɚ]", tip: "never (從未) KK: [ˋnɛvɚ]" },
  { word: "between", meaning: "在…兩者之間", category: "time", kk: "[bɪˋtwin]", tip: "between (兩者之間) KK: [bɪˋtwin]" }
];

// 單字動態生成引擎 (真隨機題型 + 100% 同類別干擾項保護)
window.buildDynamicVocabQuiz = function(count, stageTitle) {
  const pool = Array.isArray(window.bLevelVocabMasterPool) && window.bLevelVocabMasterPool.length > 0 
    ? window.bLevelVocabMasterPool 
    : [];
  
  const poolShuffled = localShuffle(pool);
  const selectedTargets = poolShuffled.slice(0, Math.min(count, poolShuffled.length));

  return selectedTargets.map(function(target) {
    // 嚴格鎖定同類別詞彙抽取干擾項
    let sameCategoryPool = pool.filter(item => item.category === target.category && item.word !== target.word);
    if (sameCategoryPool.length < 3) {
      sameCategoryPool = pool.filter(item => item.word !== target.word);
    }
    const distractors = localShuffle(sameCategoryPool).slice(0, 3);
    const combinedOptions = localShuffle([target].concat(distractors));
    const correctIdx = combinedOptions.findIndex(item => item.word === target.word);

    // 打破奇偶規律，使用真隨機題型
    const isMeaningQuestion = Math.random() > 0.5;

    if (isMeaningQuestion) {
      return {
        qId: generateQuestionHash("vocab_meaning_" + target.word),
        module: "vocab",
        isMeaningQuestion: true,
        part: stageTitle,
        prompt: `📖 請問單字【 ${target.word} 】${target.kk} 的中文意思是？`,
        word: target.word,
        meaning: target.meaning,
        options: combinedOptions.map(item => item.meaning),
        wordsList: combinedOptions.map(item => item.word),
        meanings: combinedOptions.map(item => item.meaning),
        kkList: combinedOptions.map(item => item.kk),
        ans: correctIdx,
        audioText: target.word,
        tip: `💡 【${target.word}】${target.kk} 中文為：${target.meaning}`
      };
    } else {
      return {
        qId: generateQuestionHash("vocab_audio_" + target.word),
        module: "vocab",
        isMeaningQuestion: false,
        part: stageTitle,
        prompt: "🎧 請聽發音，選出正確的單字：",
        word: target.word,
        meaning: target.meaning,
        options: combinedOptions.map(item => item.word),
        wordsList: combinedOptions.map(item => item.word),
        meanings: combinedOptions.map(item => item.meaning),
        kkList: combinedOptions.map(item => item.kk),
        ans: correctIdx,
        audioText: target.word,
        tip: `💡 【${target.word}】${target.kk} 中文為：${target.meaning}`
      };
    }
  });
};

window.rawVocabBLevel = window.buildDynamicVocabQuiz(50, "⭐ B級全範圍綜合測驗 (50題)");