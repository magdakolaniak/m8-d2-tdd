import express from 'express';
import ProductModel from './model.js';

const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
  // const products = await ProductModel.find();
  const products = [];
  res.status(200).send({ products });
});

productsRouter.get('/:id', async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (!product) {
    res.status(404).send();
    return;
  }

  res.status(201).send(product);
});

productsRouter.post('/', async (req, res) => {
  const { price, name } = req.body;
  if (!price || !name) {
    res.status(400).send({ message: 'INVALID_PRODUCT' });
    return;
  }

  const newProduct = new ProductModel({ price, name });

  await newProduct.save();

  res.status(201).send(newProduct);
});

productsRouter.delete('/:id', async (req, res) => {
  const product = await ProductModel.findByIdAndDelete(req.params.id);

  res.status(204).send();
});

export default productsRouter;
