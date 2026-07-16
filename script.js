// Client-side script for KBC Player/Display Screen
let correctCount = 0;
let currentQuestionIndex = null;
let currentQuestionCorrect = null;
let lockedOption = null;
let timerInterval = null;
let timeLeft = 30;
let timerEnded = false;

if (!window.isHost) {
  // Audio helpers
  function stopAllAudio() {
    ['snd-correct', 'snd-wrong', 'snd-locked', 'snd-question', 'snd-suspense'].forEach(id => {
      const audio = document.getElementById(id);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }

  function playQuestionAudio(index) {
    stopAllAudio();
    const audio = document.getElementById('snd-question');
    if (audio) {
      audio.loop = false;
      audio.play().catch(e => console.log("Play question audio failed:", e));
    }
  }

  function playLockAudio() {
    stopAllAudio();
    const audio = document.getElementById('snd-locked');
    if (audio) {
      audio.play().catch(e => console.log("Play locked audio failed:", e));
    }
  }

  function playCorrectAudio() {
    stopAllAudio();
    const audio = document.getElementById('snd-correct');
    if (audio) {
      audio.play().catch(e => console.log("Play correct audio failed:", e));
    }
  }

  function playWrongAudio() {
    stopAllAudio();
    const audio = document.getElementById('snd-wrong');
    if (audio) {
      audio.play().catch(e => console.log("Play wrong audio failed:", e));
    }
  }

  function playSuspenseMusic() {
    stopAllAudio();
    const audio = document.getElementById('snd-suspense');
    if (audio) {
      audio.loop = true;
      audio.play().catch(e => console.log("Play suspense music failed:", e));
    }
  }

  // Listen for new question
  socket.on('new-question', (q) => {
    console.log("🎯 Received question:", q);

    resetGame();
    currentQuestionIndex = q.index;
    currentQuestionCorrect = q.correct;
    document.getElementById('question-text').textContent = q.text;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    container.style.display = 'grid'; // Visible immediately

    Object.keys(q.options).forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.option = key;
      btn.innerHTML = `<span class="option-key">${key}</span> ${q.options[key]}`;
      // No btn.onclick! The player cannot select options themselves.
      container.appendChild(btn);
    });

    // Start timer immediately and play question/suspense audio
    if (q.index !== null && q.index < 3) {
      document.querySelector('.timer').style.display = 'block';
      startTimer();
      playQuestionAudio(q.index);
    } else {
      document.querySelector('.timer').style.display = 'none';
      clearInterval(timerInterval);
      playQuestionAudio(q.index);
    }
  });

  // Listen for options visibility toggle
  socket.on('options-toggled', (data) => {
    const container = document.getElementById('options-container');
    if (container) {
      if (data.visible) {
        container.style.display = 'grid';
        if (currentQuestionIndex !== null && currentQuestionIndex < 3) {
          startTimer();
        }
      } else {
        container.style.display = 'none';
        clearInterval(timerInterval);
      }
    }
  });

  // Listen for option lock from host
  socket.on('option-locked', (data) => {
    lockedOption = data.option;
    clearInterval(timerInterval); // Stop timer immediately

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      btn.classList.remove('locked');
      if (btn.dataset.option === lockedOption) {
        btn.classList.add('locked');
      }
    });

    // Play lock chime sound
    playLockAudio();
  });

  // Listen for answer reveal from host
  socket.on('answer-revealed', () => {
    if (!currentQuestionCorrect) return;

    clearInterval(timerInterval);
    const buttons = document.querySelectorAll('.option-btn');
    const resultDiv = document.getElementById('result-message');

    // Highlight options
    buttons.forEach(btn => {
      const optKey = btn.dataset.option;
      if (optKey === currentQuestionCorrect) {
        btn.classList.add('correct-reveal');
      } else if (optKey === lockedOption && lockedOption !== currentQuestionCorrect) {
        btn.classList.add('wrong-reveal');
      }
    });

    // If the timer already ended, do NOT play sound again or start suspense music
    if (timerEnded) {
      return;
    }

    const isCorrect = lockedOption === currentQuestionCorrect;

    if (isCorrect) {
      playCorrectAudio();
      resultDiv.innerHTML = '<p style="color:#5cb85c; font-size:2.2rem; font-weight:bold; text-shadow: 0 0 10px rgba(92,184,92,0.4)">✅ CORRECT!</p>';
      correctCount++;
      updatePointsLadder();

      if (correctCount >= 10) {
        setTimeout(() => {
          alert("🎉 CONGRATULATIONS!\nYou've earned 200 points!");
        }, 600);
      }
    } else {
      playWrongAudio();
      resultDiv.innerHTML = '<p style="color:#ff3b30; font-size:2.2rem; font-weight:bold; text-shadow: 0 0 10px rgba(255,59,48,0.4)">WRONG ANSWER</p>';
    }
  });

  // Listen for 50:50 lifeline
  socket.on('fifty-fifty', (data) => {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      if (data.remove.includes(btn.dataset.option)) {
        btn.style.opacity = '0.15';
        btn.style.filter = 'blur(4px)';
        btn.disabled = true;
      }
    });
  });

  // Listen for clearing active question
  socket.on('clear-question', () => {
    resetGame();
    document.getElementById('question-text').textContent = "ANSWER THE QUESTIONS...";
    document.getElementById('options-container').innerHTML = '';
  });

  function startTimer() {
    timeLeft = 30;
    const timerEl = document.querySelector('.timer');
    timerEl.textContent = timeLeft;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerEl.textContent = "⏰ Time's Up!";
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);
        
        // Timeout counts as a loss
        timerEnded = true;
        playWrongAudio();
        const resultDiv = document.getElementById('result-message');
        if (resultDiv) {
          resultDiv.innerHTML = '<p style="color:#ff3b30; font-size:2.2rem; font-weight:bold; text-shadow: 0 0 10px rgba(255,59,48,0.4)">TIME IS UP</p>';
        }
      }
    }, 1000);
  }

  function updatePointsLadder() {
    const items = document.querySelectorAll('#points-tree li');
    items.forEach(item => item.classList.remove('current'));
    const activeIndex = items.length - 1 - Math.min(correctCount, items.length - 1);
    if (items[activeIndex]) items[activeIndex].classList.add('current');
  }

  function resetGame() {
    timerEnded = false;
    stopAllAudio();
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 30;
    lockedOption = null;
    document.querySelector('.timer').textContent = '30';
    document.querySelector('.timer').style.display = 'block';
    document.getElementById('result-message').innerHTML = '';
    
    // Close loss modal
    closeLossModal();

    const container = document.getElementById('options-container');
    if (container) {
      container.style.display = 'none';
      container.querySelectorAll('.option-btn').forEach(btn => {
        btn.className = 'option-btn';
        btn.style.cssText = '';
        btn.disabled = false;
      });
    }
  }

  function showLossModal(message) {
    const modal = document.getElementById('loss-modal');
    const msgEl = document.getElementById('loss-modal-message');
    const scoreEl = document.getElementById('modal-final-score');
    
    if (modal && msgEl && scoreEl) {
      msgEl.textContent = message;
      scoreEl.textContent = correctCount * 20;
      modal.classList.add('show');
    }
  }

  window.closeLossModal = function() {
    const modal = document.getElementById('loss-modal');
    if (modal) modal.classList.remove('show');
  };

  window.useLifeline = function(type) {
    socket.emit('use-lifeline', { type, time: new Date().toLocaleTimeString() });
    alert(`Lifeline "${type}" requested!`);
  };

  function playSound(id) {
    if (id === 'correct') {
      playCorrectAudio();
    } else if (id === 'wrong') {
      playWrongAudio();
    } else {
      const sound = document.getElementById(id);
      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Audio failed to play:", e));
      }
    }
  }

  socket.on('connect', () => {
    console.log('🟢 Connected to server');
    socket.emit('join-player');
  });
  
  socket.on('connect_error', (err) => {
    console.error('🔴 Connection failed:', err.message);
  });

  // Handle audio unlock overlay to satisfy browser autoplay policies
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('unlock-audio-btn');
    const overlay = document.getElementById('audio-unlock-overlay');
    if (btn && overlay) {
      btn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        
        // Silently play and pause all audio elements to unlock them
        const audioIds = ['snd-correct', 'snd-wrong', 'snd-locked', 'snd-question', 'snd-suspense'];
        audioIds.forEach(id => {
          const audio = document.getElementById(id);
          if (audio) {
            audio.play().then(() => {
              audio.pause();
              audio.currentTime = 0;
              console.log(`Audio ${id} successfully unlocked!`);
            }).catch(e => console.log(`Audio unlock failed for ${id}:`, e));
          }
        });
      });
    }

    // Play suspense music after question timer sound finishes playing (if not locked/ended yet)
    const sndQuestion = document.getElementById('snd-question');
    if (sndQuestion) {
      sndQuestion.addEventListener('ended', () => {
        if (lockedOption === null && !timerEnded) {
          playSuspenseMusic();
        }
      });
    }
  });
}
