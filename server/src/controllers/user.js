import mongoose from 'mongoose';
import User from '../models/user';

export const registerUser = async (req, res) => {
  try {
    const user = new User({ _id: mongoose.Types.ObjectId(), ...req.body });
    const savedUser = await user.save();
    res.send({ username: savedUser.username, email: savedUser.email, password: savedUser.password, pic: savedUser.pic });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export const loginUser = (user, req, res, next) => {
  res.send(user);
};
