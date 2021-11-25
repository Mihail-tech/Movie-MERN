import mongoose from 'mongoose';

const filmCategorySchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  films: {
    type: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Film',
      },
    ],
    required: true,
  },
});

const FilmCategory = mongoose.model('FilmCategory', filmCategorySchema, 'film-categories');

export default FilmCategory;
