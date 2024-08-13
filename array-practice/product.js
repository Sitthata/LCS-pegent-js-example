import { getProductsData } from "./data";

function createProductManager() {
  const products = getProductsData();

  return {
    addProduct(newProduct) {
      // TODO: Implement function to add a new product
    },

    getProductsByCategory(category) {
      // TODO: Implement function to get products by category
    },

    updateProductPrice(id, newPrice) {
      // TODO: Implement function to update a product's price
    },

    deleteProduct(id) {
      // TODO: Implement function to delete a product by ID
    },

    getProductsInStock() {
      // TODO: Implement function to get products that are in stock
    },

    getAveragePriceByCategory(category) {
      // TODO: Implement function to calculate the average price by category
    },

    getSortedProductNamesByPrice() {
      // TODO: Implement function to sort products by price and get their names
    },
  };
}

// Usage example:
const productManager = createProductManager();
