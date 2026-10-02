/**
 * ===================================================================
 * @file questions.js
 * @description 格蘭英語 B 級全方位題庫 (全域物件安全掛載版，徹底根除 ts2451 宣告衝突)
 * @version 6.0.0
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

// 動態時鐘 SVG 生成器 (中心圓軸半徑 r="7" 防止邊緣毛刺)
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
    <text x="150" y="112" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">${centerPlace}</text>
    <rect x="205" y="65" width="80" height="85" fill="#f59e0b" rx="6"/>
    <text x="245" y="112" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">${rightPlace}</text>
    <line x1="10" y1="165" x2="290" y2="165" stroke="#cbd5e1" stroke-width="4"/>
    <text x="150" y="42" font-size="13" font-weight="bold" fill="#0f766e" text-anchor="middle">STREET MAP VIEW</text>
  </svg>`;
}

// Part 1 向量插圖庫
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

// ==========================================
// 1. 文法 500 題生成引擎與全域掛載
// ==========================================
function generate500GrammarQuestions() {
  const names = ["Andy", "Julia", "Janice", "Henry", "Susan", "Tina", "Frank", "Stephen", "Lucy", "Jerry", "Maggie", "Kathy", "Jason", "Mike"];
  const locations = ["in the kitchen", "in the living room", "in the bedroom", "in the dining room", "in the garage", "at the library"];
  const uncountables = [
    { word: "sugar", hint: "糖" },
    { word: "shampoo", hint: "洗髮精" },
    { word: "milk", hint: "牛奶" },
    { word: "money", hint: "金錢" }
  ];
  const countables = [
    { word: "sausages", single: "sausage", hint: "香腸" },
    { word: "pillows", single: "pillow", hint: "枕頭" },
    { word: "hangers", single: "hanger", hint: "衣架" }
  ];
  const verbs = [
    { base: "play the guitar", ing: "playing the guitar", s: "plays the guitar" },
    { base: "brush teeth", ing: "brushing teeth", s: "brushes teeth" },
    { base: "do homework", ing: "doing homework", s: "does homework" }
  ];

  const generated = [];
  for (let i = 0; i < 500; i++) {
    const type = i % 7;
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
          options: ["a quarter past", "a quarter to", "half past", "at a quarter"],
          ans: 0,
          tip: `💡【時間讀法】${hour}:15 代表『過了一刻鐘』，使用 a quarter past ${hour}。`
        };
        break;
      case 1:
        qObj = {
          part: "重點文法：時間表達 (Quarter To)",
          prompt: `Look at the clock! It is ${hour}:45. It is ______ ${nextHour}.`,
          options: ["a quarter to", "a quarter past", "half past", "15 to past"],
          ans: 0,
          tip: `💡【時間讀法】差 15 分鐘到 ${nextHour} 點（即 ${hour}:45），使用 a quarter to ${nextHour}。`
        };
        break;
      case 2:
        qObj = {
          part: "重點文法：不可數名詞數量",
          prompt: `How ______ ${uncnt.word} does ${name1} need in the kitchen?`,
          options: ["much", "many", "a little", "any"],
          ans: 0,
          tip: `💡【不可數名詞】${uncnt.word}（${uncnt.hint}）為不可數名詞，詢問數量一律用 How much。`
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
          options: [`is ${v.ing}`, v.s, v.base, `has ${v.ing}`],
          ans: 0,
          tip: `💡【現在進行式】問句包含 is ... doing，回答必須對應用主詞 + be動詞 + V-ing（is ${v.ing}）。`
        };
        break;
      case 5:
        qObj = {
          part: "重點文法：複數代名詞簡答",
          prompt: `Are ${name1} and ${name2} ${v.ing} right now? No, ______.`,
          options: ["they aren't", "he isn't", "they don't", "she isn't"],
          ans: 0,
          tip: `💡【代名詞與簡答】${name1} and ${name2} 為兩個人（they），be 動詞問句否定簡答用 No, they aren't。`
        };
        break;
      case 6:
      default:
        qObj = {
          part: "重點文法：空間介系詞 (Between)",
          prompt: `The supermarket is ______ the hospital and ${name1}'s house.`,
          options: ["between", "next to", "beside", "behind"],
          ans: 0,
          tip: "💡【空間介系詞】between A and B 為固定片語，表示『在兩者之間』。"
        };
        break;
    }
    qObj.qId = generateQuestionHash("g500_" + i + "_" + qObj.prompt);
    generated.push(qObj);
  }
  return generated;
}

window.rawGrammarQuestions = generate500GrammarQuestions();

// ==========================================
// 2. 聽力考點 500 題生成引擎與全域掛載
// ==========================================
function generate500ListeningReviewQuestions() {
  const names = ["Andy", "Julia", "Janice", "Henry", "Susan", "Tina", "Frank", "Stephen", "Lucy", "Jerry", "Maggie", "Kathy", "Jason", "Mike"];
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
  const countables = [
    { word: "cookies", hint: "餅乾" },
    { word: "sandwiches", hint: "三明治" },
    { word: "pillows", hint: "枕頭" }
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
    const cnt = countables[i % countables.length];
    const act = activities[i % activities.length];
    const hour = (i % 11) + 1;
    const nextHour = hour + 1;

    let qObj = {};
    switch (type) {
      case 0:
        qObj = {
          part: "【考點 1】時間辨析 (Quarter past)",
          prompt: `Question: Look at the clock. What time is it?`,
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
          prompt: `Question: Look at the clock. What time is it?`,
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
          part: "【考點 2】位置介系詞 (Between)",
          prompt: "Question: Look at the map. Where is the supermarket?",
          svgData: generateMapSvg("SUPERMARKET", "HOSPITAL", "RESTAURANT"),
          sceneHint: "地圖上，Supermarket（超市）位於 Hospital（醫院）與 Restaurant（餐廳）的中間。",
          audioText: "Look at the map. Where is the supermarket? Statement A: The supermarket is beside the library. Statement B: The supermarket is between the hospital and the restaurant. Statement C: The supermarket is behind the school.",
          options: ["The supermarket is beside the library.", "The supermarket is between the hospital and the restaurant.", "The supermarket is behind the school."],
          ans: 1,
          tip: "💡【空間介系詞】between A and B 代表『在兩者之間』。"
        };
        break;
      case 3:
        qObj = {
          part: "【考點 4】疑問詞問答 (Where / 地點介系詞)",
          prompt: `Question: Where does ${name1} ${act.base}?`,
          audioText: `Where does ${name1} ${act.base}? A: He has a big bag. B: In the ${loc.label}. C: Yes, he does it every day.`,
          options: ["He has a big bag.", `He does it ${loc.place}.`, "Yes, he does it every day."],
          ans: 1,
          tip: `💡【地點問答】聽到 Where 提問，核心回答為具體空間介系詞片語。`
        };
        break;
      case 4:
        qObj = {
          part: "【考點 5】現在進行式 (What is ... doing?)",
          prompt: `Question: What is ${name1} doing right now?`,
          audioText: `What is ${name1} doing right now? A: She is ${act.ing}. B: She ${act.third} every Sunday. C: She can ${act.base}.`,
          options: [`She is ${act.ing}.`, `She ${act.third} every Sunday.`, `She can ${act.base}.`],
          ans: 0,
          tip: `💡【現在進行式】問句包含 is ... doing，回答必須使用主詞 + be動詞 + V-ing。`
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
    qObj.qId = generateQuestionHash("l500_" + i + "_" + qObj.prompt);
    generated.push(qObj);
  }
  return generated;
}

window.rawReviewQuestions = generate500ListeningReviewQuestions();

// ==========================================
// 3. 官方 450+ 基礎單字母庫 (完整 12 大分類完全展開無刪減)
// ==========================================
window.bLevelVocabMasterPool = [
  // 1. 居家生活與日常用品
  { word: "closet", meaning: "衣櫥 / 衣櫃", kk: "[ˋklɑzɪt]", tip: "closet (衣櫥) KK: [ˋklɑzɪt]" },
  { word: "pillow", meaning: "枕頭", kk: "[ˋpɪlo]", tip: "pillow (枕頭) KK: [ˋpɪlo]" },
  { word: "blanket", meaning: "毛毯 / 被子", kk: "[ˋblæŋkɪt]", tip: "blanket (毛毯) KK: [ˋblæŋkɪt]" },
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
  { word: "watch", meaning: "手錶", kk: "[wɑtʃ]", tip: "watch (手錶) KK: [wɑtʃ]" },
  { word: "plate", meaning: "盤子", kk: "[plet]", tip: "plate (盤子) KK: [plet]" },
  { word: "bowl", meaning: "碗", kk: "[bol]", tip: "bowl (碗) KK: [bol]" },
  { word: "fork", meaning: "叉子", kk: "[fɔrk]", tip: "fork (叉子) KK: [fɔrk]" },
  { word: "knife", meaning: "刀子", kk: "[naɪf]", tip: "knife (刀子) KK: [naɪf]" },
  { word: "spoon", meaning: "湯匙", kk: "[spun]", tip: "spoon (湯匙) KK: [spun]" },
  { word: "glass", meaning: "玻璃杯", kk: "[glæs]", tip: "glass (玻璃杯) KK: [glæs]" },
  { word: "cup", meaning: "茶杯", kk: "[kʌp]", tip: "cup (茶杯) KK: [kʌp]" },
  { word: "bottle", meaning: "瓶子", kk: "[ˋbɑt!]", tip: "bottle (瓶子) KK: [ˋbɑt!]" },
  { word: "door", meaning: "門", kk: "[dɔr]", tip: "door (門) KK: [dɔr]" },
  { word: "window", meaning: "窗戶", kk: "[ˋwɪndo]", tip: "window (窗戶) KK: [ˋwɪndo]" },
  { word: "floor", meaning: "地板", kk: "[flɔr]", tip: "floor (地板) KK: [flɔr]" },
  { word: "wall", meaning: "牆壁", kk: "[wɔl]", tip: "wall (牆壁) KK: [wɔl]" },
  { word: "mirror", meaning: "鏡子", kk: "[ˋmɪrɚ]", tip: "mirror (鏡子) KK: [ˋmɪrɚ]" },
  { word: "trash can", meaning: "垃圾桶", kk: "[træʃ kæn]", tip: "trash can (垃圾桶) KK: [træʃ kæn]" },
  { word: "umbrella", meaning: "雨傘", kk: "[ʌmˋbrɛlə]", tip: "umbrella (雨傘) KK: [ʌmˋbrɛlə]" },
  { word: "key", meaning: "鑰匙", kk: "[ki]", tip: "key (鑰匙) KK: [ki]" },
  { word: "fan", meaning: "電風扇", kk: "[fæn]", tip: "fan (電扇) KK: [fæn]" },
  { word: "curtain", meaning: "窗簾", kk: "[ˋkɝtn]", tip: "curtain (窗簾) KK: [ˋkɝtn]" },
  { word: "mat", meaning: "地墊", kk: "[mæt]", tip: "mat (地墊) KK: [mæt]" },

  // 2. 飲食、三餐與點心
  { word: "sausages", meaning: "香腸", kk: "[ˋsɔsɪdʒɪz]", tip: "sausages (香腸) KK: [ˋsɔsɪdʒɪz]" },
  { word: "sandwiches", meaning: "三明治", kk: "[ˋsændwɪtʃɪz]", tip: "sandwiches (三明治) KK: [ˋsændwɪtʃɪz]" },
  { word: "cookies", meaning: "餅乾", kk: "[ˋkʊkɪz]", tip: "cookies (餅乾) KK: [ˋkʊkɪz]" },
  { word: "noodles", meaning: "麵條", kk: "[ˋnud!z]", tip: "noodles (麵條) KK: [ˋnud!z]" },
  { word: "hamburgers", meaning: "漢堡", kk: "[ˋhæmbɚgɚz]", tip: "hamburgers (漢堡) KK: [ˋhæmbɚgɚz]" },
  { word: "vegetables", meaning: "蔬菜", kk: "[ˋvɛdʒətəb!z]", tip: "vegetables (蔬菜) KK: [ˋvɛdʒətəb!z]" },
  { word: "strawberries", meaning: "草莓", kk: "[ˋstrɔ͵bɛrɪz]", tip: "strawberries (草莓) KK: [ˋstrɔ͵bɛrɪz]" },
  { word: "breakfast", meaning: "早餐", kk: "[ˋbrɛkfəst]", tip: "breakfast (早餐) KK: [ˋbrɛkfəst]" },
  { word: "lunch", meaning: "午餐", kk: "[lʌntʃ]", tip: "lunch (午餐) KK: [lʌntʃ]" },
  { word: "dinner", meaning: "晚餐", kk: "[ˋdɪnɚ]", tip: "dinner (晚餐) KK: [ˋdɪnɚ]" },
  { word: "picnic", meaning: "野餐", kk: "[ˋpɪknɪk]", tip: "picnic (野餐) KK: [ˋpɪknɪk]" },
  { word: "sugar", meaning: "糖", kk: "[ˋʃʊgɚ]", tip: "sugar (糖) KK: [ˋʃʊgɚ]" },
  { word: "soup", meaning: "湯", kk: "[sup]", tip: "soup (湯) KK: [sup]" },
  { word: "milk", meaning: "牛奶", kk: "[mɪlk]", tip: "milk (牛奶) KK: [mɪlk]" },
  { word: "juice", meaning: "果汁", kk: "[dʒus]", tip: "juice (果汁) KK: [dʒus]" },
  { word: "tea", meaning: "茶", kk: "[ti]", tip: "tea (茶) KK: [ti]" },
  { word: "coffee", meaning: "咖啡", kk: "[ˋkɔfɪ]", tip: "coffee (咖啡) KK: [ˋkɔfɪ]" },
  { word: "water", meaning: "水", kk: "[ˋwɔtɚ]", tip: "water (水) KK: [ˋwɔtɚ]" },
  { word: "corn", meaning: "玉米", kk: "[kɔrn]", tip: "corn (玉米) KK: [kɔrn]" },
  { word: "rice", meaning: "米飯", kk: "[raɪs]", tip: "rice (米飯) KK: [raɪs]" },
  { word: "bread", meaning: "麵包", kk: "[brɛd]", tip: "bread (麵包) KK: [brɛd]" },
  { word: "butter", meaning: "奶油", kk: "[ˋbʌtɚ]", tip: "butter (奶油) KK: [ˋbʌtɚ]" },
  { word: "cheese", meaning: "起司", kk: "[tʃiz]", tip: "cheese (起司) KK: [tʃiz]" },
  { word: "egg", meaning: "雞蛋", kk: "[ɛg]", tip: "egg (雞蛋) KK: [ɛg]" },
  { word: "chicken", meaning: "雞肉", kk: "[ˋtʃɪkɪn]", tip: "chicken (雞肉) KK: [ˋtʃɪkɪn]" },
  { word: "beef", meaning: "牛肉", kk: "[bif]", tip: "beef (牛肉) KK: [bif]" },
  { word: "pork", meaning: "豬肉", kk: "[pɔrk]", tip: "pork (豬肉) KK: [pɔrk]" },
  { word: "fish", meaning: "魚肉", kk: "[fɪʃ]", tip: "fish (魚肉) KK: [fɪʃ]" },
  { word: "apple", meaning: "蘋果", kk: "[ˋæp!]", tip: "apple (蘋果) KK: [ˋæp!]" },
  { word: "banana", meaning: "香蕉", kk: "[bəˋnænə]", tip: "banana (香蕉) KK: [bəˋnænə]" },
  { word: "orange", meaning: "柳橙", kk: "[ˋɔrɪndʒ]", tip: "orange (柳橙) KK: [ˋɔrɪndʒ]" },
  { word: "grape", meaning: "葡萄", kk: "[grep]", tip: "grape (葡萄) KK: [grep]" },
  { word: "watermelon", meaning: "西瓜", kk: "[ˋwɔtɚ͵mɛlən]", tip: "watermelon (西瓜) KK: [ˋwɔtɚ͵mɛlən]" },
  { word: "ice cream", meaning: "冰淇淋", kk: "[ˋaɪs ͵krim]", tip: "ice cream (冰淇淋) KK: [ˋaɪs ͵krim]" },
  { word: "cake", meaning: "蛋糕", kk: "[kek]", tip: "cake (蛋糕) KK: [kek]" },
  { word: "candy", meaning: "糖果", kk: "[ˋkændɪ]", tip: "candy (糖果) KK: [ˋkændɪ]" },
  { word: "chocolate", meaning: "巧克力", kk: "[ˋtʃɑkəlɪt]", tip: "chocolate (巧克力) KK: [ˋtʃɑkəlɪt]" },
  { word: "pizza", meaning: "披薩", kk: "[ˋpitsə]", tip: "pizza (披薩) KK: [ˋpitsə]" },
  { word: "French fries", meaning: "薯條", kk: "[frɛntʃ fraɪz]", tip: "French fries (薯條) KK: [frɛntʃ fraɪz]" },
  { word: "hot dog", meaning: "熱狗", kk: "[hɑt dɔg]", tip: "hot dog (熱狗) KK: [hɑt dɔg]" },
  { word: "pie", meaning: "派 / 餡餅", kk: "[paɪ]", tip: "pie (派) KK: [paɪ]" },
  { word: "popcorn", meaning: "爆米花", kk: "[ˋpɑp͵kɔrn]", tip: "popcorn (爆米花) KK: [ˋpɑp͵kɔrn]" },
  { word: "salt", meaning: "鹽巴", kk: "[sɔlt]", tip: "salt (鹽巴) KK: [sɔlt]" },
  { word: "pepper", meaning: "胡椒粉", kk: "[ˋpɛpɚ]", tip: "pepper (胡椒) KK: [ˋpɛpɚ]" },
  { word: "oil", meaning: "食用油", kk: "[ɔɪl]", tip: "oil (油) KK: [油]" },
  { word: "flour", meaning: "麵粉", kk: "[ˋflaʊɚ]", tip: "flour (麵粉) KK: [ˋflaʊɚ]" },
  { word: "snack", meaning: "點心", kk: "[snæk]", tip: "snack (點心) KK: [snæk]" },
  { word: "peach", meaning: "桃子", kk: "[pitʃ]", tip: "peach (桃子) KK: [pitʃ]" },
  { word: "lemon", meaning: "檸檬", kk: "[ˋlɛmən]", tip: "lemon (檸檬) KK: [ˋlɛmən]" },
  { word: "pear", meaning: "梨子", kk: "[pɛr]", tip: "pear (梨子) KK: [pɛr]" },
  { word: "tomato", meaning: "番茄", kk: "[təˋmeto]", tip: "tomato (番茄) KK: [təˋmeto]" },
  { word: "potato", meaning: "馬鈴薯", kk: "[pəˋteto]", tip: "potato (馬鈴薯) KK: [pəˋteto]" },
  { word: "carrot", meaning: "胡蘿蔔", kk: "[ˋkærət]", tip: "carrot (胡蘿蔔) KK: [ˋkærət]" },
  { word: "onion", meaning: "洋蔥", kk: "[ˋʌnjən]", tip: "onion (洋蔥) KK: [ˋʌnjən]" },

  // 3. 動作與生活動詞
  { word: "tremble", meaning: "發抖 / 顫抖", kk: "[ˋtrɛmb!]", tip: "tremble (顫抖) KK: [ˋtrɛmb!]" },
  { word: "yawn", meaning: "打哈欠", kk: "[jɔn]", tip: "yawn (打哈欠) KK: [jɔn]" },
  { word: "stretch", meaning: "伸展 / 伸懶腰", kk: "[strɛtʃ]", tip: "stretch (伸展) KK: [strɛtʃ]" },
  { word: "shut", meaning: "閉上 / 關閉", kk: "[ʃʌt]", tip: "shut (閉上) KK: [ʃʌt]" },
  { word: "open", meaning: "打開", kk: "[ˋopən]", tip: "open (打開) KK: [ˋopən]" },
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
  { word: "walk", meaning: "走路", kk: "[wɔk]", tip: "walk (走路) KK: [wɔk]" },
  { word: "climb", meaning: "攀爬", kk: "[klaɪm]", tip: "climb (攀爬) KK: [klaɪm]" },
  { word: "dance", meaning: "跳舞", kk: "[dæns]", tip: "dance (跳舞) KK: [dæns]" },
  { word: "sing", meaning: "唱歌", kk: "[sɪŋ]", tip: "sing (唱歌) KK: [sɪŋ]" },
  { word: "draw", meaning: "繪畫", kk: "[drɔ]", tip: "draw (繪畫) KK: [drɔ]" },
  { word: "paint", meaning: "油彩塗色", kk: "[pent]", tip: "paint (塗色) KK: [pent]" },
  { word: "read", meaning: "閱讀", kk: "[rid]", tip: "read (閱讀) KK: [rid]" },
  { word: "write", meaning: "書寫", kk: "[raɪt]", tip: "write (書寫) KK: [raɪt]" },
  { word: "speak", meaning: "說話", kk: "[spik]", tip: "speak (說話) KK: [spik]" },
  { word: "listen", meaning: "聆聽", kk: "[ˋlɪsn]", tip: "listen (聆聽) KK: [ˋlɪsn]" },
  { word: "shout", meaning: "大喊", kk: "[ʃaʊt]", tip: "shout (大喊) KK: [ʃaʊt]" },
  { word: "laugh", meaning: "大笑", kk: "[læf]", tip: "laugh (大笑) KK: [læf]" },
  { word: "cry", meaning: "哭泣", kk: "[kraɪ]", tip: "cry (哭泣) KK: [kraɪ]" },
  { word: "smile", meaning: "微笑", kk: "[smaɪl]", tip: "smile (微笑) KK: [smaɪl]" },
  { word: "sleep", meaning: "睡覺", kk: "[slip]", tip: "sleep (睡覺) KK: [slip]" },
  { word: "cook", meaning: "烹飪", kk: "[kʊk]", tip: "cook (烹飪) KK: [kʊk]" },
  { word: "clean", meaning: "打掃", kk: "[klin]", tip: "clean (打掃) KK: [klin]" },
  { word: "ride", meaning: "騎乘", kk: "[raɪd]", tip: "ride (騎乘) KK: [raɪd]" },
  { word: "drive", meaning: "駕駛", kk: "[draɪv]", tip: "drive (駕駛) KK: [draɪv]" },
  { word: "fly", meaning: "飛行", kk: "[flaɪ]", tip: "fly (飛行) KK: [flaɪ]" },
  { word: "catch", meaning: "接住 / 捕捉", kk: "[kætʃ]", tip: "catch (接住) KK: [kætʃ]" },
  { word: "throw", meaning: "投擲", kk: "[θro]", tip: "throw (投擲) KK: [θro]" },
  { word: "kick", meaning: "踢", kk: "[kɪk]", tip: "kick (踢) KK: [kɪk]" },
  { word: "hit", meaning: "打擊", kk: "[hɪt]", tip: "hit (打擊) KK: [hɪt]" },
  { word: "pull", meaning: "拉", kk: "[pʊl]", tip: "pull (拉) KK: [pʊl]" },
  { word: "push", meaning: "推", kk: "[pʊʃ]", tip: "push (推) KK: [pʊʃ]" },
  { word: "clapping", meaning: "拍手", kk: "[ˋklæpɪŋ]", tip: "clap (拍手) KK: [klæp]" },
  { word: "stand", meaning: "站立", kk: "[stænd]", tip: "stand (站立) KK: [stænd]" },
  { word: "sit", meaning: "坐下", kk: "[sɪt]", tip: "sit (坐下) KK: [sɪt]" },
  { word: "wait", meaning: "等待", kk: "[wet]", tip: "wait (等待) KK: [wet]" },
  { word: "study", meaning: "研讀 / 學習", kk: "[ˋstʌdɪ]", tip: "study (學習) KK: [ˋstʌdɪ]" },
  { word: "teach", meaning: "教學", kk: "[titʃ]", tip: "teach (教學) KK: [titʃ]" },
  { word: "learn", meaning: "學習", kk: "[lɝn]", tip: "learn (學習) KK: [lɝn]" },
  { word: "help", meaning: "幫助", kk: "[hɛlp]", tip: "help (幫助) KK: [hɛlp]" },
  { word: "visit", meaning: "拜訪 / 參觀", kk: "[ˋvɪzɪt]", tip: "visit (拜訪) KK: [ˋvɪzɪt]" },
  { word: "buy", meaning: "買", kk: "[baɪ]", tip: "buy (買) KK: [baɪ]" },
  { word: "sell", meaning: "賣", kk: "[sɛl]", tip: "sell (賣) KK: [sɛl]" },
  { word: "pay", meaning: "支付", kk: "[pe]", tip: "pay (支付) KK: [pe]" },
  { word: "cost", meaning: "花費 (金錢)", kk: "[kɔst]", tip: "cost (花費) KK: [kɔst]" },
  { word: "spend", meaning: "花費 (時間/金錢)", kk: "[spɛnd]", tip: "spend (花費) KK: [spɛnd]" },
  { word: "take", meaning: "搭乘 / 拿取", kk: "[tek]", tip: "take (搭乘/拿) KK: [tek]" },
  { word: "bring", meaning: "帶來", kk: "[brɪŋ]", tip: "bring (帶來) KK: [brɪŋ]" },
  { word: "carry", meaning: "搬運 / 攜帶", kk: "[ˋkærɪ]", tip: "carry (搬運) KK: [ˋkærɪ]" },
  { word: "wear", meaning: "穿戴", kk: "[wɛr]", tip: "wear (穿戴) KK: [wɛr]" },

  // 4. 休閒、嗜好與運動樂器
  { word: "badminton", meaning: "羽毛球", kk: "[ˋbædmɪntən]", tip: "badminton (羽毛球) KK: [ˋbædmɪntən]" },
  { word: "bowling", meaning: "保齡球", kk: "[ˋbolɪŋ]", tip: "bowling (保齡球) KK: [ˋbolɪŋ]" },
  { word: "basketball", meaning: "籃球", kk: "[ˋbæskɪt͵bɔl]", tip: "basketball (籃球) KK: [ˋbæskɪt͵bɔl]" },
  { word: "baseball", meaning: "棒球", kk: "[ˋbes͵bɔl]", tip: "baseball (棒球) KK: [ˋbes͵bɔl]" },
  { word: "football", meaning: "足球", kk: "[ˋfʊt͵bɔl]", tip: "football (足球) KK: [ˋfʊt͵bɔl]" },
  { word: "soccer", meaning: "英式足球", kk: "[ˋsɑkɚ]", tip: "soccer (足球) KK: [ˋsɑkɚ]" },
  { word: "golf", meaning: "高爾夫球", kk: "[gɑlf]", tip: "golf (高爾夫) KK: [gɑlf]" },
  { word: "tennis", meaning: "網球", kk: "[ˋtɛnɪs]", tip: "tennis (網球) KK: [ˋtɛnɪs]" },
  { word: "table tennis", meaning: "乒乓球", kk: "[ˋteb! ͵tɛnɪs]", tip: "table tennis (乒乓球) KK: [ˋteb! ͵tɛnɪs]" },
  { word: "guitar", meaning: "吉他", kk: "[gɪˋtɑr]", tip: "guitar (吉他) KK: [gɪˋtɑr]" },
  { word: "piano", meaning: "鋼琴", kk: "[pɪˋæno]", tip: "piano (鋼琴) KK: [pɪˋæno]" },
  { word: "violin", meaning: "小提琴", kk: "[͵vaɪəˋlɪn]", tip: "violin (小提琴) KK: [͵vaɪəˋlɪn]" },
  { word: "drum", meaning: "鼓", kk: "[drʌm]", tip: "drum (鼓) KK: [drʌm]" },
  { word: "flute", meaning: "長笛", kk: "[flut]", tip: "flute (長笛) KK: [flut]" },
  { word: "kite", meaning: "風箏", kk: "[kaɪt]", tip: "kite (風箏) KK: [kaɪt]" },
  { word: "bicycle", meaning: "腳踏車", kk: "[ˋbaɪsɪk!]", tip: "bicycle (腳踏車) KK: [ˋbaɪsɪk!]" },
  { word: "kung fu", meaning: "功夫", kk: "[ˋkʊŋ ˋfu]", tip: "kung fu (功夫) KK: [ˋkʊŋ ˋfu]" },
  { word: "video game", meaning: "電玩遊戲", kk: "[ˋvɪdɪo gem]", tip: "video game (電玩) KK: [ˋvɪdɪo gem]" },
  { word: "comic book", meaning: "漫畫書", kk: "[ˋkɑmɪk bʊk]", tip: "comic book (漫畫書) KK: [ˋkɑmɪk bʊk]" },
  { word: "hobby", meaning: "嗜好", kk: "[ˋhɑbɪ]", tip: "hobby (嗜好) KK: [ˋhɑbɪ]" },
  { word: "movie", meaning: "電影", kk: "[ˋmuvɪ]", tip: "movie (電影) KK: [ˋmuvɪ]" },
  { word: "science fiction", meaning: "科幻片", kk: "[ˋsaɪəns ˋfɪkʃən]", tip: "science fiction (科幻片) KK: [ˋsaɪəns ˋfɪkʃən]" },
  { word: "horror", meaning: "恐怖片", kk: "[ˋhɔrɚ]", tip: "horror (恐怖片) KK: [ˋhɔrɚ]" },
  { word: "adventure", meaning: "冒險", kk: "[ədˋvɛntʃɚ]", tip: "adventure (冒險) KK: [ədˋvɛntʃɚ]" },
  { word: "party", meaning: "派對", kk: "[ˋpɑrtɪ]", tip: "party (派對) KK: [ˋpɑrtɪ]" },
  { word: "game", meaning: "遊戲 / 比賽", kk: "[gem]", tip: "game (遊戲) KK: [gem]" },
  { word: "toy", meaning: "玩具", kk: "[tɔɪ]", tip: "toy (玩具) KK: [tɔɪ]" },
  { word: "doll", meaning: "洋娃娃", kk: "[dɑl]", tip: "doll (洋娃娃) KK: [dɑl]" },

  // 5. 學校與公共場所
  { word: "kitchen", meaning: "廚房", kk: "[ˋkɪtʃɪn]", tip: "kitchen (廚房) KK: [ˋkɪtʃɪn]" },
  { word: "bedroom", meaning: "臥室", kk: "[ˋbɛd͵rum]", tip: "bedroom (臥室) KK: [ˋbɛd͵rum]" },
  { word: "bathroom", meaning: "浴室", kk: "[ˋbæθ͵rum]", tip: "bathroom (浴室) KK: [ˋbæθ͵rum]" },
  { word: "living room", meaning: "客廳", kk: "[ˋlɪvɪŋ ͵rum]", tip: "living room (客廳) KK: [ˋlɪvɪŋ ͵rum]" },
  { word: "dining room", meaning: "飯廳", kk: "[ˋdaɪnɪŋ ͵rum]", tip: "dining room (飯廳) KK: [ˋdaɪnɪŋ ͵rum]" },
  { word: "balcony", meaning: "陽台", kk: "[ˋbælkənɪ]", tip: "balcony (陽台) KK: [ˋbælkənɪ]" },
  { word: "garden", meaning: "花園", kk: "[ˋgɑrdn]", tip: "garden (花園) KK: [ˋgɑrdn]" },
  { word: "garage", meaning: "車庫", kk: "[gəˋrɑʒ]", tip: "garage (車庫) KK: [gəˋrɑʒ]" },
  { word: "apartment", meaning: "公寓", kk: "[əˋpɑrtmənt]", tip: "apartment (公寓) KK: [əˋpɑrtmənt]" },
  { word: "hospital", meaning: "醫院", kk: "[ˋhɑspɪt!]", tip: "hospital (醫院) KK: [ˋhɑspɪt!]" },
  { word: "supermarket", meaning: "超級市場", kk: "[ˋsupɚ͵mɑrkɪt]", tip: "supermarket (超市) KK: [ˋsupɚ͵mɑrkɪt]" },
  { word: "restaurant", meaning: "餐廳", kk: "[ˋrɛstərənt]", tip: "restaurant (餐廳) KK: [ˋrɛstərənt]" },
  { word: "bakery", meaning: "麵包店", kk: "[ˋbekərɪ]", tip: "bakery (麵包店) KK: [ˋbekərɪ]" },
  { word: "bookstore", meaning: "書店", kk: "[ˋbʊk͵stor]", tip: "bookstore (書店) KK: [ˋbʊk͵stor]" },
  { word: "library", meaning: "圖書館", kk: "[ˋlaɪbrɛrɪ]", tip: "library (圖書館) KK: [ˋlaɪbrɛrɪ]" },
  { word: "movie theater", meaning: "電影院", kk: "[ˋmuvɪ ͵θɪətɚ]", tip: "movie theater (電影院) KK: [ˋmuvɪ ͵θɪətɚ]" },
  { word: "post office", meaning: "郵局", kk: "[post ˋɔfɪs]", tip: "post office (郵局) KK: [post ˋɔfɪs]" },
  { word: "park", meaning: "公園", kk: "[pɑrk]", tip: "park (公園) KK: [pɑrk]" },
  { word: "zoo", meaning: "動物園", kk: "[zu]", tip: "zoo (動物園) KK: [zu]" },
  { word: "school", meaning: "學校", kk: "[skul]", tip: "school (學校) KK: [skul]" },
  { word: "station", meaning: "車站", kk: "[ˋsteʃən]", tip: "station (車站) KK: [ˋsteʃən]" },
  { word: "airport", meaning: "機場", kk: "[ˋɛr͵pɔrt]", tip: "airport (機場) KK: [ˋɛr͵pɔrt]" },
  { word: "bank", meaning: "銀行", kk: "[bæŋk]", tip: "bank (銀行) KK: [bæŋk]" },
  { word: "classmate", meaning: "同學", kk: "[ˋklæs͵met]", tip: "classmate (同學) KK: [ˋklæs͵met]" },
  { word: "teacher", meaning: "老師", kk: "[ˋtitʃɚ]", tip: "teacher (老師) KK: [ˋtitʃɚ]" },
  { word: "student", meaning: "學生", kk: "[ˋstjudnt]", tip: "student (學生) KK: [ˋstjudnt]" },
  { word: "classroom", meaning: "教室", kk: "[ˋklæs͵rum]", tip: "classroom (教室) KK: [ˋklæs͵rum]" },
  { word: "homework", meaning: "家庭作業", kk: "[ˋhom͵wɝk]", tip: "homework (家庭作業) KK: [ˋhom͵wɝk]" },
  { word: "desk", meaning: "書桌", kk: "[dɛsk]", tip: "desk (書桌) KK: [dɛsk]" },
  { word: "chair", meaning: "椅子", kk: "[tʃɛr]", tip: "chair (椅子) KK: [tʃɛr]" },
  { word: "blackboard", meaning: "黑板", kk: "[ˋblæk͵bɔrd]", tip: "blackboard (黑板) KK: [ˋblæk͵bɔrd]" },
  { word: "book", meaning: "書籍", kk: "[bʊk]", tip: "book (書籍) KK: [bʊk]" },
  { word: "pencil", meaning: "鉛筆", kk: "[ˋpɛns!]", tip: "pencil (鉛筆) KK: [ˋpɛns!]" },
  { word: "pen", meaning: "原子筆", kk: "[pɛn]", tip: "pen (原子筆) KK: [pɛn]" },
  { word: "eraser", meaning: "橡皮擦", kk: "[ɪˋresɚ]", tip: "eraser (橡皮擦) KK: [ɪˋresɚ]" },
  { word: "ruler", meaning: "尺", kk: "[ˋrulɚ]", tip: "ruler (尺) KK: [ˋrulɚ]" },
  { word: "bag", meaning: "書包 / 袋子", kk: "[bæg]", tip: "bag (書包) KK: [bæg]" },
  { word: "lesson", meaning: "課程", kk: "[ˋlɛsn]", tip: "lesson (課程) KK: [ˋlɛsn]" },
  { word: "test", meaning: "考試", kk: "[tɛst]", tip: "test (考試) KK: [tɛst]" },
  { word: "paper", meaning: "紙張", kk: "[ˋpepɚ]", tip: "paper (紙張) KK: [ˋpepɚ]" },
  { word: "marker", meaning: "彩色筆", kk: "[ˋmɑrkɚ]", tip: "marker (彩色筆) KK: [ˋmɑrkɚ]" },
  { word: "pencil case", meaning: "鉛筆盒", kk: "[ˋpɛns! kes]", tip: "pencil case (鉛筆盒) KK: [ˋpɛns! kes]" },

  // 6. 人物角色、親屬稱謂
  { word: "parents", meaning: "父母親", kk: "[ˋpɛrənts]", tip: "parents (父母親) KK: [ˋpɛrənts]" },
  { word: "grandparents", meaning: "祖父母", kk: "[ˋgrænd͵pɛrənts]", tip: "grandparents (祖父母) KK: [ˋgrænd͵pɛrənts]" },
  { word: "father", meaning: "父親", kk: "[ˋfɑðɚ]", tip: "father (父親) KK: [ˋfɑðɚ]" },
  { word: "mother", meaning: "母親", kk: "[ˋmʌðɚ]", tip: "mother (母親) KK: [ˋmʌðɚ]" },
  { word: "brother", meaning: "兄弟", kk: "[ˋbrʌðɚ]", tip: "brother (兄弟) KK: [ˋbrʌðɚ]" },
  { word: "sister", meaning: "姊妹", kk: "[ˋsɪstɚ]", tip: "sister (姊妹) KK: [ˋsɪstɚ]" },
  { word: "baby", meaning: "嬰兒", kk: "[ˋbebɪ]", tip: "baby (嬰兒) KK: [ˋbebɪ]" },
  { word: "friend", meaning: "朋友", kk: "[frɛnd]", tip: "friend (朋友) KK: [frɛnd]" },
  { word: "doctor", meaning: "醫生", kk: "[ˋdɑktɚ]", tip: "doctor (醫生) KK: [ˋdɑktɚ]" },
  { word: "nurse", meaning: "護士", kk: "[nɝs]", tip: "nurse (護士) KK: [nɝs]" },
  { word: "police officer", meaning: "警察", kk: "[pəˋlis ͵ɔfɪsɚ]", tip: "police officer (警察) KK: [pəˋlis ͵ɔfɪsɚ]" },
  { word: "driver", meaning: "司機", kk: "[ˋdraɪvɚ]", tip: "driver (司機) KK: [ˋdraɪvɚ]" },
  { word: "farmer", meaning: "農夫", kk: "[ˋfɑrmɚ]", tip: "farmer (農夫) KK: [ˋfɑrmɚ]" },
  { word: "singer", meaning: "歌手", kk: "[ˋsɪŋɚ]", tip: "singer (歌手) KK: [ˋsɪŋɚ]" },
  { word: "boy", meaning: "男孩", kk: "[bɔɪ]", tip: "boy (男孩) KK: [bɔɪ]" },
  { word: "girl", meaning: "女孩", kk: "[gɝl]", tip: "girl (女孩) KK: [gɝl]" },
  { word: "man", meaning: "男人", kk: "[mæn]", tip: "man (男人) KK: [mæn]" },
  { word: "woman", meaning: "女人", kk: "[ˋwʊmən]", tip: "woman (女人) KK: [ˋwʊmən]" },
  { word: "kid", meaning: "小孩", kk: "[kɪd]", tip: "kid (小孩) KK: [kɪd]" },
  { word: "neighbor", meaning: "鄰居", kk: "[ˋnebɚ]", tip: "neighbor (鄰居) KK: [ˋnebɚ]" },

  // 7. 特質、情緒與描述形容詞
  { word: "scary", meaning: "恐怖的", kk: "[ˋskɛrɪ]", tip: "scary (恐怖的) KK: [ˋskɛrɪ]" },
  { word: "funny", meaning: "滑稽有趣的", kk: "[ˋfʌnɪ]", tip: "funny (有趣的) KK: [ˋfʌnɪ]" },
  { word: "happy", meaning: "快樂的", kk: "[ˋhæpɪ]", tip: "happy (快樂的) KK: [ˋhæpɪ]" },
  { word: "sad", meaning: "悲傷的", kk: "[sæd]", tip: "sad (悲傷的) KK: [sæd]" },
  { word: "tired", meaning: "疲憊的", kk: "[taɪrd]", tip: "tired (疲憊的) KK: [taɪrd]" },
  { word: "hungry", meaning: "飢餓的", kk: "[ˋhʌŋgrɪ]", tip: "hungry (飢餓的) KK: [ˋhʌŋgrɪ]" },
  { word: "thirsty", meaning: "口渴的", kk: "[ˋθɝstɪ]", tip: "thirsty (口渴的) KK: [ˋθɝstɪ]" },
  { word: "sick", meaning: "生病的", kk: "[sɪk]", tip: "sick (生病的) KK: [sɪk]" },
  { word: "tall", meaning: "高的", kk: "[tɔl]", tip: "tall (高的) KK: [tɔl]" },
  { word: "short", meaning: "矮的 / 短的", kk: "[ʃɔrt]", tip: "short (矮/短) KK: [ʃɔrt]" },
  { word: "thin", meaning: "瘦的 / 薄的", kk: "[θɪn]", tip: "thin (瘦的) KK: [θɪn]" },
  { word: "fat", meaning: "胖的", kk: "[fæt]", tip: "fat (胖的) KK: [fæt]" },
  { word: "big", meaning: "大的", kk: "[bɪg]", tip: "big (大的) KK: [bɪg]" },
  { word: "small", meaning: "小的", kk: "[smɔl]", tip: "small (小的) KK: [smɔl]" },
  { word: "hot", meaning: "炎熱的", kk: "[hɑt]", tip: "hot (熱的) KK: [hɑt]" },
  { word: "cold", meaning: "寒冷的", kk: "[kold]", tip: "cold (冷的) KK: [kold]" },
  { word: "warm", meaning: "溫暖的", kk: "[wɔrm]", tip: "warm (溫暖的) KK: [wɔrm]" },
  { word: "cool", meaning: "涼爽的 / 酷的", kk: "[kul]", tip: "cool (涼爽的) KK: [kul]" },
  { word: "new", meaning: "新的", kk: "[nju]", tip: "new (新的) KK: [nju]" },
  { word: "old", meaning: "舊的 / 年邁的", kk: "[old]", tip: "old (舊的/老的) KK: [old]" },
  { word: "young", meaning: "年輕的", kk: "[jʌŋ]", tip: "young (年輕的) KK: [jʌŋ]" },
  { word: "clean", meaning: "乾淨的", kk: "[klin]", tip: "clean (乾淨的) KK: [klin]" },
  { word: "dirty", meaning: "骯髒的", kk: "[ˋdɝtɪ]", tip: "dirty (骯髒的) KK: [ˋdɝtɪ]" },
  { word: "difficult", meaning: "困難的", kk: "[ˋdɪfək!t]", tip: "difficult (困難的) KK: [ˋdɪfək!t]" },
  { word: "easy", meaning: "容易的", kk: "[ˋizɪ]", tip: "easy (容易的) KK: [ˋizɪ]" },
  { word: "talented", meaning: "有天賦的", kk: "[ˋtæləntɪd]", tip: "talented (有天賦的) KK: [ˋtæləntɪd]" },
  { word: "busy", meaning: "忙碌的", kk: "[ˋbɪzɪ]", tip: "busy (忙碌的) KK: [ˋbɪzɪ]" },
  { word: "sweet", meaning: "甜的", kk: "[swit]", tip: "sweet (甜的) KK: [swit]" },
  { word: "loud", meaning: "大聲的", kk: "[laʊd]", tip: "loud (大聲的) KK: [laʊd]" },
  { word: "quiet", meaning: "安靜的", kk: "[ˋkwaɪət]", tip: "quiet (安靜的) KK: [ˋkwaɪət]" },
  { word: "strong", meaning: "強壯的", kk: "[strɔŋ]", tip: "strong (強壯的) KK: [strɔŋ]" },
  { word: "weak", meaning: "虛弱的", kk: "[wik]", tip: "weak (虛弱的) KK: [wik]" },
  { word: "fast", meaning: "快速的", kk: "[fæst]", tip: "fast (快速的) KK: [fæst]" },
  { word: "slow", meaning: "緩慢的", kk: "[slo]", tip: "slow (緩慢的) KK: [slo]" },
  { word: "smart", meaning: "聰明的", kk: "[smɑrt]", tip: "smart (聰明的) KK: [smɑrt]" },
  { word: "kind", meaning: "親切仁慈的", kk: "[kaɪnd]", tip: "kind (親切的) KK: [kaɪnd]" },
  { word: "friendly", meaning: "友善的", kk: "[ˋfrɛndlɪ]", tip: "friendly (友善的) KK: [ˋfrɛndlɪ]" },
  { word: "heavy", meaning: "沉重的", kk: "[ˋhɛvɪ]", tip: "heavy (重的) KK: [ˋhɛvɪ]" },
  { word: "light", meaning: "輕巧的", kk: "[laɪt]", tip: "light (輕的) KK: [laɪt]" },
  { word: "pretty", meaning: "漂亮的", kk: "[ˋprɪtɪ]", tip: "pretty (漂亮的) KK: [ˋprɪtɪ]" },
  { word: "handsome", meaning: "英俊的", kk: "[ˋhænsəm]", tip: "handsome (英俊的) KK: [ˋhænsəm]" },
  { word: "famous", meaning: "著名的", kk: "[ˋfeməs]", tip: "famous (著名的) KK: [ˋfeməs]" },
  { word: "free", meaning: "免費的 / 空閒的", kk: "[fri]", tip: "free (免費/空閒) KK: [fri]" },

  // 8. 時間、副詞與方位介系詞
  { word: "second", meaning: "秒", kk: "[ˋsɛkənd]", tip: "second (秒) KK: [ˋsɛkənd]" },
  { word: "minute", meaning: "分鐘", kk: "[ˋmɪnɪt]", tip: "minute (分鐘) KK: [ˋmɪnɪt]" },
  { word: "hour", meaning: "小時", kk: "[aʊr]", tip: "hour (小時) KK: [aʊr]" },
  { word: "quarter", meaning: "一刻鐘 (15分)", kk: "[ˋkwɔrtɚ]", tip: "quarter (一刻鐘) KK: [ˋkwɔrtɚ]" },
  { word: "noon", meaning: "中午", kk: "[nun]", tip: "noon (中午) KK: [nun]" },
  { word: "morning", meaning: "早晨", kk: "[ˋmɔrnɪŋ]", tip: "morning (早晨) KK: [ˋmɔrnɪŋ]" },
  { word: "afternoon", meaning: "下午", kk: "[ˋæftɚˋnun]", tip: "afternoon (下午) KK: [ˋæftɚˋnun]" },
  { word: "evening", meaning: "傍晚", kk: "[ˋivnɪŋ]", tip: "evening (傍晚) KK: [ˋivnɪŋ]" },
  { word: "night", meaning: "夜晚", kk: "[naɪt]", tip: "night (夜晚) KK: [naɪt]" },
  { word: "today", meaning: "今天", kk: "[təˋde]", tip: "today (今天) KK: [təˋde]" },
  { word: "tomorrow", meaning: "明天", kk: "[təˋmɑro]", tip: "tomorrow (明天) KK: [təˋmɑro]" },
  { word: "yesterday", meaning: "昨天", kk: "[ˋjɛstɚde]", tip: "yesterday (昨天) KK: [ˋjɛstɚde]" },
  { word: "always", meaning: "總是 (100%)", kk: "[ˋɔlwez]", tip: "always (總是) KK: [ˋɔlwez]" },
  { word: "usually", meaning: "通常 (80%)", kk: "[ˋjuʒʊəlɪ]", tip: "usually (通常) KK: [ˋjuʒʊəlɪ]" },
  { word: "often", meaning: "經常 (60%)", kk: "[ˋɔfən]", tip: "often (經常) KK: [ˋɔfən]" },
  { word: "sometimes", meaning: "有時 (40%)", kk: "[ˋsʌm͵taɪmz]", tip: "sometimes (有時) KK: [ˋsʌm͵taɪmz]" },
  { word: "rarely", meaning: "很少 (10%)", kk: "[ˋrɛrlɪ]", tip: "rarely (很少) KK: [ˋrɛrlɪ]" },
  { word: "never", meaning: "從未 (0%)", kk: "[ˋnɛvɚ]", tip: "never (從未) KK: [ˋnɛvɚ]" },
  { word: "between", meaning: "在…兩者之間", kk: "[bɪˋtwin]", tip: "between (兩者之間) KK: [bɪˋtwin]" },
  { word: "beside", meaning: "在…旁邊", kk: "[bɪˋsaɪd]", tip: "beside (旁邊) KK: [bɪˋsaɪd]" },
  { word: "under", meaning: "在…下方", kk: "[ˋʌndɚ]", tip: "under (下方) KK: [ˋʌndɚ]" },
  { word: "behind", meaning: "在…後面", kk: "[bɪˋhaɪnd]", tip: "behind (後面) KK: [bɪˋhaɪnd]" },
  { word: "near", meaning: "在…附近", kk: "[nɪr]", tip: "near (附近) KK: [nɪr]" },
  { word: "early", meaning: "提早地", kk: "[ˋɝlɪ]", tip: "early (早) KK: [ˋɝlɪ]" },
  { word: "late", meaning: "遲到地", kk: "[let]", tip: "late (晚) KK: [let]" },

  // 9. 身體部位
  { word: "head", meaning: "頭部", kk: "[hɛd]", tip: "head (頭) KK: [hɛd]" },
  { word: "hair", meaning: "頭髮", kk: "[hɛr]", tip: "hair (頭髮) KK: [hɛr]" },
  { word: "eye", meaning: "眼睛", kk: "[aɪ]", tip: "eye (眼睛) KK: [aɪ]" },
  { word: "ear", meaning: "耳朵", kk: "[ɪr]", tip: "ear (耳朵) KK: [ɪr]" },
  { word: "nose", meaning: "鼻子", kk: "[noz]", tip: "nose (鼻子) KK: [noz]" },
  { word: "mouth", meaning: "嘴巴", kk: "[maʊθ]", tip: "mouth (嘴巴) KK: [maʊθ]" },
  { word: "face", meaning: "臉部", kk: "[fes]", tip: "face (臉) KK: [fes]" },
  { word: "hand", meaning: "手掌", kk: "[hænd]", tip: "hand (手) KK: [hænd]" },
  { word: "foot", meaning: "腳掌", kk: "[fʊt]", tip: "foot (腳掌) KK: [fʊt]" },
  { word: "leg", meaning: "腿部", kk: "[lɛg]", tip: "leg (腿) KK: [lɛg]" },

  // 10. 衣物配件
  { word: "shirt", meaning: "襯衫", kk: "[ʃɝt]", tip: "shirt (襯衫) KK: [ʃɝt]" },
  { word: "pants", meaning: "長褲", kk: "[pænts]", tip: "pants (長褲) KK: [pænts]" },
  { word: "shorts", meaning: "短褲", kk: "[ʃɔrts]", tip: "shorts (短褲) KK: [ʃɔrts]" },
  { word: "dress", meaning: "洋裝", kk: "[drɛs]", tip: "dress (洋裝) KK: [drɛs]" },
  { word: "skirt", meaning: "裙子", kk: "[skɝt]", tip: "skirt (裙子) KK: [skɝt]" },
  { word: "shoes", meaning: "鞋子", kk: "[ʃuz]", tip: "shoes (鞋子) KK: [ʃuz]" },
  { word: "socks", meaning: "襪子", kk: "[sɑks]", tip: "socks (襪子) KK: [sɑks]" },
  { word: "hat", meaning: "帽子", kk: "[hæt]", tip: "hat (帽子) KK: [hæt]" },

  // 11. 交通工具
  { word: "car", meaning: "汽車", kk: "[kɑr]", tip: "car (汽車) KK: [kɑr]" },
  { word: "bus", meaning: "公車", kk: "[bʌs]", tip: "bus (公車) KK: [bʌs]" },
  { word: "train", meaning: "火車", kk: "[tren]", tip: "train (火車) KK: [tren]" },
  { word: "airplane", meaning: "飛機", kk: "[ˋɛr͵plen]", tip: "airplane (飛機) KK: [ˋɛr͵plen]" }
];

// 單字動態出題產生器
window.buildDynamicVocabQuiz = function(count, stageTitle) {
  const pool = Array.isArray(window.bLevelVocabMasterPool) && window.bLevelVocabMasterPool.length > 0 ? window.bLevelVocabMasterPool : [];
  const poolShuffled = pool.slice().sort(function() { return Math.random() - 0.5; });
  const selectedTargets = poolShuffled.slice(0, Math.min(count, poolShuffled.length));

  return selectedTargets.map(function(target) {
    const distractors = pool
      .filter(function(item) { return item.word !== target.word; })
      .sort(function() { return Math.random() - 0.5; })
      .slice(0, 3);

    const allOptions = [target].concat(distractors).sort(function() { return Math.random() - 0.5; });
    const correctIdx = allOptions.findIndex(function(item) { return item.word === target.word; });

    return {
      qId: generateQuestionHash("vocab_" + target.word),
      part: stageTitle,
      prompt: "🎧 請聽發音，選出正確的單字：",
      word: target.word,
      meaning: target.meaning,
      options: allOptions.map(function(item) { return item.word; }),
      meanings: allOptions.map(function(item) { return item.meaning; }),
      kkList: allOptions.map(function(item) { return item.kk; }),
      ans: correctIdx,
      audioText: target.word,
      tip: "💡 " + target.tip
    };
  });
};

// 實例化全域單字題庫
window.rawVocabBLevel = window.buildDynamicVocabQuiz(50, "⭐ B級全範圍綜合測驗 (50題)");

// ==========================================
// 4. Practice 1 真題資料庫 (全域唯一掛載)
// ==========================================
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
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 38: What does Stephen think of his parents?", audioText: "Listen to the conversation. Did you tell your parents that you don't want to go? I feel they never listen to me. I am afraid if I tell them, they will still want me to go to Singapore with them. If you stay here, who is going to take care of you? My grandparents live near us. I can live with them. Now listen to Question 38: What does Stephen think of his parents?", options: ["His parents usually listen to him.", "His parents sometimes listen to him.", "His parents never listen to him."], ans: 2, repeat: true, tip: "💡【頻率詞細節】對話中提到 I feel they NEVER listen to me。" },
  { part: "Part 3/4: Conversation (39)", prompt: "Question 39: Who does Stephen want to live with?", audioText: "From the conversation, listen to Question 39: Who does Stephen want to live with?", options: ["His parents.", "His brother.", "His grandparents."], ans: 2, tip: "💡【人物細節】Stephen 提到 My grandparents live near us. I can live with them。" },
  { part: "Part 3/4: Conversation (40)", prompt: "Question 40: What does Tina tell Stephen to do?", audioText: "From the conversation, listen to Question 40: What does Tina tell Stephen to do?", options: ["She tells Stephen to tell his parents about his plan.", "She tells Stephen not to tell his parents about his plan.", "She tells Stephen to tell his brother about his plan."], ans: 0, tip: "💡【建議抓取】Tina 建議 I think you should tell your parents about your plan。" }
];

window.rawMockP1 = window.rawMockP1Data.map(function(item, idx) {
  return Object.assign({}, item, { qId: generateQuestionHash("p1_" + idx + "_" + item.prompt) });
});

// ==========================================
// 5. Practice 2 真題資料庫 (全域唯一掛載)
// ==========================================
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
  { part: "Part 2: Question Response", prompt: "Question 15: Where are you doing your homework?", audioText: "Question 15: Where are you doing your homework? Statement A: You are doing your homework in front of the television. Statement B: I am playing the piano in the dining room. Statement C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 1, tip: "💡【地點問答】問你在哪裡做作業，回答用 I am doing it at my desk in the bedroom。" },
  { part: "Part 2: Question Response", prompt: "Question 16: Are there any pictures on the wall?", audioText: "Question 20: Are there any pictures on the wall? Statement A: No, there are not any pictures. Statement B: He is looking for his pictures. Statement C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0, tip: "💡【存在句簡答】Are there any... 否定簡答為 No, there are not any pictures。" },
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
  { part: "Part 3: Conversations (40)", prompt: "Question 40: Why does Helen have to run?", audioText: "From the previous conversation, listen to Question 40: Why does Helen have to run?", options: ["She wants to exercise.", "She needs to catch a bus.", "The movie is about to start."], ans: 2, tip: "💡【原因細節】Helen 說 The movie is about to start（電影即將開始）。" },
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

// ==========================================
// 5. Practice 2 真題資料庫 (全域唯一掛載)
// ==========================================
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
  { part: "Part 2: Question Response", prompt: "Question 15: Where are you doing your homework?", audioText: "Question 15: Where are you doing your homework? Statement A: You are doing your homework in front of the television. Statement B: I am playing the piano in the dining room. Statement C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 1, tip: "💡【地點問答】問你在哪裡做作業，回答用 I am doing it at my desk in the bedroom。" },
  { part: "Part 2: Question Response", prompt: "Question 16: Are there any pictures on the wall?", audioText: "Question 20: Are there any pictures on the wall? Statement A: No, there are not any pictures. Statement B: He is looking for his pictures. Statement C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0, tip: "💡【存在句簡答】Are there any... 否定簡答為 No, there are not any pictures。" },
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

window.rawMockP2 = window.rawMockP2Data.map(function(item, idx) {
  return Object.assign({}, item, { qId: generateQuestionHash("p2_" + idx + "_" + item.prompt) });
});