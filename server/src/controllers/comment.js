import Film from '../models/film';
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
console.log(comment.writer)
      Comment.find({ _id: comment._id })
        // .populate('writer')
        .exec((err, result) => {
          console.log(result, 'result');
          if (err) return res.json({ success: false, err });
          return res.status(200).json({ success: true, result });
        });
    });
  } catch (err) {
    next(err);
  }
};

export const commentGet = async (req, res) => {
  console.log(req.params.id, 'req.query');
  console.log(req.body)
  const id = req.params.id
  try {
      Comment.findById({ id: id })
  // .populate('writer')
  .exec((err, comments) => {
      if (err) return res.status(400).send(err)
      return res.status(200).json({ success: true, comments })
  })

  } catch (error) {
      res.status(400).json( error.message )

  }
};
