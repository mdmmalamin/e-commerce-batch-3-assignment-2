import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// will call controller function
router.post('/', OrderControllers.createOrder);
// router.get('/', OrderControllers.getAllOrders);
router.get('/', OrderControllers.getOrderByEmail);

export const OrderRoutes = router;
