import { Router } from "express";
import { createCategory, deleteCategory, getCategoryById, getCategoryList, updateCategory } from "../controllers/products/category.controller";

export const router = Router();

router.post('/', createCategory)
router.get('/', getCategoryList)
router.get('/:id', getCategoryById)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)


export default router