const Startup = require('./src/server/Startup');
const Server = require('./src/server/Server');

let startup = new Startup(new Server());

startup.main()
.catch((err) => {
    console.log(err.message);
    process.exit();
});