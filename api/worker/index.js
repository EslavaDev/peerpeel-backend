const { Router } = require('express');
const controller = require('./worker.controller');
const { verifyToken } = require('../../server/middlewares/auth');

const router = new Router();

router.get('/', verifyToken, controller.getUsers);
router.get('/:id', verifyToken, controller.getId);
router.get('/info', verifyToken, controller.getInfo);
router.post('/', controller.saveUser);
router.put('/:id', [verifyToken], controller.updateUser);
router.delete('/:id', [verifyToken], controller.deleteUser);

module.exports = router;
