const MESG = require('mesg-js').service()

MESG.listenTask({
  send: require('./tasks/send')
})
