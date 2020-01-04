const SocketIO = require('socket.io');

class Socket{
    constructor(httpServer){
        this.socket = SocketIO(httpServer);
    }

    connect = () => {
        this.socket.on('connection', (client) => {
            console.log(`Client connected`);

            this.listenAndResponseSameBroadcast(client, 'conn', (data) => {
                return this.connectionHandler(client, data);
            }, 'connUsers');

        });
    }

    connectionHandler = (client, data) => {
        let id = client.id;
        let {email} = data;
        //Add client to users connected
        // Get all users connected and return
        return `Array people connected`;
    }

    sendClient = (client, messageID, data) => {
        client.emit(messageID, data);
    }

    broadcastClient = (client, messageID, data) => {
        client.broadcast.emit(messageID, data);
    }

    listenDisconnect = (client) => {
        client.on('disconnect', () => {
            console.log('Client disconnected');
        });
    }

    listenAndResponse = (client, messageID, callback) => {
        client.on(messageID, (data, response) => {
            response(callback(data));
        });
    }

    listenAndResponseAndBroadcast = (client, messageID, callback, broadcast) => {
        client.on(messageID, (data, response) => {
            response(callback(data));
            broadcast(client);
        });
    }

    listenAndResponseSameBroadcast = (client, messageID, callback, messageIDBroadcast) => {
        client.on(messageID, (data, response) => {
            let res = callback(data);
            response(res);
            this.broadcastClient(client, messageIDBroadcast, res);
        });
    }
}

const buildClass = (httpServer) => {
    return new Socket(httpServer);
}

module.exports = {buildClass};