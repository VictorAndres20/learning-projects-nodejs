const express = require('express');
const app = express();

app.get('/', (req, res) => {

});

app.listen(8000, (err) => {
    if(err) console.log(err.message);

    console.log("Started");
});