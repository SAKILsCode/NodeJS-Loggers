const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome' });
});

app.listen(4000, () => {
  console.log('server is listening on port: 4000');
})

