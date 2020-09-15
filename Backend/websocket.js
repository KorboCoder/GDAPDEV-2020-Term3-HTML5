//websocket setup
var ws = require('ws');

const wsServer = new ws.Server({noServer: true, path: '/socket'});
wsServer.on('connection', connection => {
    connection.on('message', message => {
      console.log(message);
      connection.send(`${message}`);
    });
})

module.exports = wsServer;