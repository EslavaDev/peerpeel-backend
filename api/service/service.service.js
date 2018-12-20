const admin = require('firebase-admin');

exports.SavedDataBasePromise = data => new Promise((resolve, reject) => {
  admin.firestore().collection('service').doc()
    .set(data)
    .then((res) => {
      console.log(data, res);
      return resolve({ ok: true, data, message: `SUCCESS ${data.user}` });
      // res.status(200).json({ ok: true, message: "SUCCESS " + auth.uid, auth: auth });
    })
    .catch((error) => {
      console.log(error);
      return reject(error);
      // res.status(400).json(error);
    });
});
