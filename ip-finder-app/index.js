/**
 * Main App entry
 */
const argv = require('./src/yargs/yargs').argv;
const IpService = require('./src/service/IpService');

const getInfoIp = async (ip) => {
    let response = await IpService.getInfoIp(ip);
    console.log(`Lugar: ${response.city}, ${response.country}\nLocalización: ${response.lat} - ${response.lon}`);
}

getInfoIp(argv.address)
.catch(err => {
    console.log(err.message);
});
