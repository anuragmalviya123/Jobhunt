import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
export default cloudinary;

// CLOUD_NAME = datb0nguu
// API_KEY = 329234696489368
// API_SECRET = RKbTxcUXIyphfmL_sCMHiS3JNXQ