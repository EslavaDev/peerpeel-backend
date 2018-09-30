const { Router } = require('express');
const controller = require('./login.controller');
const { verifyToken } = require('../../server/middlewares/auth');

const router = new Router();

router.post('/googleClient', controller.googleClient);
router.post('/googleWorker', controller.googleWorker);
router.post('/client', controller.loginClient);
router.post('/worker', controller.loginWorker);
router.get('/', verifyToken);
module.exports = router;
