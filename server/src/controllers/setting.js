import User from '../models/user';
import mongoose from 'mongoose';
import Uuid from 'uuid';

export const postSetting = async (req, res, next) => {
  console.log({ id: req.user });
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.user._id },
      { username: req.body.username, email: req.body.email, pic: req.body.pic },
      { new: true }
    );
    res.send(user);
  } catch (err) {
    console.log(err);
    next(err.message);
  }
};
//https://cloudinary.com/https-www-itechart-by/image/upload/
export const updatePic = async (req, res, next) => {
  console.log({ id: req.params.id });
  console.log(req.body.data , 'data')
    
  try {
    // console.log(req.files.file, 'file');
    const file = req.body.data;
    const user = await User.findByIdAndUpdate({ _id: mongoose.Types.ObjectId() }, {pic: file}, { new: true });
    // const avatarName = file.name ;
    // console.log({avatarName: avatarName})
    // file.mv('public/images/avatars' + '\\' + avatarName);
    // user.pic = avatarName;
    // console.log({userPic: user.pic})
    // await user.save();
    await res.send(user);
  } catch (err) {
    console.log(err);
    next(err.message);
  }
};
