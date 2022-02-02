import Comment from '../models/comment';
import User from '../models/user';

export const commentPost = async (req, res) => {
  try {
    const comment = new Comment({ writer: req.params.username, ...req.body });
    const saveComment = await comment.save();
    res.send({comment: saveComment});
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export const commentGet = async (req, res) => {
  try {
    const comments = await Comment.find({filmId: req.params.id });
    const picture = await User.find({id:req.params._id});
     res.send({ success: true, comments, picture });
  } catch (err) {
    res.status(400).json(err.message);
  }
};