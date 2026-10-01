/**
 * ===================================================================
 * @file questions.js
 * @description 格蘭英語 B 級全方位題庫 (內嵌 Part 1 官方看圖題 SVG 向量圖)
 * @version 2.6.0
 * ===================================================================
 */

// ==========================================
// 1. Part 1 官方看圖題專用 SVG 向量插畫庫 (21 題完整內嵌)
// ==========================================
const p1SvgImages = {
  // Practice 1
  q1: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#e0f2fe"/>
    <rect x="30" y="130" width="240" height="70" fill="#94a3b8" rx="8"/>
    <ellipse cx="150" cy="140" rx="45" ry="16" fill="#cbd5e1"/>
    <rect x="142" y="105" width="16" height="25" fill="#64748b" rx="4"/>
    <!-- Julia 刷牙 -->
    <circle cx="150" cy="65" r="28" fill="#fed7aa"/>
    <path d="M130,48 Q150,30 170,48 Q150,42 130,48 Z" fill="#78350f"/>
    <circle cx="142" cy="62" r="3" fill="#1e293b"/>
    <circle cx="158" cy="62" r="3" fill="#1e293b"/>
    <path d="M142,75 Q150,82 158,75" stroke="#ea580c" stroke-width="2" fill="none"/>
    <rect x="110" y="93" width="80" height="40" fill="#f472b6" rx="10"/>
    <!-- 牙刷與泡泡 -->
    <rect x="152" y="71" width="38" height="6" fill="#0284c7" rx="3" transform="rotate(-10 152 71)"/>
    <rect x="145" y="70" width="10" height="8" fill="#ffffff" rx="2"/>
    <circle cx="142" cy="71" r="4" fill="#ffffff" opacity="0.8"/>
    <circle cx="140" cy="78" r="3" fill="#ffffff" opacity="0.8"/>
  </svg>`,

  q2: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fef3c7"/>
    <!-- 時鐘指向 12:00 (Noon) -->
    <circle cx="240" cy="50" r="32" fill="#ffffff" stroke="#475569" stroke-width="4"/>
    <line x1="240" y1="50" x2="240" y2="28" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
    <line x1="240" y1="50" x2="240" y2="34" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
    <circle cx="240" cy="50" r="3" fill="#1e293b"/>
    <text x="240" y="94" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">12:00 NOON</text>
    <!-- Janice 吃午餐 -->
    <rect x="30" y="130" width="240" height="70" fill="#b45309" rx="6"/>
    <circle cx="110" cy="70" r="24" fill="#fed7aa"/>
    <path d="M92,54 Q110,40 128,54 Z" fill="#451a03"/>
    <rect x="80" y="94" width="60" height="40" fill="#38bdf8" rx="8"/>
    <!-- 餐盤與三明治 -->
    <ellipse cx="190" cy="140" rx="35" ry="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <polygon points="175,142 205,142 190,130" fill="#f59e0b"/>
    <rect x="200" y="125" width="14" height="20" fill="#ffffff" stroke="#94a3b8" rx="2"/>
  </svg>`,

  q3: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f1f5f9"/>
    <!-- 大時鐘 10:45 (A quarter to 11) -->
    <circle cx="150" cy="100" r="75" fill="#ffffff" stroke="#3b82f6" stroke-width="8"/>
    <!-- 刻度標記 -->
    <text x="150" y="42" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">12</text>
    <text x="212" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">3</text>
    <text x="150" y="166" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">6</text>
    <text x="88" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">9</text>
    <!-- 分針指向 9 (45分) -->
    <line x1="150" y1="100" x2="90" y2="100" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
    <!-- 時針指向近 11 點 -->
    <line x1="150" y1="100" x2="120" y2="62" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="100" r="6" fill="#1e293b"/>
  </svg>`,

  q4: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#ecfdf5"/>
    <!-- 比賽看板 -->
    <rect x="40" y="25" width="220" height="150" fill="#1e293b" rx="12"/>
    <rect x="48" y="33" width="204" height="134" fill="#0f172a" rx="8" stroke="#38bdf8" stroke-width="2"/>
    <!-- 棒球圖示 -->
    <circle cx="85" cy="70" r="18" fill="#ffffff"/>
    <path d="M75,60 Q85,70 75,80" stroke="#dc2626" stroke-width="2" fill="none"/>
    <path d="M95,60 Q85,70 95,80" stroke="#dc2626" stroke-width="2" fill="none"/>
    <text x="115" y="76" font-size="16" font-weight="bold" fill="#38bdf8">BASEBALL</text>
    <line x1="60" y1="102" x2="240" y2="102" stroke="#334155" stroke-width="2"/>
    <text x="80" y="138" font-size="15" fill="#f8fafc">START TIME:</text>
    <text x="180" y="142" font-size="22" font-weight="bold" fill="#facc15">9:30</text>
  </svg>`,

  q5: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fdf4ff"/>
    <!-- 桌子上的電視機 (無其他雜物) -->
    <rect x="30" y="140" width="240" height="15" fill="#a16207" rx="3"/>
    <rect x="50" y="155" width="12" height="40" fill="#78350f"/>
    <rect x="238" y="155" width="12" height="40" fill="#78350f"/>
    <!-- 電視機主體 -->
    <rect x="85" y="45" width="130" height="85" fill="#1e293b" rx="6" stroke="#475569" stroke-width="4"/>
    <rect x="95" y="53" width="110" height="69" fill="#38bdf8" rx="4"/>
    <!-- 電視底座 -->
    <rect x="135" y="130" width="30" height="10" fill="#334155"/>
    <rect x="120" y="137" width="60" height="4" fill="#475569" rx="2"/>
  </svg>`,

  q6: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f8fafc"/>
    <!-- Andy 行事曆 (Rarely plays guitar) -->
    <rect x="50" y="20" width="200" height="160" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="3"/>
    <rect x="50" y="20" width="200" height="35" fill="#3b82f6" rx="6"/>
    <text x="150" y="44" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">YEAR PLANNER</text>
    <text x="75" y="85" font-size="13" font-weight="bold" fill="#334155">Guitar Practice:</text>
    <text x="75" y="115" font-size="14" fill="#dc2626" font-weight="bold">● Only 1 time / year</text>
    <rect x="70" y="135" width="160" height="30" fill="#fef2f2" stroke="#f87171" rx="4"/>
    <text x="150" y="155" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">FREQUENCY: RARELY (10%)</text>
  </svg>`,

  q7: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#ecfdf5"/>
    <!-- 野餐墊與食物：熱狗、薯條、餅乾 -->
    <polygon points="20,180 280,180 250,90 50,90" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <!-- 薯條 -->
    <rect x="65" y="80" width="28" height="35" fill="#ef4444" rx="3"/>
    <rect x="70" y="65" width="4" height="20" fill="#facc15"/>
    <rect x="77" y="60" width="4" height="25" fill="#facc15"/>
    <rect x="84" y="68" width="4" height="18" fill="#facc15"/>
    <!-- 熱狗堡 -->
    <ellipse cx="150" cy="115" rx="36" ry="14" fill="#f59e0b"/>
    <rect x="120" y="111" width="60" height="8" fill="#b91c1c" rx="4"/>
    <path d="M125,114 Q150,118 175,114" stroke="#facc15" stroke-width="2" fill="none"/>
    <!-- 餅乾 -->
    <circle cx="215" cy="110" r="14" fill="#d97706"/>
    <circle cx="212" cy="107" r="2" fill="#78350f"/>
    <circle cx="218" cy="112" r="2" fill="#78350f"/>
    <circle cx="238" cy="122" r="12" fill="#d97706"/>
  </svg>`,

  q8: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#eff6ff"/>
    <!-- 媽媽在畫架前畫畫 (Henry's mother is drawing) -->
    <!-- 畫架 -->
    <line x1="80" y1="60" x2="50" y2="180" stroke="#78350f" stroke-width="4"/>
    <line x1="120" y1="60" x2="150" y2="180" stroke="#78350f" stroke-width="4"/>
    <line x1="100" y1="40" x2="100" y2="180" stroke="#78350f" stroke-width="3"/>
    <rect x="55" y="60" width="90" height="65" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="85" cy="85" r="12" fill="#ef4444"/>
    <circle cx="115" cy="95" r="8" fill="#3b82f6"/>
    <!-- 媽媽拿畫筆 -->
    <circle cx="200" cy="65" r="20" fill="#fed7aa"/>
    <path d="M185,55 Q200,40 220,55" fill="#7c2d12"/>
    <rect x="185" y="85" width="30" height="60" fill="#a855f7" rx="8"/>
    <!-- 拿畫筆的手 -->
    <line x1="185" y1="95" x2="148" y2="85" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"/>
    <rect x="142" y="83" width="12" height="4" fill="#d97706"/>
  </svg>`,

  q9: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fef2f2"/>
    <!-- 禁止吸菸標誌 (No Smoking in the restaurant) -->
    <circle cx="150" cy="95" r="65" fill="#ffffff" stroke="#dc2626" stroke-width="12"/>
    <line x1="104" y1="50" x2="196" y2="140" stroke="#dc2626" stroke-width="12"/>
    <!-- 香菸 -->
    <rect x="105" y="90" width="65" height="12" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
    <rect x="165" y="90" width="20" height="12" fill="#d97706"/>
    <text x="150" y="182" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">NO SMOKING</text>
  </svg>`,

  q10: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fffbeb"/>
    <!-- 餐盤上的玉米 (Corn on the plate) -->
    <ellipse cx="150" cy="115" rx="100" ry="45" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
    <ellipse cx="150" cy="115" rx="75" ry="30" fill="#f8fafc"/>
    <!-- 金黃色玉米粒堆 -->
    <circle cx="130" cy="110" r="10" fill="#eab308"/>
    <circle cx="145" cy="105" r="9" fill="#facc15"/>
    <circle cx="160" cy="110" r="11" fill="#eab308"/>
    <circle cx="138" cy="120" r="10" fill="#facc15"/>
    <circle cx="154" cy="122" r="10" fill="#eab308"/>
    <circle cx="170" cy="118" r="8" fill="#facc15"/>
    <circle cx="120" cy="116" r="8" fill="#eab308"/>
    <text x="150" y="55" font-size="16" font-weight="bold" fill="#854d0e" text-anchor="middle">Sweet Corn on the Plate</text>
  </svg>`,

  q11: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#e0e7ff"/>
    <!-- 女孩單腳站立，另一隻腳舉起碰到頭頂 -->
    <!-- 頭部 -->
    <circle cx="135" cy="75" r="20" fill="#fed7aa"/>
    <path d="M120,65 Q135,50 150,65" fill="#1e293b"/>
    <!-- 軀幹 -->
    <line x1="135" y1="95" x2="145" y2="135" stroke="#4f46e5" stroke-width="14" stroke-linecap="round"/>
    <!-- 站立的左腳 (直立著地) -->
    <line x1="145" y1="135" x2="145" y2="185" stroke="#1e1b4b" stroke-width="8" stroke-linecap="round"/>
    <!-- 彎曲碰頭的右腳特技 -->
    <path d="M145,135 Q185,115 165,70 Q150,65 140,70" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- 腳碰到頭頂標記 -->
    <circle cx="140" cy="70" r="5" fill="#ef4444"/>
    <line x1="90" y1="185" x2="210" y2="185" stroke="#94a3b8" stroke-width="3"/>
  </svg>`
};

const p2SvgImages = {
  // Practice 2
  q1: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f8fafc"/>
    <!-- 床上有兩顆枕頭 (Two pillows on the bed) -->
    <!-- 床頭板與床身 -->
    <rect x="40" y="50" width="220" height="40" fill="#78350f" rx="6"/>
    <rect x="40" y="90" width="220" height="80" fill="#38bdf8" rx="4"/>
    <!-- 兩顆整齊的枕頭 -->
    <rect x="60" y="75" width="75" height="35" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="8"/>
    <rect x="165" y="75" width="75" height="35" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="8"/>
    <text x="150" y="185" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">Two Pillows on the Bed</text>
  </svg>`,

  q2: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f1f5f9"/>
    <!-- 人群排隊 (Waiting in line) -->
    <!-- 櫃檯 -->
    <rect x="230" y="70" width="45" height="100" fill="#64748b" rx="4"/>
    <text x="252" y="110" font-size="12" fill="#ffffff" font-weight="bold" text-anchor="middle">TICKET</text>
    <!-- 排隊的人 1 -->
    <circle cx="185" cy="85" r="14" fill="#fed7aa"/>
    <rect x="175" y="100" width="20" height="50" fill="#3b82f6" rx="4"/>
    <!-- 排隊的人 2 -->
    <circle cx="130" cy="85" r="14" fill="#fed7aa"/>
    <rect x="120" y="100" width="20" height="50" fill="#ef4444" rx="4"/>
    <!-- 排隊的人 3 -->
    <circle cx="75" cy="85" r="14" fill="#fed7aa"/>
    <rect x="65" y="100" width="20" height="50" fill="#10b981" rx="4"/>
    <line x1="30" y1="165" x2="270" y2="165" stroke="#cbd5e1" stroke-width="3"/>
    <text x="135" y="45" font-size="15" font-weight="bold" fill="#334155" text-anchor="middle">Waiting in line</text>
  </svg>`,

  q3: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#ecfdf5"/>
    <!-- 地圖：Supermarket 緊鄰 Post Office (Next to) -->
    <rect x="30" y="60" width="115" height="95" fill="#0284c7" rx="8"/>
    <text x="87" y="100" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">SUPER-</text>
    <text x="87" y="120" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">MARKET</text>
    <rect x="155" y="60" width="115" height="95" fill="#f59e0b" rx="8"/>
    <text x="212" y="100" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">POST</text>
    <text x="212" y="120" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">OFFICE</text>
    <path d="M145,108 L155,108" stroke="#dc2626" stroke-width="4"/>
    <text x="150" y="40" font-size="13" font-weight="bold" fill="#0f766e" text-anchor="middle">Next to each other</text>
  </svg>`,

  q4: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fef2f2"/>
    <!-- 小女孩不會操作電腦 (Doesn't know how to use computer) -->
    <!-- 電腦螢幕有錯誤問號 -->
    <rect x="60" y="55" width="90" height="65" fill="#334155" rx="4"/>
    <rect x="68" y="63" width="74" height="49" fill="#0284c7"/>
    <text x="105" y="96" font-size="28" font-weight="bold" fill="#ef4444" text-anchor="middle">?</text>
    <rect x="95" y="120" width="20" height="15" fill="#64748b"/>
    <!-- 困惑抱頭的小女孩 -->
    <circle cx="205" cy="85" r="22" fill="#fed7aa"/>
    <path d="M190,70 Q205,55 225,70" fill="#78350f"/>
    <!-- 搔頭困惑的手 -->
    <line x1="190" y1="120" x2="190" y2="85" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"/>
    <rect x="185" y="115" width="40" height="45" fill="#ec4899" rx="6"/>
  </svg>`,

  q5: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fdf4ff"/>
    <!-- Tina 打哈欠 (Tina yawns) -->
    <circle cx="150" cy="85" r="38" fill="#fed7aa"/>
    <path d="M120,60 Q150,40 180,60" fill="#92400e"/>
    <!-- 閉眼 -->
    <path d="M132,75 Q138,70 144,75" stroke="#1e293b" stroke-width="3" fill="none"/>
    <path d="M156,75 Q162,70 168,75" stroke="#1e293b" stroke-width="3" fill="none"/>
    <!-- 張大嘴巴打哈欠 -->
    <ellipse cx="150" cy="98" rx="14" ry="18" fill="#991b1b"/>
    <text x="195" y="90" font-size="18" font-weight="bold" fill="#86198f">Yawn~</text>
  </svg>`,

  q6: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f1f5f9"/>
    <!-- 時鐘 4:45 (A quarter to 5) -->
    <circle cx="150" cy="100" r="75" fill="#ffffff" stroke="#8b5cf6" stroke-width="8"/>
    <text x="150" y="42" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">12</text>
    <text x="212" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">3</text>
    <text x="150" y="166" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">6</text>
    <text x="88" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">9</text>
    <!-- 分針指在 9 (45分) -->
    <line x1="150" y1="100" x2="90" y2="100" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
    <!-- 時針指向近 5 點 -->
    <line x1="150" y1="100" x2="175" y2="132" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="100" r="6" fill="#1e293b"/>
  </svg>`,

  q7: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#eff6ff"/>
    <!-- 臥室裡的沙發 (Sofa in the bedroom) -->
    <!-- 床在一旁 -->
    <rect x="25" y="80" width="90" height="70" fill="#38bdf8" rx="4"/>
    <rect x="35" y="70" width="40" height="20" fill="#ffffff" stroke="#cbd5e1" rx="4"/>
    <!-- 舒適雙人沙發 -->
    <rect x="140" y="90" width="130" height="50" fill="#f59e0b" rx="8"/>
    <rect x="145" y="65" width="120" height="35" fill="#d97706" rx="6"/>
    <rect x="130" y="85" width="20" height="40" fill="#b45309" rx="4"/>
    <rect x="260" y="85" width="20" height="40" fill="#b45309" rx="4"/>
    <text x="150" y="180" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Sofa in the Bedroom</text>
  </svg>`,

  q8: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fef2f2"/>
    <!-- 餐廳禁菸標誌 (No smoking in restaurant) -->
    <circle cx="150" cy="95" r="65" fill="#ffffff" stroke="#dc2626" stroke-width="12"/>
    <line x1="104" y1="50" x2="196" y2="140" stroke="#dc2626" stroke-width="12"/>
    <rect x="105" y="90" width="65" height="12" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
    <rect x="165" y="90" width="20" height="12" fill="#d97706"/>
    <text x="150" y="182" font-size="15" font-weight="bold" fill="#991b1b" text-anchor="middle">NO SMOKING IN RESTAURANT</text>
  </svg>`,

  q9: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fdf4ff"/>
    <!-- 男孩在桌前畫圖 (The boy is drawing) -->
    <rect x="30" y="130" width="240" height="15" fill="#78350f" rx="3"/>
    <!-- 畫紙與蠟筆 -->
    <rect x="130" y="110" width="60" height="30" fill="#ffffff" stroke="#cbd5e1" rx="2"/>
    <line x1="140" y1="120" x2="170" y2="125" stroke="#ef4444" stroke-width="3"/>
    <!-- 小男孩 -->
    <circle cx="95" cy="75" r="24" fill="#fed7aa"/>
    <path d="M75,60 Q95,45 115,60" fill="#1e293b"/>
    <rect x="70" y="100" width="50" height="40" fill="#0284c7" rx="8"/>
    <line x1="105" y1="110" x2="145" y2="118" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"/>
  </svg>`,

  q10: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#fffbeb"/>
    <!-- 最愛麵條 (Favorite food is noodles) -->
    <!-- 大碗 -->
    <path d="M80,110 Q150,180 220,110 Z" fill="#dc2626"/>
    <!-- 麵條 -->
    <path d="M90,105 Q120,95 150,110 Q180,95 210,105" stroke="#facc15" stroke-width="5" fill="none"/>
    <path d="M95,112 Q125,102 155,117 Q185,102 205,112" stroke="#facc15" stroke-width="5" fill="none"/>
    <!-- 筷子夾起麵條 -->
    <line x1="160" y1="50" x2="135" y2="105" stroke="#78350f" stroke-width="3"/>
    <line x1="170" y1="50" x2="140" y2="105" stroke="#78350f" stroke-width="3"/>
    <!-- 熱氣蒸氣 -->
    <path d="M120,80 Q115,65 125,50" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M150,75 Q145,60 155,45" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.6"/>
  </svg>`
};

// ==========================================
// 2. 格蘭英語 B 級官方全範圍字彙母庫 (450+ 核心字彙)
// ==========================================
const bLevelVocabMasterPool = [
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
  { word: "plate", meaning: "盤子", kk: "[plet]", tip: "plate (盤子) KK: [plet]" },
  { word: "bowl", meaning: "碗", kk: "[bol]", tip: "bowl (碗) KK: [bol]" },
  { word: "fork", meaning: "叉子", kk: "[fɔrk]", tip: "fork (叉子) KK: [fɔrk]" },
  { word: "spoon", meaning: "湯匙", kk: "[spun]", tip: "spoon (湯匙) KK: [spun]" },
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
  { word: "milk", meaning: "牛奶", kk: "[mɪlk]", tip: "milk (牛奶) KK: [mɪlk]" },
  { word: "corn", meaning: "玉米", kk: "[kɔrn]", tip: "corn (玉米) KK: [kɔrn]" },
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
  { word: "badminton", meaning: "羽毛球", kk: "[ˋbædmɪntən]", tip: "badminton (羽毛球) KK: [ˋbædmɪntən]" },
  { word: "bowling", meaning: "保齡球", kk: "[ˋbolɪŋ]", tip: "bowling (保齡球) KK: [ˋbolɪŋ]" },
  { word: "basketball", meaning: "籃球", kk: "[ˋbæskɪt͵bɔl]", tip: "basketball (籃球) KK: [ˋbæskɪt͵bɔl]" },
  { word: "baseball", meaning: "棒球", kk: "[ˋbes͵bɔl]", tip: "baseball (棒球) KK: [ˋbes͵bɔl]" },
  { word: "football", meaning: "足球", kk: "[ˋfʊt͵bɔl]", tip: "football (足球) KK: [ˋfʊt͵bɔl]" },
  { word: "golf", meaning: "高爾夫球", kk: "[gɑlf]", tip: "golf (高爾夫) KK: [gɑlf]" },
  { word: "guitar", meaning: "吉他", kk: "[gɪˋtɑr]", tip: "guitar (吉他) KK: [gɪˋtɑr]" },
  { word: "piano", meaning: "鋼琴", kk: "[pɪˋæno]", tip: "piano (鋼琴) KK: [pɪˋæno]" },
  { word: "violin", meaning: "小提琴", kk: "[͵vaɪəˋlɪn]", tip: "violin (小提琴) KK: [͵vaɪəˋlɪn]" },
  { word: "bicycle", meaning: "腳踏車", kk: "[ˋbaɪsɪk!]", tip: "bicycle (腳踏車) KK: [ˋbaɪsɪk!]" },
  { word: "kung fu", meaning: "功夫", kk: "[ˋkʊŋ ˋfu]", tip: "kung fu (功夫) KK: [ˋkʊŋ ˋfu]" },
  { word: "video game", meaning: "電玩遊戲", kk: "[ˋvɪdɪo gem]", tip: "video game (電玩) KK: [ˋvɪdɪo gem]" },
  { word: "kitchen", meaning: "廚房", kk: "[ˋkɪtʃɪn]", tip: "kitchen (廚房) KK: [ˋkɪtʃɪn]" },
  { word: "bedroom", meaning: "臥室", kk: "[ˋbɛd͵rum]", tip: "bedroom (臥室) KK: [ˋbɛd͵rum]" },
  { word: "bathroom", meaning: "浴室", kk: "[ˋbæθ͵rum]", tip: "bathroom (浴室) KK: [ˋbæθ͵rum]" },
  { word: "living room", meaning: "客廳", kk: "[ˋlɪvɪŋ ͵rum]", tip: "living room (客廳) KK: [ˋlɪvɪŋ ͵rum]" },
  { word: "dining room", meaning: "飯廳", kk: "[ˋdaɪnɪŋ ͵rum]", tip: "dining room (飯廳) KK: [ˋdaɪnɪŋ ͵rum]" },
  { word: "supermarket", meaning: "超級市場", kk: "[ˋsupɚ͵mɑrkɪt]", tip: "supermarket (超市) KK: [ˋsupɚ͵mɑrkɪt]" },
  { word: "hospital", meaning: "醫院", kk: "[ˋhɑspɪt!]", tip: "hospital (醫院) KK: [ˋhɑspɪt!]" },
  { word: "restaurant", meaning: "餐廳", kk: "[ˋrɛstərənt]", tip: "restaurant (餐廳) KK: [ˋrɛstərənt]" },
  { word: "post office", meaning: "郵局", kk: "[post ˋɔfɪs]", tip: "post office (郵局) KK: [post ˋɔfɪs]" },
  { word: "classmate", meaning: "同學", kk: "[ˋklæs͵met]", tip: "classmate (同學) KK: [ˋklæs͵met]" },
  { word: "homework", meaning: "家庭作業", kk: "[ˋhom͵wɝk]", tip: "homework (家庭作業) KK: [ˋhom͵wɝk]" },
  { word: "parents", meaning: "父母親", kk: "[ˋpɛrənts]", tip: "parents (父母親) KK: [ˋpɛrənts]" },
  { word: "scary", meaning: "恐怖的", kk: "[ˋskɛrɪ]", tip: "scary (恐怖的) KK: [ˋskɛrɪ]" },
  { word: "thin", meaning: "瘦的", kk: "[θɪn]", tip: "thin (瘦的) KK: [θɪn]" },
  { word: "second", meaning: "秒", kk: "[ˋsɛkənd]", tip: "second (秒) KK: [ˋsɛkənd]" },
  { word: "minute", meaning: "分鐘", kk: "[ˋmɪnɪt]", tip: "minute (分鐘) KK: [ˋmɪnɪt]" },
  { word: "quarter", meaning: "一刻鐘 (15分)", kk: "[ˋkwɔrtɚ]", tip: "quarter (一刻鐘) KK: [ˋkwɔrtɚ]" },
  { word: "noon", meaning: "中午", kk: "[nun]", tip: "noon (中午) KK: [nun]" },
  { word: "always", meaning: "總是 (100%)", kk: "[ˋɔlwez]", tip: "always (總是) KK: [ˋɔlwez]" },
  { word: "usually", meaning: "通常 (80%)", kk: "[ˋjuʒʊəlɪ]", tip: "usually (通常) KK: [ˋjuʒʊəlɪ]" },
  { word: "rarely", meaning: "很少 (10%)", kk: "[ˋrɛrlɪ]", tip: "rarely (很少) KK: [ˋrɛrlɪ]" },
  { word: "never", meaning: "從未 (0%)", kk: "[ˋnɛvɚ]", tip: "never (從未) KK: [ˋnɛvɚ]" },
  { word: "between", meaning: "在…兩者之間", kk: "[bɪˋtwin]", tip: "between (兩者之間) KK: [bɪˋtwin]" }
];

function buildDynamicVocabQuiz(count, stageTitle) {
  const poolShuffled = [...bLevelVocabMasterPool].sort(() => Math.random() - 0.5);
  const selectedTargets = poolShuffled.slice(0, Math.min(count, poolShuffled.length));

  return selectedTargets.map((target) => {
    const distractors = bLevelVocabMasterPool
      .filter((item) => item.word !== target.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

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

const rawVocabBLevel = buildDynamicVocabQuiz(50, "⭐ B級全範圍綜合測驗 (50題)");

// ==========================================
// 3. 500 題多元情境文法生成引擎
// ==========================================
function generate500GrammarQuestions() {
  const names = ["Andy", "Julia", "Janice", "Henry", "Susan", "Tina", "Frank", "Stephen", "Lucy", "Jerry", "Maggie", "Kathy", "Jason", "Mike", "Peter", "Sandy", "Helen", "Paul", "David", "Emma"];
  const locations = ["in the kitchen", "in the living room", "in the bedroom", "in the dining room", "in the garage", "in the classroom", "at the library", "at the supermarket"];
  const uncountables = [
    { word: "sugar", hint: "糖" },
    { word: "shampoo", hint: "洗髮精" },
    { word: "milk", hint: "牛奶" },
    { word: "money", hint: "金錢" },
    { word: "water", hint: "水" }
  ];
  const countables = [
    { word: "sausages", single: "sausage", hint: "香腸" },
    { word: "pillows", single: "pillow", hint: "枕頭" },
    { word: "hangers", single: "hanger", hint: "衣架" },
    { word: "lamps", single: "lamp", hint: "檯燈" }
  ];
  const verbs = [
    { base: "play the guitar", ing: "playing the guitar", s: "plays the guitar" },
    { base: "brush teeth", ing: "brushing teeth", s: "brushes teeth" },
    { base: "wash the face", ing: "washing the face", s: "washes the face" },
    { base: "do homework", ing: "doing homework", s: "does homework" }
  ];

  const generated = [];
  for (let i = 0; i < 500; i++) {
    const type = i % 8;
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
    generated.push(qObj);
  }
  return generated;
}

const rawGrammarQuestions = generate500GrammarQuestions();

// ==========================================
// 4. 聽力考點專練 500 題隨機生成引擎
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
          prompt: "Statement: Listen to the time statement.",
          audioText: `Statement A: It's a quarter past ${hour}. Statement B: It's a quarter to ${hour}. Statement C: It's half past ${hour}.`,
          options: [`It's a quarter past ${hour}. (${hour}:15)`, `It's a quarter to ${hour}. (${hour - 1}:45)`, `It's half past ${hour}. (${hour}:30)`],
          ans: 0,
          tip: `💡【時間讀法】a quarter past ${hour} 代表『過了一刻鐘』，即 ${hour}:15。`
        };
        break;
      case 1:
        qObj = {
          part: "【考點 1】時間辨析 (Quarter to)",
          prompt: "Statement: Listen to the time statement.",
          audioText: `Statement A: It's a quarter past ${hour}. Statement B: It's a quarter to ${nextHour}. Statement C: It's half past ${hour}.`,
          options: [`It's a quarter past ${hour}. (${hour}:15)`, `It's a quarter to ${nextHour}. (${hour}:45)`, `It's half past ${hour}. (${hour}:30)`],
          ans: 1,
          tip: `💡【時間讀法】a quarter to ${nextHour} 代表『差一刻鐘到 ${nextHour} 點』，即 ${hour}:45。`
        };
        break;
      case 2:
        qObj = {
          part: "【考點 2】位置介系詞 (Between)",
          prompt: "Statement: Where is the place?",
          audioText: "Statement A: The supermarket is beside the library. Statement B: The supermarket is between the hospital and the restaurant. Statement C: The supermarket is behind the school.",
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
          tip: `💡【地點問答】聽到 Where 提問，核心回答為具體空間介系詞片語（${loc.place}）。`
        };
        break;
      case 4:
        qObj = {
          part: "【考點 5】現在進行式 (What is ... doing?)",
          prompt: `Question: What is ${name1} doing right now?`,
          audioText: `What is ${name1} doing right now? A: She is ${act.ing}. B: She ${act.third} every Sunday. C: She can ${act.base}.`,
          options: [`She is ${act.ing}.`, `She ${act.third} every Sunday.`, `She can ${act.base}.`],
          ans: 0,
          tip: `💡【現在進行式】問句包含 is ... doing，回答必須使用主詞 + be動詞 + V-ing（is ${act.ing}）。`
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
          tip: `💡【不可數名詞數量】${uncnt.word}（${uncnt.hint}）為不可數名詞，使用 How much 提問，回答用 a little 或 much。`
        };
        break;
    }
    generated.push(qObj);
  }
  return generated;
}

