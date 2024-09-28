const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log('Executed');
    next();
});

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.get('/profile', function (req, res) {
    res.send('Hello from profile')
});

app.listen(3000, () => {
    console.log("Server running successfully");
});