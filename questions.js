/**
 * ===================================================================
 * @file questions.js
 * @description 格蘭英語 B 級全方位題庫 (30大文法矩陣深度擴充 + 去重抽題版)
 * @version 9.0.0
 * ===================================================================
 */

// 輕量 Hash 產生器：為題目產生唯一 qId
function generateQuestionHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return "q_" + Math.abs(hash).toString(36);
}

// 陣列洗牌工具
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

// 動態時鐘 SVG 生成器
function generateClockSvg(hour, minute) {
  const minuteAngle = minute * 6;
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  
  const mRad = ((minuteAngle - 90) * Math.PI) / 180;
  const hRad = ((hourAngle - 90) * Math.PI) / 180;

  const mx = 150 + 60 * Math.cos(mRad);
  const my = 100 + 60 * Math.sin(mRad);
  const hx = 150 + 40 * Math.cos(hRad);
  const hy = 100 + 40 * Math.sin(hRad);

  return `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f8fafc"/>
    <circle cx="150" cy="100" r="75" fill="#ffffff" stroke="#3b82f6" stroke-width="6"/>
    <text x="150" y="42" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">12</text>
    <text x="212" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">3</text>
    <text x="150" y="166" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">6</text>
    <text x="88" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">9</text>
    <line x1="150" y1="100" x2="${mx}" y2="${my}" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
    <line x1="150" y1="100" x2="${hx}" y2="${hy}" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="100" r="7" fill="#1e293b"/>
  </svg>`;
}

// 動態街景地圖 SVG 生成器
function generateMapSvg(centerPlace, leftPlace, rightPlace) {
  return `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#ecfdf5"/>
    <rect x="15" y="65" width="80" height="85" fill="#94a3b8" rx="6"/>
    <text x="55" y="112" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">${leftPlace}</text>
    <rect x="105" y="65" width="90" height="85" fill="#0284c7" rx="6"/>
    <text x="150" y="112" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">${centerPlace}</text>
    <rect x="205" y="65" width="80" height="85" fill="#f59e0b" rx="6"/>
    <text x="245" y="112" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">${rightPlace}</text>
    <line x1="10" y1="165" x2="290" y2="165" stroke="#cbd5e1" stroke-width="4"/>
    <text x="150" y="42" font-size="13" font-weight="bold" fill="#0f766e" text-anchor="middle">STREET MAP VIEW</text>
  </svg>`;
}

// 靜態真題插圖
window.p1SvgImages = {
  q1: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#e0f2fe"/><rect x="30" y="130" width="240" height="70" fill="#94a3b8" rx="8"/><ellipse cx="150" cy="140" rx="45" ry="16" fill="#cbd5e1"/><circle cx="150" cy="65" r="28" fill="#fed7aa"/><circle cx="142" cy="62" r="3" fill="#1e293b"/><circle cx="158" cy="62" r="3" fill="#1e293b"/><rect x="110" y="93" width="80" height="40" fill="#f472b6" rx="10"/><rect x="152" y="71" width="38" height="6" fill="#0284c7" rx="3" transform="rotate(-10 152 71)"/><circle cx="142" cy="71" r="4" fill="#ffffff" opacity="0.8"/></svg>`,
  q2: generateClockSvg(12, 0),
  q3: generateClockSvg(10, 45),
  q4: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ecfdf5"/><rect x="40" y="25" width="220" height="150" fill="#1e293b" rx="12"/><circle cx="85" cy="70" r="18" fill="#ffffff"/><text x="115" y="76" font-size="16" font-weight="bold" fill="#38bdf8">BASEBALL</text><text x="80" y="138" font-size="15" fill="#f8fafc">START TIME:</text><text x="180" y="142" font-size="22" font-weight="bold" fill="#facc15">9:30</text></svg>`,
  q5: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fdf4ff"/><rect x="30" y="140" width="240" height="15" fill="#a16207" rx="3"/><rect x="85" y="45" width="130" height="85" fill="#1e293b" rx="6"/><rect x="95" y="53" width="110" height="69" fill="#38bdf8" rx="4"/><rect x="135" y="130" width="30" height="10" fill="#334155"/></svg>`,
  q6: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f8fafc"/><rect x="50" y="20" width="200" height="160" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="3"/><rect x="50" y="20" width="200" height="35" fill="#3b82f6" rx="6"/><text x="150" y="44" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">YEAR PLANNER</text><text x="75" y="85" font-size="13" font-weight="bold" fill="#334155">Guitar Practice:</text><text x="75" y="115" font-size="14" fill="#dc2626" font-weight="bold">● Only 1 time / year</text><text x="150" y="155" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">FREQUENCY: RARELY (10%)</text></svg>`,
  q7: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ecfdf5"/><polygon points="20,180 280,180 250,90 50,90" fill="#fed7aa" stroke="#f97316" stroke-width="2"/><rect x="65" y="80" width="28" height="35" fill="#ef4444" rx="3"/><ellipse cx="150" cy="115" rx="36" ry="14" fill="#f59e0b"/><rect x="120" y="111" width="60" height="8" fill="#b91c1c" rx="4"/><circle cx="215" cy="110" r="14" fill="#d97706"/><circle cx="238" cy="122" r="12" fill="#d97706"/></svg>`,
  q8: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#eff6ff"/><line x1="80" y1="60" x2="50" y2="180" stroke="#78350f" stroke-width="4"/><line x1="120" y1="60" x2="150" y2="180" stroke="#78350f" stroke-width="4"/><rect x="55" y="60" width="90" height="65" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/><circle cx="200" cy="65" r="20" fill="#fed7aa"/><rect x="185" y="85" width="30" height="60" fill="#a855f7" rx="8"/><line x1="185" y1="95" x2="148" y2="85" stroke="#fed7aa" stroke-width="5"/></svg>`,
  q9: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fef2f2"/><circle cx="150" cy="95" r="65" fill="#ffffff" stroke="#dc2626" stroke-width="12"/><line x1="104" y1="50" x2="196" y2="140" stroke="#dc2626" stroke-width="12"/><rect x="105" y="90" width="65" height="12" fill="#ffffff" stroke="#94a3b8"/><rect x="165" y="90" width="20" height="12" fill="#d97706"/><text x="150" y="182" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">NO SMOKING</text></svg>`,
  q10: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fffbeb"/><ellipse cx="150" cy="115" rx="100" ry="45" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/><circle cx="130" cy="110" r="10" fill="#eab308"/><circle cx="145" cy="105" r="9" fill="#facc15"/><circle cx="160" cy="110" r="11" fill="#eab308"/><circle cx="138" cy="120" r="10" fill="#facc15"/><circle cx="154" cy="122" r="10" fill="#eab308"/><text x="150" y="55" font-size="16" font-weight="bold" fill="#854d0e" text-anchor="middle">Sweet Corn on the Plate</text></svg>`,
  q11: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#e0e7ff"/><circle cx="135" cy="75" r="20" fill="#fed7aa"/><line x1="135" y1="95" x2="145" y2="135" stroke="#4f46e5" stroke-width="14" stroke-linecap="round"/><line x1="145" y1="135" x2="145" y2="185" stroke="#1e1b4b" stroke-width="8" stroke-linecap="round"/><path d="M145,135 Q185,115 165,70 Q150,65 140,70" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="140" cy="70" r="5" fill="#ef4444"/></svg>`
};

