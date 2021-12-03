import mongoose from 'mongoose';
import User from '../models/user';

export const registerUser = async (req, res, next) => {
  try {
    const user = new User({ _id: mongoose.Types.ObjectId(), ...req.body });
    const savedUser = await user.save();
    res.send({ username: savedUser.username, email: savedUser.email, password: savedUser.password, pic: savedUser.pic });
  } catch (err) {
    next(err);
  }
};

export const loginUser = (user, req, res, next) => {
  res.send(user);
};
