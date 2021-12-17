import express from 'express';
import { validate } from 'express-jsonschema';
import { authenticate, authorize } from '../middleware/passport/authentication';
import { postSetting, updatePic } from '../controllers/setting';
import registerUserSchema from '../schemas/registerUserSchema';

const router = express.Router();

router.post('/', validate({body: registerUserSchema}), authorize, postSetting);
router.post('/updatePic', updatePic);


router.use((err, req, res, next) => {
  next(err);
});

export default router;
