const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/02_MEN_DB').then(() => {
    console.log("✅ DB Connected Successfully");
}).catch((err) => {
    console.error("❌ DB Connection Failed:", err.message);
    process.exit(1); // optional: stop app if DB is critical
});

module.exports = connection;