window.p2SvgImages = {
  q1: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f8fafc"/><rect x="40" y="50" width="220" height="40" fill="#78350f" rx="6"/><rect x="40" y="90" width="220" height="80" fill="#38bdf8" rx="4"/><rect x="60" y="75" width="75" height="35" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="8"/><rect x="165" y="75" width="75" height="35" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="8"/><text x="150" y="185" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">Two Pillows on the Bed</text></svg>`,
  q2: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f1f5f9"/><rect x="230" y="70" width="45" height="100" fill="#64748b" rx="4"/><circle cx="185" cy="85" r="14" fill="#fed7aa"/><rect x="175" y="100" width="20" height="50" fill="#3b82f6" rx="4"/><circle cx="130" cy="85" r="14" fill="#fed7aa"/><rect x="120" y="100" width="20" height="50" fill="#ef4444" rx="4"/><circle cx="75" cy="85" r="14" fill="#fed7aa"/><rect x="65" y="100" width="20" height="50" fill="#10b981" rx="4"/><text x="135" y="45" font-size="15" font-weight="bold" fill="#334155" text-anchor="middle">Waiting in line</text></svg>`,
  q3: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ecfdf5"/><rect x="30" y="60" width="115" height="95" fill="#0284c7" rx="8"/><text x="87" y="100" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">SUPER-</text><text x="87" y="120" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">MARKET</text><rect x="155" y="60" width="115" height="95" fill="#f59e0b" rx="8"/><text x="212" y="100" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">POST</text><text x="212" y="120" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">OFFICE</text><text x="150" y="40" font-size="13" font-weight="bold" fill="#0f766e" text-anchor="middle">Next to each other</text></svg>`,
  q4: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fef2f2"/><rect x="60" y="55" width="90" height="65" fill="#334155" rx="4"/><rect x="68" y="63" width="74" height="49" fill="#0284c7"/><text x="105" y="96" font-size="28" font-weight="bold" fill="#ef4444" text-anchor="middle">?</text><circle cx="205" cy="85" r="22" fill="#fed7aa"/><line x1="190" y1="120" x2="190" y2="85" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"/><rect x="185" y="115" width="40" height="45" fill="#ec4899" rx="6"/></svg>`,
  q5: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fdf4ff"/><circle cx="150" cy="85" r="38" fill="#fed7aa"/><path d="M120,60 Q150,40 180,60" fill="#92400e"/><ellipse cx="150" cy="98" rx="14" ry="18" fill="#991b1b"/><text x="195" y="90" font-size="18" font-weight="bold" fill="#86198f">Yawn~</text></svg>`,
  q6: generateClockSvg(4, 45),
  q7: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#eff6ff"/><rect x="25" y="80" width="90" height="70" fill="#38bdf8" rx="4"/><rect x="140" y="90" width="130" height="50" fill="#f59e0b" rx="8"/><rect x="145" y="65" width="120" height="35" fill="#d97706" rx="6"/><text x="150" y="180" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Sofa in the Bedroom</text></svg>`,
  q8: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fef2f2"/><circle cx="150" cy="95" r="65" fill="#ffffff" stroke="#dc2626" stroke-width="12"/><line x1="104" y1="50" x2="196" y2="140" stroke="#dc2626" stroke-width="12"/><rect x="105" y="90" width="65" height="12" fill="#ffffff" stroke="#94a3b8"/><rect x="165" y="90" width="20" height="12" fill="#d97706"/><text x="150" y="182" font-size="15" font-weight="bold" fill="#991b1b" text-anchor="middle">NO SMOKING IN RESTAURANT</text></svg>`,
  q9: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fdf4ff"/><rect x="30" y="130" width="240" height="15" fill="#78350f" rx="3"/><rect x="130" y="110" width="60" height="30" fill="#ffffff" stroke="#cbd5e1" rx="2"/><circle cx="95" cy="75" r="24" fill="#fed7aa"/><rect x="70" y="100" width="50" height="40" fill="#0284c7" rx="8"/><line x1="105" y1="110" x2="145" y2="118" stroke="#fed7aa" stroke-width="5"/></svg>`,
  q10: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fffbeb"/><path d="M80,110 Q150,180 220,110 Z" fill="#dc2626"/><path d="M90,105 Q120,95 150,110 Q180,95 210,105" stroke="#facc15" stroke-width="5" fill="none"/><line x1="160" y1="50" x2="135" y2="105" stroke="#78350f" stroke-width="3"/><line x1="170" y1="50" x2="140" y2="105" stroke="#78350f" stroke-width="3"/></svg>`
};

// =======================================================================
// 1. 文法 500 題生成引擎 (30 大考點深度矩陣 + 多樣性詞庫)
// =======================================================================
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
    { name: "The English teacher", pron: "She", obj: "her" },
    { name: "Uncle David", pron: "He", obj: "him" },
    { name: "Maggie", pron: "She", obj: "her" }
  ];

  const pluralPeople = [
    { name: "The boys", pron: "They", obj: "them" },
    { name: "My parents", pron: "They", obj: "them" },
    { name: "Lucy and Frank", pron: "They", obj: "them" },
    { name: "The students", pron: "They", obj: "them" }
  ];

  const uncountables = [
    { word: "sugar", hint: "糖", container: "a spoon of" },
    { word: "milk", hint: "牛奶", container: "a glass of" },
    { word: "shampoo", hint: "洗髮精", container: "a bottle of" },
    { word: "money", hint: "金錢", container: "a lot of" },
    { word: "soup", hint: "熱湯", container: "a bowl of" },
    { word: "water", hint: "水", container: "a cup of" }
  ];

  const countables = [
    { singular: "pillow", plural: "pillows", hint: "枕頭" },
    { singular: "blanket", plural: "blankets", hint: "毛毯" },
    { singular: "hanger", plural: "hangers", hint: "衣架" },
    { singular: "cookie", plural: "cookies", hint: "餅乾" },
    { singular: "sandwich", plural: "sandwiches", hint: "三明治" },
    { singular: "marker", plural: "markers", hint: "彩色筆" }
  ];

  const irregularNouns = [
    { sing: "child", plur: "children", hint: "小孩" },
    { sing: "tooth", plur: "teeth", hint: "牙齒" },
    { sing: "foot", plur: "feet", hint: "腳" },
    { sing: "man", plur: "men", hint: "男人" }
  ];

  const activities = [
    { base: "brush teeth", ing: "brushing teeth", s: "brushes teeth", past: "brushed teeth" },
    { base: "play basketball", ing: "playing basketball", s: "plays basketball", past: "played basketball" },
    { base: "clean the room", ing: "cleaning the room", s: "cleans the room", past: "cleaned the room" },
    { base: "listen to music", ing: "listening to music", s: "listens to music", past: "listened to music" },
    { base: "wash dishes", ing: "washing dishes", s: "washes dishes", past: "washed dishes" },
    { base: "watch television", ing: "watching television", s: "watches television", past: "watched television" }
  ];

  const places = [
    "the supermarket", "the library", "the hospital", "the bakery", 
    "the post office", "the bank", "the dining room", "the kitchen"
  ];

  const generated = [];

  for (let i = 0; i < 500; i++) {
    const type = i % 30; // 擴展為 30 大考點
    const vhc = vehicles[i % vehicles.length];
    const tm = times[i % times.length];
    const dy = days[i % days.length];
    const sea = seasons[i % seasons.length];
    const mo = months[i % months.length];
    const sp = singlePeople[i % singlePeople.length];
    const pp = pluralPeople[i % pluralPeople.length];
    const uncnt = uncountables[i % uncountables.length];
    const cnt = countables[i % countables.length];
    const irr = irregularNouns[i % irregularNouns.length];
    const act = activities[i % activities.length];
    const p1 = places[i % places.length];
    const p2 = places[(i + 2) % places.length];
    const p3 = places[(i + 4) % places.length];

    let item = { typeTag: type };

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
        item.prompt = `How ______ ${uncnt.word} does ${sp.name} need for cooking?`;
        item.options = ["much", "many", "any", "little"];
        item.ans = 0;
        item.tip = `💡【不可數名詞】${uncnt.word}（${uncnt.hint}）為不可數名詞，詢問數量一律用 How much。`;
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
        item.prompt = `${sp.name} always ______ on weekends because ${sp.pron.toLowerCase()} is diligent.`;
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
        item.prompt = `There are three ______ playing happily in the garden.`;
        item.options = [irr.plur, irr.sing, `${irr.sing}s`, `${irr.plur}s`];
        item.ans = 0;
        item.tip = `💡【不規則複數】${irr.sing} 的複數形是不規則變化 ${irr.plur}，不可隨便加 s。`;
        break;

      case 16:
        item.part = "量詞片語：不可數名詞計量";
        item.prompt = `Mom bought two ______ ${uncnt.word} from the supermarket.`;
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

    item.qId = generateQuestionHash("g500_v4_" + i + "_" + item.prompt);
    generated.push(item);
  }

  return generated;
}

window.rawGrammarQuestions = generate500GrammarQuestions();

// 專為文法測驗設計的「防重複題型桶抽取器」（保證 25 題題型完全不同）
window.getDiverseGrammarQuiz = function(count = 25) {
  const pool = window.rawGrammarQuestions || generate500GrammarQuestions();
  
  // 按考點 typeTag 分組 (0 ~ 29)
  const buckets = {};
  pool.forEach(q => {
    if (!buckets[q.typeTag]) buckets[q.typeTag] = [];
    buckets[q.typeTag].push(q);
  });

  const availableTags = Object.keys(buckets);
  const shuffledTags = localShuffle(availableTags);
  const selectedQuiz = [];

  // 每個考點最多只抽 1 題，抽滿 count 題
  for (let i = 0; i < count && i < shuffledTags.length; i++) {
    const tag = shuffledTags[i];
    const candidateList = buckets[tag];
    const randomPick = candidateList[Math.floor(Math.random() * candidateList.length)];
    selectedQuiz.push(randomPick);
  }

  return localShuffle(selectedQuiz);
};

