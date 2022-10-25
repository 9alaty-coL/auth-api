const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to auth api.');
})

app.listen(PORT, () => {
  console.log('App running under port: ', PORT);
})