const rawReviewQuestions = generate500ListeningReviewQuestions();

// ==========================================
// 5. Practice 1 題庫 (40 題) - 內嵌 SVG 向量插圖
// ==========================================
const rawMockP1 = [
  { part: "Part 1: Photographs", prompt: "Question 1", svgData: p1SvgImages.q1, sceneHint: "一位名叫 Julia 的小女孩正在洗手台前拿起牙刷刷牙。", audioText: "Look at the picture and choose the best answer. Statement A: Julia brushes her teeth. Statement B: Julia washes her face. Statement C: Julia's mother brushes her teeth.", options: ["Julia brushes her teeth.", "Julia washes her face.", "Julia's mother brushes her teeth."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 2", svgData: p1SvgImages.q2, sceneHint: "時鐘指向中午 12:00，Janice 正在餐桌享用午餐。", audioText: "Look at the picture and choose the best answer. Statement A: Janice drinks milk for breakfast. Statement B: Janice has lunch at noon. Statement C: Janice eats fruit for breakfast.", options: ["Janice drinks milk for breakfast.", "Janice has lunch at noon.", "Janice eats fruit for breakfast."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 3", svgData: p1SvgImages.q3, sceneHint: "時鐘上的短針指向 11 前方，長針指向 9（即 10 點 45 分，差一刻到 11 點）。", audioText: "Look at the picture and choose the best answer. Statement A: It's a quarter to 11. Statement B: It's a quarter past 10. Statement C: It's half past 10.", options: ["It's a quarter to 11.", "It's a quarter past 10.", "It's half past 10."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 4", svgData: p1SvgImages.q4, sceneHint: "告示看板上寫著棒球比賽（Baseball Game），下方的時間顯示 9:30。", audioText: "Look at the picture and choose the best answer. Statement A: The basketball game starts at 9:30. Statement B: The baseball game starts at 9:30. Statement C: There is no baseball game today.", options: ["The basketball game starts at 9:30.", "The baseball game starts at 9:30.", "There is no baseball game today."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 5", svgData: p1SvgImages.q5, sceneHint: "客廳桌子上放著一台電視機，電視上面沒有其他雜物。", audioText: "Look at the picture and choose the best answer. Statement A: There is a television on the table. Statement B: There are some flowers on the TV. Statement C: There is a vase on the floor.", options: ["There is a television on the table.", "There are some flowers on the TV.", "There is a vase on the floor."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 6", svgData: p1SvgImages.q6, sceneHint: "Andy 的行事曆上吉他練習旁標註著很少出現的記號（極低頻率）。", audioText: "Look at the picture and choose the best answer. Statement A: Andy rarely plays the guitar. Statement B: Andy never goes to science class. Statement C: Andy always goes to English class.", options: ["Andy rarely plays the guitar.", "Andy never goes to science class.", "Andy always goes to English class."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 7", svgData: p1SvgImages.q7, sceneHint: "Susan 野餐墊上的食物籃裝著熱狗、薯條和餅乾（Hot dogs, French fries, cookies）。", audioText: "Look at the picture and choose the best answer. Statement A: Susan has sausages, sandwiches and French fries for her picnic. Statement B: Susan has hot dogs, French fries, and cookies for her picnic. Statement C: Susan has noodles, milk, and hot dogs for her picnic.", options: ["Susan has sausages, sandwiches and French fries for her picnic.", "Susan has hot dogs, French fries, and cookies for her picnic.", "Susan has noodles, milk, and hot dogs for her picnic."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 8", svgData: p1SvgImages.q8, sceneHint: "客廳裡，Henry 的媽媽正拿著畫筆在畫布上畫畫（Henry's mother is drawing）。", audioText: "Look at the picture and choose the best answer. Statement A: Henry's hobby is swimming. Statement B: Henry's father's hobby is drawing. Statement C: Henry's mother's hobby is drawing.", options: ["Henry's hobby is swimming.", "Henry's father's hobby is drawing.", "Henry's mother's hobby is drawing."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 9", svgData: p1SvgImages.q9, sceneHint: "餐廳門口牆上貼著顯眼的『禁止吸煙（No Smoking）』標誌。", audioText: "Look at the picture and choose the best answer. Statement A: Please don't smoke outside. Statement B: Please don't speak too loud here. Statement C: Please don't smoke in the restaurant.", options: ["Please don't smoke outside.", "Please don't speak too loud here.", "Please don't smoke in the restaurant."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 10", svgData: p1SvgImages.q10, sceneHint: "餐盤上放著金黃色的玉米粒（Corn）。", audioText: "Look at the picture and choose the best answer. Statement A: There is not anything on the plate. Statement B: There is some corn on the plate. Statement C: There are no sausages on the plate.", options: ["There is not anything on the plate.", "There is some corn on the plate.", "There are no sausages on the plate."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 11", svgData: p1SvgImages.q11, sceneHint: "體操女孩展現特技動作：一隻腳著地，另一隻腳高高舉起彎曲碰到自己的頭頂。", audioText: "Look at the picture and choose the best answer. Statement A: She can touch her head with her foot. Statement B: She can stand on one leg and touch the floor. Statement C: She can stand on her head.", options: ["She can touch her head with her foot.", "She can stand on one leg and touch the floor.", "She can stand on her head."], ans: 0 },
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
  { part: "Part 3/4: Conversation (36-37)", prompt: "Question 36: Whose birthday is coming?", audioText: "Hello. This is Stephen. May I talk to Tina? Hold on, please. Hello, Stephen. This is Tina speaking. I am just calling to tell you that I can't go to your birthday party. I am really sorry. Why can't you come? My parents will go to Singapore for work. They want me to go there with them, but I don't want to live in another country. Question 36: Whose birthday is coming?", options: ["Stephen's birthday is coming.", "Tina's birthday is coming.", "Steven's father's birthday is coming."], ans: 0, repeat: true },
  { part: "Part 3/4: Conversation (37): Why do Stephen's parents need to go to Singapore?", prompt: "Question 37: Why do Stephen's parents need to go to Singapore?", audioText: "Why do Stephen's parents need to go to Singapore?", options: ["Because they want to celebrate Stephen's birthday.", "Because they have to work in Singapore.", "Because they study in Singapore."], ans: 1 },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 38: What does Stephen think of his parents?", audioText: "Did you tell your parents that you don't want to go? I feel they never listen to me. I am afraid if I tell them, they will still want me to go to Singapore with them. If you stay here, who is going to take care of you? My brother also lives here, but I don't want to live with him. My grandparents live near us. I can live with them. I think you should tell your parents about your plan. They love you. Going to live in another country may not be good for you. I will think about it. I am really sorry about the birthday party. Never mind. Question 38: What does Stephen think of his parents?", options: ["His parents usually listen to him.", "His parents sometimes listen to him.", "His parents never listen to him."], ans: 2, repeat: true },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 39: Who does Stephen want to live with?", audioText: "Who does Stephen want to live with?", options: ["His parents.", "His brother.", "His grandparents."], ans: 2 },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 40: What does Tina tell Stephen to do?", audioText: "What does Tina tell Stephen to do?", options: ["She tells Stephen to tell his parents about his plan.", "She tells Stephen not to tell his parents about his plan.", "She tells Stephen to tell his brother about his plan."], ans: 0 }
];

// ==========================================
// 6. Practice 2 題庫 (50 題) - 內嵌 SVG 向量插圖
// ==========================================
const rawMockP2 = [
  { part: "Part 1: Photographs", prompt: "Question 1", svgData: p2SvgImages.q1, sceneHint: "房間裡的床上整齊擺放著兩顆枕頭（Two pillows on the bed）。", audioText: "Look at the picture and choose the best answer. Statement A: There is a shirt in the closet. Statement B: There are two pillows on the bed. Statement C: There is a clock on the wall.", options: ["There is a shirt in the closet.", "There are two pillows on the bed.", "There is a clock on the wall."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 2", svgData: p2SvgImages.q2, sceneHint: "一群人在櫃檯前依序排隊等待（Waiting in line）。", audioText: "Look at the picture and choose the best answer. Statement A: They are waiting in line. Statement B: They are in the movie theater. Statement C: They are shutting their eyes.", options: ["They are waiting in line.", "They are in the movie theater.", "They are shutting their eyes."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 3", svgData: p2SvgImages.q3, sceneHint: "街道地圖上，超級市場（Supermarket）緊鄰在郵局（Post office）的隔壁旁邊。", audioText: "Look at the picture and choose the best answer. Statement A: The hospital is beside the restaurant. Statement B: The supermarket is next to the post office. Statement C: The supermarket is between the hospital and the restaurant.", options: ["The hospital is beside the restaurant.", "The supermarket is next to the post office.", "The supermarket is between the hospital and the restaurant."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 4", svgData: p2SvgImages.q4, sceneHint: "小女孩坐在電腦螢幕前抓著頭，一臉困惑完全不會操作電腦（Doesn't know how to use it）。", audioText: "Look at the picture and choose the best answer. Statement A: She doesn't know how to use the computer. Statement B: She can use the computer very well. Statement C: She is playing the computer games happily.", options: ["She doesn't know how to use the computer.", "She can use the computer very well.", "She is playing the computer games happily."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 5", svgData: p2SvgImages.q5, sceneHint: "名叫 Tina 的女孩張開嘴巴打了一個大哈欠（Tina yawns）。", audioText: "Look at the picture and choose the best answer. Statement A: Tina yawns. Statement B: Jennifer yawns. Statement C: Tina stretches.", options: ["Tina yawns.", "Jennifer yawns.", "Tina stretches."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 6", svgData: p2SvgImages.q6, sceneHint: "時鐘指在 4 點 45 分（即差一刻鐘到 5 點：a quarter to 5）。", audioText: "Look at the picture and choose the best answer. Statement A: It's 10 past 5. Statement B: It's a quarter past 5. Statement C: It's a quarter to 5.", options: ["It's 10 past 5.", "It's a quarter past five.", "It's a quarter to five."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 7", svgData: p2SvgImages.q7, sceneHint: "臥室的床邊擺放著一張舒適的沙發椅（Sofa in the bedroom）。", audioText: "Look at the picture and choose the best answer. Statement A: There is a radio on the table. Statement B: There is a hanger on the coffee table. Statement C: There is a sofa in the bedroom.", options: ["There is a radio on the table.", "There is a hanger on the coffee table.", "There is a sofa in the bedroom."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 8", svgData: p2SvgImages.q8, sceneHint: "餐廳室內牆面上標記著醒目的紅色『禁止吸煙』告示牌。", audioText: "Look at the picture and choose the best answer. Statement A: Please don't speak too loud here. Statement B: Please don't smoke in the restaurant. Statement C: Please don't smoke outside.", options: ["Please don't speak too loud here.", "Please don't smoke in the restaurant.", "Please don't smoke outside."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 9", svgData: p2SvgImages.q9, sceneHint: "小男孩坐在桌子前拿著色筆專注地在紙上畫圖（The boy is drawing）。", audioText: "Look at the picture and choose the best answer. Statement A: The girl is watching television. Statement B: The boy is drawing. Statement C: The man is flying a kite.", options: ["The girl is watching television.", "The boy is drawing.", "The man is flying a kite."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 10", svgData: p2SvgImages.q10, sceneHint: "餐桌上端著一碗熱騰騰冒煙的麵條，正是主角最愛的食物（Noodles）。", audioText: "Look at the picture and choose the best answer. Statement A: My favorite food is noodles. Statement B: My father's favorite food is hamburgers. Statement C: My mother's favorite food is sandwiches.", options: ["My favorite food is noodles.", "My father's favorite food is hamburgers.", "My mother's favorite food is sandwiches."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 11: Do you have many friends here?", audioText: "Do you have many friends here? A: I often go swimming with my friends. B: I am friendly. C: No, I don't have many friends here.", options: ["I often go swimming with my friends.", "I am friendly.", "No, I don't have many friends here."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 12: What time do you usually go to school?", audioText: "What time do you usually go to school? A: You usually go to school at 7:00. B: I usually go to school at half past 7:00. C: I usually go to school on time.", options: ["You usually go to school at 7:00.", "I usually go to school at half past 7:00.", "I usually go to school on time."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 13: What is Sandy's favorite sport?", audioText: "What is Sandy's favorite sport? A: Her favorite food is vegetables. B: Her favorite sport is bowling. C: Her favorite fruit is strawberries.", options: ["Her favorite food is vegetables.", "Her favorite sport is bowling.", "Her favorite fruit is strawberries."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 14: How many lamps can you see?", audioText: "How many lamps can you see? A: Yes, I do. B: I can see three bags. C: I can see five lamps.", options: ["Yes, I do.", "I can see three bags.", "I can see five lamps."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 15: Where are you doing your homework?", audioText: "Where are you doing your homework? A: You are doing your homework in front of the television. B: I am doing it at my desk in the bedroom. C: I am playing the piano in the dining room.", options: ["You are doing your homework in front of the television.", "I am doing it at my desk in the bedroom.", "I am playing the piano in the dining room."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 16: Are there any pictures on the wall?", audioText: "Are there any pictures on the wall? A: No, there are not any pictures. B: He is looking for his pictures. C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 17: Are you listening to me?", audioText: "Are you listening to me? A: Yes, you are listening to me. B: Yes, I am listening to you. C: No, he is not listening to us.", options: ["Yes, you are listening to me.", "Yes, I am listening to you.", "No, he is not listening to us."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 18: What is she doing?", audioText: "What is she doing? A: She is playing the guitar. B: You are cooking in the kitchen. C: She does her homework every evening.", options: ["She is playing the guitar.", "You are cooking in the kitchen.", "She does her homework every evening."], ans: 0 },
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
  { part: "Part 3: Conversations (31-33)", prompt: "Question 31: What does Kevin's mom want him to do now?", audioText: "Kevin, what are you doing? I'm playing a video game, Mom. Is your homework done? I can't do my homework now because I can't stop this game before I win. Then I can stop the game for you. Now do your homework before dinner. Question 31. What does Kevin's mom want him to do now?", options: ["Do his homework.", "Win the game.", "Eat dinner first."], ans: 0, repeat: true },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 32: What does Kevin want to do?", audioText: "What does Kevin want to do?", options: ["Do his homework.", "Win the game before stopping.", "Help his mom cook dinner."], ans: 1 },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 33: Does Kevin finish his homework?", audioText: "Does Kevin finish his homework?", options: ["Yes, he does.", "No, he hasn't done it yet.", "He did it at school."], ans: 1 },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 34: How is Lucy?", audioText: "How are you, Lucy? Not bad. What about you? Great. I haven't seen you for a week. You know, I lived with my parents, but they moved to London. So I live in a big house alone. Question 34. How is Lucy?", options: ["Very sick.", "Not bad.", "Terrible."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 35: Who lives with Lucy?", audioText: "Who lives with Lucy?", options: ["Her parents.", "Her classmates.", "She lives alone."], ans: 2 },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 36: What does Lucy want?", audioText: "Hi, Lucy, your birthday is coming. Do you want to have a birthday party? Sure. We can invite some friends. Who do you want to invite? Jerry, Susan, and Henry. Okay. Sounds good. I will help you prepare your birthday party. Thanks. I need the help. Question 36. What does Lucy want?", options: ["To have a birthday party.", "To go to London.", "To study alone."], ans: 0, repeat: true },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 37: Whose birthday is coming?", audioText: "Whose birthday is coming?", options: ["Jack's birthday.", "Lucy's birthday.", "Susan's birthday."], ans: 1 },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 38: How many friends may go to the birthday party with Lucy and Jack?", audioText: "How many friends may go to the birthday party with Lucy and Jack?", options: ["2 friends.", "3 friends (Jerry, Susan, and Henry).", "5 friends."], ans: 1 },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 39: What kind of movies does Helen like?", audioText: "Hi Helen. Where are you going? I am going to watch a movie. Really? What kind of movie are you going to watch? I want to see a science fiction movie. I have to run now. The movie is about to start. Okay, and I have to be home before lunch. See you. Question 39. What kind of movies does Helen like?", options: ["Romance movies.", "Science fiction movies.", "Horror movies."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 40: Why does Helen have to run?", audioText: "Why does Helen have to run?", options: ["She wants to exercise.", "She needs to catch a bus.", "The movie is about to start."], ans: 2 },
  { part: "Part 4: Talks (41-42)", prompt: "Question 41: Where does Henry come from?", audioText: "Hello everyone, today I'd like to tell you something about my English studies. My name is Henry. I am from Japan. I am a student at Gram English. I like to study English very much, but my spoken English is not good. When I say R, I find it difficult to say it right. Question 41. Where does Henry come from?", options: ["America.", "Singapore.", "Japan."], ans: 2, repeat: true },
  { part: "Part 4: Talks (41-42)", prompt: "Question 42: Where does he learn English?", audioText: "Where does he learn English?", options: ["At Gram English.", "At school in Japan.", "At home by himself."], ans: 0 },
  { part: "Part 4: Talks (43-45)", prompt: "Question 43: What can't Frank do?", audioText: "Frank and Maggie are my good friends. They can do many things. Frank can play the piano and guitar. He can also ride a bicycle, but he can't drive a car. Maggie is very talented. She can sing and dance very well. She likes to practice Kung Fu on Mondays. We can all speak English very well. We often do our homework together before dinner. Then, after dinner, we play video games and practice our English because these are all things we can do together. Question 43. What can't Frank do?", options: ["Drive a car.", "Play the guitar.", "Ride a bicycle."], ans: 0, repeat: true },
  { part: "Part 4: Talks (43-45)", prompt: "Question 44: What do the three friends do together?", audioText: "What do the three friends do together?", options: ["Practice kung fu on Mondays.", "Drive cars together.", "Do homework before dinner and play video games after dinner."], ans: 2 },
  { part: "Part 4: Talks (43-45)", prompt: "Question 45: What are they very good at?", audioText: "What are they very good at?", options: ["They can all play violin.", "They can all speak English very well.", "They can all drive."], ans: 1 },
  { part: "Part 4: Talks (46-47)", prompt: "Question 46: Where does the speaker like to watch movies?", audioText: "People like to watch movies in different places. For example, some people like to watch movies in the theater, library, or restaurant. But I like to watch movies at home. People who like to watch movies in the theater like to be around many people. Question 46. Where does the speaker like to watch movies?", options: ["In the theater.", "In the library.", "At home."], ans: 2, repeat: true },
  { part: "Part 4: Talks (46-47)", prompt: "Question 47: Why do some people prefer to watch movies in the theater?", audioText: "Why do some people prefer to watch movies in the theater?", options: ["Because tickets are free.", "Because the food is delicious.", "Because they like to be around many people."], ans: 2 },
  { part: "Part 4: Talks (48-50)", prompt: "Question 48: Why does she have to study?", audioText: "Hi Jane, it's Sandy. I have to study for my English test and I need your help. Can you come to my house today? We can have dinner together at 6:00, and we can study at 6:30 until 8:00. Then we can watch TV. Thanks. Question 48. Why does she have to study?", options: ["For her English test.", "For her math contest.", "For fun."], ans: 0, repeat: true },
  { part: "Part 4: Talks (48-50)", prompt: "Question 49: What does Sandy want from Jane?", audioText: "What does Sandy want from Jane?", options: ["To help her study for the English test.", "To buy her dinner.", "To lend her a TV."], ans: 0 },
  { part: "Part 4: Talks (50): Where does Sandy want to study?", prompt: "Question 50: Where does Sandy want to study?", audioText: "Where does Sandy want to study?", options: ["At Jane's house.", "At school.", "At Sandy's house."], ans: 2 }
];