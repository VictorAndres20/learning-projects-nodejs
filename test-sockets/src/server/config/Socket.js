const SocketIO = require('socket.io');

class Socket {

    constructor(server){
        this.socketio = SocketIO(server);
    }

    connect = () => {
        this.socketio.on('connection', (client) => {
            console.log(`Client connected ${client}`);

            this.sendClient(client,'message',{
                server: 'vapedraza',
                msg: 'Welcome to my server'
            });

            this.listenDisconnect(client);

            this.listenMessage(client,'message', (data) => {
                console.log(`Recived a message ${client} with data ${data}`);
            });
        })
    }

    sendClient = (client, messageID, data) => {
        client.emit(messageID, data);
    }

    listenDisconnect = (client) => {
        client.on('disconnect', () => {
            console.log(`Disconnected ${client}`);
        });
    }

    listenMessage = (client, messageID, callback) => {
        client.on(messageID, (data, response) => {
            callback(data);
            //May be some validations
            response({
                ok: true,
                msg: 'Message Recived'
            });
        })
    }
}

module.exports = Socket;