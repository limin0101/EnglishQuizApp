/**
 * ===================================================================
 * @file svg-assets.js
 * @description 動態與靜態 SVG 向量圖形庫 (時鐘刻度補齊 + 地圖標籤防溢出自動折行)
 * ===================================================================
 */

// 動態時鐘 SVG 生成器 (補齊其餘 8 個小時小刻度點，大幅提升判讀精準度)
function generateClockSvg(hour, minute) {
  const minuteAngle = minute * 6;
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  
  const mRad = ((minuteAngle - 90) * Math.PI) / 180;
  const hRad = ((hourAngle - 90) * Math.PI) / 180;

  const mx = 150 + 60 * Math.cos(mRad);
  const my = 100 + 60 * Math.sin(mRad);
  const hx = 150 + 40 * Math.cos(hRad);
  const hy = 100 + 40 * Math.sin(hRad);

  // 繪製其餘 8 個鐘點的刻度點 (1, 2, 4, 5, 7, 8, 10, 11)
  let ticksHtml = "";
  for (let i = 1; i <= 12; i++) {
    if (i % 3 !== 0) {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const tx = 150 + 66 * Math.cos(angle);
      const ty = 100 + 66 * Math.sin(angle);
      ticksHtml += `<circle cx="${tx}" cy="${ty}" r="2" fill="#94a3b8"/>`;
    }
  }

  return `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f8fafc"/>
    <circle cx="150" cy="100" r="75" fill="#ffffff" stroke="#3b82f6" stroke-width="6"/>
    ${ticksHtml}
    <text x="150" y="42" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">12</text>
    <text x="212" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">3</text>
    <text x="150" y="166" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">6</text>
    <text x="88" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#334155">9</text>
    <line x1="150" y1="100" x2="${mx}" y2="${my}" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
    <line x1="150" y1="100" x2="${hx}" y2="${hy}" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
    <circle cx="150" cy="100" r="7" fill="#1e293b"/>
  </svg>`;
}

// 動態街景地圖 SVG 生成器 (長單字自動雙行折行排版，徹底杜絕衝出外框)
function generateMapSvg(centerPlace, leftPlace, rightPlace) {
  function renderBuildingText(text, cx, cy) {
    if (text.includes(" ")) {
      const parts = text.split(" ");
      return `<text x="${cx}" y="${cy - 7}" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">${parts[0]}</text>
              <text x="${cx}" y="${cy + 9}" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">${parts.slice(1).join(" ")}</text>`;
    } else if (text.length > 9) {
      // 如 SUPERMARKET 拆成 SUPER- / MARKET
      const p1 = text.slice(0, 5) + "-";
      const p2 = text.slice(5);
      return `<text x="${cx}" y="${cy - 7}" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">${p1}</text>
              <text x="${cx}" y="${cy + 9}" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">${p2}</text>`;
    } else {
      return `<text x="${cx}" y="${cy + 4}" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">${text}</text>`;
    }
  }

  return `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#ecfdf5"/>
    <rect x="15" y="65" width="80" height="85" fill="#64748b" rx="6"/>
    ${renderBuildingText(leftPlace, 55, 110)}
    <rect x="105" y="65" width="90" height="85" fill="#0284c7" rx="6"/>
    ${renderBuildingText(centerPlace, 150, 110)}
    <rect x="205" y="65" width="80" height="85" fill="#d97706" rx="6"/>
    ${renderBuildingText(rightPlace, 245, 110)}
    <line x1="10" y1="165" x2="290" y2="165" stroke="#94a3b8" stroke-width="4"/>
    <text x="150" y="42" font-size="13" font-weight="bold" fill="#0f766e" text-anchor="middle">STREET MAP VIEW</text>
  </svg>`;
}

