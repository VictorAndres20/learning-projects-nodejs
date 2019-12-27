const axios = require('axios');

const INSTANCE_RAPID_API = axios.create({
    headers: {'x-rapidapi-key':'8d6241e380msh3b5dc7c5c0a7480p167ce1jsnba7d0520e328',
            'x-rapidapi-host':'ip-geo-location.p.rapidapi.com'
    }
});

const getInfoIp = async (ip) => {
    return await INSTANCE_RAPID_API.get(`https://ip-geo-location.p.rapidapi.com/ip/${ip}`);
}

module.exports = {
    getInfoIp
}