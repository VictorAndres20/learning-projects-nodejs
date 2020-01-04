const router = require('express').Router();
const TicketController = require('../controller/TicketController');
const controller = new TicketController();

router.get('/', (req, res) => {
    controller.renderIndex(req, res)
});

router.get('/generate', (req, res) => {
    controller.renderGenerate(req, res)
});

router.get('/assign', (req, res) => {
    controller.renderAssign(req, res)
});

module.exports = router;