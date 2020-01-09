class TicketXModule{
    constructor(ticket, moduleP){
        this.ticket = ticket;
        this.module = moduleP;
    }
}

const buildClass = (ticket, moduleP) => {
    return new TicketXModule(ticket, moduleP);
}

module.exports = {buildClass}