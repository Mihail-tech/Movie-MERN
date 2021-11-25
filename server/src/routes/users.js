import express from 'express';
import { validate } from 'express-jsonschema';

import registerUserSchema from '../schemas/registerUserSchema';
import loginUserSchema from '../schemas/loginUserSchema';
import { authenticate } from '../middleware/passport/authentication';
import { registerUser, loginUser } from '../controllers/user';

const router = express.Router();

router.post('/register', validate({ body: registerUserSchema }), registerUser);
router.post('/login', validate({ body: loginUserSchema }), authenticate, loginUser);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