// 靜態真題插圖 Practice 1
window.p1SvgImages = {
  q1: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#e0f2fe"/><rect x="30" y="130" width="240" height="70" fill="#94a3b8" rx="8"/><ellipse cx="150" cy="140" rx="45" ry="16" fill="#cbd5e1"/><circle cx="150" cy="65" r="28" fill="#fed7aa"/><circle cx="142" cy="62" r="3" fill="#1e293b"/><circle cx="158" cy="62" r="3" fill="#1e293b"/><rect x="110" y="93" width="80" height="40" fill="#f472b6" rx="10"/><rect x="152" y="71" width="38" height="6" fill="#0284c7" rx="3" transform="rotate(-10 152 71)"/><circle cx="142" cy="71" r="4" fill="#ffffff" opacity="0.8"/></svg>`,
  q2: generateClockSvg(12, 0),
  q3: generateClockSvg(10, 45),
  q4: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ecfdf5"/><rect x="40" y="25" width="220" height="150" fill="#1e293b" rx="12"/><circle cx="85" cy="70" r="18" fill="#ffffff"/><text x="115" y="76" font-size="16" font-weight="bold" fill="#38bdf8">BASEBALL</text><text x="80" y="138" font-size="15" fill="#f8fafc">START TIME:</text><text x="180" y="142" font-size="22" font-weight="bold" fill="#facc15">9:30</text></svg>`,
  q5: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fdf4ff"/><rect x="30" y="140" width="240" height="15" fill="#a16207" rx="3"/><rect x="85" y="45" width="130" height="85" fill="#1e293b" rx="6"/><rect x="95" y="53" width="110" height="69" fill="#38bdf8" rx="4"/><rect x="135" y="130" width="30" height="10" fill="#334155"/></svg>`,
  q6: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f8fafc"/><rect x="50" y="20" width="200" height="160" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="3"/><rect x="50" y="20" width="200" height="35" fill="#3b82f6" rx="6"/><text x="150" y="44" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">YEAR PLANNER</text><text x="75" y="90" font-size="14" font-weight="bold" fill="#334155">Guitar:</text><text x="75" y="120" font-size="14" fill="#dc2626" font-weight="bold">● 1 / 365 days</text><rect x="75" y="140" width="150" height="10" fill="#e2e8f0" rx="5"/><rect x="75" y="140" width="15" height="10" fill="#ef4444" rx="5"/></svg>`,
  q7: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ecfdf5"/><polygon points="20,180 280,180 250,90 50,90" fill="#fed7aa" stroke="#f97316" stroke-width="2"/><rect x="65" y="80" width="28" height="35" fill="#ef4444" rx="3"/><ellipse cx="150" cy="115" rx="36" ry="14" fill="#f59e0b"/><rect x="120" y="111" width="60" height="8" fill="#b91c1c" rx="4"/><circle cx="215" cy="110" r="14" fill="#d97706"/><circle cx="238" cy="122" r="12" fill="#d97706"/></svg>`,
  q8: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#eff6ff"/><line x1="80" y1="60" x2="50" y2="180" stroke="#78350f" stroke-width="4"/><line x1="120" y1="60" x2="150" y2="180" stroke="#78350f" stroke-width="4"/><rect x="55" y="60" width="90" height="65" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/><circle cx="200" cy="65" r="20" fill="#fed7aa"/><rect x="185" y="85" width="30" height="60" fill="#a855f7" rx="8"/><line x1="185" y1="95" x2="148" y2="85" stroke="#fed7aa" stroke-width="5"/></svg>`,
  q9: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fef2f2"/><circle cx="150" cy="100" r="65" fill="#ffffff" stroke="#dc2626" stroke-width="12"/><line x1="104" y1="55" x2="196" y2="145" stroke="#dc2626" stroke-width="12"/><rect x="105" y="95" width="65" height="12" fill="#ffffff" stroke="#94a3b8"/><rect x="165" y="95" width="20" height="12" fill="#d97706"/></svg>`,
  q10: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fffbeb"/><ellipse cx="150" cy="115" rx="100" ry="45" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/><circle cx="130" cy="110" r="10" fill="#eab308"/><circle cx="145" cy="105" r="9" fill="#facc15"/><circle cx="160" cy="110" r="11" fill="#eab308"/><circle cx="138" cy="120" r="10" fill="#facc15"/><circle cx="154" cy="122" r="10" fill="#eab308"/></svg>`,
  q11: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#e0e7ff"/><circle cx="135" cy="75" r="20" fill="#fed7aa"/><line x1="135" y1="95" x2="145" y2="135" stroke="#4f46e5" stroke-width="14" stroke-linecap="round"/><line x1="145" y1="135" x2="145" y2="185" stroke="#1e1b4b" stroke-width="8" stroke-linecap="round"/><path d="M145,135 Q185,115 165,70 Q150,65 140,70" stroke="#1e1b4b" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="140" cy="70" r="5" fill="#ef4444"/></svg>`
};

