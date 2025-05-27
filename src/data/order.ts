
export interface OrderProduct {
  id: string;
  name: string;
  nepaliName: string;
  price: number;
  weight: string;
  image: string;
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
