import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    writer: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    content: { type: String, trim: true },
    postId: {
        type: String,
    },
});

const Comment = mongoose.model('Comment', CommentSchema, 'Comment');

export default Comment;