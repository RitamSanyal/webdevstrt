const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.set("view engine", 'ejs');

// app.use((req, res, next) => {
//     console.log("Middleware executed");
//     next();
// });

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about', (req, res) => {
    res.send("About Page");
})

app.listen(3000,()=>{
    console.log("Server Started Successfully")
})