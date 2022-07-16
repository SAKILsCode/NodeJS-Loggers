const express = require('express');
const logger = require('./logger');

const app = express();

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'welcome' });
});

logger.error('something went wrong!')
logger.debug('something went wrong!')
logger.warn('something went wrong!')

app.listen(4000, () => {
  logger.log('info', 'server is listening on port: 4000');
});
