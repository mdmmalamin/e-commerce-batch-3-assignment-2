import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('*', (req: Request, res: Response) => {
  res.status(200).json({
    success: false,
    message: 'Route not found',
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to e-commerce batch-3 assignment-2!');
  // res.status(200).json({
  //   success: true,
  //   message: 'Welcome to e-commerce batch-3 assignment-2!',
  // });
});

export default app;
