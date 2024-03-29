const express = require('express');
const winston = require('winston');
const mongoose = require('mongoose');
const path = require('path');
const fileUpload = require('express-fileupload');
const subdomain = require('express-subdomain');
const admin = require('firebase-admin');
const http = require('http');
const cors = require('cors');

// const hbs = require('hbs');
const routeConfig = require('./routes');

const serviceAccount = require('./config/firebaseKey.json');


const app = express();
const server = http.createServer(app);

require('./config');

// default options
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// use it before all route definitions
app.use(cors({ origin: '*' }));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://peercook-221303.firebaseio.com',
});
routeConfig(app);
if (process.env.NODE_ENV === 'dev') {
  app.use('/panel', express.static(path.resolve(__dirname, '../public/panel')));
  app.use('/doc', express.static(path.resolve(__dirname, '../public/apidoc')));
  app.use('/', express.static(path.resolve(__dirname, '../public/website')));
} else {
  app.use('/panel', express.static(path.resolve(__dirname, '../public/panel/')));
  app.use(subdomain('doc', express.static(path.resolve(__dirname, '../public/apidoc/'))));
  app.use(subdomain('app', express.static(path.resolve(__dirname, '../public/app/'))));
  app.use('/', express.static(path.resolve(__dirname, '../public/website/')));
}

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
  .then(() => {
    winston.info('Connected to Database Successfully');
    return server.listen(process.env.PORT, (err) => {
      if (err) throw new Error(err);
      return winston.info(`Example app listening on port ${process.env.PORT}!`);
    });
  })
  .catch((err) => {
    if (err) throw err;
  });
