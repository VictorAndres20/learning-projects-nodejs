import Server from './src/server/Server';
import Startup from './src/server/Startup';

const server = new Server();
const startup = new Startup(server);

startup.main()
.catch((err: Error) => {
    console.log(err.message);
    process.exit();
});