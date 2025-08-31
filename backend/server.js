// const cookieParser = require('cookie-parser');
// const express = require('express');
// const rateLimit = require('express-rate-limit')
// const morgan = require('morgan');
// const helmet = require('helmet');
// const dotenv = require('dotenv');
import cookieParser from "cookie-parser";
import express from 'express';
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";

// import cookieParser = require("cookie-parser");
// const { ConnectDB } = require('./config/db');


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})

app.use(helmet());

app.use(morgan('dev'));


app.use(limiter);

app.use(express.json());

app.use(cookieParser());



app.get('/', (req, res) => {
    res.send("Hello HTTPS server")
});

app.listen(PORT, () => {
    console.log(`server is running on  http://localhost:${PORT}`)
    ConnectDB();
})