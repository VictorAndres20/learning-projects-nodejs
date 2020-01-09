/**
 * API MAIN ENTRY
 */
const server = require('./src/server/server');

server.main()
.catch((err) => {
    console.log(err.message);
});