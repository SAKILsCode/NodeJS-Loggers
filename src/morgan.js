const express = require('express');
const morgan = require('morgan');
const app = express();

// app.use(morgan('combined'));
// app.use(morgan('common'));
app.use(morgan('dev'));
// app.use(morgan('short'));
// app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome' });
});

app.listen(4000, () => {
  console.log('server is listening on port: 4000');
});
