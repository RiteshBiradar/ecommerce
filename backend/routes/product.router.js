import express from "express"
import { addProduct, getAllProducts, getProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getAllProducts)
router.post("/",addProduct);
router.get("/getProduct",getProduct)
export default router