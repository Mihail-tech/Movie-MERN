import FilmCategory from '../models/filmCategory';

export const getCategories = async (req, res, next) => {
  try {
    const docs = await FilmCategory.find(
      {},
      {
        title: 1,
        description: 1,
      },
      {
        $sort: {
          title: 1,
        },
      }
    );
    res.send(docs);
  } catch (err) {
    next(err);
  }
};
