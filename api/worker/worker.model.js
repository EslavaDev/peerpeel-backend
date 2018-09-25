const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const rolValid = {
  values: ['ADMIN_ROLE', 'WORKER_ROLE'],
  message: '{VALUE} no es un rol válido',
};

const workerSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'el nombre es necesario'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email es obligatorio'],
  },
  password: {
    type: String,
    required: [true, 'the password is required'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    default: 'WORKER_ROLE',
    enum: rolValid,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
  facebook: {
    type: Boolean,
    default: false,
  },
});

workerSchema.methods.toJSON = function () {
  const userThis = this;
  const userObject = userThis.toObject();
  delete userObject.password;
  return userObject;
};

workerSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Worker', workerSchema);
