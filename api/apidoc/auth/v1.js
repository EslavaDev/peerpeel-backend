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
 * @api {post} {{APIVERSION}}/login/worker Login user Worker
 * @apiVersion 1.0.0
 * @apiName LoginWorker
 * @apiGroup Auth
 * @apiDescription https://peerpeel.herokuapp.com/v1/login/worker
 * @apiSampleRequest /v1/login/worker
 * @apiParam (Request body) {String} email email.
 * @apiParam (Request body) {String} password password.
 *
 */

/**
 * @api {get} {{APIVERSION}}/login verifyToken
 * @apiVersion 1.0.0
 * @apiName AuthToken
 * @apiGroup Auth
 * @apiDescription
 * url:
 * https://peerpeel.herokuapp.com/v1/login
 * @apiSampleRequest /v1/login
 *
 * @apiHeader {String} token User token.
 *
 */

/**
 * @api {post} {{APIVERSION}}/login/googleWorker Login user Worker Google
 * @apiVersion 1.0.0
 * @apiName LoginGoogleWorker
 * @apiGroup Auth
 * @apiDescription https://peerpeel.herokuapp.com/v1/login/googleWorker
 * @apiSampleRequest /v1/login/googleWorker
 *
 * @apiParam (Request body) {String} token debes loguearte con google este te da un token.
 *
 */

/**
 * @api {post} {{APIVERSION}}/login/client Login user Client
 * @apiVersion 1.0.0
 * @apiName LoginClient
 * @apiGroup Auth
 * @apiDescription https://peerpeel.herokuapp.com/v1/login/client
 * @apiSampleRequest /v1/login/client
 *
 * @apiParam (Request body) {String} email email.
 * @apiParam (Request body) {String} password password.
 *
 */

/**
 * @api {post} {{APIVERSION}}/login/googleClient Login user Client Google
 * @apiVersion 1.0.0
 * @apiName LoginGoogleClient
 * @apiGroup Auth
 * @apiDescription https://peerpeel.herokuapp.com/v1/login/googleClient
 * @apiSampleRequest /v1/login/googleClient
 *
 * @apiParam (Request body) {String} token debes loguearte con google este te da un token.
 *
 */
