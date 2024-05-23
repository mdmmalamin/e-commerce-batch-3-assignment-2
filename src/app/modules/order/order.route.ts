import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// will call controller function
router.post('/', OrderControllers.createOrder);
// router.get('/', ProductControllers.getAllProducts);
// router.get('/:productId', ProductControllers.getOneProduct);

export const ProductRoutes = router;
