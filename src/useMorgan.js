const morgan = require('morgan');

const useMorgan = (app) => {
  if (process.env.NODE_ENV === 'production') {
    // will update later
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

module.exports = useMorgan;