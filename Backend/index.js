import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import cookieParser from "cookie-parser";
import connectDB from "./src/db/index.js";
import productRouter from './src/routes/product.route.js'
import connectCloudinary from "./src/utils/cloudinary.js";
const app= express();



const port=process.env.PORT || 4000

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


connectCloudinary();

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

app.use('/api/product',productRouter)