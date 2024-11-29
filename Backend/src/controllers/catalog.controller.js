import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import catalogModel from "../models/catalog.model.js";

const addProduct = async (req, res) => {
    try {
        const { productName, productDesc } = req.body;
        const imageFile = req.file;

        if (!productName || !productDesc) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        if (!imageFile) {
            return res.status(400).json({ message: "No image file uploaded" });
        }

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        if (!imageUrl) {
            return res.status(400).json({ message: "Image upload failed" });
        }

        const product = {
            productName,
            productDesc,
            image: imageUrl,
        };

        const newProduct = new catalogModel(product);
        const result = await newProduct.save();

        res.json({
            success: true,
            message: "Product Added Successfully",
            product: newProduct
        });

    } catch (error) {
        console.log(error.message);
        console.log(error.stack);
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        });
    }
};

const viewProduct= async(req,res)=>{
    try {
        const products = await catalogModel.find({})
        res.json({
            success: true,
            message: "Products Retrieved Successfully",
            products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Something Went Wrong"
        })
    }
}

export { addProduct,viewProduct };
