const Server = require('./src/server/Server');

Server.main()
.catch((err) => {
    console.log(err.message);
});