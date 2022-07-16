const express = require('express');
const morgan = require('morgan');
const uuid = require('uuid');
const app = express();

// app.use(morgan('combined'));
// app.use(morgan('common'));
// app.use(morgan('dev'));
// app.use(morgan('short'));
// app.use(morgan('tiny'));

app.use((req, _res, next) => {
  const id = uuid.v4()
  req.id = id
  next()
})

morgan.token('random', (req, res) => {
  return Math.round(Math.random() * 100);
});

morgan.token('request-id', (req, res) => {
  return req.id;
});

app.use(morgan(':date[iso] | :method | :url | :status | :response-time[4]ms | RandomNum: :random | Request ID: :request-id'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome' });
});

app.listen(4000, () => {
  console.log('server is listening on port: 4000');
});
