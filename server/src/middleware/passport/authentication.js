import passport from 'passport';

// check credentials
export const authenticate = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err) {
      return next(err);
    } else if (!user) {
      return res.status(401).send({ error: 'Invalid username or password' });
    } else {
      return next(user);
    }
  })(req, res, next);
};
// check if has permission (token)
export const authorize = passport.authenticate('jwt', { session: false });
