const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullname:{
        firstame:{
            type:String,
            required:true,
            trim:true,
            minlength:[3,'First name must be at least 3 characters long'],
        },
        lastname:{
            type:String,
            trim:true,
            minlength:[3,'Last name must be at least 3 characters long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address'],
    },
    password:{
        type:String,
        required:true
    },
    socketId:{
        type:String,
    }
});