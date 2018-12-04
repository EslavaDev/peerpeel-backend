const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Client = require('../client/client.model');
const Worker = require('../worker/worker.model');
const { verify } = require('../../server/middlewares/google');


exports.loginClient = (req, res) => {
  const { email, password } = req.body;

  Client.findOne({ email }, (err, clientDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (!clientDB || !bcrypt.compareSync(password, clientDB.password)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Usuario o contraseña incorrectos',
        },
      });
    }
    const token = jwt.sign({
      user: clientDB,
    }, process.env.SEED_TOKEN, { expiresIn: process.env.EXP_TOKEN }); // expira en 30 dias
    return res.json({
      ok: true,
      clientDB,
      token,
    });
  });
};

exports.loginWorker = (req, res) => {
  const { email, password } = req.body;

  Worker.findOne({ email }, (err, workerDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (!workerDB || !bcrypt.compareSync(password, workerDB.password)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Usuario o contraseña incorrectos',
        },
      });
    }
    const user = {
      sub: workerDB._id,
      nombre: workerDB.nombre,
      correo: workerDB.email,
      role: workerDB.role,
      estado: workerDB.estado,
    }
    const token = jwt.sign({
      user,
    }, process.env.SEED_TOKEN, { expiresIn: process.env.EXP_TOKEN }); // expira en 30 dias
    return res.json({
      ok: true,
      workerDB,
      token,
    });
  });
};

exports.googleClient = async (req, res) => {
  let { token } = req.body;
  const googleUser = await verify(token).catch(e => res.status(403).json({
    ok: false,
    err: e,
  }));
  const {
    nombre, email, img, google,
  } = googleUser;

  return Client.findOne({ email }, (err, clientDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (clientDB) {
      if (clientDB.google === false) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'Debe de usar su autenticacion normal',
          },
        });
      }
      token = jwt.sign({
        user: clientDB,
      }, process.env.SEED_TOKEN, { expiresIn: process.env.EXP_TOKEN }); // expira en 30 dias
      return res.json({
        ok: true,
        clientDB,
        token,
      });
    }
    // si el usuario no existe en la BD
    const user = new Client({
      nombre,
      email,
      img,
      password: ';)',
      google,
    });
    return user.save((errSave, saveDB) => {
      if (errSave) {
        return res.status(500).json({
          ok: false,
          errSave,
        });
      }
      token = jwt.sign({
        user: saveDB,
      }, process.env.SEED_TOKEN, { expiresIn: process.env.EXP_TOKEN }); // expira en 30 dias
      return res.json({
        ok: true,
        saveDB,
        token,
      });
    });
  });
};

exports.googleWorker = async (req, res) => {
  let { token } = req.body;
  const googleUser = await verify(token).catch(e => res.status(403).json({
    ok: false,
    err: e,
  }));
  const {
    nombre, email, img, google,
  } = googleUser;

  return Worker.findOne({ email }, (err, workerDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (workerDB) {
      if (workerDB.google === false) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'Debe de usar su autenticacion normal',
          },
        });
      }
      token = jwt.sign({
        user: workerDB,
      }, process.env.SEED_TOKEN, { expiresIn: process.env.EXP_TOKEN }); // expira en 30 dias
      return res.json({
        ok: true,
        workerDB,
        token,
      });
    }
    // si el usuario no existe en la BD
    const user = new Worker({
      nombre,
      email,
      img,
      password: ';)',
      google,
    });
    return user.save((errSave, saveDB) => {
      if (errSave) {
        return res.status(500).json({
          ok: false,
          errSave,
        });
      }
      token = jwt.sign({
        user: saveDB,
      }, process.env.SEED_TOKEN, { expiresIn: process.env.EXP_TOKEN }); // expira en 30 dias
      return res.json({
        ok: true,
        saveDB,
        token,
      });
    });
  });
};

exports.verifyToken = (req, res) => {
  const token = req.get('token');
  jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          err,
          message: 'Token no valido',
        },
      });
    }
    return res.json({ ok: true, token: decoded.user });
  });
};
