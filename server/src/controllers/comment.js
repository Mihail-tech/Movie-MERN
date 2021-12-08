import Film from '../models/film';

export const commentPost = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {data} = req.body;

        const post = await Film.findById(id);
        post.comment.push(data);
        
        const updatePost = await Film.findByIdAndUpdate(id, post, {new:true});
        res.json(updatePost);

        console.log(req.body)

    } catch (error) {
        next(error.message);
    };
};