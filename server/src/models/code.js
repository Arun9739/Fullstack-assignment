// src/models/code.js
const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  used: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;
