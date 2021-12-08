import Film from '../models/film';

export const getFilms = async (req, res, next) => {
  try {
    const pageSize = 10;
    const page = req.query.page;

    const searchConditions = {};

    if (req.query.category) {
      searchConditions.category = req.query.category;
    }

    if (req.query.search) {
      searchConditions['$or'] = [
        {
          title: {
            $regex: '.*' + req.query.search + '.*',
            $options: 'i',
          },
        },
        {
          description: {
            $regex: '.*' + req.query.search + '.*',
            $options: 'i',
          },
        },
      ];
    }

    const sortConditions = {
      [req.query.sort]: parseInt(req.query.order),
      _id: parseInt(req.query.order),
    };

    const selectionSize = await Film.countDocuments(searchConditions);
    const hasMore = selectionSize > pageSize * page;

    const docs = await Film.find(
      searchConditions,
      {
        title: 1,
        description: 1,
        year: 1,
        rating: 1,
        
      },
      {
        skip: pageSize * (page - 1),
        limit: pageSize,
        sort: sortConditions,
      }
    ).populate({ path: 'category', select: 'title _id' });

    res.send({ hasMore, films: docs });
  } catch (err) {
    next(err);
  }
};


export const film = async (req, res) => {
  try {
    const id = req.params.id
    
  const data = await Film.findById({_id:id});
  res.json(data);
  } catch (error) {
    res.status(400).json({message:error})
  }
};