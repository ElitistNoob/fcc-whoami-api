const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));

const absolutePath = `${__dirname}/views/index.html`;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});

app.get('/api/whoami', (req, res) => {
  const ipAddress = req.ip.slice(7);
  res.json({
    ipaddress: ipAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  });
});

const listener = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line
  console.log({ port: listener.address().port });
});
