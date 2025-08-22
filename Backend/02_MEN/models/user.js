const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    email:{type:String, unique:true, lowercase:true},
    password:String
});

const userModel = mongoose.model('02_MEN_User',userSchema);

module.exports = userModel;