const express = require('express');

const app = express();

app.get('/upload/image', (req, res) => {
    res.status(200).json({
        ok: true
    });
});

module.exports = app;