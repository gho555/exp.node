const EventEmitter = require('events');
const emitter = new EventEmitter();
const { log } = require('./logger');

// log('hi');

emitter.on('massageLogged', (e) => {
  console.log(e);
});

emitter.emit('massageLogged', {
  id: 1,
  url: 'http://',
});
