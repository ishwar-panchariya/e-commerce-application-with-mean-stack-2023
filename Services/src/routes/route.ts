import { Router } from "express";
import ProductsRoutes from './products.routes';
import CategoryRoutes from './category.routes';

export const router = Router();

const apiVersionV1: string = 'v1'

// Product Route
router.use(`/${apiVersionV1}/products`, ProductsRoutes)

// Category Route
router.use(`/${apiVersionV1}/category`, CategoryRoutes)

export { router as APIRouter }