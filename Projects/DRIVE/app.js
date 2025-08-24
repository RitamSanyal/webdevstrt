const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes');


const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
connectDB();


app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});