const axios = require('./axios');

const getInfoIp = async (ip) => {
    let obj = await axios.getInfoIp(ip);
    if(!obj.data)
        throw new Error(`No hay datos para la IP ${ip}`);
        
    let city = obj.data.city.name;
    let country = obj.data.country.name;
    let lat = obj.data.location.latitude;
    let lon = obj.data.location.longitude;

    return {city, country, lat, lon};
}

module.exports = {
    getInfoIp
}