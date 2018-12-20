const { Router } = require('express');
const controller = require('./service.controller')

const router = new Router();

router.post('/', controller.create);

module.exports = router;
