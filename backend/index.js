import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/connectdb.js';
import authRoutes from "./routes/authroute.js"

import cookieParser from 'cookie-parser';

dotenv.config(); // helps to load .env file without it `process.env.` wont work

const app = express();

const PORT = process.env.PORT || 5000

app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use(express.json()) //allows to parse the incoming req to JSON payloads

app.use(cookieParser()) // allows to parse incoming cookies

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port:", PORT)
})

