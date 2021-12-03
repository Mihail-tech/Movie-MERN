import express from 'express';
import { authorize } from '../middleware/passport/authentication';
import { getFilms, film } from '../controllers/film';

const router = express.Router();

router.get('/', authorize, getFilms);
router.get('/:id', authorize, film);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
