const winston = require('winston');

/*
const logger = {
  log: console.log,
  error: console.error,
  info: console.info,
  warn: console.warn,
  debug: console.debug,
};
*/

const format = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf(({ level, message, timestamp, ...args }) => {
      const ts = timestamp.slice(0, 19).replace('T', ' ');
      return `${ts} ${level}: ${message} ${
        Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
      }`;
    })
  ),

  transports: [new winston.transports.Console()],
});

module.exports = logger;
