import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import { encryptData } from '../util/encryption';
import { secret } from '../middleware/passport/config';

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
  pic: {
    type: String,
    default: "https://res.cloudinary.com/https-www-itechart-by/image/upload/v1638167523/default_icons_v4y4z2.jpg"
  }
});

userSchema.pre('save', async function() {
  this.password = await encryptData(this.password);
});

userSchema.methods.verifyPassword = async function(password) {
  return this.password === (await encryptData(password));
};

userSchema.methods.generateJwt = function() {
  return jwt.sign(
    {
      id: this._id,
    },
    secret,
    {expiresIn: "30d"}
  );
};

const User = mongoose.model('User', userSchema, 'users');

export default User;
