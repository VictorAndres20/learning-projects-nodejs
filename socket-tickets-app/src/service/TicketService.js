class TicketService{
    constructor(){
        this.repo = require('../dal/repository/TicketRepo').buildClass();
    }

    generateNextTicket = (name, actualTicket, tickets) => {       
        let ticket = require('../dal/entity/Ticket')
                        .buildClass(name, actualTicket.number + 1);
        return this.addTicket(ticket, tickets);
    }

    addTicket = (ticket, tickets) => {
        tickets.push(ticket);
        this.saveTickets(tickets);
        return ticket;
    }

    removeFirst = () => {
        let tickets = this.findTickets();
        let ticket = tickets[0];
        tickets.shift();
        this.saveTickets(tickets);
        return ticket;
    }

    cleanTickets = () => {
        return this.saveTickets([]);
    }

    saveTickets = (data) => {
        this.repo.saveTickets(JSON.stringify(data));
        return data;
    }

    findTickets = () => {
        return this.repo.findTickets();
    }
}

const buildClass = () => {
    return new TicketService();
} 

module.exports = {buildClass}