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
 * @api {post} {{APIVERSION}}/worker Register Worker
 * @apiVersion 1.0.0
 * @apiName RegisterWorker
 * @apiGroup Worker
 * @apiDescription https://peerpeel.herokuapp.com/v1/worker
 * @apiSampleRequest /v1/worker
 *
 * @apiParam (Request body) {String} nombre Full username.
 * @apiParam (Request body) {String} apellido Full user last name.
 * @apiParam (Request body) {String} email This email is required for login.
 * @apiParam (Request body) {String} password Password for login.
 * @apiParam (Request body) {Number} phone hombre/mujer.
 * @apiParam (Request body) {String} direccion Address.
 * @apiParam (Request body) {String} identificacion Identification document.
 * @apiParam (Request body) {String} img phone number.
 * @apiParam (Request body) {String} idFront image front of the identification of user.
 * @apiParam (Request body) {String} idBack image back of the identification of user.
 * @apiParam (Request body) {Date} edad age.
 *
 */

/**
 * @api {put} {{APIVERSION}}/worker/:id Update Worker
 * @apiVersion 1.0.0
 * @apiName UpdateWorker
 * @apiGroup Worker
 * @apiDescription https://peerpeel.herokuapp.com/v1/worker/:id
 * @apiSampleRequest /v1/worker/:id
 *
 * @apiHeader {String} token User token.
 *
 * @apiParam (Request body) {String} nombre Full username.
 * @apiParam (Request body) {String} apellido Full user last name.
 * @apiParam (Request body) {Number} phone Phone.
 * @apiParam (Request body) {String} direccion Address.
 * @apiParam (Request body) {String} identificacion Identification document.
 * @apiParam (Request body) {String} img phone number.
 * @apiParam (Request body) {Number} edad age.
 *
 */

/**
 * @api {delete} {{APIVERSION}}/worker/:id Delete Worker
 * @apiVersion 1.0.0
 * @apiName DeleteWorker
 * @apiGroup Worker
 * @apiDescription para "eliminar" se debe tener rol ADMIN
 * url:
 * https://peerpeel.herokuapp.com/v1/worker/:id
 * @apiSampleRequest /v1/worker/:id
 *
 * @apiHeader {String} token User token.
 *
 */

/**
 * @api {get} {{APIVERSION}}/worker?sky=0&lim=5 Get all Worker Pagination
 * @apiVersion 1.0.0
 * @apiName GetPaginationWorker
 * @apiGroup Worker
 * @apiDescription los parametros sky y lim son opcionales
 * ya vienen unos valos por defectos pero para paginar es necesario enviarlo
 * url:
 * https://peerpeel.herokuapp.com/v1/worker?sky=0&lim=5
 * @apiSampleRequest /v1/worker?sky=0&lim=5
 *
 * @apiHeader {String} token User token.
 *
 */

/**
 * @api {get} {{APIVERSION}}/worker/:id Get one Clienworkert
 * @apiVersion 1.0.0
 * @apiName GetOneWorker
 * @apiGroup Worker
 * @apiDescription
 * url:
 * https://peerpeel.herokuapp.com/v1/worker/:id
 * @apiSampleRequest /v1/worker/:id
 *
 * @apiHeader {String} token User token.
 *
 */

/**
 * @api {get} {{APIVERSION}}/worker/info Get info you user
 * @apiVersion 1.0.0
 * @apiName GetInfoWorker
 * @apiGroup Worker
 * @apiDescription
 * url:
 * https://peerpeel.herokuapp.com/v1/worker/info
 * @apiSampleRequest /v1/worker/info
 *
 * @apiHeader {String} token User token.
 *
 */
