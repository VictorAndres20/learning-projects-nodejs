require('./config/Config');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const Socket = require('./config/Socket');

app.use(express.static(path.join(__dirname,'../../public')));

app.use(require('../app/routes'));

const listen = async () => {
    return new Promise((resolve, reject) => {
        server.listen(process.env.PORT,(err) => {
            if(err) reject(err);

            resolve(`Listen port ${process.env.PORT}`);
        })
    });
}

const connectSocket = () => {
    new Socket(server).connect();
}

const main = async () => {
    connectSocket();
    let start = await listen();
    console.log(start);
} 

module.exports = {
    main
}