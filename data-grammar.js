/**
 * ===================================================================
 * @file data-grammar.js
 * @description 文法 500 題生成引擎 (修正拼字錯誤與不規則複數自然語境)
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

  // 擴充進行式單數主詞與動作池 (4種情境)
  const dynamicProgressiveSingularPool = [
    { subject: "The baby", actIng: "crying", actS: "cries", actBase: "cry", label: "嬰兒正在哭泣" },
    { subject: "The puppy", actIng: "sleeping", actS: "sleeps", actBase: "sleep", label: "小狗正在睡覺" },
    { subject: "The singer", actIng: "singing", actS: "sings", actBase: "sing", label: "歌手正在唱歌" },
    { subject: "The kitten", actIng: "playing", actS: "plays", actBase: "play", label: "小貓正在玩耍" }
  ];

  // 修正 4：否定祈使句場景池 (定義明確動詞變化，避免 makeing/runing 拼字錯誤與 No V-ing 標語爭議)
  const dynamicImperativePool = [
    { promptSuffix: "loud noise here. People are studying inside.", verb: "make", verbS: "Makes", toVerb: "To make", correct: "Don't make", hint: "勸阻製造噪音" },
    { promptSuffix: "in the hallway! It is very dangerous.", verb: "run", verbS: "Runs", toVerb: "To run", correct: "Don't run", hint: "勸阻在走廊奔跑" },
    { promptSuffix: "snacks during the English class.", verb: "eat", verbS: "Eats", toVerb: "To eat", correct: "Don't eat", hint: "勸阻課堂飲食" },
    { promptSuffix: "trash on the ground in the park.", verb: "throw", verbS: "Throws", toVerb: "To throw", correct: "Don't throw", hint: "勸阻亂丟垃圾" }
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

  // 修正 5：為不規則複數名詞配備各自合乎邏輯的自然語境句
  const personIrregularNouns = [
    { sing: "child", plur: "children", hint: "小孩", prompt: "There are three ______ playing happily in the park." },
    { sing: "man", plur: "men", hint: "男人", prompt: "There are two tall ______ talking in front of the bank." },
    { sing: "woman", plur: "women", hint: "女人", prompt: "Three ______ are shopping together in the supermarket." },
    { sing: "tooth", plur: "teeth", hint: "牙齒", prompt: "The cute baby has two new white ______ now." },
    { sing: "foot", plur: "feet", hint: "腳", prompt: "We stand and walk with our two ______ every day." }
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
    const k = Math.floor(i / 30);

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
    const irr = personIrregularNouns[k % personIrregularNouns.length];
    const act = activities[i % activities.length];
    const progSing = dynamicProgressiveSingularPool[k % dynamicProgressiveSingularPool.length];
    const imper = dynamicImperativePool[k % dynamicImperativePool.length];
    const p1 = streetPlaces[i % streetPlaces.length];
    const p2 = streetPlaces[(i + 2) % streetPlaces.length];
    const p3 = streetPlaces[(i + 4) % streetPlaces.length];

    let item = { typeTag: type, module: "grammar", dynamicTips: {} };

    switch (type) {
      case 0:
        item.part = "時間介系詞：具體鐘點 (at)";
        item.prompt = `${vhc} usually arrives at the station ______ ${tm}.`;
        item.options = ["at", "on", "in", "for"];
        item.ans = 0;
        item.dynamicTips = {
          "on": "on 通常用於『特定日期或星期』，不可用於具體時間點。",
          "in": "in 通常用於『月份、季節、年份』或長時段。",
          "for": "for 後方接『一段時間長度』（如 for two hours）。"
        };
        item.tip = `💡【鐘點時刻】具體幾點幾分（如 ${tm}）前面必須搭配介系詞 at。`;
        break;

      case 1:
        item.part = "時間介系詞：特定星期與早中晚 (on)";
        item.prompt = `Our school will have an English contest ______ ${dy} morning.`;
        item.options = ["on", "at", "in", "with"];
        item.ans = 0;
        item.dynamicTips = {
          "at": "at 只用於具體時刻（at 8:00）或特定短暫時間（at night/noon）。",
          "in": `若單純寫 in the morning 可用 in，但前面冠上特定星期（${dy} morning）必須改用 on！`,
          "with": "with 表示『伴隨』或『使用工具』，不可當作時間介系詞。"
        };
        item.tip = `💡【特定日子】特定星期或某一天的早晨/下午（如 ${dy} morning），一律用 on。`;
        break;

      case 2:
        item.part = "時間介系詞：月份與季節 (in)";
        item.prompt = `Many families love to travel abroad ______ ${sea}.`;
        item.options = ["in", "at", "on", "to"];
        item.ans = 0;
        item.dynamicTips = {
          "at": "at 只用於特定鐘點，不能用於較長的時間區間（季節或月份）。",
          "on": "on 用於具體特定某一天（如 on July 4th），單純季節不可用 on。",
          "to": "to 表示方向或到達點，不能當作季節的時間介系詞。"
        };
        item.tip = `💡【月份季節】在某個季節（如 ${sea}）或月份（in ${mo}），使用介系詞 in。`;
        break;

      case 3:
        item.part = "現在進行式：提示詞與正在發生 (is + V-ing)";
        item.prompt = `Listen! ${progSing.subject} ______ in the room. Please shut the door.`;
        item.options = [`is ${progSing.actIng}`, progSing.actS, progSing.actIng, progSing.actBase];
        item.ans = 0;
        item.dynamicTips = {
          [progSing.actS]: `${progSing.actS} 是現在簡單式（表常態習慣），但 Listen! 代表此時此刻正在發生！`,
          [progSing.actIng]: "現在進行式必須包含 be 動詞，缺少 is 不能單獨使用 V-ing。",
          [progSing.actBase]: "原形動詞不能直接作第三人稱單數主詞的謂語，且無法表達進行中。"
        };
        item.tip = `💡【現在進行式】以 Look! 或 Listen! 開頭代表當前正在發生，單數主詞搭配 is + V-ing（${progSing.label}）。`;
        break;

      case 4:
        item.part = "現在進行式：複數主詞 (are + V-ing)";
        item.prompt = `Look over there! ${pp.name} ______ right now.`;
        item.options = [`are ${act.ing}`, `is ${act.ing}`, act.s, act.base];
        item.ans = 0;
        item.dynamicTips = {
          [`is ${act.ing}`]: `主詞 ${pp.name} 是複數代名詞（They），be 動詞必須用 are，不能用單數 is！`,
          [act.s]: "句尾有 right now 表示正在進行，不可使用現在簡單式第三人稱單數形。",
          [act.base]: "進行式必須搭配 be 動詞 + V-ing，不能直接使用原形動詞。"
        };
        item.tip = `💡【複數進行式】主詞 ${pp.name} 是複數，現在進行式必須搭配 are + V-ing。`;
        break;

      case 5:
        item.part = "不可數名詞數量疑問詞 (How much)";
        item.prompt = `How ______ ${cookUncnt.word} does ${sp.name} need for cooking?`;
        item.options = ["much", "many", "any", "little"];
        item.ans = 0;
        item.dynamicTips = {
          "many": `${cookUncnt.word}（${cookUncnt.hint}）是不可數名詞，詢問數量不可用 many。`,
          "any": "any 不能與 How 組成詢問數量的特殊疑問詞片語。",
          "little": "How little 不是用來詢問需求數量的標準句型。"
        };
        item.tip = `💡【不可數名詞】${cookUncnt.word}（${cookUncnt.hint}）為不可數名詞，詢問數量一律用 How much。`;
        break;

      case 6:
        item.part = "可數名詞數量疑問詞 (How many)";
        item.prompt = `How ______ ${cnt.plural} can you see on the table?`;
        item.options = ["many", "much", "any", "little"];
        item.ans = 0;
        item.dynamicTips = {
          "much": `${cnt.plural} 是可數名詞複數，How much 只能修飾不可數名詞。`,
          "any": "any 不能接在 How 後面詢問數量。",
          "little": "little 用於修飾不可數名詞，且不能接在 How 後面問數量。"
        };
        item.tip = `💡【可數複數名詞】${cnt.plural}（${cnt.hint}）是可數名詞複數，詢問數量使用 How many。`;
        break;

      case 7:
        item.part = "助動詞問句：還原原形動詞 (Does ... V)";
        item.prompt = `Does ${sp.name} ______ every day after school?`;
        item.options = [act.base, act.s, act.ing, act.past];
        item.ans = 0;
        item.dynamicTips = {
          [act.s]: "問句句首已經有助動詞 Does 承擔第三人稱單數變化，後方動詞必須還原為原形！",
          [act.ing]: "本句為 Does 開頭的現在簡單式問句，非進行式，不可加 ing。",
          [act.past]: "問句開頭為現在式助動詞 Does，動詞不可使用過去式。"
        };
        item.tip = "💡【助動詞還原】問句開頭已有助動詞 Does，後方動詞必須還原為原形動詞。";
        break;

      case 8:
        item.part = "現在簡單式：第三人稱單數動詞加 s/es";
        item.prompt = `${sp.name} always ______ on weekends.`;
        item.options = [act.s, act.base, act.ing, `is ${act.ing}`];
        item.ans = 0;
        item.dynamicTips = {
          [act.base]: `主詞 ${sp.name} 為第三人稱單數，一般動詞現在式字尾必須加上 s 或 es。`,
          [act.ing]: "前面沒有 be 動詞，動詞不能單獨以 V-ing 形式存在。",
          [`is ${act.ing}`]: "always 表規律頻率與日常習慣，通常搭配現在簡單式，不用現在進行式。"
        };
        item.tip = `💡【三單現在式】主詞 ${sp.name} 為第三人稱單數，一般動詞必須字尾加 s 或 es。`;
        break;

      case 9:
        item.part = "頻率副詞位置：be 動詞之後、一般動詞之前";
        item.prompt = `${sp.name} is a polite student. ${sp.pron} is ______ rude to teachers.`;
        item.options = ["never", "always", "sometimes", "usually"];
        item.ans = 0;
        item.dynamicTips = {
          "always": "文意矛盾！前句已說明主角非常有禮貌（polite），不可能『總是（always）』對老師無禮。",
          "sometimes": "前句強調主角是有禮貌的學生，因此不能選『有時（sometimes）』粗魯。",
          "usually": "usually 代表『通常（80%）』，與前文『有禮貌的學生』文意直接衝突。"
        };
        item.tip = "💡【頻率副詞位置】從不（never）表示 0%，且必須放在 be 動詞之後、一般動詞之前。";
        break;

      case 10:
        item.part = "空間介系詞：在兩者之間 (between A and B)";
        item.prompt = `${p1.charAt(0).toUpperCase() + p1.slice(1)} is ______ ${p2} and ${p3}.`;
        item.options = ["between", "next to", "behind", "in front"];
        item.ans = 0;
        item.dynamicTips = {
          "next to": "next to 後面只接一個地點，不搭配 ... and ... 句型。",
          "behind": "behind（在...後面）只接單一參照物，不搭配 ... and ... 兩棟建築物。",
          "in front": "表位置應為 in front of，且同樣不搭配 ... and ... 句型。"
        };
        item.tip = "💡【空間介系詞】between ... and ... 為固定搭配，代表『在兩者之間』。";
        break;

      case 11:
        item.part = "否定祈使句：Don't + 原形動詞";
        item.prompt = `______ ${imper.promptSuffix}`;
        item.options = [imper.correct, `Not ${imper.verb}`, `Doesn't ${imper.verb}`, imper.toVerb];
        item.ans = 0;
        item.dynamicTips = {
          [`Not ${imper.verb}`]: "英文祈使句的否定形式必須使用助動詞 Don't 開頭，不能直接用 Not。",
          [`Doesn't ${imper.verb}`]: "祈使句的對象是聽話者（第二人稱 you），助動詞不可使用第三人稱單數的 Doesn't。",
          [imper.toVerb]: "不定詞 To + V 不能單獨在句首當作否定祈使句使用。"
        };
        item.tip = `💡【否定祈使句】${imper.hint}，句首使用 Don't + 原形動詞。`;
        break;

      case 12:
        item.part = "疑問詞：詢問所有權 (Whose)";
        item.prompt = `______ ${cnt.singular} is this on the sofa? It belongs to ${sp.name}.`;
        item.options = ["Whose", "Who", "Where", "Which"];
        item.ans = 0;
        item.dynamicTips = {
          "Who": "Who 是疑問代名詞『誰』，後面不能直接修飾名詞（需用所有格 Whose）。",
          "Where": "Where 詢問地點，但答句 belongs to（屬於某人）明確表示在回答所有權。",
          "Which": "Which 表示『哪一個』，但本題是在詢問物品物主是誰。"
        };
        item.tip = "💡【所有格疑問詞】詢問物品是誰的，使用 Whose + 名詞。";
        break;

      case 13:
        item.part = "情態助動詞：can 後接原形動詞";
        item.prompt = `${sp.name} can ______ very well, but ${sp.pron.toLowerCase()} cannot drive a car.`;
        item.options = [act.base, act.s, act.ing, act.past];
        item.ans = 0;
        item.dynamicTips = {
          [act.s]: "情態助動詞 can 後方動詞一律原形，即使主詞是第三人稱單數也絕對不可加 s！",
          [act.ing]: "can 後方不可直接接 V-ing 動名詞或分詞。",
          [act.past]: "can 本身已是現在式助動詞，後方動詞絕對不能使用過去式。"
        };
        item.tip = "💡【情態助動詞】助動詞 can / cannot 後面一律接原形動詞。";
        break;

      case 14:
        item.part = "義務情態：第三人稱單數 have to 變化 (has to)";
        item.prompt = `${sp.name} ______ finish the homework before watching TV.`;
        item.options = ["has to", "have to", "is having", "having to"];
        item.ans = 0;
        item.dynamicTips = {
          "have to": `主詞 ${sp.name} 是第三人稱單數，have 必須變化為 has to！`,
          "is having": "have to 表『義務/必須』時為靜態情態用法，不可改為現在進行式 is having。",
          "having to": "缺少主要 be 動詞或助動詞，不能直接當作句子的主要謂語。"
        };
        item.tip = `💡【三單 has to】主詞 ${sp.name} 為單數，表示『必須』要用 has to + 原形動詞。`;
        break;

      case 15:
        item.part = "不規則名詞複數變化";
        item.prompt = irr.prompt;
        item.options = [irr.plur, irr.sing, `${irr.sing}s`, `${irr.plur}s`];
        item.ans = 0;
        item.dynamicTips = {
          [irr.sing]: `前面有複數數量詞（two / three），不可使用單數形 ${irr.sing}。`,
          [`${irr.sing}s`]: `${irr.sing} 的複數是不規則變化（${irr.plur}），絕對不能直接加 s！`,
          [`${irr.plur}s`]: `${irr.plur} 自身已經是不規則複數名詞，不可重複在字尾加 s。`
        };
        item.tip = `💡【不規則複數】${irr.sing}（${irr.hint}）的複數形是不規則變化 ${irr.plur}，不可隨便加 s。`;
        break;

      case 16:
        item.part = "量詞片語：不可數名詞計量";
        item.prompt = `Mom bought two ______ ${btlUncnt.word} from the supermarket.`;
        item.options = ["bottles of", "bottle of", "bottles", "bottle"];
        item.ans = 0;
        item.dynamicTips = {
          "bottle of": "前面數量詞是 two，容器量詞 bottle 必須加 s 變為複數 bottles of！",
          "bottles": "量詞後面連接不可數名詞時，中間缺少了介系詞 of。",
          "bottle": "數量為 two 時，單數 bottle 與缺少介系詞 of 皆屬語病。"
        };
        item.tip = `💡【不可數計量】不可數名詞前面加上量詞時，複數要加在容器量詞上（如 bottles of）。`;
        break;

      case 17:
        item.part = "過去簡單式：過去時間副詞 (yesterday / ago)";
        item.prompt = `${sp.name} ______ yesterday afternoon.`;
        item.options = [act.past, act.base, act.s, act.ing];
        item.ans = 0;
        item.dynamicTips = {
          [act.base]: "句子含有 yesterday（昨天），時態為過去式，不能使用現在式原形動詞。",
          [act.s]: "動詞字尾加 s 是現在簡單式，不符合過去時間副詞 yesterday 的情境。",
          [act.ing]: "缺少過去式 be 動詞（was），V-ing 不能單獨充當過去式述語。"
        };
        item.tip = "💡【過去簡單式】句子含有 yesterday 等過去時間副詞，動詞必須使用過去式。";
        break;

      case 18:
        item.part = "過去式助動詞問句：Did ... 原形動詞";
        item.prompt = `Did you ______ last night? Yes, I did.`;
        item.options = [act.base, act.past, act.s, act.ing];
        item.ans = 0;
        item.dynamicTips = {
          [act.past]: "問句開頭已有過去式助動詞 Did，後方主要動詞必須還原為原形動詞！",
          [act.s]: "助動詞 Did 後方一律接原形動詞，不可加 s。",
          [act.ing]: "本句為 Did 帶領的過去簡單式問句，非進行式，不能接 V-ing。"
        };
        item.tip = "💡【過去助動詞】問句有助動詞 Did，後面動詞必須還原為原形動詞。";
        break;

      case 19:
        item.part = "受格代名詞：置於動詞或介系詞後";
        item.prompt = `The teacher is talking to ______. Please listen carefully.`;
        item.options = ["us", "we", "our", "ours"];
        item.ans = 0;
        item.dynamicTips = {
          "we": "we 是主格代名詞，置於介系詞 to 後方必須使用受格 us！",
          "our": "our 是所有格代名詞（我們的），後方必須接名詞。",
          "ours": "ours 是所有格代名詞（我們的東西），置於此處文意不通。"
        };
        item.tip = "💡【受格代名詞】在動詞或介系詞（to）後面，代名詞必須使用受格（us）。";
        break;

      case 20:
        item.part = "存在句：單複數與不可數名詞判斷";
        item.prompt = `There ______ some milk and two apples on the kitchen table.`;
        item.options = ["is", "are", "have", "has"];
        item.ans = 0;
        item.dynamicTips = {
          "are": "存在句 There is/are 採就近原則，最靠近的第一個名詞 milk 是不可數名詞，必須使用 is！",
          "have": "英文中不可將 There have 混用為存在句（There is/are 表『有』）。",
          "has": "There 後方不可接 has 表存在句。"
        };
        item.tip = "💡【存在句就近原則】There is/are 依照最靠近 be 動詞的第一個名詞（milk 不可數）決定使用 is。";
        break;

      case 21:
        item.part = "存在句否定：Any 與複數/不可數搭配";
        item.prompt = `There aren't ______ pictures on the bedroom wall.`;
        item.options = ["any", "some", "a", "one"];
        item.ans = 0;
        item.dynamicTips = {
          "some": "some 通常用於肯定句；在否定句（aren't）中修飾名詞通常改用 any。",
          "a": "pictures 是複數名詞，不能搭配單數冠詞 a。",
          "one": "one 代表單數，不能修飾後方的複數名詞 pictures。"
        };
        item.tip = "💡【否定句 any】在否定句（aren't）中修飾複數名詞，通常使用 any。";
        break;

      case 22:
        item.part = "連貫連接詞：因果關係 (because)";
        item.prompt = `Sally is very sad ______ her parents cannot come to her birthday party.`;
        item.options = ["because", "so", "but", "although"];
        item.ans = 0;
        item.dynamicTips = {
          "so": "so 代表『所以』，後方接結果；本題後方句子是導致難過的『原因』，應使用 because。",
          "but": "but 表轉折對比，無法表達後句為前句原因的因果關係。",
          "although": "although 代表『雖然』，放入句中語意邏輯不符。"
        };
        item.tip = "💡【連接詞 because】後方子句為原因（父母無法前來），連接詞使用 because。";
        break;

      case 23:
        item.part = "轉折連接詞：語氣對比 (but)";
        item.prompt = `Frank can play the guitar, ______ he cannot drive a car.`;
        item.options = ["but", "so", "because", "or"];
        item.ans = 0;
        item.dynamicTips = {
          "so": "前後兩句並非因果推論（會彈吉他不會導致不會開車），不能用 so。",
          "because": "後句並非前句的原因，不能使用 because。",
          "or": "or 代表『或者/否則』，無法表達前後能力的語氣對比轉折。"
        };
        item.tip = "💡【轉折詞 but】前後句語氣呈對比轉折（會彈吉他，但不會開車），使用 but。";
        break;

      case 24:
        item.part = "授與動詞：give something to someone";
        item.prompt = `Please give that storybook ______ me.`;
        item.options = ["to", "for", "with", "at"];
        item.ans = 0;
        item.dynamicTips = {
          "for": "give 的授與對象介系詞固定搭配 to（buy, make, cook 等動詞才搭配 for）。",
          "with": "with 代表『伴隨/和...一起』，不符合授與動詞將物品交給對象的句型。",
          "at": "at 代表定點，不能作為授與對象的介系詞。"
        };
        item.tip = "💡【授與動詞介系詞】give + 物品 + to + 對象，搭配介系詞 to。";
        break;

      case 25:
        item.part = "喜好動詞後接動名詞 (like + V-ing)";
        item.prompt = `Henry really likes ______ in the swimming pool in summer.`;
        item.options = ["swimming", "swims", "swam", "swimmed"];
        item.ans = 0;
        item.dynamicTips = {
          "swims": "like 後面接動詞必須用動名詞 V-ing 或不定詞 to V，不能直接接第三人稱單數動詞。",
          "swam": "like 後方不可接過去式動詞。",
          "swimmed": "swim 的過去式為 swam，且在 like 後方必須使用動名詞 swimming。"
        };
        item.tip = "💡【動名詞】like 後面接從事的休閒運動習慣時，通常搭配動名詞 V-ing（swimming）。";
        break;

      case 26:
        item.part = "疑問詞：詢問頻率 (How often)";
        item.prompt = `______ do you practice the piano? Twice a week.`;
        item.options = ["How often", "How many", "How much", "How long"];
        item.ans = 0;
        item.dynamicTips = {
          "How many": "How many 後方必須接可數名詞複數來詢問數量。",
          "How much": "How much 用於詢問價格或不可數名詞數量。",
          "How long": "How long 詢問的是時間持續了多久（如 for 2 hours），回答 Twice a week（一週兩次）是頻率！"
        };
        item.tip = "💡【頻率提問】回答為一週兩次（Twice a week），疑問詞必須使用 How often。";
        break;

      case 27:
        item.part = "肯定祈使句：原形動詞開頭";
        item.prompt = `______ the door quietly. The baby is sleeping.`;
        item.options = ["Shut", "Shuts", "Shutting", "To shut"];
        item.ans = 0;
        item.dynamicTips = {
          "Shuts": "祈使句給予指令時，句首必須直接使用原形動詞，不可加 s。",
          "Shutting": "V-ing 不能單獨放在句首當作指令祈使動詞。",
          "To shut": "不定詞 To V 不能單獨在句首作祈使動詞。"
        };
        item.tip = "💡【肯定祈使句】給予指令或請求，句首必須直接使用原形動詞。";
        break;

      case 28:
        item.part = "時間介系詞：整點與半點 (half past)";
        item.prompt = `It's 7:30. In English, we say it is ______ seven.`;
        item.options = ["half past", "a quarter to", "a quarter past", "twenty to"];
        item.ans = 0;
        item.dynamicTips = {
          "a quarter to": "a quarter to 代表『差15分到整點』，並非半點（30分）。",
          "a quarter past": "a quarter past 代表『過了15分（一刻鐘）』，即 7:15。",
          "twenty to": "twenty to 代表『差20分到整點』，即 6:40 或 7:40。"
        };
        item.tip = "💡【時間讀法】7:30 代表『過半個小時』，英文表達為 half past seven。";
        break;

      case 29:
      default:
        item.part = "助動詞簡答一致性 (Do/Does)";
        item.prompt = `Do you have to go to school on time? No, I ______.`;
        item.options = ["don't", "haven't", "can't", "am not"];
        item.ans = 0;
        item.dynamicTips = {
          "haven't": "have to 是一般動詞片語，問句為 Do you 開頭，否定簡答一律用 don't，不可用 haven't！",
          "can't": "問句並非 Can you 開頭，簡答不可使用 can't。",
          "am not": "問句並非 Are you 開頭，簡答不可使用 be 動詞 am not。"
        };
        item.tip = "💡【助動詞簡答】一般動詞問句 Do you have to...，否定簡答一律用 No, I don't。";
        break;
    }

    item.qId = generateQuestionHash("g500_v9_" + i + "_" + item.prompt);
    generated.push(item);
  }

  return generated;
}

window.rawGrammarQuestions = generate500GrammarQuestions();

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
    selectedQuiz.push(candidateList[Math.floor(Math.random() * candidateList.length)]);
  }

  return localShuffle(selectedQuiz);
};