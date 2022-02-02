import Rating from '../models/rating';
import util from 'util';

const sleep = util.promisify(setTimeout)

export const ratingPost = async (req, res) => {
  const ratings = await Rating.findOne({user:req.body.user, filmId:req.body.filmId})
    if(ratings){
      return res.send({rating: ratings, message:'Have you already voted'})
    } else {
      const rating = new Rating({  rating: req.body.rating, ...req.body });
      const saveRating = await rating.save();
      return res.send({rating: saveRating, message: 'You voted'});
    }
};

export const ratingGet = async (req, res) => {
  try {
    await sleep(500)
    const rating = await Rating.find({ filmId: req.params.id });
     res.send({ success: true, rating });
  } catch (err) {
    res.status(400).json(err.message);
  }
};