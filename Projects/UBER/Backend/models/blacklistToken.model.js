const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    blacklistedAt: {
        type: Date,
        default: Date.now,
        expires: 43200 // Token expires after 12 hours
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);