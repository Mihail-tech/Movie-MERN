import express from 'express';
import path from 'path';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import fileUploader from 'express-fileupload';

import connectToMongoose from './models/db';
import configurePassport from './middleware/passport';

import indexRouter from './routes';
import usersRouter from './routes/users';
import filmsRouter from './routes/films';
import categoriesRouter from './routes/categories';
import updateSetting from './routes/setting';

const app = express();
connectToMongoose();
configurePassport();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(fileUploader({}));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/films', filmsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/setting', updateSetting);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  switch (err.name) {
    case 'JsonSchemaValidation': {
      const errors = {};
      err.validations.body.map(object => (errors[object.property] = object.messages[0]));
      res.status(400).send(errors);
      break;
    }
    case 'ValidationError': {
      const errors = {};
      for (let field in err.errors) {
        errors[field] = err.errors[field].message;
      }
      res.status(422).send(errors);
      break;
    }
    case 'MongoError': {
      const message = err.errmsg;
      res.status(409).send(message);
      break;
    }
    default: {
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
      res.status(501).send(err);
    }
  }
});

module.exports = app;
