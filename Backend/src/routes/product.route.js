import express from "express"
import upload from "../middlewares/multer.js"
import {addProduct,viewProduct} from '../controllers/catalog.controller.js'
const productRouter = express.Router()


productRouter.post('/add-product',upload.single('image'),addProduct);
productRouter.get('/view-product',viewProduct);


export default productRouter;