/**
 * Main app entry
 */

const argv = require('./src/yargs/yargs').argv;
const commands = require('./src/yargs/yargs').commands;
const CreateBusiness = require('./src/logic/CreateBusiness');
const ListBusiness = require('./src/logic/ListBusiness');
const UpdateBusiness = require('./src/logic/UpdateBusiness');

const command = argv._[0];

const list = () => {
    if(argv.a)
        ListBusiness.listInfo('Listado total', ListBusiness.readData());

    if(argv.p)
        ListBusiness.listInfo('Listado pendientes',ListBusiness.listPending(ListBusiness.readData()));
    
    if(argv.d)
        ListBusiness.listInfo('Listado realizados',ListBusiness.listDone(ListBusiness.readData()));
}

const create = async () => {
    let task = await CreateBusiness.create(argv.id, argv.description, argv.state);
    console.log(task);
}

const update = async () => {
    let task = await UpdateBusiness.update(argv.id, argv.description, argv.state);
    console.log(task);
}

switch(command){
    case commands.LIST:
        list();
        break;
    case commands.CREATE:
        create().catch(err => console.log(err.message));
        break;
    case commands.UPDATE:
        update().catch(err => console.log(err.message));
        break;
    default:
        console.log(`Comando ${command} no es válido`);
}