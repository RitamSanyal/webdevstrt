const express = require('express');
const app = express();
const morgan = require('morgan');
const dbConnection = require('./config/db');
const userModel = require('./models/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

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

app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send("Form Data Received");
})

app.listen(3000,()=>{
    console.log("Server Started Successfully")
})