const path = require('path');
const fs = require('fs');

class FileHandler{
    constructor(fileName){
        this.pathFile = path.join(__dirname, '../../data', fileName);
    }
    
    writeFile = (data) => {
        fs.writeFileSync(this.pathFile, data);
    }

    readFile = () => {
        return JSON.parse(fs.readFileSync(this.pathFile, 'utf8'))
        //return require(this.pathFile);
    }
}

const buildClass = (fileName) => {
    return new FileHandler(fileName);
}

module.exports = {buildClass}