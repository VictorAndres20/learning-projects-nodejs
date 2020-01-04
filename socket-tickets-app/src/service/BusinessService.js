class BusinessService{
    constructor(){
        this.ticketService = require('./TicketService').buildClass();
        this.ticketXModuleService = require('./TicketXModuleService').buildClass();
        this.controlService = require('./ControlService').buildClass();
    }

    generateNextTicket = (name) => {
        
        let control = this.controlService.findConf();
        let tickets = this.ticketService.findTickets();
        return this.controlService.updateActualTicket(this.ticketService.
                                generateNextTicket(name, control.actualTicket, tickets), control);

        
    }

    restart = () => {
        let control = this.controlService.restart();
        let tickets = this.ticketService.cleanTickets();
        let assigns = this.ticketXModuleService.cleanAssigns();
        let data = {
            ok: true,
            tickets,
            assigns,
            control
        };
        return data;
    }

    assignTicket = (name, number) => {
        let ticket = this.ticketService.removeFirst();
        return this.ticketXModuleService.assignTicket(name, Number(number), ticket);
    }

    ticketsToAssign = () => {
        let tickets = this.ticketService.findTickets();
        return tickets;
    }

    assigns = () => {
        let assigns = this.ticketXModuleService.findAssign();
        return assigns;
    }

    control = () => {
        let control = this.controlService.findConf();
        return control;
    }
}

const buildClass = () => {
    return new BusinessService();
}

module.exports = {buildClass}