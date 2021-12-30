import Comment from '../models/comment';

export const commentPost = async (req, res, next) => {
  try {
    const comment = new Comment({ writer: req.params.username, ...req.body });
    comment.save((err, comment) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true, comment });
    });
  } catch (err) {
    next(err);
  }
};

export const commentGet = async (req, res) => {
  const id = req.params.id;
  try {
    Comment.find({ filmId: id }).exec((err, comments) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ success: true, comments });
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
