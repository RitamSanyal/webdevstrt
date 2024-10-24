var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/failed', function (req, res) {
  req.flash("age", 12);
  res.send("Created Flash Value");
});

router.get('/check', function (req, res) {
  console.log(req.flash("age"));
  res.send("Check Console");
});

module.exports = router;
