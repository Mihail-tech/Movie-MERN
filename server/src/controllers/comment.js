import Comment from '../models/comment';

export const commentPost = async (req, res, next) => {
  try {
    const comment = new Comment({ writer: req.params.username, ...req.body });

    console.log(req.body, 'body');
    console.log(req.params.username, 'writer');
    console.log(comment, 'comment new comment');

    comment.save((err, comment) => {
      console.log(err, 'err');

      console.log(comment, 'comment');
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true, comment });
    });
  } catch (err) {
    next(err);
  }
};

export const commentGet = async (req, res) => {
  console.log(req.params.id, 'req.query');
  const id = req.params.id;
  console.log(id, 'id');
  try {
    Comment.find({ filmId: id }).exec((err, comments) => {
      console.log(err, 'err');
      console.log(comments, 'comments');
      if (err) return res.status(400).send(err);
      return res.status(200).send({ success: true, comments });
    });
  } catch (error) {
    console.log(error, 'error');
    res.status(400).json(error.message);
  }
};
