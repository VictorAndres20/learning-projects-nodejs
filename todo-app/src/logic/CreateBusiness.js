/**
 * Create Tasks Business
 */
const FileSystem = require('./FileSystem');
const ListBusiness = require('./ListBusiness');

let list = [];
const pathFile = `${FileSystem.PATH}`;

const create = async (id, description, state) => {
    list = ListBusiness.readData();
    let exist = ListBusiness.findById(id,list);
    if(exist)
        throw new Error(`Ya existe una tarea con id = ${id}`);

    let task = buildTask(id, description, state);
    list.push(task);
    let result = await FileSystem.writeFile(pathFile,FileSystem.buildJSONData(list));
    console.log(result);
    return task;
} 

const buildTask = (id, description, state) => {
    let task = {
        id,
        description,
        state
    }
    return task;
 }

 module.exports = {
     create
 }