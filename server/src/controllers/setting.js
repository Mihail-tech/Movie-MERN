import User from '../models/user'

export const postSetting = async (req, res, next) => {
    try {
        const user = await User.findById(req.params._id);

        if(user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            // user.password = req.body.password || user.password;
            user.pic = req.body.pic || user.pic;
        };

        if(req.body.password) {
            user.password = req.body.password;
        };

        const updateUser = await user.save();

         res.json({
             _id: updateUser._id,
             username: updateUser.username,
             email: updateUser.email,
             password: updateUser.password,
             pic: updateUser._id,
         })

    } catch (err) {
        next(err.message);
    }
}