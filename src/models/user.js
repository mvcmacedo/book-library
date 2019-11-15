const bcrypt = require('bcryptjs');
const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 0,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    favorites: {
      type: [Types.ObjectId],
      ref: 'Book',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

UserSchema.pre('save', async function _pre() {
  this.password = await bcrypt.hash(this.password, 8);
});

module.exports = model('User', UserSchema);
