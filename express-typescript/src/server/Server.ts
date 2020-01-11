import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import routes from '../app/routes/index';

class Server{

    app: express.Application;

    constructor(){
        this.app = express();
    }

    buildHttpServer() {
        return http.createServer(this.getApp());
    }

    enablePublicContent() {
        this.setMiddleware(express.static(path.join(__dirname,'../../public')));
    }

    enableBodyParser() {
        this.setMiddleware(bodyParser.urlencoded({extended: false}));
        this.setMiddleware(bodyParser.json());
    }

    setRoutes() {
        this.setMiddleware(routes);
    }

    enableViewEngine(engine: string) {
        //For example if you install hbs, pass parameter 'hbs'
        this.app.set('view engine', engine);
    }

    setMiddleware(middleware: express.RequestHandler) {
        this.app.use(middleware);
    }

    getApp() {
        return this.app;
    }
}

export default Server;