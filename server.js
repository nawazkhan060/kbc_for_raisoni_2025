const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
socket.on('lifeline-request', (data) => {
  const list = document.getElementById('requests-list');
  if (list.innerHTML === 'No requests yet') list.innerHTML = '';

  const li = document.createElement('li');
  li.textContent = `[${data.time}] Player used: ${data.type}`;
  list.appendChild(li);

  // ✅ Cross out the used lifeline
  markLifelineUsed(data.type);
});

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log('✅ Connected:', socket.id);

  socket.on('join-player', () => {
    socket.role = 'player';
    console.log('🎯 Player joined');
  });

  socket.on('join-host', () => {
    socket.role = 'host';
    console.log('👨‍🏫 Host joined');
  });

  socket.on('send-question', (q) => {
    if (socket.role === 'host') {
      console.log('📤 Sent:', q.text);
      io.emit('new-question', q);
    }
  });

  socket.on('use-lifeline', (data) => {
    if (socket.role === 'player') {
      console.log('🆘 Lifeline:', data.type);
      io.emit('lifeline-request', data);
    }
  });

  socket.on('fifty-fifty', (data) => {
    if (socket.role === 'host') {
      console.log('🔧 50:50 removed:', data.remove);
      io.emit('fifty-fifty', data);
    }
  });

  socket.on('submit-answer', (data) => {
    if (socket.role === 'player') {
      console.log('📝 Answer:', data.correct ? 'Correct!' : 'Wrong!');
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}`);
  console.log(`Host: http://localhost:${PORT}/host.html`);
  console.log(`Player: http://localhost:${PORT}/index.html\n`);
});