const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://backend:8080';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(BACKEND_URL);
    res.send(`<h1>Frontend UI</h1><p>Response from Backend: ${response.data}</p>`);
  } catch (error) {
    res.send(`<h1>Frontend UI</h1><p>Backend not reachable 😢</p>`);
  }
});

app.listen(PORT, () => console.log(`🌐 Frontend running on port ${PORT}`));

