import FilmCategory from '../models/filmCategory';

export const getCategories = async (req, res) => {
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
    res.status(400).json(err.message);
  }
};
