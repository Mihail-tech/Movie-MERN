import { handleActions } from 'redux-actions';
import {
  getFilmSucceeded,
  getFilmFailed,
  updateRatingSuccess,
  updateRatingFail,
  updateRatingGetSuccess,
  updateRatingGetFail,
} from '../../actions';

const filmReducer = handleActions(
  {
    [getFilmSucceeded]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [getFilmFailed]: (state, action) => [],
    [updateRatingSuccess]: (state, action) => {
      const rating = action.payload.rating.rating;

      return { ...state, rating: rating, message: action.payload.message };
    },
    [updateRatingFail]: (state, action) => {
      return [];
    },

    [updateRatingGetSuccess]: (state, action) => {
      const ratings = action.payload.rating;

      let ratingSum = 0;
      let itemsFound = 0;
      const length = ratings.length;
      let ratingItem = null;
      for (let i = 0; i < length; i++) {
        ratingItem = ratings[i];
        ratingSum = ratingItem.rating + ratingSum;
        itemsFound = itemsFound + 1;
      }
      const averageRating = ratingSum / itemsFound;
      return { ...state, rating: averageRating, length: length };
    },
    [updateRatingGetFail]: (state, action) => state,
  },
  []
);

export default filmReducer;
