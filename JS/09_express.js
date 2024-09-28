const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log("1");
    next();
});

app.get("/", function (req, res) {
    res.send("Hello how are you Ritam Sanyal")

});

app.get("/profile", function (req, res) {
    res.send("Welcome to the profile")

});

const port = 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
