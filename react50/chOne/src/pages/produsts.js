// products.js

const products = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  category: index % 2 === 0 ? "Electronics" : "Clothing",
}));

export default products;
