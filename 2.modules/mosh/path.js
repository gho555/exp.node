const EventEmitter = require('events');
const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(arg) {
    this.emit('log', arg);
  }
}

module.exports.Logger = Logger;
