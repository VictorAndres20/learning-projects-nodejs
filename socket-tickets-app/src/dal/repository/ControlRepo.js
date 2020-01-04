class ControlRepo{

    constructor(){
        this.fileHandler = require('../FileHandler').buildClass('control.json');
    }
    
    saveConf = (data) => {
        this.fileHandler.writeFile(data);
    }

    findConf = () => {
        return this.fileHandler.readFile();
    }
}

const buildClass = () => {
    return new ControlRepo();
}

module.exports = {buildClass};