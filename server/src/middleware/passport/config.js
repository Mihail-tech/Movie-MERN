import { ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

dotenv.config()
export const secret = process.env.JWT_SECRET;

export const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};
