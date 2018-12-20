// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

// const { Schema } = mongoose;

// const rolValid = {
//   values: ['ADMIN_ROLE', 'WORKER_ROLE'],
//   message: '{VALUE} no es un rol válido',
// };

// const workerSchema = new Schema({
//   nombre: {
//     type: String,
//     required: [true, 'el nombre es necesario'],
//   },
//   apellido: {
//     type: String,
//     required: [true, 'el apellido es necesario'],
//   },
//   direccion: {
//     type: String,
//     required: [true, 'la direccion es necesario'],
//   },
//   identificacion: {
//     type: String,
//     required: [true, 'la identificacion es necesaria'],
//   },
//   phone: {
//     type: Number,
//     required: [true, 'el celular es necesario'],
//   },
//   edad: {
//     type: Date,
//     required: [true, 'la edad es necesaria'],
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: [true, 'email es obligatorio'],
//   },
//   password: {
//     type: String,
//     required: [true, 'the password is required'],
//   },
//   img: {
//     type: String,
//   },
//   idFront: {
//     type: String,
//   },
//   idBack: {
//     type: String,
//   },
//   role: {
//     type: String,
//     default: 'WORKER_ROLE',
//     enum: rolValid,
//   },
//   estado: {
//     type: Boolean,
//     default: true,
//   },
//   google: {
//     type: Boolean,
//     default: false,
//   },
//   facebook: {
//     type: Boolean,
//     default: false,
//   },
// });

// // eslint-disable-next-line func-names
// workerSchema.methods.toJSON = function () {
//   const userThis = this;
//   const userObject = userThis.toObject();
//   delete userObject.password;
//   return userObject;
// };

// workerSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

// module.exports = mongoose.model('Worker', workerSchema);
