require('./config/config');
const hbs = require('./hbs');

class Startup{
    constructor(server){
        this.server = server;
    }

    main = async () => {
        
        //May be call some other function Configs, 
        //for example to init socket.io, DataBase ORM or View Engine

        hbs.registerPartials();
        hbs.registerHelpers();

        this.configureServer();
        let httpServer = this.buildServer();
        require('./config/Socket').buildClass(httpServer).connect();
        let start = await this.startServer(httpServer);
        console.log(start);
    }

    startServer = (server) => {
        let port = process.env.PORT;
        return new Promise((resolve, reject) => {
            server.listen(port, (err) => {
                if(err) reject(err);

                resolve(`Server stated at port ${port}`);
            });
        });
    }

    configureServer = () => {
        this.server.enablePublicContent();
        this.server.enableBodyParser();
        this.server.enableViewEngine('hbs');
        this.server.setRoutes();
        return this.server;
    }

    buildServer = () => {
        return this.server.buildHttpServer();
    }
}

module.exports = Startup;