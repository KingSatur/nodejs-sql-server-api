import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProduct,
  countProducts,
  getProductById,
} from '../controller/product.controller';

const productRouter = Router();

productRouter.get('/product', getAllProduct);
productRouter.get('/product/count', countProducts);
productRouter.get('/product/:id', getProductById);
productRouter.post('/product', createProduct);
productRouter.delete('/product/:id', deleteProduct);
productRouter.put('/product/:id', editProduct);

export default productRouter;
