const SocketIO = require('socket.io');

class Socket{
    constructor(httpServer){
        this.socket = SocketIO(httpServer);
        this.BusinessService = require('../../service/BusinessService').buildClass();
    }

    connect = () => {
        this.socket.on('connection', (client) => {
            console.log('Client connected');
            this.sendClient(client, 'welcome', {ok:true, msg:'Welcome'});
            this.ticketsToAssign(client);
            this.listenDisconnect(client);

            /** Listen generate new ticket */
            this.listenAndResponseAndBroadcast(client, 'generateTicket', (data) => {
                let ticket = this.BusinessService.generateNextTicket(data.name);
                return {
                    ok: true,
                    ticket
                }
            }, (client) => {this.ticketsToAssignBroadcast(client)});

            /** Listen assign Ticket */
            this.listenAndResponseAndBroadcast(client, 'assignTicket', (data) => {
                this.BusinessService.assignTicket(data.name, data.number);
                return this.buildDataTickets();
            }, (client) => {this.ticketsToAssignBroadcast(client)});

            /** Listen assign Ticket */
            this.listenAndResponseAndBroadcast(client, 'restart', (data) => {
                return this.BusinessService.restart();
            }, (client) => {this.ticketsRestartBroadcast(client)});
        });
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

    ticketsToAssign = (client) => {
        this.sendClient(client, 'tickets',this.buildDataTickets());
    }

    ticketsToAssignBroadcast = (client) => {
        this.broadcastClient(client, 'tickets',this.buildDataTickets());
    }

    ticketsRestartBroadcast = (client) => {
        this.broadcastClient(client, 'tickets',this.BusinessService.restart());
    }

    buildDataTickets = () => {
        let tickets = this.BusinessService.ticketsToAssign();
        let assigns = this.BusinessService.assigns();
        let control = this.BusinessService.control();
        let data = {
            ok: true,
            tickets,
            assigns,
            control
        }
        return data;
    }
}

const buildClass = (httpServer) => {
    return new Socket(httpServer);
}

module.exports = {buildClass}