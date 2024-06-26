import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getOneProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateProductFromDB = async (_id: string, data: object) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id },
    { $addToSet: data },
  );
  return result;
};

const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

const searchProductFromDB = async (name: unknown) => {
  // search with name --> searchTerm
  // console.log(name);
  const result = await ProductModel.find({
    name: { $regex: '.*' + name + '.*', $options: 'i' },
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getOneProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
  searchProductFromDB,
};