// =======================================================================
// 2. 聽力考點 500 題生成引擎 (隨機地圖與多樣化建築)
// =======================================================================
function generate500ListeningReviewQuestions() {
  const landmarks = [
    "SUPERMARKET", "HOSPITAL", "RESTAURANT", "LIBRARY", "BAKERY", 
    "POST OFFICE", "BANK", "POLICE STATION", "BOOKSTORE", "PARK"
  ];
  const names = ["Andy", "Julia", "Janice", "Henry", "Susan", "Tina", "Frank", "Stephen", "Lucy", "Jerry", "Maggie", "Kathy"];
  const locations = [
    { place: "in the kitchen", label: "廚房" },
    { place: "in the living room", label: "客廳" },
    { place: "in the bedroom", label: "臥室" },
    { place: "in the dining room", label: "飯廳" }
  ];
  const uncountables = [
    { word: "sugar", hint: "糖" },
    { word: "milk", hint: "牛奶" },
    { word: "shampoo", hint: "洗髮精" },
    { word: "money", hint: "錢" }
  ];
  const activities = [
    { base: "play the guitar", ing: "playing the guitar", third: "plays the guitar" },
    { base: "play the piano", ing: "playing the piano", third: "plays the piano" },
    { base: "play badminton", ing: "playing badminton", third: "plays badminton" },
    { base: "ride a bicycle", ing: "riding a bicycle", third: "rides a bicycle" }
  ];

  const generated = [];

  for (let i = 0; i < 500; i++) {
    const type = i % 6;
    const name1 = names[i % names.length];
    const loc = locations[i % locations.length];
    const uncnt = uncountables[i % uncountables.length];
    const act = activities[i % activities.length];
    const hour = (i % 11) + 1;
    const nextHour = hour + 1;

    const lShuffled = localShuffle(landmarks);
    const centerB = lShuffled[0];
    const leftB = lShuffled[1];
    const rightB = lShuffled[2];

    let qObj = {};
    switch (type) {
      case 0:
        qObj = {
          part: "【考點 1】時間辨析 (Quarter past)",
          prompt: "Question: Look at the clock. What time is it?",
          svgData: generateClockSvg(hour, 15),
          sceneHint: `時鐘短針指向 ${hour}，長針指向 3（即 ${hour}:15）。`,
          audioText: `Look at the clock and choose the best statement. Statement A: It's a quarter past ${hour}. Statement B: It's a quarter to ${hour}. Statement C: It's half past ${hour}.`,
          options: [`It's a quarter past ${hour}. (${hour}:15)`, `It's a quarter to ${hour}. (${hour - 1}:45)`, `It's half past ${hour}. (${hour}:30)`],
          ans: 0,
          tip: `💡【時間讀法】a quarter past ${hour} 代表『過了一刻鐘』，即 ${hour}:15。`
        };
        break;
      case 1:
        qObj = {
          part: "【考點 1】時間辨析 (Quarter to)",
          prompt: "Question: Look at the clock. What time is it?",
          svgData: generateClockSvg(hour, 45),
          sceneHint: `時鐘短針指向近 ${nextHour}，長針指向 9（即 ${hour}:45）。`,
          audioText: `Look at the clock and choose the best statement. Statement A: It's a quarter past ${hour}. Statement B: It's a quarter to ${nextHour}. Statement C: It's half past ${hour}.`,
          options: [`It's a quarter past ${hour}. (${hour}:15)`, `It's a quarter to ${nextHour}. (${hour}:45)`, `It's half past ${hour}. (${hour}:30)`],
          ans: 1,
          tip: `💡【時間讀法】a quarter to ${nextHour} 代表『差一刻鐘到 ${nextHour} 點』，即 ${hour}:45。`
        };
        break;
      case 2:
        qObj = {
          part: "【考點 2】位置介系詞 (Between 隨機街景)",
          prompt: `Question: Look at the map. Where is the ${centerB.toLowerCase()}?`,
          svgData: generateMapSvg(centerB, leftB, rightB),
          sceneHint: `地圖上，${centerB} 位於 ${leftB} 與 ${rightB} 的中間。`,
          audioText: `Look at the map. Where is the ${centerB.toLowerCase()}? Statement A: It is beside the park. Statement B: It is between the ${leftB.toLowerCase()} and the ${rightB.toLowerCase()}. Statement C: It is behind the school.`,
          options: [
            "It is beside the park.",
            `It is between the ${leftB.toLowerCase()} and the ${rightB.toLowerCase()}.`,
            "It is behind the school."
          ],
          ans: 1,
          tip: `💡【空間介系詞】between A and B 代表『在兩者之間』。圖中 ${centerB} 位於兩棟建築中間。`
        };
        break;
      case 3:
        qObj = {
          part: "【考點 4】疑問詞問答 (Where / 地點介系詞)",
          prompt: `Question: Where does ${name1} ${act.base}?`,
          audioText: `Where does ${name1} ${act.base}? A: He has a big bag. B: In the ${loc.label}. C: Yes, he does it every day.`,
          options: ["He has a big bag.", `He does it ${loc.place}.`, "Yes, he does it every day."],
          ans: 1,
          tip: "💡【地點問答】聽到 Where 提問，核心回答為具體空間介系詞片語。"
        };
        break;
      case 4:
        qObj = {
          part: "【考點 5】現在進行式 (What is ... doing?)",
          prompt: `Question: What is ${name1} doing right now?`,
          audioText: `What is ${name1} doing right now? A: She is ${act.ing}. B: She ${act.third} every Sunday. C: She can ${act.base}.`,
          options: [`She is ${act.ing}.`, `She ${act.third} every Sunday.`, `She can ${act.base}.`],
          ans: 0,
          tip: "💡【現在進行式】問句包含 is ... doing，回答必須使用主詞 + be動詞 + V-ing。"
        };
        break;
      case 5:
      default:
        qObj = {
          part: "【考點 6】數量疑問詞 (How much 不可數)",
          prompt: `Question: How much ${uncnt.word} do you need?`,
          audioText: `How much ${uncnt.word} do you need? A: Just a little. B: There are five. C: Not many.`,
          options: ["Just a little.", "There are five.", "Not many."],
          ans: 0,
          tip: `💡【不可數名詞數量】${uncnt.word} 為不可數名詞，使用 How much 提問，回答用 a little 或 much。`
        };
        break;
    }
    qObj.qId = generateQuestionHash("l500_v3_" + i + "_" + qObj.prompt);
    generated.push(qObj);
  }
  return generated;
}

window.rawReviewQuestions = generate500ListeningReviewQuestions();

// =======================================================================
// 3. 官方 450+ 基礎單字母庫 (含 category 分類)
// =======================================================================
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

  // 運動與休閒類 (sports)
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

  // 人物與親屬類 (people)
  { word: "parents", meaning: "父母親", category: "people", kk: "[ˋpɛrənts]", tip: "parents (父母親) KK: [ˋpɛrənts]" },
  { word: "grandparents", meaning: "祖父母", category: "people", kk: "[ˋgrænd͵pɛrənts]", tip: "grandparents (祖父母) KK: [ˋgrænd͵pɛrənts]" },
  { word: "neighbor", meaning: "鄰居", category: "people", kk: "[ˋnebɚ]", tip: "neighbor (鄰居) KK: [ˋnebɚ]" },
  { word: "police officer", meaning: "警察", category: "people", kk: "[pəˋlis ͵ɔfɪsɚ]", tip: "police officer (警察) KK: [pəˋlis ͵ɔfɪsɚ]" },

  // 特徵形容詞類 (adjectives)
  { word: "scary", meaning: "恐怖的", category: "adjectives", kk: "[ˋskɛrɪ]", tip: "scary (恐怖的) KK: [ˋskɛrɪ]" },
  { word: "thin", meaning: "瘦的 / 薄的", category: "adjectives", kk: "[θɪn]", tip: "thin (瘦的) KK: [θɪn]" },
  { word: "talented", meaning: "有天賦的", category: "adjectives", kk: "[ˋtæləntɪd]", tip: "talented (有天賦的) KK: [ˋtæləntɪd]" },
  { word: "difficult", meaning: "困難的", category: "adjectives", kk: "[ˋdɪfək!t]", tip: "difficult (困難的) KK: [ˋdɪfək!t]" },
  { word: "friendly", meaning: "友善的", category: "adjectives", kk: "[ˋfrɛndlɪ]", tip: "friendly (友善的) KK: [ˋfrɛndlɪ]" },

  // 時間與頻率類 (time)
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