// 靜態真題插圖 Practice 2 (枕頭補上自然凹痕紋理，增強視覺特徵)
window.p2SvgImages = {
  q1: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f8fafc"/><rect x="40" y="55" width="220" height="40" fill="#78350f" rx="6"/><rect x="40" y="95" width="220" height="80" fill="#38bdf8" rx="4"/><rect x="60" y="80" width="75" height="35" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="8"/><path d="M85,97 Q97,100 110,97" stroke="#cbd5e1" stroke-width="2" fill="none"/><rect x="165" y="80" width="75" height="35" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="8"/><path d="M190,97 Q202,100 215,97" stroke="#cbd5e1" stroke-width="2" fill="none"/></svg>`,
  q2: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f1f5f9"/><rect x="230" y="70" width="45" height="100" fill="#64748b" rx="4"/><circle cx="185" cy="85" r="14" fill="#fed7aa"/><rect x="175" y="100" width="20" height="50" fill="#3b82f6" rx="4"/><circle cx="130" cy="85" r="14" fill="#fed7aa"/><rect x="120" y="100" width="20" height="50" fill="#ef4444" rx="4"/><circle cx="75" cy="85" r="14" fill="#fed7aa"/><rect x="65" y="100" width="20" height="50" fill="#10b981" rx="4"/></svg>`,
  q3: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ecfdf5"/><rect x="30" y="60" width="115" height="95" fill="#0284c7" rx="8"/><text x="87" y="100" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">SUPER-</text><text x="87" y="120" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">MARKET</text><rect x="155" y="60" width="115" height="95" fill="#f59e0b" rx="8"/><text x="212" y="100" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">POST</text><text x="212" y="120" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">OFFICE</text></svg>`,
  q4: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fef2f2"/><rect x="60" y="55" width="90" height="65" fill="#334155" rx="4"/><rect x="68" y="63" width="74" height="49" fill="#0284c7"/><text x="105" y="96" font-size="28" font-weight="bold" fill="#ef4444" text-anchor="middle">?</text><circle cx="205" cy="85" r="22" fill="#fed7aa"/><line x1="190" y1="120" x2="190" y2="85" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"/><rect x="185" y="115" width="40" height="45" fill="#ec4899" rx="6"/></svg>`,
  q5: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fdf4ff"/><circle cx="150" cy="95" r="42" fill="#fed7aa"/><path d="M128,82 Q136,76 144,82" stroke="#1e293b" stroke-width="3" fill="none"/><path d="M156,82 Q164,76 172,82" stroke="#1e293b" stroke-width="3" fill="none"/><ellipse cx="150" cy="112" rx="14" ry="18" fill="#991b1b"/></svg>`,
  q6: generateClockSvg(4, 45),
  q7: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#eff6ff"/><rect x="25" y="85" width="90" height="70" fill="#38bdf8" rx="4"/><rect x="140" y="95" width="130" height="50" fill="#f59e0b" rx="8"/><rect x="145" y="70" width="120" height="35" fill="#d97706" rx="6"/></svg>`,
  q8: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fef2f2"/><circle cx="150" cy="100" r="65" fill="#ffffff" stroke="#dc2626" stroke-width="12"/><line x1="104" y1="55" x2="196" y2="145" stroke="#dc2626" stroke-width="12"/><rect x="105" y="95" width="65" height="12" fill="#ffffff" stroke="#94a3b8"/><rect x="165" y="95" width="20" height="12" fill="#d97706"/></svg>`,
  q9: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fdf4ff"/><rect x="30" y="130" width="240" height="15" fill="#78350f" rx="3"/><rect x="130" y="110" width="60" height="30" fill="#ffffff" stroke="#cbd5e1" rx="2"/><circle cx="95" cy="75" r="24" fill="#fed7aa"/><rect x="70" y="100" width="50" height="40" fill="#0284c7" rx="8"/><line x1="105" y1="110" x2="145" y2="118" stroke="#fed7aa" stroke-width="5"/></svg>`,
  q10: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#fffbeb"/><path d="M80,110 Q150,180 220,110 Z" fill="#dc2626"/><path d="M90,105 Q120,95 150,110 Q180,95 210,105" stroke="#facc15" stroke-width="5" fill="none"/><line x1="160" y1="50" x2="135" y2="105" stroke="#78350f" stroke-width="3"/><line x1="170" y1="50" x2="140" y2="105" stroke="#78350f" stroke-width="3"/></svg>`
};