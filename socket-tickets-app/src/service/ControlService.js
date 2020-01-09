class ControlService{
    constructor(){
        this.controlRepo = require('../dal/repository/ControlRepo').buildClass();
    }

    restart = () => {
        return this.saveConf(require('../dal/entity/Control').buildClass());
    }

    validateDate = () => {
        let control = this.findConf();
        if(control.actualDate != new Date().getDate())
            return false;
        else
            return true;

    }

    updateActualTicket = (ticket, control) => {
        control.actualTicket = ticket;
        this.saveConf(control);
        return ticket;
    }

    saveConf = (data) => {
        this.controlRepo.saveConf(JSON.stringify(data));
        return data;
    }

    findConf = () => {
        return this.controlRepo.findConf();
    }
}

const buildClass = () => {
    return new ControlService();
}

module.exports = {buildClass}