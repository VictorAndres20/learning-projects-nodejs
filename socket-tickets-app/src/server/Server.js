const Path = require('path');
const http = require('http');
const express = require('express');
const BodyParser = require('body-parser');

class Server{
    constructor(){
        this.app = express();
    }

    getApp = () => {
        return this.app;
    }

    buildHttpServer = () => {
        return http.createServer(this.getApp());
    }

    enablePublicContent = () => {
        this.setMiddleware(express.static(Path.join(__dirname,'../../public')));
    }

    enableBodyParser = () => {
        this.setMiddleware(BodyParser.urlencoded({extended: false}));
        this.setMiddleware(BodyParser.json());
    }

    setRoutes = () => {
        this.setMiddleware(require('../app/routes'));
    }

    enableViewEngine = (engine) => {
        this.app.set('view engine', engine);
    }

    setMiddleware = (middleware) => {
        this.app.use(middleware);
    }
}

module.exports = Server;