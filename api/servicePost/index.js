const { Router } = require('express');
const controller = require('./servicePost.controller');
const { verifyClientRole, verifyToken, verifyWorkerRole } = require('../../server/middlewares/auth');

const router = new Router();
/*
*/
router.post('/', [verifyToken, verifyClientRole], controller.saveService);
router.put('/:id', [verifyToken], controller.updatedService);
router.get('/:id', verifyToken, controller.getId);
router.get('/client/', verifyToken, controller.getAllClient);
router.get('/search/:term', verifyToken, controller.getServicePostSearch);
router.get('/search/:id/:term', verifyToken, controller.getServicePostSearchCategory);
router.get('/', [verifyToken], controller.getAll);
router.get('/category/:id', [verifyToken, verifyWorkerRole], controller.getAllForCategory);
router.delete('/:id', [verifyToken, verifyClientRole], controller.removeService);

module.exports = router;
