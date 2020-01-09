const FileHandler = require('../fs/FileHandler').buildClass('file.json');

const readData = () => {
    return JSON.parse(FileHandler.readFileSync());
}

const saveData = (jsonData) => {
    FileHandler.writeFileSync(JSON.stringify(jsonData));
}

module.exports = {
    readData,
    saveData
}