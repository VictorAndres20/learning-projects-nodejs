const Path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname, '../../../public','index.html'));
});

module.exports = router;