const { Schema, model, Types } = require('mongoose');

const LikeSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
      select: false,
    },
    book: {
      type: Types.ObjectId,
      ref: 'Book',
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

module.exports = model('Like', LikeSchema);
