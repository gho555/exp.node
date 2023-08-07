const { Logger } = require('./path');

const logger = new Logger();

logger.on('log', (arg) => {
  console.log(arg);
});

logger.log('logged');
