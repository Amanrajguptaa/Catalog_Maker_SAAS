import mongoose from "mongoose"

const catalogSchema= new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },

},{timestamps:true})

const catalogModel=mongoose.models.catalog ||mongoose.model("catalog",catalogSchema)

export default catalogModel