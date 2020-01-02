const router = require('express').Router();
const TicketController = require('../controller/TicketController');
const controller = new TicketController();

router.get('/', (req, res) => {
    controller.renderIndex(req, res)
});

module.exports = router;