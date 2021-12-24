import User from '../models/user';
import mongoose from 'mongoose';
import Uuid from 'uuid';

export const postSetting = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
console.log(req.body, 'user')
console.log(user.name, 'user.name')
        if(user) {
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            // user.password = req.body.password || user.password;
            user.pic = req.body.pic || user.pic;
        };

        // if(req.body.password) {
        //     user.password = req.body.password;
        // };
console.log(user, 'user1')
        const updateUser = await user.save();
        console.log(updateUser, 'updateuser')

         res.json({
             _id: updateUser._id,
             username: updateUser.username,
             email: updateUser.email,
            //  password: updateUser.password,
             pic: updateUser._id,
         })

    } catch (err) {
        console.log(err)
        next(err.message);
    }
};

export const updatePic = async (req, res, next) => {

    try {
        console.log(req.files.file.name)
        const file = req.files.file.name
        const user = await User.find({ _id: mongoose.Types.ObjectId() }); 
        const avatarName = Uuid + 'jpg';
        file.mv(('public') + '\\' + avatarName);
        user.pic = avatarName;
        await user.save();

    } catch (err) {
        console.log(err)
        next(err.message);
    }
};