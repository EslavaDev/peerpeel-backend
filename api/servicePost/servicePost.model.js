const mongoose = require('mongoose');

const { Schema } = mongoose;


const servicePostSchema = new Schema({
  title: { type: String, required: [true, 'El nombre es necesario'] },
  descripcion: { type: String, required: [true, 'la descripcion es necesaria'] },
  valorInicial: { type: Number, required: [true, 'El precio únitario es necesario'] },
  Estado: { type: String, required: true, default: 'PENDIENTE' },
  categoria: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  ubicacion: { type: String, required: [true, 'la ubicacion es necesaria'] },
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
  worker: { type: Schema.Types.ObjectId, ref: 'Worker' },
  valorFinal: { type: Number, required: false },
  img: {
    type: [String],
  },
});


module.exports = mongoose.model('ServicePost', servicePostSchema);
