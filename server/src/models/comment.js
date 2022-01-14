import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  writer: { type: String, ref: 'User' },
  content: { type: String, trim: true },
  filmId: {
    type: String,
    ref: 'Film',
  },
});

const Comment = mongoose.model('Comment', CommentSchema, 'Comment');

export default Comment;
