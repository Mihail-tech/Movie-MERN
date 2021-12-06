

export const commentPost = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {value} = req.body;

        console.log(req.body)



    } catch (error) {
        next(error);
    };
};