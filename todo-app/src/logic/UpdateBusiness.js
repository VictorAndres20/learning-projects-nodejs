/**
 * Update Business
 */
const ListBusiness = require('./ListBusiness');
const FileSystem = require('./FileSystem');

const pathFile = `${FileSystem.PATH}`;

const update = async (id, description, state) => {
    let list = ListBusiness.readData();
    let task = ListBusiness.findById(id, list);
    if(!task)
        throw new Error(`No existe el task con id ${id}`);
    
    task.description = description;
    task.state = state;

    updateList(task, list);
    let result = await FileSystem.writeFile(pathFile,FileSystem.buildJSONData(list));
    console.log(result);
    return task;
}

const updateList = (task, list) => {
    for(let i = 0; i<list.length; i++){
        if(list[i].id === task.id){
            list[i] = task;
            i=list.length;
        }
    }
}

module.exports = {
    update
}