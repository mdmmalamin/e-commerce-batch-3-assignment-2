import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import { ProductServices } from './product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student;
    const { product: productData } = req.body;
    const { error } = productValidationSchema.validate(productData);

    // will call service function to send this data
    const result = await ProductServices.createProductIntoDB(productData);

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

export const ProductControllers = {
  createProduct,
};
