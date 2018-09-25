const { Router } = require('express');
const controller = require('./servicePost.controller');
const { verifyClientRole, verifyToken, verifyWorkerRole } = require('../../server/middlewares/auth');

const router = new Router();
/*
*/
router.post('/', [verifyToken, verifyClientRole], controller.saveService);
router.put('/:id', [verifyToken, verifyClientRole], controller.updatedService);
router.get('/:id', verifyToken, controller.getId);
router.get('/search/:term', verifyToken, controller.getServicePostSearch);
router.get('/', [verifyToken, verifyWorkerRole], controller.getAll);
router.delete('/:id', [verifyToken, verifyClientRole], controller.removeService);

module.exports = router;
