const ObjectID = require('mongodb').ObjectID;

module.exports = {
  async up(db) {
    await db.collection('films').insertMany([
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86a'),
        title: 'Titanic',
        description:
          'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ' +
          'ill-fated R.M.S. Titanic.',
        year: 1997,
        rating: 7.8,
        category: ObjectID('5d089d57a07666ef9cfed343'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86b'),
        title: 'Green Book',
        description:
          'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on ' +
          'a tour of venues through the 1960s American South.',
        year: 2018,
        rating: 8.2,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86c'),
        title: 'The Great Gatsby',
        description:
          'A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire ' +
          'neighbor, Jay Gatsby.',
        year: 2013,
        rating: 7.3,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86d'),
        title: 'The Greatest Showman',
        description:
          'Celebrates the birth of show business and tells of a visionary who rose from nothing to create ' +
          'a spectacle that became a worldwide sensation.',
        year: 2017,
        rating: 7.6,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86e'),
        title: 'Cheaper by the Dozen',
        description:
          'With his wife doing a book tour, a father of twelve must handle a new job and his unstable brood.',
        year: 2003,
        rating: 5.9,
        category: ObjectID('5d089d57a07666ef9cfed344'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86f'),
        title: 'The Shawshank Redemption',
        description:
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        year: 1994,
        rating: 9.3,
        category: ObjectID('5d089d57a07666ef9cfed343'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb870'),
        title: 'The Godfather',
        description:
          'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        year: 1972,
        rating: 9.2,
        category: ObjectID('5d089d57a07666ef9cfed341'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb871'),
        title: 'Fight Club',
        description:
          'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
        year: 1999,
        rating: 8.8,
        category: ObjectID('5d089d57a07666ef9cfed343'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb872'),
        title: 'Forrest Gump',
        description:
          'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.',
        year: 1994,
        rating: 8.8,
        category: ObjectID('5d089d57a07666ef9cfed343'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb873'),
        title: 'Spirited Away',
        description:
          "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        year: 2001,
        rating: 8.6,
        category: ObjectID('5d089d57a07666ef9cfed344'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb874'),
        title: 'Avengers: Endgame',
        description:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        year: 2019,
        rating: 8.7,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb875'),
        title: 'Interstellar',
        description:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        year: 2014,
        rating: 8.6,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb876'),
        title: 'Memento',
        description: "A man with short-term memory loss attempts to track down his wife's murderer.",
        year: 2000,
        rating: 8.5,
        category: ObjectID('5d089d57a07666ef9cfed344'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb877'),
        title: 'American Beauty',
        description:
          "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
        year: 1999,
        rating: 8.4,
        category: ObjectID('5d089d57a07666ef9cfed343'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb878'),
        title: 'Coco',
        description:
          "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        year: 2017,
        rating: 8.4,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb879'),
        title: 'Django Unchained',
        description:
          'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
        year: 2012,
        rating: 8.4,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb87a'),
        title: 'Your Name',
        description:
          'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?',
        year: 2016,
        rating: 8.4,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb87b'),
        title: 'Toy Story',
        description:
          "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        year: 1995,
        rating: 8.3,
        category: ObjectID('5d089d57a07666ef9cfed343'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb87c'),
        title: 'Eternal Sunshine of the Spotless Mind',
        description:
          'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.',
        year: 2004,
        rating: 8.3,
        category: ObjectID('5d089d57a07666ef9cfed344'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb87d'),
        title: 'A Clockwork Orange',
        description:
          "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
        year: 1971,
        rating: 8.3,
        category: ObjectID('5d089d57a07666ef9cfed341'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb87e'),
        title: 'Amelie',
        description:
          'Amelie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.',
        year: 2001,
        rating: 8.3,
        category: ObjectID('5d089d57a07666ef9cfed344'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb87f'),
        title: 'Scarface',
        description: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
        year: 1983,
        rating: 8.3,
        category: ObjectID('5d089d57a07666ef9cfed342'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb880'),
        title: 'Die Hard',
        description:
          'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
        year: 1988,
        rating: 8.2,
        category: ObjectID('5d089d57a07666ef9cfed342'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb881'),
        title: 'A Beautiful Mind',
        description:
          'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
        year: 2001,
        rating: 8.2,
        category: ObjectID('5d089d57a07666ef9cfed344'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb882'),
        title: 'The Wolf of Wall Street',
        description:
          'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
        year: 2013,
        rating: 8.2,
        category: ObjectID('5d089d57a07666ef9cfed345'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb883'),
        title: 'The Elephant Man',
        description:
          'When a prestigious doctor takes on the task of studying a deformed gentlemen known as "the Elephant Man", he finds that the man is quite personable and intelligent.',
        year: 1980,
        rating: 8.2,
        category: ObjectID('5d089d57a07666ef9cfed342'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb884'),
        title: 'V for Vendetta',
        description:
          'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.',
        year: 2005,
        rating: 8.2,
        category: ObjectID('5d089d57a07666ef9cfed344'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb885'),
        title: 'Blade Runner',
        description:
          'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
        year: 1982,
        rating: 8.2,
        category: ObjectID('5d089d57a07666ef9cfed342'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb886'),
        title: 'The Sixth Sense',
        description: 'A boy who communicates with spirits seeks the help of a disheartened child psychologist.',
        year: 1999,
        rating: 8.1,
        category: ObjectID('5d089d57a07666ef9cfed343'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb887'),
        title: 'The Thing',
        description:
          'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
        year: 1982,
        rating: 8.1,
        category: ObjectID('5d089d57a07666ef9cfed342'),
      },
    ]);
  },

  async down(db) {
    await db.collection('films').deleteMany({});
  },
};
