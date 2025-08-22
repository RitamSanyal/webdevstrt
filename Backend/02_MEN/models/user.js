const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
});

const userModel = mongoose.model('02_MEN_User',userSchema);

module.exports = userModel;