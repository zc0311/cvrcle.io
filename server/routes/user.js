const express = require('express');
const router = require('express').Router();

router.get('/', ensureLoggedIn, (req, res, next) => {
  res.render('user', {user: req.user});
});

module.exports = router;