const admin = require('firebase-admin');
const service = require('./client.service');

exports.register = (req, res) => {
  const {
    email,
    password,
    img,
  } = req.body;
  admin.auth().createUser({
    email,
    password,
    emailVerified: true,
  })
    .then((auth) => {
      const params = {
        email,
        password: auth.passwordHash,
        id: auth.uid,
      };
      if (typeof img === 'string' && img !== null && img.length > 0) {
        params.img = img;
      } else {
        params.img = '';
      }
      service.SavedDataBasePromise(params, auth)
        .then(response => res.status(201).json(response))
        .catch(error => res.status(400).json(error));
      return 1;
    }).catch((error) => {
      // res.status(400).json(error);
      res.status(400).json(error);
      return 1;
    });
  return 1;
};
