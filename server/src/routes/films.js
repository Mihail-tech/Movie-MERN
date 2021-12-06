import express from 'express';
import { authorize } from '../middleware/passport/authentication';
import { getFilms, film } from '../controllers/film';
import { commentPost } from '../controllers/comment';

const router = express.Router();

router.get('/', authorize, getFilms);
router.get('/:id', authorize, film);
router.get('/:id/comment', authorize, commentPost);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
