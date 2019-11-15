const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ISBN: {
      type: String,
      maxlength: 20,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      maxlength: 2019,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

module.exports = model('Book', BookSchema);
