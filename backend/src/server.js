import express from "express";
const app=express();
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.route.js'//
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
}));

app.use(express.json());
app.use(cookieParser());
const PORT=process.env.PORT;
const __dirname=path.resolve();


app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes);
app.use("/api/chat",chatRoutes);
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    }
    );
}


app.listen(PORT,()=>{
    console.log("Server is listning at port number 5001");
    connectDB();
})