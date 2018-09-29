const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  description: {
    type: String,
    unique: true,
    required: [
      true,
      'La descripción es obligatoria',
    ],
  },
  img: {
    type: String,
    required: [
      false,
      'La imagen es obligatoria',
    ],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: { type: Schema.Types.ObjectId, ref: 'Worker', required: true },
  },
});


module.exports = mongoose.model('Category', categorySchema);
