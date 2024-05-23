import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { OrderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student;
    const { order: orderData } = req.body;
    const { error } = orderValidationSchema.validate(orderData);

    // will call service function to send this data
    const result = await OrderServices.createOrderIntoDB(orderData);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong.',
        error: error.details,
      });
    }

    // send response
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    // send response
    res.status(500).json({
      success: false,
      message: 'Something went wrong.',
      error: error,
    });
  }
};

export const OrderControllers = { createOrder };