// 單字動態生成引擎 (雙向題型 + 同類別干擾)
window.buildDynamicVocabQuiz = function(count, stageTitle) {
  const pool = Array.isArray(window.bLevelVocabMasterPool) && window.bLevelVocabMasterPool.length > 0 
    ? window.bLevelVocabMasterPool 
    : [];
  
  const poolShuffled = localShuffle(pool);
  const selectedTargets = poolShuffled.slice(0, Math.min(count, poolShuffled.length));

  return selectedTargets.map(function(target, idx) {
    let sameCategoryPool = pool.filter(item => item.category === target.category && item.word !== target.word);
    if (sameCategoryPool.length < 3) {
      sameCategoryPool = pool.filter(item => item.word !== target.word);
    }
    const distractors = localShuffle(sameCategoryPool).slice(0, 3);
    const combinedOptions = localShuffle([target].concat(distractors));
    const correctIdx = combinedOptions.findIndex(item => item.word === target.word);

    const isMeaningQuestion = (idx % 2 === 1);

    if (isMeaningQuestion) {
      return {
        qId: generateQuestionHash("vocab_meaning_" + target.word),
        part: stageTitle,
        prompt: `📖 請問單字【 ${target.word} 】的中文意思是？`,
        word: target.word,
        meaning: target.meaning,
        options: combinedOptions.map(item => item.meaning),
        meanings: combinedOptions.map(item => item.meaning),
        kkList: combinedOptions.map(item => item.kk),
        ans: correctIdx,
        audioText: target.word,
        tip: `💡 【${target.word}】${target.kk} 中文為：${target.meaning}`
      };
    } else {
      return {
        qId: generateQuestionHash("vocab_audio_" + target.word),
        part: stageTitle,
        prompt: "🎧 請聽發音，選出正確的單字：",
        word: target.word,
        meaning: target.meaning,
        options: combinedOptions.map(item => item.word),
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

// =======================================================================
// 4. Practice 1 真題資料庫
// =======================================================================
window.rawMockP1Data = [
  { part: "Part 1: Photographs", prompt: "Question 1", svgData: window.p1SvgImages.q1, sceneHint: "一位名叫 Julia 的小女孩正在洗手台前拿起牙刷刷牙。", audioText: "Look at the picture and choose the best answer. Statement A: Julia brushes her teeth. Statement B: Julia washes her face. Statement C: Julia's mother brushes her teeth.", options: ["Julia brushes her teeth.", "Julia washes her face.", "Julia's mother brushes her teeth."], ans: 0, tip: "💡【看圖選句】圖中小女孩手拿牙刷在刷牙（brushes her teeth），而不是洗臉（washes her face）。" },
  { part: "Part 1: Photographs", prompt: "Question 2", svgData: window.p1SvgImages.q2, sceneHint: "時鐘指向中午 12:00，Janice 正在餐桌享用午餐。", audioText: "Look at the picture and choose the best answer. Statement A: Janice drinks milk for breakfast. Statement B: Janice has lunch at noon. Statement C: Janice eats fruit for breakfast.", options: ["Janice drinks milk for breakfast.", "Janice has lunch at noon.", "Janice eats fruit for breakfast."], ans: 1, tip: "💡【看圖選句】時鐘指在 12:00 即中午（noon），因此 Janice has lunch at noon 為正確描述。" },
  { part: "Part 1: Photographs", prompt: "Question 3", svgData: window.p1SvgImages.q3, sceneHint: "時鐘上的短針指向 11 前方，長針指向 9（即 10 點 45 分，差一刻到 11 點）。", audioText: "Look at the picture and choose the best answer. Statement A: It's a quarter to 11. Statement B: It's a quarter past 10. Statement C: It's half past 10.", options: ["It's a quarter to 11.", "It's a quarter past 10.", "It's half past 10."], ans: 0, tip: "💡【時間陷阱】10:45 代表『差 15 分鐘到 11 點』，英文表達為 a quarter to 11。" },
  { part: "Part 1: Photographs", prompt: "Question 4", svgData: window.p1SvgImages.q4, sceneHint: "告示看板上寫著棒球比賽（Baseball Game），下方的時間顯示 9:30。", audioText: "Look at the picture and choose the best answer. Statement A: The basketball game starts at 9:30. Statement B: The baseball game starts at 9:30. Statement C: There is no baseball game today.", options: ["The basketball game starts at 9:30.", "The baseball game starts at 9:30.", "There is no baseball game today."], ans: 1, tip: "💡【看圖選句】告示牌上清楚寫著 BASEBALL（棒球），不是籃球（basketball）。" },
  { part: "Part 1: Photographs", prompt: "Question 5", svgData: window.p1SvgImages.q5, sceneHint: "客廳桌子上放著一台電視機，電視上面沒有其他雜物。", audioText: "Look at the picture and choose the best answer. Statement A: There is a television on the table. Statement B: There are some flowers on the TV. Statement C: There is a vase on the floor.", options: ["There is a television on the table.", "There are some flowers on the TV.", "There is a vase on the floor."], ans: 0, tip: "💡【看圖選句】桌上放著一台電視機（television on the table），圖中並無花朵或花瓶。" },
  { part: "Part 1: Photographs", prompt: "Question 6", svgData: window.p1SvgImages.q6, sceneHint: "Andy 的行事曆上吉他練習旁標註著很少出現的記號（極低頻率）。", audioText: "Look at the picture and choose the best answer. Statement A: Andy rarely plays the guitar. Statement B: Andy never goes to science class. Statement C: Andy always goes to English class.", options: ["Andy rarely plays the guitar.", "Andy never goes to science class.", "Andy always goes to English class."], ans: 0, tip: "💡【頻率副詞】rarely 代表『很少/幾乎不』。行事曆顯示一年才彈一次吉他，符合 rare 的低頻率特徵。" },
  { part: "Part 1: Photographs", prompt: "Question 7", svgData: window.p1SvgImages.q7, sceneHint: "Susan 野餐墊上的食物籃裝著熱狗、薯條和餅乾（Hot dogs, French fries, cookies）。", audioText: "Look at the picture and choose the best answer. Statement A: Susan has sausages, sandwiches and French fries for her picnic. Statement B: Susan has hot dogs, French fries, and cookies for her picnic. Statement C: Susan has noodles, milk, and hot dogs for her picnic.", options: ["Susan has sausages, sandwiches and French fries for her picnic.", "Susan has hot dogs, French fries, and cookies for her picnic.", "Susan has noodles, milk, and hot dogs for her picnic."], ans: 1, tip: "💡【細節辨識】食物籃裝的是熱狗（hot dogs）、薯條（French fries）與餅乾（cookies）。" },
  { part: "Part 1: Photographs", prompt: "Question 8", svgData: window.p1SvgImages.q8, sceneHint: "客廳裡，Henry 的媽媽正拿著畫筆在畫布上畫畫（Henry's mother is drawing）。", audioText: "Look at the picture and choose the best answer. Statement A: Henry's hobby is swimming. Statement B: Henry's father's hobby is drawing. Statement C: Henry's mother's hobby is drawing.", options: ["Henry's hobby is swimming.", "Henry's father's hobby is drawing.", "Henry's mother's hobby is drawing."], ans: 2, tip: "💡【人物辨識】圖中畫畫的人物是媽媽（mother），不是爸爸（father）。" },
  { part: "Part 1: Photographs", prompt: "Question 9", svgData: window.p1SvgImages.q9, sceneHint: "餐廳門口牆上貼著顯眼的『禁止吸煙（No Smoking）』標誌。", audioText: "Look at the picture and choose the best answer. Statement A: Please don't smoke outside. Statement B: Please don't speak too loud here. Statement C: Please don't smoke in the restaurant.", options: ["Please don't smoke outside.", "Please don't speak too loud here.", "Please don't smoke in the restaurant."], ans: 2, tip: "💡【指示標誌】此標誌為『禁止吸菸』，且位於餐廳室內牆面，故選 Please don't smoke in the restaurant。" },
  { part: "Part 1: Photographs", prompt: "Question 10", svgData: window.p1SvgImages.q10, sceneHint: "餐盤上放著金黃色的玉米粒（Corn）。", audioText: "Look at the picture and choose the best answer. Statement A: There is not anything on the plate. Statement B: There is some corn on the plate. Statement C: There are no sausages on the plate.", options: ["There is not anything on the plate.", "There is some corn on the plate.", "There are no sausages on the plate."], ans: 1, tip: "💡【名詞與存在句】盤子上有金黃色玉米（There is some corn on the plate）。" },
  { part: "Part 1: Photographs", prompt: "Question 11", svgData: window.p1SvgImages.q11, sceneHint: "體操女孩展現特技動作：一隻腳著地，另一隻腳高高舉起彎曲碰到自己的頭頂。", audioText: "Look at the picture and choose the best answer. Statement A: She can touch her head with her foot. Statement B: She can stand on one leg and touch the floor. Statement C: She can stand on her head.", options: ["She can touch her head with her foot.", "She can stand on one leg and touch the floor.", "She can stand on her head."], ans: 0, tip: "💡【動作辨析】女孩正在用腳碰觸自己的頭部（touch her head with her foot）。" },
  { part: "Part 2: Question Response", prompt: "Question 12: Are there many students in the classroom?", audioText: "Question 12: Are there many students in the classroom? Statement A: Yes, there are 30 students in the classroom. Statement B: No, the classroom is very big. Statement C: I like to study in the classroom.", options: ["Yes, there are 30 students in the classroom.", "No. The classroom is very big.", "I like to study in the classroom."], ans: 0, tip: "💡【存在句問答】Are there many students... 問教室學生多嗎？回答 Yes, there are 30 students 最切題。" },
  { part: "Part 2: Question Response", prompt: "Question 13: Where do you cook?", audioText: "Question 13: Where do you cook? Statement A: I have a big kitchen. Statement B: I cook in the kitchen. Statement C: I take a bath in the bathroom.", options: ["I have a big kitchen.", "I cook in the kitchen.", "I take a bath in the bathroom."], ans: 1, tip: "💡【疑問詞 Where】問做菜地點，回答必須包含動作與地點（I cook in the kitchen）。" },
  { part: "Part 2: Question Response", prompt: "Question 14: What does Tina have?", audioText: "Question 14: What does Tina have? Statement A: She has a new car. Statement B: She needs a bike. Statement C: The books on her desk are mine.", options: ["She has a new car.", "She needs a bike.", "The books on her desk are mine."], ans: 0, tip: "💡【一般現在式問答】問 Tina 有什麼，回答需用 She has...（She has a new car）。" },
  { part: "Part 2: Question Response", prompt: "Question 15: How many seconds are there in a minute?", audioText: "Question 15: How many seconds are there in a minute? Statement A: There are 16 seconds in a minute. Statement B: There are 60 seconds in a minute. Statement C: There are 60 minutes in an hour.", options: ["There are 16 seconds in a minute.", "There are 60 seconds in a minute.", "There are 60 minutes in an hour."], ans: 1, tip: "💡【常識與數字】一分鐘有 60 秒（60 seconds in a minute）。" },
  { part: "Part 2: Question Response", prompt: "Question 16: What floor do your parents live on?", audioText: "Question 16: What floor do your parents live on? Statement A: I live on the eighth floor. Statement B: She lives on the 9th floor. Statement C: They live on the 2nd floor.", options: ["I live on the eighth floor.", "She lives on the 9th floor.", "They live on the 2nd floor."], ans: 2, tip: "💡【主詞人稱一致】your parents 是複數代名詞 they，回答必須用 They live on the 2nd floor。" },
  { part: "Part 2: Question Response", prompt: "Question 17: May I borrow some money?", audioText: "Question 17: May I borrow some money? Statement A: Sure, how much do you need? Statement B: Sure, how many do you want? Statement C: No, I don't need money.", options: ["Sure, how much do you need?", "Sure. How many do you want?", "No, I don't need money."], ans: 0, tip: "💡【不可數名詞】money（錢）為不可數，反問要借多少時必須用 How much do you need。" },
  { part: "Part 2: Question Response", prompt: "Question 18: Where are you doing your homework?", audioText: "Question 18: Where are you doing your homework? Statement A: You are doing your homework in front of the television. Statement B: I am playing the piano in the dining room. Statement C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 2, tip: "💡【問答人稱與動作】問 Where are you doing homework?，回答用 I am doing it at my desk in the bedroom。" },
  { part: "Part 2: Question Response", prompt: "Question 19: What can you see on the floor?", audioText: "Question 19: What can you see on the floor? Statement A: Yes, I can see the floor. Statement B: I can clean my room quickly. Statement C: I can see two skirts there.", options: ["Yes, I can see the floor.", "I can clean my room quickly.", "I can see two skirts there."], ans: 2, tip: "💡【特殊疑問詞 What】問在地板上看到什麼物品，回答看到的具體事物（two skirts）。" },
  { part: "Part 2: Question Response", prompt: "Question 20: Are there any pictures on the wall?", audioText: "Question 20: Are there any pictures on the wall? Statement A: No, there are not any pictures. Statement B: He is looking for his pictures. Statement C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0, tip: "💡【存在句簡答】Are there any... 否定簡答為 No, there are not any pictures。" },
  { part: "Part 2: Question Response", prompt: "Question 21: Where are you going to watch the movie?", audioText: "Question 21: Where are you going to watch the movie? Statement A: I am doing homework at school. Statement B: At the movie theater. Statement C: I am going to watch TV at home.", options: ["I am doing homework at school.", "At the movie theater.", "I am going to watch TV at home."], ans: 1, tip: "💡【地點回答】問去哪裡看電影，最直接合適的地點回答是 At the movie theater。" },
  { part: "Part 2: Question Response", prompt: "Question 22: People are trembling in their seats in the movie theater.", audioText: "Question 22: People are trembling in their seats in the movie theater. Statement A: They are watching a horror movie. Statement B: They are watching an adventure movie. Statement C: They are dreaming.", options: ["They are watching a horror movie.", "They are watching an adventure movie.", "They are dreaming."], ans: 0, tip: "💡【單字因果推論】tremble 代表發抖打顫，在電影院裡發抖代表正在觀看恐怖電影（horror movie）。" },
  { part: "Part 3: Conversations (23-24)", prompt: "Question 23: Is Sally sad?", audioText: "Listen to the conversation. Good evening, Tim. Good evening, Sally. How are you? I am fine. Thank you. And you? I am not feeling good. Why not? Because my parents will not come to my birthday party. Why won't they? They need to fly to America to work. Now listen to Question 23: Is Sally sad?", options: ["Yes, she is not sad.", "Yes, she is sad.", "No, she is happy."], ans: 1, repeat: true, tip: "💡【情意判斷】Sally 提到 I am not feeling good 且父母無法參加派對，因此 Yes, she is sad。" },
  { part: "Part 3: Conversations (24)", prompt: "Question 24: Why can't Sally's parents go to her birthday party?", audioText: "Listen to the conversation again. Good evening, Tim. Good evening, Sally. How are you? I am fine. Thank you. And you? I am not feeling good. Why not? Because my parents will not come to my birthday party. Why won't they? They need to fly to America to work. Now listen to Question 24: Why can't Sally's parents go to her birthday party?", options: ["They will go to Sally's birthday party.", "They will go to work.", "They will come from America."], ans: 1, repeat: true, tip: "💡【因果細節】Sally 清楚說明 They need to fly to America to work，所以原因為 They will go to work。" },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 25: What kind of movies does Helen like?", audioText: "Listen to the conversation. Hi Helen, where are you going? I'm going to watch a movie. Really, what kind of movie are you going to watch? I want to see a science fiction movie. I have to run now, the movie is about to start. Okay, and I have to be home before lunch. See you. Now listen to Question 25: What kind of movies does Helen like?", options: ["She wants to watch a movie with Paul.", "She likes science fiction movies.", "She likes romance movies."], ans: 1, repeat: true, tip: "💡【喜好抓取】Helen 說 I want to see a science fiction movie（科幻電影）。" },
  { part: "Part 3: Conversations (26)", prompt: "Question 26: Why does Helen have to run?", audioText: "From the previous conversation, listen to Question 26: Why does Helen have to run?", options: ["She likes to run.", "She likes science fiction movies.", "The movie is about to start."], ans: 2, tip: "💡【原因細節】Helen 說 the movie is about to start（電影快要開演了）。" },
  { part: "Part 3: Conversations (27)", prompt: "Question 27: Do Paul and Helen see the movie together?", audioText: "From the previous conversation, listen to Question 27: Do Paul and Helen see the movie together?", options: ["Yes, they do.", "No, they aren't.", "No, they don't."], ans: 2, tip: "💡【助動詞簡答】Paul 說自己中午前必須回家，兩人並未一起看電影，故用 No, they don't。" },
  { part: "Part 4: Talks (28-30)", prompt: "Question 28: What kind of books does Kathy not read?", audioText: "Listen to the talk. Kathy likes to read books. She reads many different kinds of books. Chinese books, science books, and of course, English books. She also likes sports. She can play basketball, football, and golf well. Now she is learning how to play badminton. Her favorite food is hamburgers, but she is not fat. She is thin because she runs in the park every day and doesn't eat too much. I like her very much. Now listen to Question 28: What kind of books does Kathy not read in her free time?", options: ["Chinese books.", "Science books.", "Math books."], ans: 2, repeat: true, tip: "💡【反向細節】文章提到 Chinese, science, English books，唯獨沒有提到數學書（Math books）。" },
  { part: "Part 4: Talks (29)", prompt: "Question 29: What kind of sport is Kathy learning now?", audioText: "From the talk, listen to Question 29: What kind of sport is Kathy learning now?", options: ["Basketball", "Badminton", "Football"], ans: 1, tip: "💡【現在進行細節】文章說明 Now she is learning how to play badminton（羽毛球）。" },
  { part: "Part 4: Talks (30)", prompt: "Question 30: Why is Kathy thin?", audioText: "From the talk, listen to Question 30: Why is Kathy thin?", options: ["Because she runs a lot and eats a little.", "Because she doesn't eat.", "Because she likes eating hamburgers."], ans: 0, tip: "💡【因果細節】文章說明 She is thin because she runs in the park every day and doesn't eat too much。" },
  { part: "Part 4: Talks (31-32)", prompt: "Question 31: What does Henry like to do in his free time?", audioText: "Listen to the talk. In my free time, I like to swim. I am a good swimmer. I can also play the piano and the guitar very well. But I can't play the violin. If you want to be my friend, please tell me after class. Now listen to Question 31: What does Henry like to do in his free time?", options: ["To swim", "To study English", "To play basketball"], ans: 0, repeat: true, tip: "💡【喜好辨析】Henry 開頭即說 In my free time, I like to swim。" },
  { part: "Part 4: Talks (32)", prompt: "Question 32: Where is Henry now?", audioText: "From the talk, listen to Question 32: Where is Henry now?", options: ["In the living room.", "In the classroom.", "In the dining room."], ans: 1, tip: "💡【情境推理】結尾提到 please tell me after class，代表目前在教室（classroom）。" },
  { part: "Part 4: Talks (33-35)", prompt: "Question 33: Who lives with Jerry?", audioText: "Listen to the talk. I live in a small apartment with my classmate. We share the kitchen and bathroom. It is very difficult in the morning. I like to take a shower in the morning, but my classmate often uses the bathroom for a long time. Now listen to Question 33: Who lives with Jerry?", options: ["Jerry lives with his parents.", "Jerry lives with his classmate.", "Jerry lives with his teammate."], ans: 1, repeat: true, tip: "💡【同住人物】Jerry 說 I live in a small apartment with my classmate。" },
  { part: "Part 4: Talks (34)", prompt: "Question 34: How many bathrooms are there in Jerry's house?", audioText: "From the talk, listen to Question 34: How many bathrooms are there in Jerry's house?", options: ["2", "1", "0"], ans: 1, tip: "💡【數量細節】兩人必須共用浴室（share the bathroom），代表只有 1 間浴室。" },
  { part: "Part 4: Talks (35)", prompt: "Question 35: Why does Jerry feel the morning is difficult?", audioText: "From the talk, listen to Question 35: Why does Jerry feel the morning is difficult?", options: ["Because he can't use the bathroom.", "Because the bathroom is dirty.", "Because he does not want to go to school."], ans: 0, tip: "💡【原因推論】室友早上佔用浴室很久導致 Jerry 無法使用，因此覺得早上很困擾。" },
  { part: "Part 3/4: Conversation (36-37)", prompt: "Question 36: Whose birthday is coming?", audioText: "Listen to the conversation. Hello. This is Stephen. May I talk to Tina? Hold on, please. Hello, Stephen. This is Tina speaking. I am just calling to tell you that I can't go to your birthday party. I am really sorry. Why can't you come? My parents will go to Singapore for work. Now listen to Question 36: Whose birthday is coming?", options: ["Stephen's birthday is coming.", "Tina's birthday is coming.", "Steven's father's birthday is coming."], ans: 0, repeat: true, tip: "💡【人物關係】Tina 說 I can't go to YOUR birthday party，因此過生日的是 Stephen。" },
  { part: "Part 3/4: Conversation (37)", prompt: "Question 37: Why do Tina's parents need to go to Singapore?", audioText: "From the conversation, listen to Question 37: Why do Tina's parents need to go to Singapore?", options: ["Because they want to celebrate a birthday.", "Because they have to work in Singapore.", "Because they study in Singapore."], ans: 1, tip: "💡【原因細節】Tina 說明 My parents will go to Singapore for work。" },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 38: What does Stephen think of his parents?", audioText: "Listen to the conversation. Did you tell your parents that you don't want to go? I feel they never listen to me. I am afraid if I tell them, they will still want me to go to Singapore with them. If you stay here, who is going to take care of you? My grandparents live near us. I can live with them. Well, I think you should tell your parents about your plan anyway. Now listen to Question 38: What does Stephen think of his parents?", options: ["His parents usually listen to him.", "His parents sometimes listen to him.", "His parents never listen to him."], ans: 2, repeat: true, tip: "💡【頻率詞細節】對話中提到 I feel they NEVER listen to me。" },
  { part: "Part 3/4: Conversation (39)", prompt: "Question 39: Who does Stephen want to live with?", audioText: "From the conversation, listen to Question 39: Who does Stephen want to live with?", options: ["His parents.", "His brother.", "His grandparents."], ans: 2, tip: "💡【人物細節】Stephen 提到 My grandparents live near us. I can live with them。" },
  { part: "Part 3/4: Conversation (40)", prompt: "Question 40: What does Tina tell Stephen to do?", audioText: "From the conversation, listen to Question 40: What does Tina tell Stephen to do?", options: ["She tells Stephen to tell his parents about his plan.", "She tells Stephen not to tell his parents about his plan.", "She tells Stephen to tell his brother about his plan."], ans: 0, tip: "💡【建議抓取】Tina 建議 I think you should tell your parents about your plan。" }
];

window.rawMockP1 = window.rawMockP1Data.map(function(item, idx) {
  return Object.assign({}, item, { qId: generateQuestionHash("p1_" + idx + "_" + item.prompt) });
});

// =======================================================================
// 5. Practice 2 真題資料庫
// =======================================================================
window.rawMockP2Data = [
  { part: "Part 1: Photographs", prompt: "Question 1", svgData: window.p2SvgImages.q1, sceneHint: "房間裡的床上整齊擺放著兩顆枕頭（Two pillows on the bed）。", audioText: "Look at the picture and choose the best answer. Statement A: There is a shirt in the closet. Statement B: There are two pillows on the bed. Statement C: There is a clock on the wall.", options: ["There is a shirt in the closet.", "There are two pillows on the bed.", "There is a clock on the wall."], ans: 1, tip: "💡【看圖選句】床上清楚擺放著兩顆枕頭（two pillows on the bed）。" },
  { part: "Part 1: Photographs", prompt: "Question 2", svgData: window.p2SvgImages.q2, sceneHint: "一群人在櫃檯前依序排隊等待（Waiting in line）。", audioText: "Look at the picture and choose the best answer. Statement A: They are waiting in line. Statement B: They are in the movie theater. Statement C: They are shutting their eyes.", options: ["They are waiting in line.", "They are in the movie theater.", "They are shutting their eyes."], ans: 0, tip: "💡【片語辨析】圖中人們一個接著一個站著，代表在排隊（waiting in line）。" },
  { part: "Part 1: Photographs", prompt: "Question 3", svgData: window.p2SvgImages.q3, sceneHint: "街道地圖上，超級市場（Supermarket）緊鄰在郵局（Post office）的隔壁旁邊。", audioText: "Look at the picture and choose the best answer. Statement A: The hospital is beside the restaurant. Statement B: The supermarket is next to the post office. Statement C: The supermarket is between the hospital and the restaurant.", options: ["The hospital is beside the restaurant.", "The supermarket is next to the post office.", "The supermarket is between the hospital and the restaurant."], ans: 1, tip: "💡【空間介系詞】圖中超市與郵局緊緊相鄰，使用 next to（在旁邊）。" },
  { part: "Part 1: Photographs", prompt: "Question 4", svgData: window.p2SvgImages.q4, sceneHint: "小女孩坐在電腦螢幕前抓著頭，一臉困惑完全不會操作電腦（Doesn't know how to use it）。", audioText: "Look at the picture and choose the best answer. Statement A: She doesn't know how to use the computer. Statement B: She can use the computer very well. Statement C: She is playing the computer games happily.", options: ["She doesn't know how to use the computer.", "She can use the computer very well.", "She is playing the computer games happily."], ans: 0, tip: "💡【情緒與能力】小女孩滿臉問號且困惑，代表她不會使用電腦（doesn't know how to use the computer）。" },
  { part: "Part 1: Photographs", prompt: "Question 5", svgData: window.p2SvgImages.q5, sceneHint: "名叫 Tina 的女孩張開嘴巴打了一個大哈欠（Tina yawns）。", audioText: "Look at the picture and choose the best answer. Statement A: Tina yawns. Statement B: Jennifer yawns. Statement C: Tina stretches.", options: ["Tina yawns.", "Jennifer yawns.", "Tina stretches."], ans: 0, tip: "💡【動作單字】yawn 為打哈欠，stretch 為伸懶腰。圖中主角正在打哈欠。" },
  { part: "Part 1: Photographs", prompt: "Question 6", svgData: window.p2SvgImages.q6, sceneHint: "時鐘指在 4 點 45 分（即差一刻鐘到 5 點：a quarter to 5）。", audioText: "Look at the picture and choose the best answer. Statement A: It's 10 past 5. Statement B: It's a quarter past 5. Statement C: It's a quarter to 5.", options: ["It's 10 past 5.", "It's a quarter past five.", "It's a quarter to five."], ans: 2, tip: "💡【時間讀法】4:45 代表『差一刻到 5 點』，表達為 a quarter to 5。" },
  { part: "Part 1: Photographs", prompt: "Question 7", svgData: window.p2SvgImages.q7, sceneHint: "臥室的床邊擺放著一張舒適的沙發椅（Sofa in the bedroom）。", audioText: "Look at the picture and choose the best answer. Statement A: There is a radio on the table. Statement B: There is a hanger on the coffee table. Statement C: There is a sofa in the bedroom.", options: ["There is a radio on the table.", "There is a hanger on the coffee table.", "There is a sofa in the bedroom."], ans: 2, tip: "💡【家具與空間】房間裡除了床以外，還擺放著一張沙發（sofa in the bedroom）。" },
  { part: "Part 1: Photographs", prompt: "Question 8", svgData: window.p2SvgImages.q8, sceneHint: "餐廳室內牆面上標記著醒目的紅色『禁止吸煙』告示牌。", audioText: "Look at the picture and choose the best answer. Statement A: Please don't speak too loud here. Statement B: Please don't smoke in the restaurant. Statement C: Please don't smoke outside.", options: ["Please don't speak too loud here.", "Please don't smoke in the restaurant.", "Please don't smoke outside."], ans: 1, tip: "💡【告示牌】餐廳內的禁菸標誌，選 Please don't smoke in the restaurant。" },
  { part: "Part 1: Photographs", prompt: "Question 9", svgData: window.p2SvgImages.q9, sceneHint: "小男孩坐在桌子前拿著色筆專注地在紙上畫圖（The boy is drawing）。", audioText: "Look at the picture and choose the best answer. Statement A: The girl is watching television. Statement B: The boy is drawing. Statement C: The man is flying a kite.", options: ["The girl is watching television.", "The boy is drawing.", "The man is flying a kite."], ans: 1, tip: "💡【人物與動作】圖中是小男孩（boy）正在畫畫（drawing）。" },
  { part: "Part 1: Photographs", prompt: "Question 10", svgData: window.p2SvgImages.q10, sceneHint: "餐桌上端著一碗熱騰騰冒煙的麵條，正是主角最愛的食物（Noodles）。", audioText: "Look at the picture and choose the best answer. Statement A: My favorite food is noodles. Statement B: My father's favorite food is hamburgers. Statement C: My mother's favorite food is sandwiches.", options: ["My favorite food is noodles.", "My father's favorite food is hamburgers.", "My mother's favorite food is sandwiches."], ans: 0, tip: "💡【食物單字】碗裡裝的是麵條（noodles），不是漢堡或三明治。" },
  { part: "Part 2: Question Response", prompt: "Question 11: Do you have many friends here?", audioText: "Question 11: Do you have many friends here? Statement A: I often go swimming with my friends. Statement B: I am friendly. Statement C: No, I don't have many friends here.", options: ["I often go swimming with my friends.", "I am friendly.", "No, I don't have many friends here."], ans: 2, tip: "💡【一般疑問句簡答】Do you have... 提問，最適當的回答是 No, I don't have many friends here。" },
  { part: "Part 2: Question Response", prompt: "Question 12: What time do you usually go to school?", audioText: "Question 12: What time do you usually go to school? Statement A: You usually go to school at 7:00. Statement B: I usually go to school at half past 7:00. Statement C: I usually go to school on time.", options: ["You usually go to school at 7:00.", "I usually go to school at half past 7:00.", "I usually go to school on time."], ans: 1, tip: "💡【時間問答】問具體幾點（What time），回答用 I usually go to school at half past 7:00 (7:30)。" },
  { part: "Part 2: Question Response", prompt: "Question 13: What is Sandy's favorite sport?", audioText: "Question 13: What is Sandy's favorite sport? Statement A: Her favorite food is vegetables. Statement B: Her favorite sport is bowling. Statement C: Her favorite fruit is strawberries.", options: ["Her favorite food is vegetables.", "Her favorite sport is bowling.", "Her favorite fruit is strawberries."], ans: 1, tip: "💡【主題詞辨析】問的是 favorite sport（最喜歡的運動），只有 bowling（保齡球）是運動項目。" },
  { part: "Part 2: Question Response", prompt: "Question 14: How many lamps can you see?", audioText: "Question 14: How many lamps can you see? Statement A: Yes, I do. Statement B: I can see three bags. Statement C: I can see five lamps.", options: ["Yes, I do.", "I can see three bags.", "I can see five lamps."], ans: 2, tip: "💡【數量問答】問能看見幾盞檯燈（lamps），回答需對應物品名稱（I can see five lamps）。" },
  { part: "Part 2: Question Response", prompt: "Question 15: Where are you doing your homework?", audioText: "Question 15: Where are you doing your homework? Statement A: You are doing your homework in front of the television. Statement B: I am playing the piano in the dining room. Statement C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 2, tip: "💡【地點問答】問你在哪裡做作業，回答用 I am doing it at my desk in the bedroom。" },
  { part: "Part 2: Question Response", prompt: "Question 16: Are there any pictures on the wall?", audioText: "Question 16: Are there any pictures on the wall? Statement A: No, there are not any pictures. Statement B: He is looking for his pictures. Statement C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0, tip: "💡【存在句簡答】Are there any... 否定簡答為 No, there are not any pictures。" },
  { part: "Part 2: Question Response", prompt: "Question 17: Are you listening to me?", audioText: "Question 17: Are you listening to me? Statement A: Yes, you are listening to me. Statement B: Yes, I am listening to you. Statement C: No, he is not listening to us.", options: ["Yes, you are listening to me.", "Yes, I am listening to you.", "No, he is not listening to us."], ans: 1, tip: "💡【人稱呼應】問句是 Are you listening to me?，回答必須以第一人稱回覆：Yes, I am listening to you。" },
  { part: "Part 2: Question Response", prompt: "Question 18: What is she doing?", audioText: "Question 18: What is she doing? Statement A: She is playing the guitar. Statement B: You are cooking in the kitchen. Statement C: She does her homework every evening.", options: ["She is playing the guitar.", "You are cooking in the kitchen.", "She does her homework every evening."], ans: 0, tip: "💡【時態與人稱】問現在進行式（What is she doing），回答必須用 She is + V-ing（She is playing the guitar）。" },
  { part: "Part 2: Question Response", prompt: "Question 19: Do you have to go to school on time?", audioText: "Question 19: Do you have to go to school on time? Statement A: Yes, I have. Statement B: Yes, I can. Statement C: No, I don't.", options: ["Yes, I have.", "Yes, I can.", "No, I don't."], ans: 2, tip: "💡【助動詞簡答】Do you have to... 是一般動詞問句，否定簡答使用 No, I don't。" },
  { part: "Part 2: Question Response", prompt: "Question 20: Thank you very much.", audioText: "Question 20: Thank you very much. Statement A: No thanks. Statement B: You're welcome. Statement C: I think so.", options: ["No thanks.", "You're welcome.", "I think so."], ans: 1, tip: "💡【社交禮貌應答】別人道謝 Thank you 時，標準客氣回覆為 You're welcome（不客氣）。" },
  { part: "Part 2: Question Response", prompt: "Question 21: May I borrow some money?", audioText: "Question 21: May I borrow some money? Statement A: Sure, how many do you want? Statement B: Sure, how much do you need? Statement C: No, I don't need money.", options: ["Sure, how many do you want?", "Sure. How much do you need?", "No, I don't need money."], ans: 1, tip: "💡【不可數名詞數量】money 為不可數，詢問數量要用 how much do you need。" },
  { part: "Part 2: Question Response", prompt: "Question 22: What does Tina have?", audioText: "Question 22: What does Tina have? Statement A: She has a new car. Statement B: The books on her desk are mine. Statement C: She needs a bike.", options: ["She has a new car.", "The books on her desk are mine.", "She needs a bike."], ans: 0, tip: "💡【問答一致性】問 Tina 擁有什麼，回答為 She has a new car。" },
  { part: "Part 2: Question Response", prompt: "Question 23: Is there a car in the garage?", audioText: "Question 23: Is there a car in the garage? Statement A: Yes, I am. Statement B: Yes, there is. Statement C: He is sick.", options: ["Yes, I am.", "Yes, there is.", "He is sick."], ans: 1, tip: "💡【存在句簡答】Is there... 肯定簡答為 Yes, there is。" },
  { part: "Part 2: Question Response", prompt: "Question 24: Are Mike and Jason washing their cars?", audioText: "Question 24: Are Mike and Jason washing their cars? Statement A: No, he is not. Statement B: Yes, he is. Statement C: No, they aren't.", options: ["No, he is not.", "Yes, he is.", "No, they aren't."], ans: 2, tip: "💡【複數代名詞】Mike and Jason 為兩個人，否定簡答必須用 No, they aren't。" },
  { part: "Part 2: Question Response", prompt: "Question 25: Can Tony do kung fu?", audioText: "Question 25: Can Tony do kung fu? Statement A: Yes, he can. Statement B: Yes, I do. Statement C: Yes, I can.", options: ["Yes, he can.", "Yes, I do.", "Yes, I can."], ans: 0, tip: "💡【情態助動詞簡答】Can Tony... 提問，肯定簡答使用 Yes, he can。" },
  { part: "Part 2: Question Response", prompt: "Question 26: Is there any shampoo?", audioText: "Question 26: Is there any shampoo? Statement A: No, I don't. Statement B: Yes, there are. Statement C: Yes, there is.", options: ["No, I don't.", "Yes, there are.", "Yes, there is."], ans: 2, tip: "💡【不可數存在句】shampoo（洗髮精）為不可數名詞，be 動詞用單數，肯定簡答為 Yes, there is。" },
  { part: "Part 2: Question Response", prompt: "Question 27: How much sugar do you want?", audioText: "Question 27: How much sugar do you want? Statement A: Just a little. Statement B: Too much. Statement C: Not many.", options: ["Just a little.", "Too much.", "Not many."], ans: 0, tip: "💡【不可數修飾詞】sugar（糖）不可數，數量少用 a little（一點點）回答，不能用 many。" },
  { part: "Part 2: Question Response", prompt: "Question 28: What is Timmy doing?", audioText: "Question 28: What is Timmy doing? Statement A: He doesn't shut his eyes because the movie is scary. Statement B: He is shutting his eyes because of the scary movie. Statement C: He shuts his eyes at scary movies.", options: ["He doesn't shut his eyes because the movie is scary.", "He is shutting his eyes because of the scary movie.", "He shuts his eyes at scary movies."], ans: 1, tip: "💡【時態對齊】問 What is Timmy doing，回答需用進行式 He is shutting his eyes。" },
  { part: "Part 2: Question Response", prompt: "Question 29: Do you always do your homework before dinner?", audioText: "Question 29: Do you always do your homework before dinner? Statement A: Yes, I never eat first. Statement B: Yes, it is always late when I do it. Statement C: Yes, always do my homework.", options: ["Yes, I never eat first.", "Yes, it is always late when I do it.", "Yes, always do my homework."], ans: 0, tip: "💡【邏輯常理】做完功課才吃晚餐，代表『從來不會先吃飯』（I never eat first）。" },
  { part: "Part 2: Question Response", prompt: "Question 30: What is the girl doing?", audioText: "Question 30: What is the girl doing? Statement A: The girl is sick. Statement B: The girl is painting. Statement C: Her favorite sport is soccer.", options: ["The girl is sick.", "The girl is painting.", "Her favorite sport is soccer."], ans: 1, tip: "💡【動作進行式】問女孩正在做什麼，回答為 The girl is painting（正在畫畫）。" },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 31: What does Kevin's mom want him to do now?", audioText: "Listen to the conversation. Kevin, what are you doing? I'm playing a video game, Mom. Is your homework done? I can't do my homework now because I can't stop this game before I win. Then I can stop the game for you. Now do your homework before dinner. Now listen to Question 31: What does Kevin's mom want him to do now?", options: ["Do his homework.", "Win the game.", "Eat dinner first."], ans: 0, repeat: true, tip: "💡【媽媽要求】媽媽最後清楚命令：Now do your homework before dinner。" },
  { part: "Part 3: Conversations (32)", prompt: "Question 32: What does Kevin want to do?", audioText: "From the previous conversation, listen to Question 32: What does Kevin want to do?", options: ["Do his homework.", "Win the game before stopping.", "Help his mom cook dinner."], ans: 1, tip: "💡【兒子想法】Kevin 說 I can't stop this game before I win（贏了才肯罷休）。" },
  { part: "Part 3: Conversations (33)", prompt: "Question 33: Does Kevin finish his homework?", audioText: "From the previous conversation, listen to Question 33: Does Kevin finish his homework?", options: ["Yes, he does.", "No, he hasn't done it yet.", "He did it at school."], ans: 1, tip: "💡【作業狀態】Kevin 的作業根本還沒做，故選 No, he hasn't done it yet。" },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 34: How is Lucy?", audioText: "Listen to the conversation. How are you, Lucy? Not bad. What about you? Great. I haven't seen you for a week. You know, I lived with my parents, but they moved to London. So I live in a big house alone. Now listen to Question 34: How is Lucy?", options: ["Very sick.", "Not bad.", "Terrible."], ans: 1, repeat: true, tip: "💡【問候細節】Lucy 回答 Not bad（還不錯）。" },
  { part: "Part 3: Conversations (35)", prompt: "Question 35: Who lives with Lucy?", audioText: "From the previous conversation, listen to Question 35: Who lives with Lucy?", options: ["Her parents.", "Her classmates.", "She lives alone."], ans: 2, tip: "💡【同住人物】父母搬去倫敦後，Lucy 說 So I live in a big house ALONE（獨自一人）。" },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 36: What does Lucy want?", audioText: "Listen to the conversation. Hi, Lucy, your birthday is coming. Do you want to have a birthday party? Sure. We can invite some friends. Who do you want to invite? Jerry, Susan, and Henry. Okay. Sounds good. I will help you prepare your birthday party. Thanks. I need the help. Now listen to Question 36: What does Lucy want?", options: ["To have a birthday party.", "To go to London.", "To study alone."], ans: 0, repeat: true, tip: "💡【活動目的】Lucy 想要辦生日派對（To have a birthday party）。" },
  { part: "Part 3: Conversations (37)", prompt: "Question 37: Whose birthday is coming?", audioText: "From the previous conversation, listen to Question 37: Whose birthday is coming?", options: ["Jack's birthday.", "Lucy's birthday.", "Susan's birthday."], ans: 1, tip: "💡【壽星人物】開頭提到 Hi, Lucy, your birthday is coming，過生日的是 Lucy。" },
  { part: "Part 3: Conversations (38)", prompt: "Question 38: How many friends may go to the birthday party with Lucy and Jack?", audioText: "From the previous conversation, listen to Question 38: How many friends may go to the birthday party with Lucy and Jack?", options: ["2 friends.", "3 friends (Jerry, Susan, and Henry).", "5 friends."], ans: 1, tip: "💡【名單清點】Lucy 邀請了 Jerry, Susan, Henry 共 3 位朋友。" },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 39: What kind of movies does Helen like?", audioText: "Listen to the conversation. Hi Helen. Where are you going? I am going to watch a movie. Really? What kind of movie are you going to watch? I want to see a science fiction movie. I have to run now. The movie is about to start. Okay, and I have to be home before lunch. See you. Now listen to Question 39: What kind of movies does Helen like?", options: ["Romance movies.", "Science fiction movies.", "Horror movies."], ans: 1, repeat: true, tip: "💡【喜好單字】Helen 想要看 science fiction movies（科幻電影）。" },
  { part: "Part 4: Talks (40)", prompt: "Question 40: Why does Helen have to run?", audioText: "From the previous conversation, listen to Question 40: Why does Helen have to run?", options: ["She wants to exercise.", "She needs to catch a bus.", "The movie is about to start."], ans: 2, tip: "💡【原因細節】Helen 說 The movie is about to start（電影即將開始）。" },
  { part: "Part 4: Talks (41-42)", prompt: "Question 41: Where does Henry come from?", audioText: "Listen to the talk. Hello everyone, today I'd like to tell you something about my English studies. My name is Henry. I am from Japan. I am a student at Gram English. I like to study English very much, but my spoken English is not good. When I say R, I find it difficult to say it right. Now listen to Question 41: Where does Henry come from?", options: ["America.", "Singapore.", "Japan."], ans: 2, repeat: true, tip: "💡【國家細節】Henry 自我介紹提到 I am from Japan（日本）。" },
  { part: "Part 4: Talks (42)", prompt: "Question 42: Where does he learn English?", audioText: "From the talk, listen to Question 42: Where does he learn English?", options: ["At Gram English.", "At school in Japan.", "At home by himself."], ans: 0, tip: "💡【機構名稱】Henry 說 I am a student at Gram English。" },
  { part: "Part 4: Talks (43-45)", prompt: "Question 43: What can't Frank do?", audioText: "Listen to the talk. Frank and Maggie are my good friends. They can do many things. Frank can play the piano and guitar. He can also ride a bicycle, but he can't drive a car. Maggie is very talented. She can sing and dance very well. She likes to practice Kung Fu on Mondays. We can all speak English very well. Now listen to Question 43: What can't Frank do?", options: ["Drive a car.", "Play the guitar.", "Ride a bicycle."], ans: 0, repeat: true, tip: "💡【否定情態轉折】Frank 會彈鋼琴、吉他、騎車，但 he CAN'T drive a car（不會開車）。" },
  { part: "Part 4: Talks (44)", prompt: "Question 44: What do the three friends do together?", audioText: "From the talk, listen to Question 44: What do the three friends do together?", options: ["Practice kung fu on Mondays.", "Drive cars together.", "Do homework before dinner and play video games after dinner."], ans: 2, tip: "💡【共同活動】文章說明 We often do our homework together before dinner. Then, after dinner, we play video games。" },
  { part: "Part 4: Talks (45)", prompt: "Question 45: What are they very good at?", audioText: "From the talk, listen to Question 45: What are they very good at?", options: ["They can all play violin.", "They can all speak English very well.", "They can all drive."], ans: 1, tip: "💡【全體能力】文章提到 We can all speak English very well。" },
  { part: "Part 4: Talks (46-47)", prompt: "Question 46: Where does the speaker like to watch movies?", audioText: "Listen to the talk. People like to watch movies in different places. For example, some people like to watch movies in the theater, library, or restaurant. But I like to watch movies at home. People who like to watch movies in the theater like to be around many people. Now listen to Question 46: Where does the speaker like to watch movies?", options: ["In the theater.", "In the library.", "At home."], ans: 2, repeat: true, tip: "💡【講者偏好】講者說 But I like to watch movies AT HOME（在家看）。" },
  { part: "Part 4: Talks (47)", prompt: "Question 47: Why do some people prefer to watch movies in the theater?", audioText: "From the talk, listen to Question 47: Why do some people prefer to watch movies in the theater?", options: ["Because tickets are free.", "Because the food is delicious.", "Because they like to be around many people."], ans: 2, tip: "💡【原因抓取】文章最後一句說明 People who like to watch movies in the theater like to be around many people。" },
  { part: "Part 4: Talks (48-50)", prompt: "Question 48: Why does she have to study?", audioText: "Listen to the talk. Hi Jane, it's Sandy. I have to study for my English test and I need your help. Can you come to my house today? We can have dinner together at 6:00, and we can study at 6:30 until 8:00. Then we can watch TV. Thanks. Now listen to Question 48: Why does she have to study?", options: ["For her English test.", "For her math contest.", "For fun."], ans: 0, repeat: true, tip: "💡【讀書目的】Sandy 留言提到 I have to study for my English test。" },
  { part: "Part 4: Talks (49)", prompt: "Question 49: What does Sandy want from Jane?", audioText: "From the talk, listen to Question 49: What does Sandy want from Jane?", options: ["To help her study for the English test.", "To buy her dinner.", "To lend her a TV."], ans: 0, tip: "💡【請求內容】Sandy 說 I need your help（需要 Jane 幫忙協助複習英語測驗）。" },
  { part: "Part 4: Talks (50)", prompt: "Question 50: Where does Sandy want to study?", audioText: "From the talk, listen to Question 50: Where does Sandy want to study?", options: ["At Jane's house.", "At school.", "At Sandy's house."], ans: 2, tip: "💡【地點細節】Sandy 邀請對方 Can you come to MY HOUSE today?，故是在 Sandy 家複習。" }
];

window.rawMockP1 = window.rawMockP1Data.map(function(item, idx) {
  return Object.assign({}, item, { qId: generateQuestionHash("p1_" + idx + "_" + item.prompt) });
});

window.rawMockP2 = window.rawMockP2Data.map(function(item, idx) {
  return Object.assign({}, item, { qId: generateQuestionHash("p2_" + idx + "_" + item.prompt) });
});