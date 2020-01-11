require('./config/config');
import Server from "./Server";
//Some Other Configuration imports,
//for example socket.io, DataBase ORM or View Engine HBS
//import hbs from './hbs';

class Startup{

    server: Server;

    constructor(server: Server){
        this.server = server;
    }

    /** MAIN NETRY to call in index.js main file */
    async main() {
        
        //May be call some other function Configs, 
        //for example to init socket.io, DataBase ORM or View Engine

        //hbs.registerPartials();
        //hbs.registerHelpers();

        this.configureServer();
        let start = await this.startServer(this.buildServer());
        console.log(start);
    }

    startServer(server: any) {
        let port = Number(process.env.PORT);
        return new Promise((resolve, reject) => {
            server.listen(port, (err: any) => {
                if(err) reject(err);

                resolve(`Server stated at port ${port}`);
            });
        });
    }

    configureServer() {
        this.server.enablePublicContent();
        this.server.enableBodyParser();
        //this.server.enableViewEngine('hbs');
        this.server.setRoutes();
        return this.server;
    }

    buildServer() {
        return this.server.buildHttpServer();
    }
}

export default Startup;