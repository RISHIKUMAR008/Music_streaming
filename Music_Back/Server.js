import express from "express";
import cors from 'cors';
import 'dotenv/config';
import songRouter from "./src/routes/SongRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectcloudinary from "./src/config/Cloudinary.js";
 const app = express();
 const port = process.env.port ||4000;
 connectDB();
 connectcloudinary();
 app.use(express.json());
 app.use(cors());
 app.use("/api/song",songRouter)
 app.get('/',(req,res)=> res.send('Api working'))
 app.listen(port, ()=> console.log(`server started ${port}`))