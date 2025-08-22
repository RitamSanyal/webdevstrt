const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/02_MEN_DB').then(() => {
    console.log("DB Connected Successfully");
}).catch((err) => {
    console.log("DB Connection Failed");
    console.log(err);
});

module.exports = connection;