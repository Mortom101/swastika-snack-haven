
export interface OrderProduct {
  id: string;
  name: string;
  nepaliName: string;
  price: number;
  weight: string;
  image: string;
}

export interface BulkDiscount {
  productId: string;
  quantity: number;
  discount: number;
}

export const products: OrderProduct[] = [
  {
    id: "phurandana",
    name: "Phurandana",
    nepaliName: "फुरन्दाना",
    price: 250,
    weight: "500g",
    image: "/lovable-uploads/a37c8589-bf5d-465c-a6a1-7272494bb503.png"
  },
  {
    id: "baked-peanuts-soyabeans",
    name: "Baked Peanuts & Soyabeans",
    nepaliName: "साँदेको बदाम र भटमास",
    price: 140,
    weight: "250g",
    image: "/lovable-uploads/368f0561-802c-49f8-80b0-6bb7dfd2f042.png"
  }
];

export const bulkDiscounts: BulkDiscount[] = [
  // Phurandana discounts
  { productId: "phurandana", quantity: 5, discount: 5 },
  { productId: "phurandana", quantity: 10, discount: 10 },
  { productId: "phurandana", quantity: 20, discount: 15 },
  
  // Baked Peanuts & Soyabeans discounts
  { productId: "baked-peanuts-soyabeans", quantity: 10, discount: 5 },
  { productId: "baked-peanuts-soyabeans", quantity: 20, discount: 10 },
  { productId: "baked-peanuts-soyabeans", quantity: 30, discount: 15 }
];
