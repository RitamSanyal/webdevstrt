var express = require('express');
var router = express.Router();
const User = require('../models/User')
const passport = require('passport');
const localStrategy = require('passport-local');
passport.use(new localStrategy(User.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/select-stream', isLoggedIn ,async (req, res) => {
  try {
    const { user_id, stream_choice } = req.body;
    const newUser = new User({ user_id, stream_choice });
    await newUser.save();
    res.status(200).json({ message: 'Stream selection saved successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/register', function (req, res) {
  var userdata = new userModel({
    user_id: req.body.user_id
  });

  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect('/profile');
      })
    })
});

router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function (req, res) { });

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;
