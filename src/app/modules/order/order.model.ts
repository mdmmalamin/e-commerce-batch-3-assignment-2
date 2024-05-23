import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

// 2. Create a Schema corresponding to the document interface.
const orderSchema = new Schema<Order>({
  email: { type: String, required: [true, 'Email name is required.'] },
  productId: { type: String, required: [true, 'Product ID is required.'] },
  price: { type: Number, required: [true, 'Price is required.'] },
  quantity: { type: Number, required: [true, 'Quantity is required.'] },
});

// 3. Create a Model.
export const OrderModel = model<Order>('Order', orderSchema);
