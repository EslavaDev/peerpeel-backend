const admin = require('firebase-admin');

exports.SavedDataBasePromise = data => new Promise((resolve, reject) => {
  console.log('---------SERVICE-------', data);
  const id = Date.now();
  admin.firestore().collection('service')
    .add(data)
    .then((res) => {
      console.log(data);
      resolve({ ok: true, data, message: `SUCCESS ${res.id}` });
      // res.status(200).json({ ok: true, message: "SUCCESS " + auth.uid, auth: auth });
      return 1;
    })
    .catch((error) => {
      console.log(error);
      const temp = {
        error,
        message: 'putito',
      };
      reject(temp);
      return 1;
      // res.status(400).json(error);
    });
});
