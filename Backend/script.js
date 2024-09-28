const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'))

// app.use(function(req,res,next){
//     console.log('Executed');
//     next();
// });

app.get('/', function (req, res) {
    res.render("index")
});

app.get('/profile/', function (req, res) {
    res.render("profile")
});

// app.get('/profile/:username', function (req, res) {
//     res.send(`Hello from ${req.params.username}'s profile`)
// });

app.listen(3000, () => {
    console.log("Server running successfully");
});