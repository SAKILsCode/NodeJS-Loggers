const express = require('express');
const logger = require('./logger');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome' });
});

logger.error('something went wrong!')
app.listen(4000, () => {
  logger.log('info', 'server is listening on port: 4000');
});
