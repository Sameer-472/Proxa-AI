import cookieParser from "cookie-parser";
import express from 'express';
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
import { ConnectDB } from "./config/db.js";
import userRoutes from "./routes/user.router.js";
import aiRoutes from "./routes/ai.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";
import paymentPlanRoutes from "./routes/feedback.routes.js";
import cors from "cors";
// import cookieParser = require("cookie-parser");
// const { ConnectDB } = require('./config/db');

const app = express();
app.use(cors({
  origin: "http://localhost:5173",  // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

const PORT = process.env.PORT || 5000;


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})

app.use(helmet());

app.use(morgan('dev'));


app.use(limiter);

app.use(express.json());

app.use(cookieParser());


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/ai" , aiRoutes);
app.use("/api/v1/feedback" , feedbackRoutes);
app.use("/api/v1/plan" , paymentPlanRoutes)

app.get('/', (req, res) => {
    res.send("Hello HTTPS server")
});

app.listen(PORT, () => {
    console.log(`server is running on  http://localhost:${PORT}`)
    ConnectDB();
})

const startServer = async()=> {
    await ConnectDB();
    app.listen(PORT, () => {
    console.log(`server is running on  http://localhost:${PORT}`)
})
}

startServer();