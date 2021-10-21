const productCrtl = require("../controllers/product.controller");
const routes = [
  {
    url: "/products",
    method: "GET",
    handler: productCrtl.getProducts,
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: productCrtl.getProduct,
  },
  {
    url: "/products",
    method: "POST",
    handler: productCrtl.createProduct,
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productCrtl.deleteProduct,
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: productCrtl.updateProduct,
  },
];
module.exports = routes;
