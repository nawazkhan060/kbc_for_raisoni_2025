// Initialize Socket.IO connection
const socket = io();

// Game state variables
let correctCount = 0;
let currentQuestionIndex = null;
let timerInterval = null;

// Only run player logic if NOT host
if (!window.isHost) {
  // Join as player
  socket.emit('join-player');

  // Listen for new question
  socket.on('new-question', (q) => {
    resetGame(); // Reset UI from previous question
    currentQuestionIndex = q.index;
    document.getElementById('question-text').textContent = q.text;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    // Create option buttons
    Object.keys(q.options).forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.option = key; // Critical for 50:50
      btn.innerHTML = `<span class="option-key">${key}</span> ${q.options[key]}`;
      btn.onclick = () => submitAnswer(key, q.correct);
      container.appendChild(btn);
    });

    // Start timer only for first 3 correct answers
    if (correctCount < 3) {
      startTimer();
    } else {
      document.querySelector('.timer').textContent = "";
    }
  });

  // Handle answer submission
  function submitAnswer(selected, correct) {
    clearInterval(timerInterval); // Stop the clock

    const buttons = document.querySelectorAll('.option-btn');
    const resultDiv = document.getElementById('result-message');

    // Disable all buttons after answer
    buttons.forEach(btn => (btn.disabled = true));

    // Highlight correct and selected answers visually
    buttons.forEach(btn => {
      if (btn.dataset.option === correct) {
        // ✅ Correct answer in gold/yellow
        btn.style.background = 'linear-gradient(to bottom, gold, #cc9900)';
        btn.style.borderColor = 'orange';
        btn.style.color = '#001f5b';
        btn.style.fontWeight = 'bold';
      } else if (btn.dataset.option === selected && selected !== correct) {
        // ❌ Selected wrong answer in red
        btn.style.background = 'linear-gradient(to bottom, #cc3333, #880000)';
        btn.style.color = 'white';
      }
    });

    const isCorrect = selected === correct;

    if (isCorrect) {
      playSound('correct');
      // ✅ Show "Correct!" message
      resultDiv.innerHTML = '<p style="color:#5cb85c; font-size:2.5rem; font-weight:bold; text-shadow:0 0 10px rgba(92,184,92,0.5)">✅ CORRECT!</p>';
      correctCount++;
      updateMoneyLadder();

      // 🎉 Win ₹3,000 animation
      if (correctCount >= 15) {
        setTimeout(() => alert("🎉 CONGRATULATIONS!\nYou've won ₹3,000!"), 600);
      }
    } else {
      playSound('wrong');
      // ❌ Show "Wrong!" message
      resultDiv.innerHTML = '<p style="color:red; font-size:2.5rem; font-weight:bold; text-shadow:0 0 10px rgba(255,0,0,0.5)">❌ WRONG!</p>';
      setTimeout(() => {
        alert("You gave a wrong answer! Game Over.");
      }, 600);
    }

    // Send result back to server/host
    socket.emit('submit-answer', {
      answer: selected,
      qIndex: currentQuestionIndex,
      correct: isCorrect
    });
  }

  // ✅ Start 60-second countdown timer
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
        timerEl.textContent = "Time's Up!";
        socket.emit('submit-answer', {
          answer: null,
          qIndex: currentQuestionIndex,
          correct: false
        });
        alert('⏰ Time’s up! You\'re Out!');
      }
    }, 1000);
  }

  // ✅ Update prize ladder
  function updateMoneyLadder() {
    const items = document.querySelectorAll('#money-tree li');
    const prevIndex = 14 - (correctCount - 1);
    const currentIndex = 14 - correctCount;

    if (items[prevIndex]) items[prevIndex].classList.remove('current');
    if (items[currentIndex]) items[currentIndex].classList.add('current');
  }

  // ✅ Reset game UI before next question
  function resetGame() {
    clearInterval(timerInterval);
    timerInterval = null;
    document.querySelector('.timer').textContent = "60";
    document.getElementById('result-message').innerHTML = '';
    const container = document.getElementById('options-container');
    if (container) {
      container.querySelectorAll('.option-btn').forEach(btn => {
        btn.style.cssText = ''; // Remove inline styles
        btn.disabled = false;
      });
    }
  }

  // ✅ Lifeline handler
  window.useLifeline = function(type) {
    socket.emit('use-lifeline', {
      type,
      time: new Date().toLocaleTimeString()
    });
    alert(`Lifeline "${type}" requested!`);
  };

  // ✅ Handle 50:50 from host
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

  // ✅ Audio helper
  function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.log("Audio failed:", e));
    }
  }

  // ✅ Connection feedback
  socket.on('connect', () => console.log('🟢 Connected to server'));
  socket.on('connect_error', (err) => {
    console.error('🔴 Connection failed:', err.message);
    alert('❌ Unable to connect. Is the server running?');
  });
}