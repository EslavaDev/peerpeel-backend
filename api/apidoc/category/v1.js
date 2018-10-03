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
 * @api {post} {{APIVERSION}}/category Category created
 * @apiVersion 1.0.0
 * @apiName CategorySaved
 * @apiGroup Category
 * @apiDescription https://peerpeel.herokuapp.com/v1/category
 * Role: Admin
 * @apiSampleRequest /v1/category
 * @apiHeader {String} token User token.
 * @apiParam (Request body) {String} description description a category.
 * @apiParam (Request body) {String} img image of a category.
 *
 */
/**
 * @api {get} {{APIVERSION}}/category?sky=0&lim=5 Category get all
 * @apiVersion 1.0.0
 * @apiName CategoryGetAll
 * @apiGroup Category
 * @apiDescription https://peerpeel.herokuapp.com/v1/category?sky=0&lim=5
 * @apiSampleRequest /v1/category?sky=0&lim=5
 * @apiHeader {String} token User token.
 *
 */
/**
 * @api {get} {{APIVERSION}}/category/:id Category get one
 * @apiVersion 1.0.0
 * @apiName CategoryGetOne
 * @apiGroup Category
 * @apiDescription https://peerpeel.herokuapp.com/v1/category/:id
 * @apiSampleRequest /v1/category/:id
 * @apiHeader {String} token User token.
 *
 */
/**
 * @api {put} {{APIVERSION}}/category/:id Category Updated
 * @apiVersion 1.0.0
 * @apiName CategoryUpdated
 * @apiGroup Category
 * @apiDescription https://peerpeel.herokuapp.com/v1/category/:id
 * Role: Admin
 * @apiSampleRequest /v1/category/:id
 * @apiHeader {String} token User token.
 * @apiParam (Request body) {String} description description a category.
 * @apiParam (Request body) {String} img image of a category.
 *
 */
/**
 * @api {delete} {{APIVERSION}}/category/:id Category delete
 * @apiVersion 1.0.0
 * @apiName CategoryDelete
 * @apiGroup Category
 * @apiDescription https://peerpeel.herokuapp.com/v1/category/:id
 * Role: Admin
 * @apiSampleRequest /v1/category/:id
 * @apiHeader {String} token User token.
 * @apiParam (Request body) {String} description description a category.
 * @apiParam (Request body) {String} img image of a category.
 *
 */
