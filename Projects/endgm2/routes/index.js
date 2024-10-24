var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { search } = require('../app');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/create', async function (req, res) {
  let userdata = await userModel.create({
    username: "Ritam",
    nickname: "Babi",
    description: "I am a 22 year old guy",
    categories: ['MERN', 'Problem Soving', 'Machine Learning'],
  })
  res.send(userdata);
});

router.get('/find', async function (req, res) {
  var regexp = new RegExp("RITAM", "i")
  let userdata = await userModel.find({ username: regexp });
  res.send(userdata)
})

// router.get('/failed', function (req, res) {
//   req.flash("age", 12);
//   res.send("Created Flash Value");
// });

// router.get('/check', function (req, res) {
//   console.log(req.flash("age"));
//   res.send("Check Console");
// });

module.exports = router;
