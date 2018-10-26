const mongoose = require('mongoose');

const { Schema } = mongoose;

const statesValid = {
  values: ['PENDIENTE', 'ACEPTADO', 'RECHAZADO', 'ELIMINADO'],
  message: '{VALUE} no es un estado válido',
};

const quotationSchema = new Schema({
  descripcion: { type: String, required: [true, 'la descripcion es necesaria'] },
  valorCotizado: { type: Number, required: [true, 'El precio únitario es necesario'] },
  estado: {
    type: String, required: false, default: 'PENDIENTE', enum: statesValid,
  },
  service: { type: Schema.Types.ObjectId, ref: 'ServicePost', required: [true, 'El servicio ID es necesario para realizar una cotizacion'] },
  worker: { type: Schema.Types.ObjectId, ref: 'Worker' },
});


module.exports = mongoose.model('Quotation', quotationSchema);
