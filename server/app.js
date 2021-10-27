require('dotenv').config()
const express = require('express');
var morgan = require('morgan');
const connectDB = require('./config/db');

const userRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const authRouter = require('./routes/auth');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

// Connect to Database
connectDB();

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/notes', notesRouter);
app.use('/api/v1/auth', authRouter);

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on PORT: ' + process.env.PORT)
})


