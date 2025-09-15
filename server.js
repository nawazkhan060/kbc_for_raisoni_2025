const express = require('express');
const http = require('http');
const path = require('path');

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = require('socket.io')(server, {
  cors: {
    origin: "https://kbc-for-raison.onrender.com/", // Allow all (or replace with your Vercel/Netlify URL later)
    methods: ["GET", "POST"]
  }
});

// Serve static files from current directory
app.use(express.static(__dirname));

// Handle new connections
io.on('connection', (socket) => {
  console.log('✅ Connected:', socket.id);

  // Player joins
  socket.on('join-player', () => {
    socket.role = 'player';
    console.log('🎯 Player joined');
  });

  // Host joins
  socket.on('join-host', () => {
    socket.role = 'host';
    console.log('👨‍🏫 Host joined');
  });

  // Host sends a question
  socket.on('send-question', (q) => {
    if (socket.role === 'host') {
      console.log('📤 Sent:', q.text);
      io.emit('new-question', q); // Send to everyone
    }
  });

  // Player uses lifeline
  socket.on('use-lifeline', (data) => {
    if (socket.role === 'player') {
      console.log('🆘 Lifeline:', data.type);
      io.emit('lifeline-request', data);
    }
  });

  // 50:50 from host
  socket.on('fifty-fifty', (data) => {
    if (socket.role === 'host') {
      io.emit('fifty-fifty', data);
    }
  });

  // Submit answer
  socket.on('submit-answer', (data) => {
    if (socket.role === 'player') {
      console.log('📝 Answer submitted:', data.correct ? 'Correct!' : 'Wrong!');
    }
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('❌ Disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
});

