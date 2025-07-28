import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from "./routes/authRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use (express.json()); /* allows parsing of incoming requests: req.body */

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=> {
    connectDB();
    console.log("Server is running on port: ", PORT);
});

