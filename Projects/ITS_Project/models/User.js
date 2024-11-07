const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {
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

module.exports = mongoose.model('User', UserSchema);
