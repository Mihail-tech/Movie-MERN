import Comment from '../models/comment';

export const commentPost = async (req, res) => {
  try {
    const comment = new Comment({ writer: req.params.username, ...req.body });
    const saveComment = await comment.save();
    res.send({comment: saveComment});
  } catch (err) {
    res.status(400).json(error.message);
  }
};

export const commentGet = async (req, res) => {
  try {
    const comments = await Comment.find({ filmId: req.params.id });
     res.send({ success: true, comments });
  } catch (err) {
    res.status(400).json(err.message);
  }
};