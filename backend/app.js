const express = require('express');
const app = express();
const connecttomongo = require('./db');
const cors = require('cors')
const cron = require('node-cron')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
require('dotenv').config();

const errorMiddleware = require('./middlewares/error.js')
app.use(cors())
connecttomongo();


// app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// app.use(upload.array()); 
app.use(express.json({ limit: '50mb' }));
// Routes
app.use('/api/user', require('./routes/user.js'));
app.use('/api/chat', require('./routes/chat.js'));
app.use('/api/message', require('./routes/message.js'));
// 0 0 0 * * *


app.use(errorMiddleware);
module.exports = app;