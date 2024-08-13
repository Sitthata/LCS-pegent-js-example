const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    inStock: true,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    inStock: true,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Tablet",
    price: 500,
    inStock: false,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Headphones",
    price: 150,
    inStock: true,
    category: "Accessories",
  },
  { id: 5, name: "Charger", price: 25, inStock: true, category: "Accessories" },
  {
    id: 6,
    name: "Keyboard",
    price: 100,
    inStock: true,
    category: "Accessories",
  },
  {
    id: 7,
    name: "Monitor",
    price: 300,
    inStock: false,
    category: "Electronics",
  },
  { id: 8, name: "Mouse", price: 50, inStock: true, category: "Accessories" },
  {
    id: 9,
    name: "External Hard Drive",
    price: 200,
    inStock: true,
    category: "Storage",
  },
  {
    id: 10,
    name: "USB Cable",
    price: 10,
    inStock: true,
    category: "Accessories",
  },
  {
    id: 11,
    name: "Printer",
    price: 250,
    inStock: false,
    category: "Office Supplies",
  },
  { id: 12, name: "Router", price: 120, inStock: true, category: "Networking" },
  {
    id: 13,
    name: "Desk Lamp",
    price: 40,
    inStock: true,
    category: "Furniture",
  },
  {
    id: 14,
    name: "Webcam",
    price: 70,
    inStock: false,
    category: "Electronics",
  },
];

export const getProductsData = () => {
  return products;
};
