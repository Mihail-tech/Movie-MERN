import express from 'express';
import { validate } from 'express-jsonschema';
import { authorize } from '../middleware/passport/authentication';
import { postSetting } from '../controllers/setting';
import registerUserSchema from '../schemas/registerUserSchema';

const router = express.Router();

router.post('/', validate({body: registerUserSchema}), authorize, postSetting);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
