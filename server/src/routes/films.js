import express from 'express';
import { authorize } from '../middleware/passport/authentication';
import { getFilms } from '../controllers/film';

const router = express.Router();

router.get('/', authorize, getFilms);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
