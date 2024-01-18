// src/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Import the Code model
const Code = require('./models/code');

// MongoDB connection
const mongoURI = proess.env.myMongoURI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/api/codes', async (req, res) => {
  const newCode = new Code({ value: generateCode(), used: false });
  await newCode.save();
  res.json({ code: newCode.value });
});

app.post('/api/codes/use', async (req, res) => {
  const { code } = req.body;

  const existingCode = await Code.findOne({ value: code });

  if (!existingCode) {
    return res.status(400).json({ error: 'Enter a valid code' });
  }

  if (existingCode.used) {
    return res.status(400).json({ error: 'This code has already been used' });
  }

  const currentTime = new Date();
  const codeExpirationTime = new Date(existingCode.createdAt.getTime() + 60 * 1000);

  if (currentTime > codeExpirationTime) {
    return res.status(400).json({ error: 'The code has expired' });
  }

  // Mark the code as used
  existingCode.used = true;
  await existingCode.save();

  res.json({ message: 'Code is correct' });
});

// Helper function to generate a random code
function generateCode() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(code);
  return code;
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
