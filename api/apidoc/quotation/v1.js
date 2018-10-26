/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
// Configuration parameter sampleUrl: "http://api.github.com"
/**
 * @api {post} {{APIVERSION}}/quotation Quotation created
 * @apiVersion 1.0.0
 * @apiName QuotationCreated
 * @apiGroup Quotation
 * @apiDescription https://peerpeel.herokuapp.com/v1/quotation
 * Role: Worker
 * @apiSampleRequest /v1/quotation
 * @apiHeader {String} token User token.
 * @apiParam (Request body) {String} descripcion description of the quote.
 * @apiParam (Request body) {String} valorCotizado quoted price.
 * @apiParam (Request body) {String} service id of the service to quote.
 */

/**
 * @api {put} {{APIVERSION}}/quotation/:id quotation update
 * @apiVersion 1.0.0
 * @apiName QuotationUpdate
 * @apiGroup Quotation
 * @apiDescription https://peerpeel.herokuapp.com/v1/quotation/:id
 * Role: Worker
 * @apiSampleRequest /v1/quotation/:id
 * @apiHeader {String} token User token.
 * @apiParam (Request body) {String} descripcion description of the quote.
 * @apiParam (Request body) {String} valorCotizado quoted price.
 * @apiParam (Request body) {String} service id of the service to quote.
 */

 /**
 * @api {put} {{APIVERSION}}/quotation/state/:id quotation update state
 * @apiVersion 1.0.0
 * @apiName QuotationUpdateState
 * @apiGroup Quotation
 * @apiDescription https://peerpeel.herokuapp.com/v1/quotation/state/:id
 * Role: ANY
 * @apiSampleRequest /v1/quotation/state/:id
 * @apiHeader {String} token User token.
 * @apiParam (Request body) {String} estado state of the quote.
 */

/**
 * @api {delete} {{APIVERSION}}/quotation/:id quotation delete
 * @apiVersion 1.0.0
 * @apiName QuotationDelete
 * @apiGroup Quotation
 * @apiDescription https://peerpeel.herokuapp.com/v1/quotation/:id
 * Role: Worker
 * @apiSampleRequest /v1/post/:id
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/quotation?sky=0&lim=5 Quotation get All
 * @apiVersion 1.0.0
 * @apiName QuotationGetAll
 * @apiGroup Quotation
 * @apiDescription https://peerpeel.herokuapp.com/v1/quotation?sky=0&lim=5
 * Role:. Worker
 * @apiSampleRequest /v1/quotation?sky=0&lim=5
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/quotation/service/:id?sky=0&lim=5 Quotation get All for client
 * @apiVersion 1.0.0
 * @apiName QuotationGetAllClient
 * @apiGroup Quotation
 * @apiDescription https://peerpeel.herokuapp.com/v1/quotation/service/:id?sky=0&lim=5
 * Role:. Client
 * @apiSampleRequest /v1/quotation/service/:id?sky=0&lim=5
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/quotation/search/:state/{data}?sky=0&lim=5 Quotation get search
 * @apiVersion 1.0.0
 * @apiName QuotationGetSearch
 * @apiGroup Quotation
 * @apiDescription https://peerpeel.herokuapp.com/v1/quotation/search/:state/{data}?sky=0&lim=5
 * Role:. Worker
 * @apiSampleRequest /v1/quotation//search/:state/{data}?sky=0&lim=5
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/quotation/:id Quotation get one
 * @apiVersion 1.0.0
 * @apiName QuotationGetOne
 * @apiGroup Quotation
 * @apiDescription https://peerpeel.herokuapp.com/v1/quotation/:id
 * Role: Client and Worker
 * @apiSampleRequest /v1/quotation/:id
 * @apiHeader {String} token User token.
 */

