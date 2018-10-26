const { Router } = require('express');
const controller = require('./quotation.controller');
const { verifyToken, verifyWorkerRole } = require('../../server/middlewares/auth');

const router = new Router();
/*
*/
router.post('/', [verifyToken, verifyWorkerRole], controller.saveQuotation);
router.put('/:id', [verifyToken, verifyWorkerRole], controller.updatedQuotation);
router.put('/state/:id', [verifyToken], controller.updatedQuotationState);
router.get('/:id', verifyToken, controller.getId);
router.get('/service/:id', verifyToken, controller.getAllQuotationService);
router.get('/search/:state/:term?', [verifyToken, verifyWorkerRole], controller.getQuotationSearchFotWorker);
router.get('/', [verifyToken, verifyWorkerRole], controller.getAll);
router.delete('/:id', [verifyToken, verifyWorkerRole], controller.removeQuotation);

module.exports = router;
