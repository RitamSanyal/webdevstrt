var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { search } = require('../app');
const passport = require('passport');
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/profile', isLoggedIn ,function (req, res) {
  res.render('profile');
});


router.post('/register', function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
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

// router.get('/create', async function (req, res) {
//   let userdata = await userModel.create({
//     username: "Ritam",
//     nickname: "Babi",
//     description: "I am a 22 year old guy",
//     categories: ['MERN', 'Problem Soving', 'Machine Learning'],
//   })
//   res.send(userdata);
// });

// router.get('/find', async function (req, res) {
//   var regexp = new RegExp("RITAM", "i")
//   let userdata = await userModel.find({ username: regexp });
//   res.send(userdata)
// })

// router.get('/failed', function (req, res) {
//   req.flash("age", 12);
//   res.send("Created Flash Value");
// });

// router.get('/check', function (req, res) {
//   console.log(req.flash("age"));
//   res.send("Check Console");
// });

module.exports = router;
