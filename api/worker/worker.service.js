const admin = require('firebase-admin');

exports.SavedDataBasePromise = (data, auth) => new Promise((resolve, reject) => {
  admin.firestore().collection('workers').doc(auth.uid)
    .set(data)
    .then((user) => {
      console.log(user);
      delete data.password;
      delete data.id;
      resolve({ ok: true, data, message: `SUCCESS ${auth.uid}` });
      // res.status(200).json({ ok: true, message: "SUCCESS " + auth.uid, auth: auth });
      return 1;
    })
    .catch((error) => {
      console.log(error);
      reject(error);
      // res.status(400).json(error);
      return 1;
    });
});
