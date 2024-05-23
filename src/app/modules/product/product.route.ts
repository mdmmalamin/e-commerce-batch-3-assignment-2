import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// will call controller function
router.post('/', ProductControllers.createProduct);
// router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getOneProduct);
router.put('/:productId', ProductControllers.updateProduct);
router.delete('/:productId', ProductControllers.deleteProduct);
router.get('/', ProductControllers.searchProduct);

export const ProductRoutes = router;
