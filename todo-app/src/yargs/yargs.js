/**
 * Yargs configuration
 */

const commands = {
    LIST: 'ls',
    CREATE: 'create',
    UPDATE: 'update'
}

const optionsCreateUpdate = {
    description: {
        alias: 'd',
        demand: true,
        description: 'Descripción de la tarea a realizar'
    },
    id: {
        alias: 'i',
        demand: true,
        description: 'Identificador del tasks'
    },
    state: {
        alias: 's',
        default: 0,
        description: 'Estado del tasks, 1 -> REALIZADO, 0 -> PENDIENTE'
    }
}; 

const argv = require('yargs')
                    .command(commands.LIST,'List tasks',{
                        all: {
                            alias: 'a',
                            description: 'Lista todos los tasks'
                        },
                        done: {
                            alias: 'd'
                        },
                        pending: {
                            alias: 'p'
                        }
                    })
                    .command(commands.CREATE,'Create new Task',optionsCreateUpdate)
                    .command(commands.UPDATE,'Update a Task',optionsCreateUpdate)
                    .help()
                    .argv;

module.exports = {
    argv,
    commands
}