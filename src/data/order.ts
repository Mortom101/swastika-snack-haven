
import { products as productData } from "@/data/productData";

// Product data for orders
export const products = [
  {
    id: "phurandana",
    name: "Phurandana",
    nepaliName: "फुरन्दाना",
    price: 250,
    weight: "500g",
    image: productData.phurandana.image
  },
  {
    id: "baked-peanuts-soyabeans",
    name: "Baked Peanuts & Soyabeans",
    nepaliName: "साँदेको बदाम र भटमास",
    price: 70,
    weight: "125g",
    image: productData["baked-peanuts-soyabeans"].image
  }
];

// Bulk discount data
export const bulkDiscounts = [
  { productId: "phurandana", quantity: 5, discount: 5 },
  { productId: "phurandana", quantity: 10, discount: 10 },
  { productId: "phurandana", quantity: 20, discount: 15 },
  { productId: "baked-peanuts-soyabeans", quantity: 10, discount: 5 },
  { productId: "baked-peanuts-soyabeans", quantity: 20, discount: 10 },
  { productId: "baked-peanuts-soyabeans", quantity: 30, discount: 15 }
];
