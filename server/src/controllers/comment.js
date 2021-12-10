import Film from '../models/film';
import Comment from '../models/comment';

export const commentPost = async (req, res, next) => {
    // try {
    //     const {id} = req.params;
    //     const {data} = req.body;

    //     const post = await Film.findById(id);
    //     post.comment.push(data);
        
    //     const updatePost = await Film.findByIdAndUpdate(id, post, {new:true});
    //     res.json(updatePost);

    //     console.log(req.body)

    // } catch (error) {
    //     next(error.message);
    // };
    
    // try {
    //     const comment = new Comment({ _id: mongoose.Types.ObjectId(), ...req.body });
    // console.log(comment)
    //     const savedComment = await comment.save()
    //     res.send({writer: savedComment.username, content: savedComment.content})
    const comment = new Comment({writer : req.params._id, ...req.body })

    comment.save((err, comment) => {
        console.log(err, 'err')
        if (err) return res.json({ success: false, err })

        Comment.find({ '_id': comment._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
            })
    })
        
    // } catch (error) {
    //     next(error.message);
    // }
};

export const commentGet = async (req, res) => {
    Comment.find({ "postId": req.body.film })
        .populate('writer')
        .exec((err, comments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, comments })
        })
}