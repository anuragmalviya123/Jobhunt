import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB(); 
    console.log(`Server is running at port ${PORT}`);
});













// MongoDB connection string should be stored in the .env file
// Example:
// MONGO_URI=mongodb+srv://anuragmalviya62:<db_password>@cluster0.u9orn.mongodb.net/
