const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// sirve para filtrar los datos que quiero y por ende elimina los que noq uiero del objeto
const _ = require('underscore');

const User = require('./worker.model');

exports.saveUser = (req, res) => {
  const {
    nombre, apellido, email, password, role, identificacion, phone, direccion, edad, img,
    idFront,
    idBack,
  } = req.body;
  const user = new User({
    nombre,
    apellido,
    email,
    password: bcrypt.hashSync(password, 10),
    role,
    direccion,
    phone,
    identificacion,
    edad,
    img,
    idFront,
    idBack,

  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    return User.findOne({ email: userDB.email }, (error, workerDB) => {
      if (error) {
        return res.status(500).json({
          ok: false,
          error,
        });
      }
      if (!workerDB || !bcrypt.compareSync(password, workerDB.password)) {
        return res.status(400).json({
          ok: false,
          error: {
            message: 'Usuario o contraseña incorrectos',
          },
        });
      }
      const token = jwt.sign({
        user: workerDB,
      }, process.env.SEED_TOKEN, { expiresIn: process.env.EXP_TOKEN }); // expira en 30 dias
      return res.json({
        ok: true,
        workerDB,
        token,
      });
    });
    // userDB.password = null;
    // return res.json({
    //   ok: true,
    //   user: userDB,
    // });
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const body = _.pick(req.body, ['edad', 'nombre', 'email', 'img', 'role', 'estado', 'apellido', 'direccion', 'phone', 'identificacion']);

  User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    return res.json({
      ok: true,
      user: userDB,
    });
  });
};

exports.getUsers = (req, res) => {
  const { sky } = req.query || 0;
  const { lim } = req.query || 5;
  User.find({ estado: true }, 'nombre email role estado google img')
    .skip(Number(sky))
    .limit(Number(lim))
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      return User.countDocuments({ estado: true }, (errCount, count) => {
        if (errCount) {
          return res.status(400).json({
            ok: false,
            errCount,
          });
        }
        return res.json({
          ok: true,
          users,
          count,
        });
      });
    });
};

exports.getId = (req, res) => {
  const { id } = req.params;
  User.find({ estado: true, _id: id })
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      return res.json({
        ok: true,
        users,
      });
    });
};

exports.getInfo = (req, res) => {
  const { _id } = req.user;
  User.find({ _id })
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      return res.json({
        ok: true,
        users,
      });
    });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  // User.findByIdAndUpdate(id, (err, userDB) => {
  User.findByIdAndUpdate(id, { estado: false }, { new: true }, (err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    if (!userDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Usuario no encontrado',
        },
      });
    }
    return res.json({
      ok: true,
      delete: userDB,
    });
  });
};
