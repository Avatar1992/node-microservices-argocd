const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send("👋 Hello from Node Microservice! Everything is running fine ✅");
});

app.listen(PORT, () => {
  console.log(`🚀 Node Microservice running on port ${PORT}`);
});

