const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static('./build'));

app.get('/api/v1/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://fir-hosting-app-clip.web.app/.well-known/api/${id}.json`);
    res.json({ data: response.data });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

app.use((req, res) => {
  res.sendFile(path.resolve('./build/index.html'));
});

app.listen('3000', () => {
  console.log('Listening on port 3000');
});