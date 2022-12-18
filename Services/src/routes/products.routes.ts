import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProductCount, getProductList, updateProduct } from "../controllers/products/product.controller";

export const router = Router();

router.post('/', createProduct)
router.get('/', getProductList)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/get/count', getProductCount)

export default router