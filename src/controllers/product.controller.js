const Product = require("../models/product.models");

const getProducts = async (request, reply) => {
  const product = await Product.find();
  return product;
};
const getProduct = async (request, reply) => {
  const product = await Product.findById(request.params.id);
  return product;
};
const createProduct = async (request, reply) => {
  const newProduct = new Product(request.body);

  await newProduct.save();

  reply.code(201).send("creating a products");
};
const deleteProduct = async (request, reply) => {
  await Product.findByIdAndDelete(request.params.id);
  reply.code(204).send();
};
const updateProduct = async (request, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    reply.code(200).send(product);
  } catch (error) {
    reply.code(500).send(error);
  }
};
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
