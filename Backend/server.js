const express = require('express');
const app = express();
const dotenv= require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname,'config','config.env')})
const dbConfig = require('./db');
const connectDB = require('./config/connectDB');
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
  })