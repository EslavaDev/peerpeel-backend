const { Router } = require('express');
const controller = require('./category.controller');
const { verifyToken, verifyAdminRole } = require('../../server/middlewares/auth');

const router = new Router();

router.get('/', verifyToken, controller.getAll);
router.get('/:id', verifyToken, controller.getId);
router.post('/', [verifyToken, verifyAdminRole], controller.saveCategory);
router.put('/:id', [verifyToken, verifyAdminRole], controller.updateCategory);
router.delete('/:id', [verifyToken, verifyAdminRole], controller.removeCategory);

module.exports = router;
