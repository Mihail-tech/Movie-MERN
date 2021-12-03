import passport from 'passport';
import { localStrategy, jwtStrategy } from './strategies';

export default () => {
  passport.use(localStrategy);
  passport.use(jwtStrategy);
};
