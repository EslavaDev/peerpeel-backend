const admin = require('firebase-admin');

exports.SavedDataBasePromise = data => new Promise((resolve, reject) => {
  console.log('---------SERVICE-------', data);
  const id = `${Date.now()}PEER${Math.floor((Math.random() * 100) + 1)}`;
  admin.firestore().collection('service').doc(id)
    .set(data)
    .then((res) => {
      console.log(data, res);
      resolve({ ok: true, data, message: `SUCCESS ${data.client}` });
      // res.status(200).json({ ok: true, message: "SUCCESS " + auth.uid, auth: auth });
      return 1;
    })
    .catch((error) => {
      console.log(error);
      const temp = {
        error,
        message: 'putito',
      }
      reject(temp);
      return 1;
      // res.status(400).json(error);
    });
});
