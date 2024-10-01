var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/test")

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
});

module.exports = mongoose.model("users", userschema)
