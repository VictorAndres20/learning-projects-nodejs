/**
 * Main entry app
 */
const Multiply = require('./src/logic/multiply');
const argv = require('./src/yargs/yargs').argv;
const colors = require('colors');

let command = argv._[0];

switch(command){
    case 'list':
        let base = argv.base;
        let limit = argv.limit;

        Multiply.createFile(base, limit)
        .catch(err => console.log(err.message));
        
        break;
    case 'multiply':
        let {a, b} = argv;
        let result = Multiply.executeMultiply(argv.number1, argv.number2);
        console.log(`${colors.green("Resultado: ")} ${a} x ${b} = ${result}`);
        break;
    default:
        console.log(`Comando ${command} no es válido.\n\n node app --help`);
}
