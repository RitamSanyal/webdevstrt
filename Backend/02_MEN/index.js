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

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.send("About Page");
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newUser = await userModel.create({
            username,
            email,
            password
        });

        res.send(`User ${newUser.username} registered successfully!`);
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).send("Email already exists. Please use another one.");
        } else {
            res.status(500).send("Something went wrong. Try again.");
        }
    }
});

app.get('/get-users',(req,res)=>{
    userModel.find().then((users)=>{
        res.send(users);
    })
});

app.get('/update-user',async(req,res)=>{
    await userModel.findOneAndUpdate({username:"b"},{username:"b1"})
    res.send("User Updated");
});

app.get('/delete-user',async(req,res)=>{
    await userModel.findOneAndDelete({username:"b1"})
    res.send("User Deleted");
});

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send("Form Data Received");
})

app.listen(3000, () => {
    console.log("✅ Server Started Successfully")
})