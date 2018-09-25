const mongoose = require('mongoose');

const { Schema } = mongoose;


const quotationSchema = new Schema({
  title: { type: String, required: [true, 'El nombre es necesario'] },
  descripcion: { type: String, required: [true, 'la descripcion es necesaria'] },
  valorCotizado: { type: Number, required: [true, 'El precio únitario es necesario'] },
  Estado: { type: String, required: true, default: 'PENDIENTE' },
  service: { type: Schema.Types.ObjectId, ref: 'ServicePost', required: [true, 'El servicio ID es necesario para realizar una cotizacion'] },
  worker: { type: Schema.Types.ObjectId, ref: 'Worker' },
});


module.exports = mongoose.model('Quotation', quotationSchema);
