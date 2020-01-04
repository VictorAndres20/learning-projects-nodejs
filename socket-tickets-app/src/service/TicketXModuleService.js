class TicketXModuleService{
    constructor(){
        this.repo = require('../dal/repository/TicketXModuleRepo').buildClass();
    }

    assignTicket = (name, number, ticket) => {
        let moduleP = require('../dal/entity/Module').buildClass(name, number);
        let ticketXModule = require('../dal/entity/TicketXModule').buildClass(ticket, moduleP);
        let assigns = this.findAssign();
        assigns = this.addAssign(ticketXModule,this.removeAssign(ticketXModule.module.number, assigns));
        this.saveAssign(assigns);
        return ticketXModule;
    }

    addAssign = (ticketXModule, assigns) => {
        assigns.push(ticketXModule);
        return assigns;
    }

    removeAssign = (number, assigns) => {
        assigns.map((assign, key) => {
            if(assign.module.number === number)
                assigns.splice(key, 1);
        });
        return assigns;
    }

    cleanAssigns = () => {
        return this.saveAssign([]);
    }

    saveAssign = (data) => {
        this.repo.saveAssign(JSON.stringify(data));
        return data;
    }

    findAssign = () => {
        return this.repo.findAssign();
    }
}

const buildClass = () => {
    return new TicketXModuleService();
}

module.exports = {buildClass}