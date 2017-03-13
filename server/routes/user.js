const express = require('express');
const router = require('express').Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const passport = require('passport');

router.get('/', ensureLoggedIn, (req, res, next) => {
  res.render('user', {user: req.user});
});

module.exports = router;