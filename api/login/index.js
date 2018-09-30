const { Router } = require('express');
const controller = require('./login.controller');

const router = new Router();

router.post('/googleClient', controller.googleClient);
router.post('/googleWorker', controller.googleWorker);
router.post('/client', controller.loginClient);
router.post('/worker', controller.loginWorker);
router.get('/', controller.verifyToken);
module.exports = router;
