import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// will call controller function
router.post('/', ProductControllers.createProduct);

export const ProductRoutes = router;