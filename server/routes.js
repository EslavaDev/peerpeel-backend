/**
 * Main application routes
 */
const errors = require('../components/errors');

// Import Endpoints

const client = require('../api/client');
const worker = require('../api/worker');
const login = require('../api/login');
const category = require('../api/category');
const servicePost = require('../api/servicePost');
const uploads = require('../api/uploads');
const images = require('../api/images');
const quotation = require('../api/quotation');


module.exports = (app) => {
  // Insert routes below
  app.use('/v1/client', client);
  app.use('/v1/worker', worker);
  app.use('/v1/login', login);
  app.use('/v1/category', category);
  app.use('/v1/Post', servicePost);
  app.use('/v1/uploads', uploads);
  app.use('/v1/images', images);
  app.use('/v1/quotation', quotation);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);
};
