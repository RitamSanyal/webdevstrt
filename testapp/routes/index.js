var express = require('express');
var router = express.Router();
const userModel = require('./users')

router.get("/", function (req, res) {
  res.render("index")
});

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
