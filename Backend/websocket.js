//websocket setup
var ws = require('ws');

const wsServer = new ws.Server({noServer: true, path: '/socket'});
wsServer.on('connection', connection => {
    connection.on('message', message => {
      console.log(message);
      wsServer.clients
      .forEach(client => {
          if (client != connection) {
              client.send(`${message}`);
          }    
      });
    });
    });
})

module.exports = wsServer;