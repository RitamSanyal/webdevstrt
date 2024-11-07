const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    stream_choice: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(plm);

module.exports = mongoose.model('User', UserSchema);
