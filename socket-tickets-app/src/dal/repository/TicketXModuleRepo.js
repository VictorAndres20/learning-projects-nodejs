class TicketXModuleRepo{
    constructor(){
        this.fileHandler = require('../FileHandler').buildClass('tickets_x_module.json');
    }
    
    saveAssign = (data) => {
        this.fileHandler.writeFile(data);
    }

    findAssign = () => {
        return this.fileHandler.readFile();
    }
}

const buildClass = () => {
    return new TicketXModuleRepo();
}

module.exports = {buildClass}