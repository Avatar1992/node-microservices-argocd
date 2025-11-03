const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017/devopsdb';

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send("Hello from Backend API!");
});

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));

