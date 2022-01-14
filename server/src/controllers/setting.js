import User from '../models/user';
import mongoose from 'mongoose';

export const postSetting = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.user._id },
      { username: req.body.username, email: req.body.email, pic: req.body.pic },
      { new: true }
    );
    res.send(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export const updatePic = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(req.user._id) },
      { pic: req.body.data },
      { new: true }
    );
    res.send(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
