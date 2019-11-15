const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema, model, Types } = require('mongoose');

const authConfig = require('../config/auth');

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

UserSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  },
};

UserSchema.statics = {
  generateToken({ _id }) {
    return jwt.sign({ _id }, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });
  },
};


module.exports = model('User', UserSchema);
