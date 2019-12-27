/**
 * Yargs file
 */
const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Dirección IP',
        demand: true
    }
}).argv;

module.exports = {
    argv
};