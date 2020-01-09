const app = require('./src/serivce/app');

let users = app.readData();
console.log(users);
console.log(Array.isArray(users));
console.log(users.length);
app.saveData(users);
users.map((user) => {
    console.log("HI");
});