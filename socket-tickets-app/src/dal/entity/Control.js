class Control{
    constructor(){
        this.actualTicket = require('./Ticket').buildClass(null, 0);;
        this.actualDate = new Date().getDate();
    }
}

const buildClass = () => {
    return new Control();
}

module.exports = {buildClass}