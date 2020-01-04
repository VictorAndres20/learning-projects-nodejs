class TicketRepo{

    constructor(){
        this.fileHandler = require('../FileHandler').buildClass('tickets.json');
    }
    
    saveTickets = (data) => {
        this.fileHandler.writeFile(data);
    }

    findTickets = () => {
        return this.fileHandler.readFile();
    }
}

const buildClass = () => {
    return new TicketRepo();
}

module.exports = {buildClass};