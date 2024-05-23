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
        message: 'Something went wrong. Order created unsuccessfully!',
        error: error.details,
      });
    }

    // send response
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    // send response
    res.status(500).json({
      success: false,
      message: "Something went wrong. Couldn't create order!",
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Orders fetched unsuccessful!',
      error: error,
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const orderByEmail = req.query.email;
    // console.log(orderByEmail);
    if (!orderByEmail) {
      const result = await OrderServices.getAllOrderFromDB();
      // console.log('first', result);
      // send response
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } else {
      const result = await OrderServices.getOrderByEmailFromDB(orderByEmail);
      // console.log('return:', result);

      res.status(200).json({
        success: result.length === 0 ? false : true,
        message:
          result.length === 0
            ? 'Order not found'
            : 'Orders fetched successfully for user email!',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        'Something went wrong. Orders fetched unsuccessful for user email!',
      error: error,
    });
  }
};

export const OrderControllers = { createOrder, getAllOrders, getOrderByEmail };
