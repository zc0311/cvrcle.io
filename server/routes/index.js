var router = require('express').Router();
var controllers = require('../controllers/controllers');
const passport = require('passport');

// when users request login, send them to login
router.get('/login', (req, res, next) => {
  res.render('login', {env: process.env});
});

router.get('logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', {failureRedirect: '/if-something-fails'}),
  (req, res, next) => {
    res.redirect(req.session.returnTo || 'user');
  }
)

module.exports = router;