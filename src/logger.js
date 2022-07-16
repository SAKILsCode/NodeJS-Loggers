const { createLogger, format, transports, Logger } = require('winston');

const level = process.env.LOG_LEVEL || 'debug';

const formatParams = ({ level, message, timestamp, ...args }) => {
  const ts = timestamp.slice(0, 19).replace('T', ' ');
  return `${ts} ${level}: ${message} ${
    Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
  }`;
};

const devFormat = format.combine(
  format.colorize({ all: true }),
  format.timestamp(),
  format.align(),
  format.printf(formatParams)
);

const prodFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.printf(formatParams)
);
/**
 * @type {Logger}
 */
let logger = null;
if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production') {
  logger = createLogger({
    level,
    format: prodFormat,
    transports: [
      new transports.File({ filename: 'logs/error.log', level: 'error' }),
      new transports.File({ filename: 'logs/combined.log' }),
    ],
  });
} else {
  logger = createLogger({
    level,
    format: devFormat,
    transports: new transports.Console(),
  });
}

module.exports = logger;
