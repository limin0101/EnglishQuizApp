let isQuizActive = false;
    let isAnswering = false;
    let isAudioPlayingPhase = false;

    window.addEventListener("beforeunload", (e) => {
      if (isQuizActive) {
        e.preventDefault();
        e.returnValue = "⚠️ 測驗正在進行中，重整或關閉將會遺失所有當前作答進度！確定要離開嗎？";
        return e.returnValue;
      }
    });

    function confirmLeaveCurrentQuiz() {
      if (!isQuizActive) return true;
      return confirm("⚠️ 目前測驗正在進行中，離開將會遺失當前作答進度，確定要中途退出嗎？");
    }

    function selectMainModuleSafe(mod) {
      if (isQuizActive && !confirmLeaveCurrentQuiz()) return;

      isQuizActive = false;
      isAnswering = false;
      isPaused = false;
      isAudioPlayingPhase = false;
      document.getElementById("pause-overlay").style.display = "none";
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();

      selectMainModule(mod);
    }

    function switchVocabStageSafe(stage) {
      if (!confirmLeaveCurrentQuiz()) return;
      isQuizActive = false;
      isAnswering = false;
      isPaused = false;
      isAudioPlayingPhase = false;
      document.getElementById("pause-overlay").style.display = "none";
      switchVocabStage(stage);
    }

    function switchListeningStageSafe(stage) {
      if (!confirmLeaveCurrentQuiz()) return;
      isQuizActive = false;
      isAnswering = false;
      isPaused = false;
      isAudioPlayingPhase = false;
      document.getElementById("pause-overlay").style.display = "none";
      switchListeningStage(stage);
    }

    // 判斷是否啟動「聽力盲聽防作弊模式」(Part 1 看圖題、Part 2 簡答問答與考點專練)
    function isBlindListeningQuestion(q) {
      const qMod = getEffectiveModule(q);
      if (qMod !== "listening") return false;
      const part = q.part || "";
      return part.includes("Part 1") || part.includes("Part 2") || part.includes("考點");
    }

    // 修正 2：盲聽模式下隱藏題幹英文問句，僅顯示題號提示，防止學生看字猜題
    function getMaskedBlindPrompt(q) {
      if (!isBlindListeningQuestion(q)) return q.prompt;
      const m = q.prompt.match(/^(Question\s*\d+)/i);
      const prefix = m ? m[1] : "🎧 聽力題";
      if (q.svgData) {
        return `${prefix}：請觀察下方圖片，並仔細聆聽語音選項`;
      }
      return `${prefix}：請仔細聆聽問題與 A、B、C 三個語音選項`;
    }

    function getEffectiveModule(q) {
      if (q && q.module) return q.module;
      if (currentModule !== "analysis") return currentModule;
      if (q && q.kkList && q.kkList.length > 0) return "vocab";
      if (q && q.audioText) return "listening";
      return "grammar";
    }

    let audioCtx = null;
    function getAudioContext() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function playSfxCorrect(combo = 0) {
      try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const pitchMult = 1 + Math.min(combo * 0.05, 0.4);

        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(880 * pitchMult, now);
        gain1.gain.setValueAtTime(0.35, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.25);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1318.5 * pitchMult, now + 0.09);
        gain2.gain.setValueAtTime(0.38, now + 0.09);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.09);
        osc2.stop(now + 0.38);
      } catch (e) {}
    }

    function playSfxWrong() {
      try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.setValueAtTime(200, now + 0.12);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.setValueAtTime(0.35, now + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.32);
      } catch (e) {}
    }

    function playSfxVictory() {
      try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const startTime = now + idx * 0.12;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0.3, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.4);
        });
      } catch (e) {}
    }

    const STREAK_KEY = "gram_b_streak_data";
    const BADGES_KEY = "gram_b_badges_data";

    function updateStreakOnQuizComplete() {
      const today = new Date().toISOString().split('T')[0];
      let data = { lastDate: "", streak: 0 };
      try {
        data = JSON.parse(localStorage.getItem(STREAK_KEY)) || data;
      } catch (e) {}

      if (data.lastDate !== today) {
        if (!data.lastDate) {
          data.streak = 1;
        } else {
          const last = new Date(data.lastDate);
          const current = new Date(today);
          const diffDays = Math.round((current - last) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            data.streak += 1;
          } else if (diffDays > 1) {
            data.streak = 1;
          }
        }
        data.lastDate = today;
        localStorage.setItem(STREAK_KEY, JSON.stringify(data));
      }
      renderGamifyStatus();
    }

    function unlockBadge(badgeId) {
      let badges = [];
      try {
        badges = JSON.parse(localStorage.getItem(BADGES_KEY)) || [];
      } catch (e) {}
      if (!badges.includes(badgeId)) {
        badges.push(badgeId);
        localStorage.setItem(BADGES_KEY, JSON.stringify(badges));
      }
      renderGamifyStatus();
    }

    function renderGamifyStatus() {
      let streakData = { streak: 1 };
      let badges = [];
      try {
        streakData = JSON.parse(localStorage.getItem(STREAK_KEY)) || streakData;
        badges = JSON.parse(localStorage.getItem(BADGES_KEY)) || [];
      } catch (e) {}

      document.getElementById("streak-days").textContent = streakData.streak || 1;

      if (badges.includes("first")) document.getElementById("badge-first").classList.add("unlocked");
      if (badges.includes("streak") || (streakData.streak >= 3)) {
        document.getElementById("badge-streak").classList.add("unlocked");
        unlockBadge("streak");
      }
      if (badges.includes("perfect")) document.getElementById("badge-perfect").classList.add("unlocked");
      if (badges.includes("clean")) document.getElementById("badge-clean").classList.add("unlocked");
    }

    const SCORE_HISTORY_KEY = "gram_b_score_history";

    function recordScoreHistory(score) {
      let history = [];
      try {
        history = JSON.parse(localStorage.getItem(SCORE_HISTORY_KEY)) || [];
      } catch (e) {}
      history.push(score);
      if (history.length > 5) history.shift();
      localStorage.setItem(SCORE_HISTORY_KEY, JSON.stringify(history));
      renderScoreChart();
    }

    function renderScoreChart() {
      let history = [];
      try {
        history = JSON.parse(localStorage.getItem(SCORE_HISTORY_KEY)) || [];
      } catch (e) {}

      const container = document.getElementById("chart-svg-box");
      if (!container) return;

      if (history.length < 2) {
        container.innerHTML = `<div style="font-size: 13px; color: #94a3b8; padding-top: 35px; text-align: center;">再完成 ${2 - history.length} 次測驗即可繪製進步曲線圖 🚀</div>`;
        return;
      }

      const w = 480;
      const h = 110;
      const padding = 28;
      const stepX = (w - padding * 2) / (history.length - 1);

      const points = history.map((val, idx) => {
        const x = padding + idx * stepX;
        const y = h - padding - (val / 100) * (h - padding * 2);
        return { x, y, val };
      });

      const pathData = points.map((p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");

      let svgHtml = `
        <svg viewBox="0 0 ${w} ${h}" style="width: 100%; height: 100%;">
          <line x1="${padding}" y1="${h - padding}" x2="${w - padding}" y2="${h - padding}" stroke="#e2e8f0" stroke-width="1.5" />
          <line x1="${padding}" y1="${padding}" x2="${w - padding}" y2="${padding}" stroke="#f1f5f9" stroke-dasharray="3,3" stroke-width="1" />
          <path d="${pathData}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
      `;

      points.forEach((p, idx) => {
        svgHtml += `
          <circle cx="${p.x}" cy="${p.y}" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
          <text x="${p.x}" y="${p.y - 8}" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">${p.val}分</text>
          <text x="${p.x}" y="${h - 8}" text-anchor="middle" font-size="11" fill="#64748b">第${idx + 1}次</text>
        `;
      });

      svgHtml += `</svg>`;
      container.innerHTML = svgHtml;
    }

    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScPPuAAn9a-WxVNiYT2AvZIr2nNXgLKc7lQQJH8d582Bnsmww/formResponse";
    const ENTRY_NAME      = "entry.1497266437";
    const ENTRY_MODULE    = "entry.1362970063";
    const ENTRY_PROMPT    = "entry.762033637";
    const ENTRY_WRONG     = "entry.588673430";
    const ENTRY_CORRECT   = "entry.1140385408";
    const STUDENT_NAME    = "林小朋友";

    let sessionSentMistakes = new Set();

    function submitToGoogleForm(payload) {
      try {
        const formData = new URLSearchParams();
        formData.append(ENTRY_NAME, payload.name || STUDENT_NAME);
        formData.append(ENTRY_MODULE, payload.module);
        formData.append(ENTRY_PROMPT, payload.prompt);
        formData.append(ENTRY_WRONG, payload.wrong);
        formData.append(ENTRY_CORRECT, payload.correct);

        fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString()
        }).catch(() => {});
      } catch (e) {}
    }

    function sendMistakeToGoogleForm(data) {
      const mistakeKey = `${data.qId || data.promptText}_${data.selectedWord}`;
      if (sessionSentMistakes.has(mistakeKey)) return;
      sessionSentMistakes.add(mistakeKey);

      submitToGoogleForm({
        module: data.moduleName,
        prompt: data.promptText,
        wrong: data.selectedWord,
        correct: `${data.correctWord} ${data.correctMeaning ? '(' + data.correctMeaning + ')' : ''}`
      });
    }

    function sendSessionSummaryToGoogleForm(moduleName, score, totalCount, correctCount) {
      const wrongCount = totalCount - correctCount;
      submitToGoogleForm({
        module: "🏁 測驗結算摘要",
        prompt: `【${moduleName}】測驗共 ${totalCount} 題`,
        wrong: `答錯 ${wrongCount} 題 / 答對 ${correctCount} 題`,
        correct: `最終得分: ${score} 分`
      });
    }

    let currentModule = "vocab";
    let currentVocabStage = "b_level";
    let currentListeningStage = "guide"; 
    let audioTimer = null;
    let autoNextTimer = null;

    let currentQuestions = [];
    let currentIdx = 0;
    let correctCount = 0;
    let comboStreak = 0;
    let cachedVoices = [];
    let isMistakeMode = false;
    let currentMistakeFilter = "all";

    let audioReplayRemaining = 1;

    let isPaused = false;
    let pausedTimeLeft = 6;
    let pausedPreviewTimeLeft = 3;
    let isPreviewPhase = false;
    let currentPlayPhase = 0;

    let questionTimer = null;
    let previewTimer = null;
    let timeLeft = 6;
    const TOTAL_TIME = 6;
    const PREVIEW_TIME = 3;

    window.currentActiveUtterance = null;
    let ttsWatchdogTimer = null;

    const STORAGE_KEY = "gram_b_quiz_mistakes";

    function getMistakes() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      } catch (e) {
        return [];
      }
    }

    function saveMistake(item) {
      const list = getMistakes();
      const existsIndex = list.findIndex(m => m.qId === item.qId);
      if (existsIndex >= 0) {
        list[existsIndex].selectedWord = item.selectedWord;
        list[existsIndex].masteryCount = 0;
      } else {
        item.masteryCount = 0;
        list.unshift(item);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      sendMistakeToGoogleForm(item);
    }

    function recordMistakeCorrectMastery(qId) {
      if (!qId) return;
      const list = getMistakes();
      const item = list.find(m => m.qId === qId);
      if (item) {
        item.masteryCount = (item.masteryCount || 0) + 1;
        if (item.masteryCount >= 2) {
          const updated = list.filter(m => m.qId !== qId);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
          if (updated.length === 0) unlockBadge("clean");
        } else {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        }
      }
    }

    function clearMistakeHistory() {
      if (confirm("確定要清空所有累積的錯題記錄嗎？")) {
        localStorage.removeItem(STORAGE_KEY);
        unlockBadge("clean");
        renderAnalysisScreen();
      }
    }

    function setMistakeFilter(tag, btn) {
      currentMistakeFilter = tag;
      document.querySelectorAll(".tag-filter-btn").forEach(b => b.classList.remove("active"));
      if (btn) btn.classList.add("active");
      renderAnalysisScreen();
    }

    function initVoices() {
      if ('speechSynthesis' in window) {
        cachedVoices = window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
          cachedVoices = window.speechSynthesis.getVoices();
        };
      }
    }
    initVoices();

    function stopAllAudio() {
      if (audioTimer) {
        clearTimeout(audioTimer);
        audioTimer = null;
      }
      if (ttsWatchdogTimer) {
        clearTimeout(ttsWatchdogTimer);
        ttsWatchdogTimer = null;
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      window.currentActiveUtterance = null;
    }

    function cancelAutoNextTimer() {
      if (autoNextTimer) {
        clearTimeout(autoNextTimer);
        autoNextTimer = null;
      }
    }

    function stopQuestionTimer() {
      if (questionTimer) {
        clearInterval(questionTimer);
        questionTimer = null;
      }
      if (previewTimer) {
        clearInterval(previewTimer);
        previewTimer = null;
      }
    }

    // 修正 7：控制選項按鈕鎖定與解鎖 (防止審題預覽期間誤觸)
    function setOptionButtonsDisabled(disabledState) {
      const buttons = document.querySelectorAll(".opt-btn");
      buttons.forEach(b => {
        b.disabled = disabledState;
      });
    }

    function togglePauseQuiz() {
      if (!isQuizActive || isAnswering) return;

      const overlay = document.getElementById("pause-overlay");
      const pauseBtn = document.getElementById("pause-btn");

      if (!isPaused) {
        isPaused = true;
        stopAllAudio();
        cancelAutoNextTimer();

        pausedTimeLeft = timeLeft;
        stopQuestionTimer();

        overlay.style.display = "flex";
        pauseBtn.textContent = "▶️ 繼續";
      } else {
        isPaused = false;
        overlay.style.display = "none";
        pauseBtn.textContent = "⏸️ 暫停";

        if (isPreviewPhase) {
          resumePreviewCountdown();
        } else if (isAudioPlayingPhase) {
          setOptionButtonsDisabled(false);
          const badgeElem = document.getElementById("timer-badge");
          if (badgeElem) {
            badgeElem.classList.remove("preview", "warning", "danger");
            badgeElem.classList.add("waiting");
            badgeElem.textContent = "🎧 聆聽中...";
          }
          playCurrentAudio(() => {
            isAudioPlayingPhase = false;
            if (!isPaused && isQuizActive && !isAnswering) {
              updateAudioReplayButton();
              startQuestionTimer();
            }
          });
        } else {
          setOptionButtonsDisabled(false);
          resumeQuestionTimer();
        }
      }
    }

    function resumePreviewCountdown() {
      setOptionButtonsDisabled(true);
      let pTime = pausedPreviewTimeLeft > 0 ? pausedPreviewTimeLeft : PREVIEW_TIME;
      const badgeElem = document.getElementById("timer-badge");
      const barElem = document.getElementById("timer-bar");

      if (badgeElem) {
        badgeElem.classList.remove("warning", "danger", "waiting");
        badgeElem.classList.add("preview");
        badgeElem.innerHTML = `👀 審題預覽中: <b>${pTime}</b> 秒`;
      }

      previewTimer = setInterval(() => {
        pTime--;
        pausedPreviewTimeLeft = pTime;
        if (barElem) barElem.style.width = `${(pTime / PREVIEW_TIME) * 100}%`;
        if (badgeElem && pTime > 0) badgeElem.innerHTML = `👀 審題預覽中: <b>${pTime}</b> 秒`;

        if (pTime <= 0) {
          clearInterval(previewTimer);
          previewTimer = null;
          isPreviewPhase = false;
          isAudioPlayingPhase = true;
          setOptionButtonsDisabled(false);
          
          if (badgeElem) {
            badgeElem.classList.remove("preview");
            badgeElem.classList.add("waiting");
            badgeElem.textContent = "🎧 聆聽中...";
          }
          playCurrentAudio(() => {
            isAudioPlayingPhase = false;
            if (!isPaused && isQuizActive && !isAnswering) {
              updateAudioReplayButton();
              startQuestionTimer();
            }
          });
        }
      }, 1000);
    }

    function resumeQuestionTimer() {
      timeLeft = pausedTimeLeft > 0 ? pausedTimeLeft : TOTAL_TIME;
      updateTimerVisuals(timeLeft);

      questionTimer = setInterval(() => {
        timeLeft--;
        pausedTimeLeft = timeLeft;
        updateTimerVisuals(timeLeft);

        if (timeLeft <= 0) {
          stopQuestionTimer();
          handleTimeOut();
        }
      }, 1000);
    }

    function updateTimerVisuals(sec) {
      const badgeElem = document.getElementById("timer-badge");
      const barElem = document.getElementById("timer-bar");

      if (!badgeElem || !barElem) return;

      badgeElem.classList.remove("waiting", "warning", "danger", "preview");
      barElem.style.width = `${(sec / TOTAL_TIME) * 100}%`;

      if (sec >= 4) {
        barElem.style.backgroundColor = "#22c55e";
        badgeElem.innerHTML = `⏳ 倒數: <b id="timer-sec" style="font-size: 16px;">${sec}</b> 秒`;
      } else if (sec >= 2) {
        barElem.style.backgroundColor = "#eab308";
        badgeElem.classList.add("warning");
        badgeElem.innerHTML = `⚠️ 剩餘: <b id="timer-sec" style="font-size: 16px;">${sec}</b> 秒`;
      } else {
        barElem.style.backgroundColor = "#ef4444";
        badgeElem.classList.add("danger");
        badgeElem.innerHTML = `🚨 快選: <b id="timer-sec" style="font-size: 16px;">${sec}</b> 秒`;
      }
    }

    function startPreviewCountdown(onPreviewEndCallback) {
      stopQuestionTimer();
      isPreviewPhase = true;
      // 修正 7：預覽期間鎖定所有選項按鈕，避免手滑誤觸
      setOptionButtonsDisabled(true);

      let pTime = PREVIEW_TIME;
      pausedPreviewTimeLeft = pTime;
      const badgeElem = document.getElementById("timer-badge");
      const barElem = document.getElementById("timer-bar");

      if (badgeElem) {
        badgeElem.classList.remove("warning", "danger", "waiting");
        badgeElem.classList.add("preview");
        badgeElem.innerHTML = `👀 審題預覽中: <b>${pTime}</b> 秒`;
      }
      if (barElem) {
        barElem.style.transition = "none";
        barElem.style.width = "100%";
        barElem.style.backgroundColor = "#6366f1";
        setTimeout(() => {
          barElem.style.transition = "width 1s linear";
        }, 50);
      }

      previewTimer = setInterval(() => {
        pTime--;
        pausedPreviewTimeLeft = pTime;
        if (barElem) barElem.style.width = `${(pTime / PREVIEW_TIME) * 100}%`;
        if (badgeElem && pTime > 0) badgeElem.innerHTML = `👀 審題預覽中: <b>${pTime}</b> 秒`;

        if (pTime <= 0) {
          clearInterval(previewTimer);
          previewTimer = null;
          isPreviewPhase = false;
          // 預覽結束進入播音時解鎖按鈕
          setOptionButtonsDisabled(false);
          if (onPreviewEndCallback) onPreviewEndCallback();
        }
      }, 1000);
    }

    function startQuestionTimer() {
      stopQuestionTimer();
      isPreviewPhase = false;
      isAudioPlayingPhase = false;
      setOptionButtonsDisabled(false);

      timeLeft = TOTAL_TIME;
      pausedTimeLeft = timeLeft;
      const barElem = document.getElementById("timer-bar");
      
      if (barElem) {
        barElem.style.transition = "none";
        barElem.style.width = "100%";
        setTimeout(() => {
          barElem.style.transition = "width 1s linear, background-color 0.4s";
        }, 50);
      }

      updateTimerVisuals(timeLeft);

      questionTimer = setInterval(() => {
        timeLeft--;
        pausedTimeLeft = timeLeft;
        updateTimerVisuals(timeLeft);

        if (timeLeft <= 0) {
          stopQuestionTimer();
          handleTimeOut();
        }
      }, 1000);
    }

    function expandVocabOptionButtons(q) {
      const letters = ["A", "B", "C", "D"];
      q.options.forEach((opt, idx) => {
        const btn = document.getElementById(`opt-btn-${idx}`);
        if (!btn) return;
        const kk = (q.kkList && q.kkList[idx]) ? q.kkList[idx] : "";
        const mean = (q.meanings && q.meanings[idx]) ? q.meanings[idx] : "";
        const engWord = (q.wordsList && q.wordsList[idx]) ? q.wordsList[idx] : "";
        const kkHtml = kk ? `<span class="kk-badge">${kk}</span>` : "";

        if (q.isMeaningQuestion) {
          const wordBadge = engWord ? `<span class="meaning-badge">英文：${engWord}</span>` : "";
          btn.innerHTML = `<b>(${letters[idx]})</b> ${opt} ${wordBadge} ${kkHtml}`;
        } else {
          const meanHtml = mean ? `<span class="meaning-badge">中文：${mean}</span>` : "";
          btn.innerHTML = `<b>(${letters[idx]})</b> ${opt} ${kkHtml} ${meanHtml}`;
        }
      });
    }

    // 修正 2：作答後同時揭曉盲聽題的原英文問題句與各選項字句
    function revealBlindListeningButtons(q) {
      const promptElem = document.getElementById("display-prompt");
      if (promptElem && q.prompt) {
        promptElem.textContent = q.prompt;
      }
      const letters = ["A", "B", "C", "D"];
      q.options.forEach((opt, idx) => {
        const btn = document.getElementById(`opt-btn-${idx}`);
        if (btn) {
          btn.innerHTML = `<b>(${letters[idx]})</b> ${opt}`;
        }
      });
    }

    // ==== 核心作答檢查 (含預覽防誤觸攔截 + 盲聽揭曉 + 針對性盲點診斷) ====
    function checkAnswer(selectedIdx, targetBtn, correctIdx) {
      // 修正 7：若處於預覽階段、暫停或已作答，直接攔截忽略點擊
      if (isPaused || isAnswering || isPreviewPhase) return;
      isAnswering = true;
      isPreviewPhase = false;
      isAudioPlayingPhase = false;

      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();

      setOptionButtonsDisabled(true);

      const playBtn = document.getElementById("play-audio-btn");
      if (playBtn) playBtn.disabled = true;

      const letters = ["A", "B", "C", "D"];
      const feedback = document.getElementById("feedback");
      const buttons = document.querySelectorAll(".opt-btn");
      const q = currentQuestions[currentIdx];
      const qMod = getEffectiveModule(q);

      if (qMod === "vocab") {
        expandVocabOptionButtons(q);
      } else if (isBlindListeningQuestion(q)) {
        revealBlindListeningButtons(q);
      }

      const correctOptText = q.options[correctIdx];
      const selectedOptText = q.options[selectedIdx];
      const correctEngWord = (q.wordsList && q.wordsList[correctIdx]) ? q.wordsList[correctIdx] : (q.word || correctOptText);
      const correctMeaning = (qMod === "vocab" && q.meanings) ? q.meanings[correctIdx] : (q.meaning || "");

      const specificFeedback = (q.dynamicTips && q.dynamicTips[selectedOptText]) ? q.dynamicTips[selectedOptText] : null;

      if (selectedIdx === correctIdx) {
        correctCount++;
        comboStreak++;
        updateComboBanner();
        playSfxCorrect(comboStreak);
        targetBtn.classList.add("correct");
        
        if (qMod === "vocab") {
          feedback.textContent = `答對了！Very Good! 🎉 英文: ${correctEngWord} ，中文: ${correctMeaning}`;
        } else {
          feedback.textContent = "答對了！Very Good! 🎉";
        }
        feedback.style.color = "#15803d";

        if (isMistakeMode) {
          recordMistakeCorrectMastery(q.qId);
        }

        const delayTime = (qMod === "vocab" && q.audioText) ? 1800 : 1200;
        autoNextTimer = setTimeout(() => {
          nextQuestion();
        }, delayTime);

      } else {
        comboStreak = 0;
        updateComboBanner();
        playSfxWrong();
        targetBtn.classList.add("wrong");
        if (qMod === "vocab") {
          feedback.textContent = `答錯囉！正確答案是 (${letters[correctIdx]}) 英文: ${correctEngWord} ，中文: ${correctMeaning}`;
        } else {
          feedback.textContent = `答錯囉！正確答案是 (${letters[correctIdx]}) ${correctOptText}`;
        }
        feedback.style.color = "#b91c1c";
        if (buttons[correctIdx]) buttons[correctIdx].classList.add("correct");

        let moduleTitle = "核心單字";
        if (qMod === "grammar") moduleTitle = "重點文法";
        else if (qMod === "listening") {
          if (currentListeningStage === "review_quiz") moduleTitle = "聽力考點專練";
          else moduleTitle = "官方聽力";
        }

        saveMistake({
          qId: q.qId,
          module: qMod,
          moduleName: moduleTitle,
          promptText: q.prompt,
          selectedWord: selectedOptText,
          correctWord: correctOptText,
          correctMeaning: qMod === "vocab" && !q.isMeaningQuestion ? correctMeaning : "",
          tip: q.tip || "",
          rawQuestion: JSON.parse(JSON.stringify(q))
        });

        document.getElementById("next-btn").style.display = "inline-block";
      }

      const currentScore = Math.round((correctCount / currentQuestions.length) * 100);
      document.getElementById("score").textContent = currentScore;

      const tipBox = document.getElementById("tip-box");
      if (tipBox) {
        if (selectedIdx !== correctIdx && specificFeedback) {
          tipBox.innerHTML = `<div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 6px 10px; border-radius: 4px; margin-bottom: 6px; color: #991b1b; font-weight: 600;">⚠️ 選擇盲點診斷：${specificFeedback}</div><div>${q.tip || ""}</div>`;
          tipBox.style.display = "block";
        } else if (q.tip) {
          tipBox.innerHTML = q.tip;
          tipBox.style.display = "block";
        } else {
          tipBox.style.display = "none";
        }
      }

      if (qMod === "vocab" && q.audioText) {
        audioTimer = setTimeout(() => {
          playSpeech(q.audioText);
        }, 350);
      }
    }

    function handleTimeOut() {
      if (isAnswering) return;
      isAnswering = true;
      isPreviewPhase = false;
      isAudioPlayingPhase = false;

      stopAllAudio();
      cancelAutoNextTimer();
      comboStreak = 0;
      updateComboBanner();
      playSfxWrong();

      setOptionButtonsDisabled(true);

      const playBtn = document.getElementById("play-audio-btn");
      if (playBtn) playBtn.disabled = true;

      const letters = ["A", "B", "C", "D"];
      const feedback = document.getElementById("feedback");
      const buttons = document.querySelectorAll(".opt-btn");
      const q = currentQuestions[currentIdx];
      const qMod = getEffectiveModule(q);

      if (qMod === "vocab") {
        expandVocabOptionButtons(q);
      } else if (isBlindListeningQuestion(q)) {
        revealBlindListeningButtons(q);
      }

      const correctOptText = q.options[q.ans];
      const correctEngWord = (q.wordsList && q.wordsList[q.ans]) ? q.wordsList[q.ans] : (q.word || correctOptText);
      const correctMeaning = (qMod === "vocab" && q.meanings) ? q.meanings[q.ans] : (q.meaning || "");

      if (qMod === "vocab") {
        feedback.textContent = `⏰ 時間到！正確答案是 (${letters[q.ans]}) 英文: ${correctEngWord} ，中文: ${correctMeaning}`;
      } else {
        feedback.textContent = `⏰ 時間到！正確答案是 (${letters[q.ans]}) ${correctOptText}`;
      }
      feedback.style.color = "#dc2626";

      if (buttons[q.ans]) {
        buttons[q.ans].classList.add("correct");
      }

      let moduleTitle = "核心單字";
      if (qMod === "grammar") moduleTitle = "重點文法";
      else if (qMod === "listening") {
        if (currentListeningStage === "review_quiz") moduleTitle = "聽力考點專練";
        else moduleTitle = "官方聽力";
      }

      saveMistake({
        qId: q.qId,
        module: qMod,
        moduleName: moduleTitle,
        promptText: q.prompt,
        selectedWord: "⏰ 時間到 (未作答)",
        correctWord: correctOptText,
        correctMeaning: qMod === "vocab" && !q.isMeaningQuestion ? correctMeaning : "",
        tip: q.tip || "",
        rawQuestion: JSON.parse(JSON.stringify(q))
      });

      const currentScore = Math.round((correctCount / currentQuestions.length) * 100);
      document.getElementById("score").textContent = currentScore;

      if (q.tip) {
        const tipBox = document.getElementById("tip-box");
        tipBox.innerHTML = q.tip;
        tipBox.style.display = "block";
      }

      if (qMod === "vocab" && q.audioText) {
        audioTimer = setTimeout(() => {
          playSpeech(q.audioText);
        }, 350);
      }

      document.getElementById("next-btn").style.display = "inline-block";
    }

    function updateComboBanner() {
      const banner = document.getElementById("combo-banner");
      if (!banner) return;
      if (comboStreak >= 2) {
        let msg = `🔥 ${comboStreak} 連對！太棒了！`;
        if (comboStreak >= 5) msg = `🌟 ${comboStreak} 連對！勢如破竹！`;
        if (comboStreak >= 10) msg = `👑 ${comboStreak} 連對！無懈可擊的神耳朵！`;
        banner.textContent = msg;
        banner.style.display = "inline-block";
      } else {
        banner.style.display = "none";
      }
    }

    function changeVolume() {
      const vol = parseFloat(document.getElementById("volume-range").value);
      document.getElementById("volume-val").textContent = Math.round(vol * 100) + "%";
    }

    function shuffleArray(array) {
      const arr = array.slice();
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }

    function unlockAudioAndStart() {
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();
      isPaused = false;
      isAudioPlayingPhase = false;
      document.getElementById("pause-overlay").style.display = "none";
      comboStreak = 0;
      updateComboBanner();
      getAudioContext();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.resume();
        const silentUtter = new SpeechSynthesisUtterance(" ");
        silentUtter.volume = 0.01;
        window.speechSynthesis.speak(silentUtter);
      }
      startCurrentQuiz();
    }

    function setupStartScreen() {
      isQuizActive = false;
      isAudioPlayingPhase = false;
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();
      comboStreak = 0;
      updateComboBanner();
      document.getElementById("start-screen").style.display = "flex";
      document.getElementById("result-screen").style.display = "none";
      document.getElementById("analysis-screen").style.display = "none";
      document.getElementById("guide-screen").style.display = "none";
      document.getElementById("quiz-active-area").style.display = "none";

      const titleElem = document.getElementById("start-title");
      const descElem = document.getElementById("start-desc");

      if (currentModule === "vocab") {
        titleElem.textContent = "⭐ 核心單字：B 級綜合測驗 (25題)";
        descElem.textContent = "從官方核心字彙庫隨機出題 25 題（含聽音選字與看字選義）。發音結束後展開 6 秒倒數，答對將自動跳題！";
      } else if (currentModule === "grammar") {
        titleElem.textContent = "📖 重點文法測驗 (30大考點不重複抽題)";
        descElem.textContent = "涵蓋時間介系詞、進行式、存在句與助動詞。具備選項專屬盲點診斷功能，每題限時 6 秒！";
      } else if (currentModule === "listening") {
        if (currentListeningStage === "review_quiz") {
          titleElem.textContent = "🎯 聽力八大考點專練 (12大考點桶防重複)";
          descElem.textContent = "啟動全盲聽防作弊模式！預覽 3 秒期間按鈕鎖定防誤觸，作答後自動揭曉原英文問句與選項文字。";
        } else if (currentListeningStage === "p1") {
          titleElem.textContent = "🎯 Practice 1 全真模擬測驗 (40題)";
          descElem.textContent = "啟動全盲聽防作弊模式！圖片已移除文字提示，Part 3/4 題組連播自動精簡，點擊重聽可聽完整故事。";
        } else if (currentListeningStage === "p2") {
          titleElem.textContent = "🎯 Practice 2 全真模擬測驗 (50題)";
          descElem.textContent = "啟動全盲聽防作弊模式！圖片已移除文字提示，Part 3/4 題組連播自動精簡，點擊重聽可聽完整故事。";
        }
      }
    }

    function renderGuideScreen() {
      isQuizActive = false;
      isAudioPlayingPhase = false;
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();
      document.getElementById("start-screen").style.display = "none";
      document.getElementById("result-screen").style.display = "none";
      document.getElementById("analysis-screen").style.display = "none";
      document.getElementById("quiz-active-area").style.display = "none";
      document.getElementById("guide-screen").style.display = "flex";
    }

    function renderAnalysisScreen() {
      isQuizActive = false;
      isAudioPlayingPhase = false;
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();
      document.getElementById("start-screen").style.display = "none";
      document.getElementById("result-screen").style.display = "none";
      document.getElementById("guide-screen").style.display = "none";
      document.getElementById("quiz-active-area").style.display = "none";
      document.getElementById("analysis-screen").style.display = "flex";

      const list = getMistakes();
      document.getElementById("stat-total").textContent = list.length;
      document.getElementById("stat-vocab").textContent = list.filter(m => m.module === "vocab").length;
      document.getElementById("stat-grammar").textContent = list.filter(m => m.module === "grammar").length;
      document.getElementById("stat-listening").textContent = list.filter(m => m.module === "listening").length;

      let filtered = list;
      if (currentMistakeFilter === "vocab") filtered = list.filter(m => m.module === "vocab");
      else if (currentMistakeFilter === "grammar") filtered = list.filter(m => m.module === "grammar");
      else if (currentMistakeFilter === "listening") filtered = list.filter(m => m.module === "listening");
      else if (currentMistakeFilter === "timeout") filtered = list.filter(m => m.selectedWord && m.selectedWord.includes("時間到"));

      const container = document.getElementById("mistake-list-container");
      container.innerHTML = "";

      if (filtered.length === 0) {
        container.innerHTML = `<div style="color: #64748b; padding: 20px;">此類別沒有任何錯題紀錄 🎉</div>`;
        return;
      }

      filtered.forEach((m, idx) => {
        const item = document.createElement("div");
        item.className = "mistake-item";
        
        const count = m.masteryCount || 0;
        let badgeHtml = count === 1 ? `<span class="mastery-badge level-1">⭐ 熟練度: 1/2 (掌握中)</span>` : `<span class="mastery-badge">熟練度: 0/2 (需加強)</span>`;

        item.innerHTML = `
          <div class="mistake-item-header">
            <span class="mistake-q">#${idx + 1} [${m.moduleName}] ${m.promptText}</span>
            ${badgeHtml}
          </div>
          <div class="mistake-wrong-tag">❌ 曾選/狀態：${m.selectedWord}</div>
          <div class="mistake-ans">✅ 正確答案：${m.correctWord} ${m.correctMeaning ? `(${m.correctMeaning})` : ''}</div>
          ${m.tip ? `<div class="mistake-tip">${m.tip}</div>` : ''}
        `;
        container.appendChild(item);
      });
    }

    function startMistakeReviewQuiz() {
      const list = getMistakes();
      if (list.length === 0) {
        alert("目前沒有任何錯題可進行重測！");
        return;
      }

      getAudioContext();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.resume();
      }

      isMistakeMode = true;
      isQuizActive = true;
      isAnswering = false;
      isPaused = false;
      isAudioPlayingPhase = false;
      document.getElementById("pause-overlay").style.display = "none";
      comboStreak = 0;
      updateComboBanner();
      cancelAutoNextTimer();
      sessionSentMistakes.clear();
      document.getElementById("analysis-screen").style.display = "none";
      document.getElementById("result-screen").style.display = "none";
      document.getElementById("quiz-active-area").style.display = "block";

      const reviewTargets = shuffleArray(list).slice(0, 20);
      currentQuestions = reviewTargets.map(m => {
        const rawQ = JSON.parse(JSON.stringify(m.rawQuestion));
        if (!rawQ.module && m.module) rawQ.module = m.module;
        return buildSyncedQuestion(rawQ);
      });

      currentIdx = 0;
      correctCount = 0;
      document.getElementById("score").textContent = "0";
      loadQuestion();
    }

    function handleResultRestart() {
      if (isMistakeMode) {
        startMistakeReviewQuiz();
      } else {
        unlockAudioAndStart();
      }
    }

    function buildSyncedQuestion(q) {
      if (!q.options || q.options.length === 0) return Object.assign({}, q);

      const letters = ["A", "B", "C", "D"];
      const combined = q.options.map((opt, idx) => ({
        opt: opt,
        word: (q.wordsList && q.wordsList[idx]) ? q.wordsList[idx] : "",
        meaning: (q.meanings && q.meanings[idx]) ? q.meanings[idx] : (q.meaning || ""),
        kk: (q.kkList && q.kkList[idx]) ? q.kkList[idx] : "",
        isCorrect: idx === q.ans
      }));

      const shuffled = shuffleArray(combined);
      const newOptions = shuffled.map(c => c.opt);
      const newWordsList = shuffled.map(c => c.word);
      const newMeanings = shuffled.map(c => c.meaning);
      const newKkList = shuffled.map(c => c.kk);
      const newAns = shuffled.findIndex(c => c.isCorrect);

      let newAudioText = q.audioText;
      if (q.audioText && q.audioText.includes("Statement A:")) {
        const matchIntro = q.audioText.match(/^(.*?)(?=Statement A:)/i);
        const introText = matchIntro ? matchIntro[1].trim() : "Look at the picture and choose the best answer.";
        const parts = [introText];
        newOptions.forEach((opt, idx) => {
          const cleanOptForSpeech = opt.replace(/\s*\([^)]*\)/g, "").trim();
          parts.push(`Statement ${letters[idx]}: ${cleanOptForSpeech}`);
        });
        newAudioText = parts.join(" ");
      }

      return Object.assign({}, q, {
        options: newOptions,
        wordsList: newWordsList,
        meanings: newMeanings,
        kkList: newKkList,
        ans: newAns,
        audioText: newAudioText
      });
    }

    function startCurrentQuiz() {
      isMistakeMode = false;
      isQuizActive = true;
      isAnswering = false;
      isAudioPlayingPhase = false;
      comboStreak = 0;
      updateComboBanner();
      cancelAutoNextTimer();
      sessionSentMistakes.clear();

      document.getElementById("start-screen").style.display = "none";
      document.getElementById("result-screen").style.display = "none";
      document.getElementById("analysis-screen").style.display = "none";
      document.getElementById("guide-screen").style.display = "none";
      document.getElementById("quiz-active-area").style.display = "block";

      let source = [];
      let shouldShuffleQuestions = true;

      if (currentModule === "vocab") {
        if (typeof buildDynamicVocabQuiz === 'function') {
          source = buildDynamicVocabQuiz(25, "⭐ B級綜合測驗 (25題)");
          shouldShuffleQuestions = false;
        } else if (typeof rawVocabBLevel !== 'undefined') {
          source = rawVocabBLevel.slice(0, 25);
        }
      } else if (currentModule === "grammar") {
        if (typeof getDiverseGrammarQuiz === 'function') {
          source = getDiverseGrammarQuiz(25);
          shouldShuffleQuestions = false;
        } else if (typeof rawGrammarQuestions !== 'undefined' && rawGrammarQuestions.length > 0) {
          source = shuffleArray(rawGrammarQuestions).slice(0, 25);
        } else if (typeof generate500GrammarQuestions === 'function') {
          source = shuffleArray(generate500GrammarQuestions()).slice(0, 25);
        }
      } else if (currentModule === "listening") {
        if (currentListeningStage === "review_quiz") {
          if (typeof getDiverseListeningReviewQuiz === 'function') {
            source = getDiverseListeningReviewQuiz(25);
            shouldShuffleQuestions = false;
          } else if (typeof rawReviewQuestions !== 'undefined' && rawReviewQuestions.length > 0) {
            source = shuffleArray(rawReviewQuestions).slice(0, 25);
            shouldShuffleQuestions = false;
          }
        } else if (currentListeningStage === "p1") {
          source = (typeof buildDynamicMockP1 === 'function') ? buildDynamicMockP1() : ((typeof rawMockP1 !== 'undefined') ? rawMockP1 : []);
          shouldShuffleQuestions = false;
        } else if (currentListeningStage === "p2") {
          source = (typeof buildDynamicMockP2 === 'function') ? buildDynamicMockP2() : ((typeof rawMockP2 !== 'undefined') ? rawMockP2 : []);
          shouldShuffleQuestions = false;
        }
      }

      if (!source || source.length === 0) {
        alert("題庫載入中，請稍候重試！");
        setupStartScreen();
        return;
      }

      const finalPool = shouldShuffleQuestions ? shuffleArray(source) : source.slice();
      currentQuestions = finalPool.map(q => buildSyncedQuestion(JSON.parse(JSON.stringify(q))));

      currentIdx = 0;
      correctCount = 0;
      document.getElementById("score").textContent = "0";
      loadQuestion();
    }

    function selectMainModule(mod) {
      currentModule = mod;
      isMistakeMode = false;
      currentQuestions = [];
      currentIdx = 0;
      correctCount = 0;
      comboStreak = 0;
      updateComboBanner();

      const tabBtns = document.querySelectorAll(".main-tab-btn");
      tabBtns.forEach(b => b.classList.remove("active"));

      const vocabNav = document.getElementById("vocab-subnav");
      const listenNav = document.getElementById("listening-subnav");
      const audioControls = document.getElementById("audio-ctrl-group");
      const listenHint = document.getElementById("listen-hint");

      document.getElementById("quiz-active-area").style.display = "none";
      document.getElementById("result-screen").style.display = "none";
      document.getElementById("analysis-screen").style.display = "none";
      document.getElementById("guide-screen").style.display = "none";
      document.getElementById("start-screen").style.display = "flex";

      if (mod === "vocab") {
        tabBtns[0].classList.add("active");
        vocabNav.style.display = "flex";
        listenNav.style.display = "none";
        audioControls.style.display = "flex";
        listenHint.textContent = "🔊 進入題目自動發音，也可手動點擊：";
        setupStartScreen();
      } else if (mod === "grammar") {
        tabBtns[1].classList.add("active");
        vocabNav.style.display = "none";
        listenNav.style.display = "none";
        audioControls.style.display = "none";
        listenHint.textContent = "✏️ 請閱讀題目，選出最適當的答案：";
        setupStartScreen();
      } else if (mod === "listening") {
        tabBtns[2].classList.add("active");
        vocabNav.style.display = "none";
        listenNav.style.display = "flex";
        audioControls.style.display = "flex";
        listenHint.textContent = "🎧 聽力播放中，請注意聆聽：";
        switchListeningStage('guide');
      } else if (mod === "analysis") {
        tabBtns[3].classList.add("active");
        vocabNav.style.display = "none";
        listenNav.style.display = "none";
        renderAnalysisScreen();
      }
    }

    function switchVocabStage(stage) {
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();
      currentVocabStage = stage;
      setupStartScreen();
    }

    function switchListeningStage(stage) {
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();
      currentListeningStage = stage;
      const subBtns = document.querySelectorAll("#listening-subnav .sub-btn");
      subBtns.forEach(b => b.classList.remove("active"));

      if (stage === 'guide') {
        subBtns[0].classList.add("active");
        renderGuideScreen();
      } else if (stage === 'review_quiz') {
        subBtns[1].classList.add("active");
        setupStartScreen();
      } else if (stage === 'p1') {
        subBtns[2].classList.add("active");
        setupStartScreen();
      } else if (stage === 'p2') {
        subBtns[3].classList.add("active");
        setupStartScreen();
      }
    }

    function playSpeech(text, callback) {
      if (!('speechSynthesis' in window)) {
        if (callback) callback();
        return;
      }

      if (ttsWatchdogTimer) {
        clearTimeout(ttsWatchdogTimer);
        ttsWatchdogTimer = null;
      }

      window.speechSynthesis.cancel();
      setTimeout(() => {
        const utter = new SpeechSynthesisUtterance(text);
        window.currentActiveUtterance = utter;

        const speedSelect = document.getElementById("speed-select");
        const volumeRange = document.getElementById("volume-range");
        const currentRate = speedSelect ? parseFloat(speedSelect.value) : 0.85;
        const currentVol = volumeRange ? parseFloat(volumeRange.value) : 1.0;

        utter.lang = 'en-US';
        utter.rate = currentRate;
        utter.volume = currentVol;
        utter.pitch = 1.0;

        cachedVoices = window.speechSynthesis.getVoices();

        const preferredVoices = [
          "Samantha",
          "Alex",
          "Google US English",
          "Victoria",
          "en-US"
        ];

        let selectedVoice = null;
        for (let pref of preferredVoices) {
          selectedVoice = cachedVoices.find(v => v.name.includes(pref) || v.lang === pref);
          if (selectedVoice) break;
        }

        if (!selectedVoice) selectedVoice = cachedVoices.find(v => v.lang && v.lang.startsWith('en-US'));
        if (!selectedVoice) selectedVoice = cachedVoices.find(v => v.lang && v.lang.startsWith('en'));
        
        if (selectedVoice) {
          utter.voice = selectedVoice;
        }

        let hasHandled = false;
        const finishExecution = () => {
          if (hasHandled) return;
          hasHandled = true;
          if (ttsWatchdogTimer) {
            clearTimeout(ttsWatchdogTimer);
            ttsWatchdogTimer = null;
          }
          window.currentActiveUtterance = null;
          if (callback) callback();
        };

        utter.onend = finishExecution;
        utter.onerror = (err) => {
          if (err && err.error === 'interrupted') return;
          finishExecution();
        };

        const wordsCount = text.split(/\s+/).length;
        const expectedTimeMs = Math.max(4000, (wordsCount / currentRate) * 1200 + 4000);
        ttsWatchdogTimer = setTimeout(() => {
          finishExecution();
        }, expectedTimeMs);

        window.speechSynthesis.speak(utter);
      }, 50);
    }

    // 修正 6：使用者主動點擊「重聽音訊」時，若該題為題組子題，播放包含完整長文故事的 fullAudioText
    function playCurrentAudioUser() {
      if (audioReplayRemaining <= 0 || isPaused || isAnswering || isPreviewPhase || isAudioPlayingPhase) return;

      audioReplayRemaining--;
      updateAudioReplayButton();

      pausedTimeLeft = timeLeft;
      stopQuestionTimer();
      cancelAutoNextTimer();
      isAudioPlayingPhase = true;

      const badgeElem = document.getElementById("timer-badge");
      if (badgeElem) {
        badgeElem.classList.remove("warning", "danger", "preview");
        badgeElem.classList.add("waiting");
        badgeElem.textContent = "🎧 聆聽中...";
      }

      playCurrentAudio(() => {
        isAudioPlayingPhase = false;
        if (!isPaused && isQuizActive && !isAnswering) {
          updateAudioReplayButton();
          resumeQuestionTimer();
        }
      }, true); // 傳入 true 啟用完整故事重聽
    }

    function updateAudioReplayButton() {
      const btn = document.getElementById("play-audio-btn");
      if (!btn) return;
      if (isAnswering || isPreviewPhase || isAudioPlayingPhase) {
        btn.disabled = true;
        btn.textContent = audioReplayRemaining > 0 ? `🔊 重聽音訊 (剩餘: ${audioReplayRemaining}次)` : "🔇 重聽次數已用完";
        return;
      }
      if (audioReplayRemaining > 0) {
        btn.disabled = false;
        btn.textContent = `🔊 重聽音訊 (剩餘: ${audioReplayRemaining}次)`;
      } else {
        btn.disabled = true;
        btn.textContent = "🔇 重聽次數已用完";
      }
    }

    function playCurrentAudio(onFinishedCallback, useFullAudio = false) {
      const q = currentQuestions[currentIdx];
      if (!q || !q.audioText) {
        if (onFinishedCallback) onFinishedCallback();
        return;
      }

      const targetSpeechText = (useFullAudio && q.fullAudioText) ? q.fullAudioText : q.audioText;

      if (q.repeat && !useFullAudio) {
        currentPlayPhase = 1;
        playSpeech(targetSpeechText, () => {
          if (isPaused) return;
          audioTimer = setTimeout(() => {
            if (isPaused) return;
            currentPlayPhase = 2;
            playSpeech(targetSpeechText, () => {
              currentPlayPhase = 0;
              if (onFinishedCallback) onFinishedCallback();
            });
          }, 800);
        });
      } else {
        currentPlayPhase = 1;
        playSpeech(targetSpeechText, () => {
          currentPlayPhase = 0;
          if (onFinishedCallback) onFinishedCallback();
        });
      }
    }

    function loadQuestion() {
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();

      isAnswering = false;
      isPreviewPhase = false;
      isAudioPlayingPhase = false;

      if ('speechSynthesis' in window && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      if (!currentQuestions || currentQuestions.length === 0 || !currentQuestions[currentIdx]) {
        return;
      }

      const q = currentQuestions[currentIdx];
      const qMod = getEffectiveModule(q);
      const isBlind = isBlindListeningQuestion(q);

      audioReplayRemaining = 1;

      const audioControls = document.getElementById("audio-ctrl-group");
      const listenHint = document.getElementById("listen-hint");
      if (qMod === "grammar") {
        audioControls.style.display = "none";
        listenHint.textContent = "✏️ 請閱讀題目，選出最適當的答案：";
      } else if (qMod === "vocab") {
        audioControls.style.display = "flex";
        listenHint.textContent = "🔊 進入題目自動發音，也可手動點擊：";
      } else {
        audioControls.style.display = "flex";
        listenHint.textContent = isBlind ? "🎧 盲聽模式：請專注聆聽發音，選出對應的代號：" : "🎧 聽力播放中，請注意聆聽：";
      }

      document.getElementById("q-index").textContent = currentIdx + 1;
      document.getElementById("total-q").textContent = currentQuestions.length;
      // 修正 2：載入題目時，若為盲聽題則隱藏原英文問句
      document.getElementById("display-prompt").textContent = getMaskedBlindPrompt(q);
      document.getElementById("feedback").textContent = "";
      document.getElementById("tip-box").style.display = "none";
      document.getElementById("next-btn").style.display = "none";

      const imgContainer = document.getElementById("question-image-container");
      const sceneBox = document.getElementById("scene-hint-box");

      if (q.svgData) {
        imgContainer.innerHTML = q.svgData;
        imgContainer.style.display = "block";
        sceneBox.style.display = "none";
      } else {
        imgContainer.innerHTML = "";
        imgContainer.style.display = "none";
        if (q.sceneHint && !isBlind) {
          sceneBox.textContent = `🖼 畫面提示：${q.sceneHint}`;
          sceneBox.style.display = "block";
        } else {
          sceneBox.style.display = "none";
        }
      }

      const container = document.getElementById("options-container");
      container.innerHTML = "";

      const letters = ["A", "B", "C", "D"];
      q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.id = `opt-btn-${idx}`;
        
        let kkHtml = "";
        if (qMod === "vocab" && !q.isMeaningQuestion && q.kkList && q.kkList[idx]) {
          kkHtml = `<span class="kk-badge">${q.kkList[idx]}</span>`;
        }

        if (isBlind) {
          btn.innerHTML = `<b>(${letters[idx]})</b> 🎧 (請依語音內容選取)`;
        } else {
          btn.innerHTML = `<b>(${letters[idx]})</b> ${opt} ${kkHtml}`;
        }

        btn.onclick = () => checkAnswer(idx, btn, q.ans);
        container.appendChild(btn);
      });

      if (qMod === "listening") {
        updateAudioReplayButton();
        startPreviewCountdown(() => {
          isAudioPlayingPhase = true;
          updateAudioReplayButton();
          const badgeElem = document.getElementById("timer-badge");
          if (badgeElem) {
            badgeElem.classList.remove("preview");
            badgeElem.classList.add("waiting");
            badgeElem.textContent = "🎧 聆聽中...";
          }
          playCurrentAudio(() => {
            isAudioPlayingPhase = false;
            if (!isPaused && isQuizActive && !isAnswering) {
              updateAudioReplayButton();
              startQuestionTimer();
            }
          });
        });
      } else if (qMod === "vocab") {
        isAudioPlayingPhase = true;
        updateAudioReplayButton();
        const badgeElem = document.getElementById("timer-badge");
        if (badgeElem) {
          badgeElem.classList.remove("preview", "warning", "danger");
          badgeElem.classList.add("waiting");
          badgeElem.textContent = "🎧 聆聽中...";
        }

        let hasStartedTimer = false;
        const triggerTimer = () => {
          if (hasStartedTimer) return;
          hasStartedTimer = true;
          isAudioPlayingPhase = false;
          if (!isPaused && isQuizActive && !isAnswering) {
            updateAudioReplayButton();
            startQuestionTimer();
          }
        };

        playCurrentAudio(() => {
          triggerTimer();
        });
        audioTimer = setTimeout(() => {
          triggerTimer();
        }, 1500);

      } else {
        const badgeElem = document.getElementById("timer-badge");
        if (badgeElem) {
          badgeElem.classList.remove("waiting", "preview");
        }
        startQuestionTimer();
      }
    }

    function nextQuestion() {
      stopAllAudio();
      cancelAutoNextTimer();
      stopQuestionTimer();

      currentIdx++;
      if (currentIdx < currentQuestions.length) {
        loadQuestion();
      } else {
        isQuizActive = false;
        isAudioPlayingPhase = false;
        document.getElementById("quiz-active-area").style.display = "none";
        const finalScore = Math.round((correctCount / currentQuestions.length) * 100);
        document.getElementById("final-score").textContent = finalScore;
        document.getElementById("result-screen").style.display = "flex";

        const restartBtn = document.getElementById("result-restart-btn");
        if (restartBtn) {
          restartBtn.textContent = isMistakeMode ? "🔄 繼續重測錯題" : "🔄 重新隨機測驗";
        }

        if (finalScore >= 80) playSfxVictory();
        if (finalScore === 100) unlockBadge("perfect");
        unlockBadge("first");
        updateStreakOnQuizComplete();
        recordScoreHistory(finalScore);

        let moduleName = "核心單字 (B級綜合測驗)";
        if (currentModule === "grammar") moduleName = "重點文法測驗";
        if (currentModule === "listening") {
          if (currentListeningStage === "review_quiz") moduleName = "官方聽力 (考點核心專練)";
          else moduleName = `官方聽力 (${currentListeningStage})`;
        }
        if (isMistakeMode) moduleName = "錯題專項重測";

        sendSessionSummaryToGoogleForm(moduleName, finalScore, currentQuestions.length, correctCount);
      }
    }

    renderGamifyStatus();
    setupStartScreen();