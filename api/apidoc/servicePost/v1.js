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
 * @api {post} {{APIVERSION}}/post Post created
 * @apiVersion 1.0.0
 * @apiName PostSaved
 * @apiGroup Post
 * @apiDescription https://peerpeel.herokuapp.com/v1/post
 * Role: Client
 * @apiSampleRequest /v1/post
 * @apiHeader {String} token User token.
 * @apiParam (Request body) {String} tilte tilte of a service post.
 * @apiParam (Request body) {String} img image of a service post.
 * @apiParam (Request body) {String} categoria id of a category.
 * @apiParam (Request body) {String} descripcion description of a service post.
 * @apiParam (Request body) {String} ubicacion ubicacion of a service post.
 */

/**
 * @api {put} {{APIVERSION}}/post/:id Post update
 * @apiVersion 1.0.0
 * @apiName PostUpdate
 * @apiGroup Post
 * @apiDescription https://peerpeel.herokuapp.com/v1/post/:id
 * Role: Client and Worker
 * @apiSampleRequest /v1/post/:id
 * @apiHeader {String} token User token.
 * @apiParam (Request body) {String} tilte tilte of a service post.
 * @apiParam (Request body) {String} img image of a service post.
 * @apiParam (Request body) {String} categoria id of a category.
 * @apiParam (Request body) {String} descripcion description of a service post.
 * @apiParam (Request body) {String} ubicacion ubication of a service post.
 * @apiParam (Request body) {String} worker worker id.
 * @apiParam (Request body) {String} Estado state of a service post.
 * @apiParam (Request body) {String} price price of a service post.
 */

/**
 * @api {delete} {{APIVERSION}}/post/:id Post delete
 * @apiVersion 1.0.0
 * @apiName PostDelete
 * @apiGroup Post
 * @apiDescription https://peerpeel.herokuapp.com/v1/post/:id
 * Role: Client
 * @apiSampleRequest /v1/post/:id
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/post?sky=0&lim=5 Post get All
 * @apiVersion 1.0.0
 * @apiName PostGetAll
 * @apiGroup Post
 * @apiDescription https://peerpeel.herokuapp.com/v1/post?sky=0&lim=5
 * Role:. Worker
 * @apiSampleRequest /v1/post?sky=0&lim=5
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/post/client?sky=0&lim=5 Post get All for client
 * @apiVersion 1.0.0
 * @apiName PostGetAllClient
 * @apiGroup Post
 * @apiDescription https://peerpeel.herokuapp.com/v1/post/client?sky=0&lim=5
 * Role:. Worker Client
 * @apiSampleRequest /v1/post/client?sky=0&lim=5
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/post/:id Post get one
 * @apiVersion 1.0.0
 * @apiName PostGetOne
 * @apiGroup Post
 * @apiDescription https://peerpeel.herokuapp.com/v1/post/:id
 * Role: Client and Worker
 * @apiSampleRequest /v1/post/:id
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/post/search/{data} Post get search
 * @apiVersion 1.0.0
 * @apiName PostSearch
 * @apiGroup Post
 * @apiDescription https://peerpeel.herokuapp.com/v1/post/search/{data}
 * @apiSampleRequest /v1/post/search/{data}
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/post/search/:id/{data} Post get search for category
 * @apiVersion 1.0.0
 * @apiName PostSearchForCategory
 * @apiGroup Post
 * @apiDescription https://peerpeel.herokuapp.com/v1/post/search/:id/{data}
 * @apiSampleRequest /v1/post/search/:id/{data}
 * @apiHeader {String} token User token.
 */

/**
 * @api {get} {{APIVERSION}}/post/category/:id?sky=0&lim=5 Post get all for category
 * @apiVersion 1.0.0
 * @apiName PostGetAllForCategory
 * @apiGroup Post
 * @apiDescription
 * id de una categoria
 * https://peerpeel.herokuapp.com/v1/post/category/:id?sky=0&lim=5
 * @apiSampleRequest /v1/post/category/:id?sky=0&lim=5
 * @apiHeader {String} token User token.
 */
