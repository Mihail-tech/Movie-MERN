import express from 'express';
import { authorize } from '../middleware/passport/authentication';
import { getCategories } from '../controllers/category';

const router = express.Router();

router.get('/', authorize, getCategories);

export default router;
