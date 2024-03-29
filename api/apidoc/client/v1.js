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
 * @api {post} {{APIVERSION}}/client Register Client
 * @apiVersion 1.0.0
 * @apiName RegisterClient
 * @apiGroup Client
 * @apiDescription https://peerpeel.herokuapp.com/v1/client
 * @apiSampleRequest /v1/client
 *
 * @apiParam (Request body) {String} nombre Full username.
 * @apiParam (Request body) {String} email This email is required for login.
 * @apiParam (Request body) {String} password Password for login.
 * @apiParam (Request body) {String} img phone number.
 *
 */

/**
 * @api {put} {{APIVERSION}}/client/:id Update Client
 * @apiVersion 1.0.0
 * @apiName UpdateClient
 * @apiGroup Client
 * @apiDescription https://peerpeel.herokuapp.com/v1/client/:id
 *
 * @apiSampleRequest /v1/client/:id
 *
 * @apiHeader {String} token User token.
 *
 * @apiParam (Request body) {String} nombre Full username.
 * @apiParam (Request body) {String} img phone number.
 *
 */

/**
 * @api {delete} {{APIVERSION}}/client/:id Delete Client
 * @apiVersion 1.0.0
 * @apiName DeleteClient
 * @apiGroup Client
 * @apiDescription para "eliminar" se debe tener rol ADMIN
 * url:
 * https://peerpeel.herokuapp.com/v1/client/:id
 * @apiSampleRequest /v1/client/:id
 *
 * @apiHeader {String} token User token.
 *
 */

/**
 * @api {get} {{APIVERSION}}/client?sky=0&lim=5 Get all Client Pagination
 * @apiVersion 1.0.0
 * @apiName GetPaginationClient
 * @apiGroup Client
 * @apiDescription los parametros sky y lim son opcionales
 * ya vienen unos valos por defectos pero para paginar es necesario enviarlo
 * url:
 * https://peerpeel.herokuapp.com/v1/client?sky=0&lim=5
 * @apiSampleRequest /v1/client?sky=0&lim=5
 *
 * @apiHeader {String} token User token.
 *
 */

/**
 * @api {get} {{APIVERSION}}/client/:id Get one Client
 * @apiVersion 1.0.0
 * @apiName GetOneClient
 * @apiGroup Client
 * @apiDescription
 * url:
 * https://peerpeel.herokuapp.com/v1/client/:id
 * @apiSampleRequest /v1/client/:id
 *
 * @apiHeader {String} token User token.
 *
 */

/**
 * @api {get} {{APIVERSION}}/client/info Get info you user
 * @apiVersion 1.0.0
 * @apiName GetInfoClient
 * @apiGroup Client
 * @apiDescription
 * url:
 * https://peerpeel.herokuapp.com/v1/client/info
 * @apiSampleRequest /v1/client/info
 *
 * @apiHeader {String} token User token.
 *
 */
