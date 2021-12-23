import express from 'express';
import { authorize } from '../middleware/passport/authentication';
import { getFilms, film } from '../controllers/film';
import { commentPost, commentGet } from '../controllers/comment';

const router = express.Router();

router.get('/', authorize, getFilms);
router.get('/:id', authorize, film);
router.post('/comment', authorize, commentPost);
router.get('/comments/:id', authorize, commentGet);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
