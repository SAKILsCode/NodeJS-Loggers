const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

morgan.token('random', (req, res) => {
  return Math.round(Math.random() * 100);
});

morgan.token('request-id', (req, res) => {
  return req.id;
});

const accessLogStream = fs.createWriteStream(
  path.resolve('logs', 'access.log'),
  { flags: 'a' }
);

const useMorgan = (app) => {
  if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production') {
    app.use(morgan(prodFormat, { stream: accessLogStream }));
  } else {
    app.use(
      morgan('dev', {
        skip: (_req, res) => {
          return res.statusCode < 400;
        },
        stream: process.stderr,
      })
    );

    app.use(
      morgan('dev', {
        skip: (_req, res) => {
          return res.statusCode >= 400;
        },
        stream: process.stdout,
      })
    );
  }
};

const prodFormat = (tokens, req, res) => {
  return JSON.stringify({
    method: tokens['method'](req, res),
    status: tokens['status'](req, res),
    random: tokens['random'](req, res),
    requestId: tokens['request-id'](req, res),
  });
};

module.exports = useMorgan;
