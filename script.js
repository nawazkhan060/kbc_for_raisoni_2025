// ✅ Do NOT declare `const socket = io()` here — it's already defined in HTML

let correctCount = 0;
let currentQuestionIndex = null;
let timerInterval = null;

if (!window.isHost) {
  socket.emit('join-player');
  console.log("🎮 Player: Joined game");

  socket.on('new-question', (q) => {
    console.log("🎯 Received question:", q); // Debug log

    resetGame();
    currentQuestionIndex = q.index;
    document.getElementById('question-text').textContent = q.text;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    Object.keys(q.options).forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.option = key;
      btn.innerHTML = `<span class="option-key">${key}</span> ${q.options[key]}`;
      btn.onclick = () => submitAnswer(key, q.correct);
      container.appendChild(btn);
    });

    if (correctCount < 3) startTimer();
    else document.querySelector('.timer').textContent = "";
  });

  function submitAnswer(selected, correct) {
    clearInterval(timerInterval);
    const buttons = document.querySelectorAll('.option-btn');
    const resultDiv = document.getElementById('result-message');

    buttons.forEach(btn => btn.disabled = true);

    buttons.forEach(btn => {
      if (btn.dataset.option === correct) {
        btn.style.background = 'linear-gradient(to bottom, gold, #cc9900)';
        btn.style.borderColor = 'orange';
        btn.style.color = '#001f5b';
        btn.style.fontWeight = 'bold';
      } else if (btn.dataset.option === selected && selected !== correct) {
        btn.style.background = 'linear-gradient(to bottom, #cc3333, #880000)';
        btn.style.color = 'white';
      }
    });

    const isCorrect = selected === correct;

    if (isCorrect) {
      playSound('correct');
      resultDiv.innerHTML = '<p style="color:#5cb85c; font-size:2.5rem; font-weight:bold">✅ CORRECT!</p>';
      correctCount++;
      updateMoneyLadder();

      if (correctCount >= 15) {
        setTimeout(() => alert("🎉 CONGRATULATIONS!\nYou've won ₹3,000!"), 600);
      }
    } else {
      playSound('wrong');
      resultDiv.innerHTML = '<p style="color:red; font-size:2.5rem; font-weight:bold">❌ WRONG!</p>';
      setTimeout(() => alert("You're out!"), 600);
    }

    socket.emit('submit-answer', { answer: selected, qIndex: currentQuestionIndex, correct: isCorrect });
  }

  function startTimer() {
    let timeLeft = 60;
    const timerEl = document.querySelector('.timer');
    timerEl.textContent = timeLeft;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerEl.textContent = "⏰ Time's Up!";
        socket.emit('submit-answer', { answer: null, qIndex: currentQuestionIndex, correct: false });
        alert('⏰ Time’s up!');
      }
    }, 1000);
  }

  function updateMoneyLadder() {
    const items = document.querySelectorAll('#money-tree li');
    const prevIndex = 14 - (correctCount - 1);
    const currentIndex = 14 - correctCount;

    if (items[prevIndex]) items[prevIndex].classList.remove('current');
    if (items[currentIndex]) items[currentIndex].classList.add('current');
  }

  function resetGame() {
    clearInterval(timerInterval);
    timerInterval = null;
    document.querySelector('.timer').textContent = "60";
    document.getElementById('result-message').innerHTML = '';
    const container = document.getElementById('options-container');
    if (container) {
      container.querySelectorAll('.option-btn').forEach(btn => {
        btn.style.cssText = '';
        btn.disabled = false;
      });
    }
  }

  window.useLifeline = function(type) {
    socket.emit('use-lifeline', { type, time: new Date().toLocaleTimeString() });
    alert(`Lifeline "${type}" requested!`);
  };

  socket.on('fifty-fifty', (data) => {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      if (data.remove.includes(btn.dataset.option)) {
        btn.style.opacity = '0.3';
        btn.style.filter = 'blur(5px)';
        btn.disabled = true;
      }
    });
  });

  function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.log("Audio failed:", e));
    }
  }

  socket.on('connect', () => console.log('🟢 Connected to server'));
  socket.on('connect_error', (err) => {
    console.error('🔴 Connection failed:', err.message);
    alert('❌ Unable to connect. Is the server running?');
  });
}
