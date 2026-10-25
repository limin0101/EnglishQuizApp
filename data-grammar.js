/**
 * ===================================================================
 * @file data-grammar.js
 * @description 文法 500 題生成引擎 (30 大考點深度矩陣 + 防重複抽題桶)
 * ===================================================================
 */

function generate500GrammarQuestions() {
  const times = ["6:30 a.m.", "7:15 a.m.", "8:45 p.m.", "9:00 a.m.", "12:15 p.m.", "5:45 p.m.", "half past eight", "noon"];
  const vehicles = ["The express train", "The school bus", "The airplane", "The fast ferry", "The MRT", "The tour bus"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const seasons = ["spring", "summer", "autumn", "winter"];
  const months = ["January", "April", "July", "October", "December"];
  
  const singlePeople = [
    { name: "My brother", pron: "He", obj: "him" },
    { name: "Susan", pron: "She", obj: "her" },
    { name: "Frank", pron: "He", obj: "him" },
    { name: "Maggie", pron: "She", obj: "her" },
    { name: "Tina", pron: "She", obj: "her" },
    { name: "Henry", pron: "He", obj: "him" }
  ];

  const pluralPeople = [
    { name: "The boys", pron: "They", obj: "them" },
    { name: "My parents", pron: "They", obj: "them" },
    { name: "Lucy and Frank", pron: "They", obj: "them" },
    { name: "The students", pron: "They", obj: "them" }
  ];

  const cookingUncountables = [
    { word: "sugar", hint: "糖" },
    { word: "milk", hint: "牛奶" },
    { word: "oil", hint: "食用油" },
    { word: "butter", hint: "奶油" },
    { word: "water", hint: "水" }
  ];

  const bottleUncountables = [
    { word: "milk", hint: "牛奶" },
    { word: "shampoo", hint: "洗髮精" },
    { word: "water", hint: "水" },
    { word: "juice", hint: "果汁" }
  ];

  const countables = [
    { singular: "pillow", plural: "pillows", hint: "枕頭" },
    { singular: "blanket", plural: "blankets", hint: "毛毯" },
    { singular: "hanger", plural: "hangers", hint: "衣架" },
    { singular: "cookie", plural: "cookies", hint: "餅乾" },
    { singular: "sandwich", plural: "sandwiches", hint: "三明治" },
    { singular: "marker", plural: "markers", hint: "彩色筆" }
  ];

  const personIrregularNouns = [
    { sing: "child", plur: "children", hint: "小孩" },
    { sing: "man", plur: "men", hint: "男人" },
    { sing: "woman", plur: "women", hint: "女人" }
  ];

  const activities = [
    { base: "clean the room", ing: "cleaning the room", s: "cleans the room", past: "cleaned the room" },
    { base: "practice English", ing: "practicing English", s: "practices English", past: "practiced English" },
    { base: "wash dishes", ing: "washing dishes", s: "washes dishes", past: "washed dishes" },
    { base: "study hard", ing: "studying hard", s: "studies hard", past: "studied hard" },
    { base: "play basketball", ing: "playing basketball", s: "plays basketball", past: "played basketball" },
    { base: "listen to music", ing: "listening to music", s: "listens to music", past: "listened to music" }
  ];

  const streetPlaces = [
    "the supermarket", "the library", "the hospital", "the bakery", 
    "the post office", "the bank", "the bookstore", "the park"
  ];

  const generated = [];

  for (let i = 0; i < 500; i++) {
    const type = i % 30;
    const vhc = vehicles[i % vehicles.length];
    const tm = times[i % times.length];
    const dy = days[i % days.length];
    const sea = seasons[i % seasons.length];
    const mo = months[i % months.length];
    const sp = singlePeople[i % singlePeople.length];
    const pp = pluralPeople[i % pluralPeople.length];
    const cookUncnt = cookingUncountables[i % cookingUncountables.length];
    const btlUncnt = bottleUncountables[i % bottleUncountables.length];
    const cnt = countables[i % countables.length];
    const irr = personIrregularNouns[i % personIrregularNouns.length];
    const act = activities[i % activities.length];
    const p1 = streetPlaces[i % streetPlaces.length];
    const p2 = streetPlaces[(i + 2) % streetPlaces.length];
    const p3 = streetPlaces[(i + 4) % streetPlaces.length];

    let item = { typeTag: type, module: "grammar" };

    switch (type) {
      case 0:
        item.part = "時間介系詞：具體鐘點 (at)";
        item.prompt = `${vhc} usually arrives at the station ______ ${tm}.`;
        item.options = ["at", "on", "in", "for"];
        item.ans = 0;
        item.tip = `💡【鐘點時刻】具體幾點幾分（如 ${tm}）前面必須搭配介系詞 at。`;
        break;

      case 1:
        item.part = "時間介系詞：特定星期與早中晚 (on)";
        item.prompt = `Our school will have an English contest ______ ${dy} morning.`;
        item.options = ["on", "at", "in", "with"];
        item.ans = 0;
        item.tip = `💡【特定日子】特定星期或某一天的早晨/下午（如 ${dy} morning），一律用 on。`;
        break;

      case 2:
        item.part = "時間介系詞：月份與季節 (in)";
        item.prompt = `Many families love to travel abroad ______ ${sea}.`;
        item.options = ["in", "at", "on", "to"];
        item.ans = 0;
        item.tip = `💡【月份季節】在某個季節（如 ${sea}）或月份（in ${mo}），使用介系詞 in。`;
        break;

      case 3:
        item.part = "現在進行式：提示詞與正在發生 (is + V-ing)";
        item.prompt = `Listen! The baby ______ in the bedroom. Please shut the door.`;
        item.options = ["is crying", "cries", "crying", "cry"];
        item.ans = 0;
        item.tip = "💡【現在進行式】以 Look! 或 Listen! 開頭代表當前正在發生，單數主詞搭配 is + V-ing。";
        break;

      case 4:
        item.part = "現在進行式：複數主詞 (are + V-ing)";
        item.prompt = `Look over there! ${pp.name} ______ right now.`;
        item.options = [`are ${act.ing}`, `is ${act.ing}`, act.s, act.base];
        item.ans = 0;
        item.tip = `💡【複數進行式】主詞 ${pp.name} 是複數，現在進行式必須搭配 are + V-ing。`;
        break;

      case 5:
        item.part = "不可數名詞數量疑問詞 (How much)";
        item.prompt = `How ______ ${cookUncnt.word} does ${sp.name} need for cooking?`;
        item.options = ["much", "many", "any", "little"];
        item.ans = 0;
        item.tip = `💡【不可數名詞】${cookUncnt.word}（${cookUncnt.hint}）為不可數名詞，詢問數量一律用 How much。`;
        break;

      case 6:
        item.part = "可數名詞數量疑問詞 (How many)";
        item.prompt = `How ______ ${cnt.plural} can you see on the table?`;
        item.options = ["many", "much", "any", "little"];
        item.ans = 0;
        item.tip = `💡【可數複數名詞】${cnt.plural}（${cnt.hint}）是可數名詞複數，詢問數量使用 How many。`;
        break;

      case 7:
        item.part = "助動詞問句：還原原形動詞 (Does ... V)";
        item.prompt = `Does ${sp.name} ______ every day after school?`;
        item.options = [act.base, act.s, act.ing, act.past];
        item.ans = 0;
        item.tip = "💡【助動詞還原】問句開頭已有助動詞 Does，後方動詞必須還原為原形動詞。";
        break;

      case 8:
        item.part = "現在簡單式：第三人稱單數動詞加 s/es";
        item.prompt = `${sp.name} always ______ on weekends.`;
        item.options = [act.s, act.base, act.ing, `is ${act.ing}`];
        item.ans = 0;
        item.tip = `💡【三單現在式】主詞 ${sp.name} 為第三人稱單數，一般動詞必須字尾加 s 或 es。`;
        break;

      case 9:
        item.part = "頻率副詞位置：be 動詞之後、一般動詞之前";
        item.prompt = `${sp.name} is a polite student. ${sp.pron} is ______ rude to teachers.`;
        item.options = ["never", "always", "sometimes", "usually"];
        item.ans = 0;
        item.tip = "💡【頻率副詞位置】從不（never）表示 0%，且必須放在 be 動詞之後、一般動詞之前。";
        break;

      case 10:
        item.part = "空間介系詞：在兩者之間 (between A and B)";
        item.prompt = `${p1.charAt(0).toUpperCase() + p1.slice(1)} is ______ ${p2} and ${p3}.`;
        item.options = ["between", "next to", "behind", "in front"];
        item.ans = 0;
        item.tip = "💡【空間介系詞】between ... and ... 為固定搭配，代表『在兩者之間』。";
        break;

      case 11:
        item.part = "否定祈使句：Don't + 原形動詞";
        item.prompt = `______ loud noise here. People are studying inside.`;
        item.options = ["Don't make", "Not make", "No making", "Doesn't make"];
        item.ans = 0;
        item.tip = "💡【否定祈使句】勸阻或命令他人不要做某事，句首使用 Don't + 原形動詞。";
        break;

      case 12:
        item.part = "疑問詞：詢問所有權 (Whose)";
        item.prompt = `______ ${cnt.singular} is this on the sofa? It belongs to ${sp.name}.`;
        item.options = ["Whose", "Who", "Where", "Which"];
        item.ans = 0;
        item.tip = "💡【所有格疑問詞】詢問物品是誰的，使用 Whose + 名詞。";
        break;

      case 13:
        item.part = "情態助動詞：can 後接原形動詞";
        item.prompt = `${sp.name} can ______ very well, but ${sp.pron.toLowerCase()} cannot drive a car.`;
        item.options = [act.base, act.s, act.ing, act.past];
        item.ans = 0;
        item.tip = "💡【情態助動詞】助動詞 can / cannot 後面一律接原形動詞。";
        break;

      case 14:
        item.part = "義務情態：第三人稱單數 have to 變化 (has to)";
        item.prompt = `${sp.name} ______ finish the homework before watching TV.`;
        item.options = ["has to", "have to", "is having", "having to"];
        item.ans = 0;
        item.tip = `💡【三單 has to】主詞 ${sp.name} 為單數，表示『必須』要用 has to + 原形動詞。`;
        break;

      case 15:
        item.part = "不規則名詞複數變化";
        item.prompt = `There are three ______ talking happily in the garden.`;
        item.options = [irr.plur, irr.sing, `${irr.sing}s`, `${irr.plur}s`];
        item.ans = 0;
        item.tip = `💡【不規則複數】${irr.sing} 的複數形是不規則變化 ${irr.plur}，不可隨便加 s。`;
        break;

      case 16:
        item.part = "量詞片語：不可數名詞計量";
        item.prompt = `Mom bought two ______ ${btlUncnt.word} from the supermarket.`;
        item.options = ["bottles of", "bottle of", "bottles", "bottle"];
        item.ans = 0;
        item.tip = `💡【不可數計量】不可數名詞前面加上量詞時，複數要加在容器量詞上（如 bottles of）。`;
        break;

      case 17:
        item.part = "過去簡單式：過去時間副詞 (yesterday / ago)";
        item.prompt = `${sp.name} ______ yesterday afternoon.`;
        item.options = [act.past, act.base, act.s, act.ing];
        item.ans = 0;
        item.tip = "💡【過去簡單式】句子含有 yesterday 等過去時間副詞，動詞必須使用過去式。";
        break;

      case 18:
        item.part = "過去式助動詞問句：Did ... 原形動詞";
        item.prompt = `Did you ______ last night? Yes, I did.`;
        item.options = [act.base, act.past, act.s, act.ing];
        item.ans = 0;
        item.tip = "💡【過去助動詞】問句有助動詞 Did，後面動詞必須還原為原形動詞。";
        break;

      case 19:
        item.part = "受格代名詞：置於動詞或介系詞後";
        item.prompt = `The teacher is talking to ______. Please listen carefully.`;
        item.options = ["us", "we", "our", "ours"];
        item.ans = 0;
        item.tip = "💡【受格代名詞】在動詞或介系詞（to）後面，代名詞必須使用受格（us）。";
        break;

      case 20:
        item.part = "存在句：單複數與不可數名詞判斷";
        item.prompt = `There ______ some milk and two apples on the kitchen table.`;
        item.options = ["is", "are", "have", "has"];
        item.ans = 0;
        item.tip = "💡【存在句就近原則】There is/are 依照最靠近 be 動詞的第一個名詞（milk 不可數）決定使用 is。";
        break;

      case 21:
        item.part = "存在句否定：Any 與複數/不可數搭配";
        item.prompt = `There aren't ______ pictures on the bedroom wall.`;
        item.options = ["any", "some", "a", "one"];
        item.ans = 0;
        item.tip = "💡【否定句 any】在否定句（aren't）中修飾複數名詞，通常使用 any。";
        break;

      case 22:
        item.part = "連貫連接詞：因果關係 (because)";
        item.prompt = `Sally is very sad ______ her parents cannot come to her birthday party.`;
        item.options = ["because", "so", "but", "although"];
        item.ans = 0;
        item.tip = "💡【連接詞 because】後方子句為原因（父母無法前來），連接詞使用 because。";
        break;

      case 23:
        item.part = "轉折連接詞：語氣對比 (but)";
        item.prompt = `Frank can play the guitar, ______ he cannot drive a car.`;
        item.options = ["but", "so", "because", "or"];
        item.ans = 0;
        item.tip = "💡【轉折詞 but】前後句語氣呈對比轉折（會彈吉他，但不會開車），使用 but。";
        break;

      case 24:
        item.part = "授與動詞：give something to someone";
        item.prompt = `Please give that storybook ______ me.`;
        item.options = ["to", "for", "with", "at"];
        item.ans = 0;
        item.tip = "💡【授與動詞介系詞】give + 物品 + to + 對象，搭配介系詞 to。";
        break;

      case 25:
        item.part = "喜好動詞後接動名詞 (like + V-ing)";
        item.prompt = `Henry really likes ______ in the swimming pool in summer.`;
        item.options = ["swimming", "swims", "swam", "swimmed"];
        item.ans = 0;
        item.tip = "💡【動名詞】like 後面接從事的休閒運動習慣時，通常搭配動名詞 V-ing（swimming）。";
        break;

      case 26:
        item.part = "疑問詞：詢問頻率 (How often)";
        item.prompt = `______ do you practice the piano? Twice a week.`;
        item.options = ["How often", "How many", "How much", "How long"];
        item.ans = 0;
        item.tip = "💡【頻率提問】回答為一週兩次（Twice a week），疑問詞必須使用 How often。";
        break;

      case 27:
        item.part = "肯定祈使句：原形動詞開頭";
        item.prompt = `______ the door quietly. The baby is sleeping.`;
        item.options = ["Shut", "Shuts", "Shutting", "To shut"];
        item.ans = 0;
        item.tip = "💡【肯定祈使句】給予指令或請求，句首必須直接使用原形動詞。";
        break;

      case 28:
        item.part = "時間介系詞：整點與半點 (half past)";
        item.prompt = `It's 7:30. In English, we say it is ______ seven.`;
        item.options = ["half past", "a quarter to", "a quarter past", "twenty to"];
        item.ans = 0;
        item.tip = "💡【時間讀法】7:30 代表『過半個小時』，英文表達為 half past seven。";
        break;

      case 29:
      default:
        item.part = "助動詞簡答一致性 (Do/Does)";
        item.prompt = `Do you have to go to school on time? No, I ______.`;
        item.options = ["don't", "haven't", "can't", "am not"];
        item.ans = 0;
        item.tip = "💡【助動詞簡答】一般動詞問句 Do you have to...，否定簡答一律用 No, I don't。";
        break;
    }

    item.qId = generateQuestionHash("g500_v5_" + i + "_" + item.prompt);
    generated.push(item);
  }

  return generated;
}

window.rawGrammarQuestions = generate500GrammarQuestions();

// 專為文法測驗設計的「防重複題型桶抽取器」（保證 25 題題型完全不同）
window.getDiverseGrammarQuiz = function(count = 25) {
  const pool = window.rawGrammarQuestions || generate500GrammarQuestions();
  
  const buckets = {};
  pool.forEach(q => {
    if (!buckets[q.typeTag]) buckets[q.typeTag] = [];
    buckets[q.typeTag].push(q);
  });

  const availableTags = Object.keys(buckets);
  const shuffledTags = localShuffle(availableTags);
  const selectedQuiz = [];

  for (let i = 0; i < count && i < shuffledTags.length; i++) {
    const tag = shuffledTags[i];
    const candidateList = buckets[tag];
    const randomPick = candidateList[Math.floor(Math.random() * candidateList.length)];
    selectedQuiz.push(randomPick);
  }

  return localShuffle(selectedQuiz);
};