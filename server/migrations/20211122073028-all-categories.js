const ObjectID = require('mongodb').ObjectID;

module.exports = {
  async up(db) {
    await db.collection('categories').insertMany([
      {
        _id: ObjectID('5d089d57a07666ef9cfed341'),
        title: "1970's films",
        description: 'Films that have been released in 1970-1979.',
        films: [ObjectID('5d089b1d655a7c1ae81bb870'), ObjectID('5d089b1d655a7c1ae81bb87d')],
      },
      {
        _id: ObjectID('5d089d57a07666ef9cfed342'),
        title: "1980's films",
        description: 'Films that have been released in 1980-1989.',
        films: [
          ObjectID('5d089b1d655a7c1ae81bb87f'),
          ObjectID('5d089b1d655a7c1ae81bb880'),
          ObjectID('5d089b1d655a7c1ae81bb883'),
          ObjectID('5d089b1d655a7c1ae81bb885'),
          ObjectID('5d089b1d655a7c1ae81bb887'),
        ],
      },
      {
        _id: ObjectID('5d089d57a07666ef9cfed343'),
        title: "1990's films",
        description: 'Films that have been released in 1990-1999.',
        films: [
          ObjectID('5d089b1d655a7c1ae81bb86a'),
          ObjectID('5d089b1d655a7c1ae81bb86f'),
          ObjectID('5d089b1d655a7c1ae81bb871'),
          ObjectID('5d089b1d655a7c1ae81bb872'),
          ObjectID('5d089b1d655a7c1ae81bb877'),
          ObjectID('5d089b1d655a7c1ae81bb87b'),
          ObjectID('5d089b1d655a7c1ae81bb886'),
        ],
      },
      {
        _id: ObjectID('5d089d57a07666ef9cfed344'),
        title: "2000's films",
        description: 'Films that have been released in 2000-2009.',
        films: [
          ObjectID('5d089b1d655a7c1ae81bb86e'),
          ObjectID('5d089b1d655a7c1ae81bb873'),
          ObjectID('5d089b1d655a7c1ae81bb876'),
          ObjectID('5d089b1d655a7c1ae81bb87c'),
          ObjectID('5d089b1d655a7c1ae81bb87e'),
          ObjectID('5d089b1d655a7c1ae81bb881'),
          ObjectID('5d089b1d655a7c1ae81bb884'),
        ],
      },
      {
        _id: ObjectID('5d089d57a07666ef9cfed345'),
        title: "2010's films",
        description: 'Films that have been released in 2010-2019.',
        films: [
          ObjectID('5d089b1d655a7c1ae81bb86b'),
          ObjectID('5d089b1d655a7c1ae81bb86c'),
          ObjectID('5d089b1d655a7c1ae81bb86b'),
          ObjectID('5d089b1d655a7c1ae81bb874'),
          ObjectID('5d089b1d655a7c1ae81bb875'),
          ObjectID('5d089b1d655a7c1ae81bb878'),
          ObjectID('5d089b1d655a7c1ae81bb879'),
          ObjectID('5d089b1d655a7c1ae81bb87a'),
          ObjectID('5d089b1d655a7c1ae81bb882'),
        ],
      },
    ]);
  },

  async down(db) {
    await db.collection('categories').deleteMany({});
  },
};
