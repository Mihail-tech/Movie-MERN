import express from 'express';
import { authorize } from '../middleware/passport/authentication';
import { getCategories } from '../controllers/category';

const router = express.Router();

router.get('/', authorize, getCategories);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
