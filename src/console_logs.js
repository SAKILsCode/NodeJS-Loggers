const express = require('express');
const logger = require('./logger');
const app = express();

app.get('/', (req, res) => {
  console.log(`${req.method} - ${req.url} - ${new Date().toISOString()}`);
  res.status(200).json({ message: 'welcome' });
});

app.listen(4000, () => {
  console.log('server is listening on port: 4000');
});

logger.log('Hello World');
logger.error('Error');
logger.info('Information');
logger.warn('Warning');
logger.debug('Debug');
