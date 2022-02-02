import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema ({
    user: {type: String, isUnique : true, ref: 'User'},
    filmId: {type: String, ref: 'Film'},
    rating: {
        type: mongoose.Schema.Types.Number,
        required: false,
        
      },


});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;