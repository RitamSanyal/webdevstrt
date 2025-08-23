const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
connectDB();

dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});