const express = require('express');
const http = require('http');
const path = require('path');

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO with CORS
const io = require('socket.io')(server, {
  cors: {
    origin: "*", // Allow all domains (secure later if needed)
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Serve static files (HTML, CSS, JS, images) from current directory
app.use(express.static(__dirname));

// Handle new connections
io.on('connection', (socket) => {
  console.log('✅ New client connected:', socket.id);

  // Player joins
  socket.on('join-player', () => {
    socket.role = 'player';
    console.log('🎯 Player joined:', socket.id);
    socket.emit('status', 'You are now playing!');
  });

  // Host joins
  socket.on('join-host', () => {
    socket.role = 'host';
    console.log('👨‍🏫 Host joined:', socket.id);
    socket.emit('status', 'Host panel active');
  });

  // Host sends a question
  socket.on('send-question', (questionData) => {
    if (socket.role !== 'host') {
      console.warn('⚠️ Non-host tried to send question:', socket.id);
      return;
    }

    console.log('📤 Host sent question:', questionData.text);
    // Broadcast to everyone (including player)
    io.emit('new-question', questionData);
  });

  // Host triggers 50:50 (removes two wrong options)
  socket.on('fifty-fifty', (data) => {
    if (socket.role !== 'host') return;

    console.log('🔧 50:50 used:', data.remove);
    io.emit('fifty-fifty', data); // Send to player
  });

  // Player uses a lifeline
  socket.on('use-lifeline', (data) => {
    if (socket.role !== 'player') return;

    console.log('🆘 Lifeline request:', data.type);
    // Forward to host
    io.emit('lifeline-request', {
      type: data.type,
      time: new Date().toLocaleTimeString()
    });
  });

  // Player submits answer (for logging)
  socket.on('submit-answer', (data) => {
    if (socket.role !== 'player') return;

    console.log(`📝 Player answered: ${data.answer} → Correct: ${data.correct}`);
    // You can log this or broadcast to host
  });

  // Broadcast team scores and active team status
  socket.on('update-scores', (data) => {
    console.log('🏆 Broadcast scores:', data);
    io.emit('scores-updated', data);
  });

  // Host toggles options visibility on player screen
  socket.on('toggle-options', (data) => {
    if (socket.role !== 'host') return;
    console.log('👁️ Host toggled options visibility:', data.visible);
    io.emit('options-toggled', data);
  });

  // Host locks an option
  socket.on('lock-option', (data) => {
    if (socket.role !== 'host') return;
    console.log('🔒 Host locked option:', data.option);
    io.emit('option-locked', data);
  });

  // Host reveals the answer
  socket.on('reveal-answer', () => {
    if (socket.role !== 'host') return;
    console.log('👁️ Host revealed correct answer');
    io.emit('answer-revealed');
  });

  // Broadcast clear-question to reset player/display screen
  socket.on('clear-question', () => {
    console.log('🧹 Clearing question screen');
    io.emit('clear-question');
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`\n🚀 KBC Server is running on port ${PORT}`);
  console.log(`🔗 Connect your frontend to: https://your-app.onrender.com`);
  console.log(`💡 Make sure your HTML uses: const socket = io("https://your-app.onrender.com");\n`);
});
