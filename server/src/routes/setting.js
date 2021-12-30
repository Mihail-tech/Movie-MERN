import express from 'express';
import { validate } from 'express-jsonschema';
import { authorize } from '../middleware/passport/authentication';
import { postSetting, updatePic } from '../controllers/setting';

const router = express.Router();

router.put('/', authorize, postSetting);
router.put('/updatePic', updatePic);


router.use((err, req, res, next) => {
  next(err);
});

export default router;
