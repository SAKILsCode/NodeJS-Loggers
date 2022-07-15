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

console.log('Hello World');
console.error('Error');
console.info('Information');
console.warn('Warning');
console.debug('Debug');
