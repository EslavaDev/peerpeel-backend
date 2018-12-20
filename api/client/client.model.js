const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const rolValid = {
  values: ['ADMIN_ROLE', 'CLIENT_ROLE'],
  message: '{VALUE} no es un rol válido',
};

const clientSchema = new Schema({
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
    default: 'CLIENT_ROLE',
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

clientSchema.methods.toJSON = function () {
  const userThis = this;
  const userObject = userThis.toObject();
  delete userObject.password;
  return userObject;
};

clientSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Client', clientSchema);
