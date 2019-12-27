const FileSystem = require('./FileSystem');

const pathFile = `${FileSystem.PATH}`;

const readData = () => {
    return FileSystem.readJSONFile(pathFile);
}

const findById = (id, list) => {
    return list.find(task => task.id === id);
}

const listPending = (list) => {
    return list.filter(task => task.state === 0);
}

const listDone = (list) => {
    return list.filter(task => task.state === 1);
}

const listInfo = (title, list) => {
    console.log(`*** ${title} *** \n\n`);
    list.map(task => {
        console.log(`id: ${task.id}\nDescripción: ${task.description}\nState: ${task.state===0?'Pending':'Hecho!'}`);
        console.log('\n');
    });
    console.log('*********************');
}

module.exports = {
    readData,
    listDone,
    listInfo,
    findById,
    listPending
}