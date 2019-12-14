const argv = require('yargs')
                    .command('list','Lista tabla de multiplcar',{ // command, description
                        base: { // Flag base, example listar --base
                            demand: true, // Required
                            alias: 'b' // listar -b
                        },
                        limit: {
                            alias: 'l',
                            default: 10, // Valor por defecto
                        }
                    })
                    .command('multiply','Multiplica los valores',{
                        number1: {
                            demand: true,
                            alias: 'a'
                        },
                        number2: {
                            demand: true,
                            alias: 'b'
                        }
                    })
                    .help()
                    .argv;

module.exports = {
    argv
}