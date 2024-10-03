var express = require('express');
var router = express.Router();
const userModel = require('./users')

router.get("/", function (req, res) {
  res.cookie("age",22);
  req.session.banned = true;
  res.render("index")
});

router.get("/readcookie", function (req, res) {
  console.log(req.cookies.age);
  res.send("Check Cookie Details in console");
});

router.get("/deletecookie", function (req, res) {
  res.clearCookie("age");
  res.send("Cookie Cleared")
});

router.get("/checkban", function (req, res) {
  if (req.session.banned === true) {
    res.send("You are banned");
  }
  else {
    res.send("You are not banned");
  }
});

router.get("/removeban", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("Ban Removed");
  })
})

router.get("/create", async function (req, res) {
  const createduser = await userModel.create({
    username: "Ritam007",
    name: "Ritam Sanyal",
    age: 22
  });
  res.send(createduser);
});

router.get("/allusers", async function (req, res) {
  // let allusers = await userModel.findOne({ username: "Ritam007" });
  let allusers = await userModel.find();
  res.send(allusers);
});

router.get("/delete", async function (req, res) {
  let deletedUser = await userModel.findOneAndDelete({
    username: "Ritam007"
  });
  res.send(deletedUser);
});

module.exports = router;
