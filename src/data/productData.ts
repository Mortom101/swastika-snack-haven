
export interface Product {
  id: string;
  name: string;
  nepaliName: string;
  description: string;
  longDescription: string;
  price: number;
  weight: string;
  shelfLife: string;
  ingredients: string[];
  image: string;
  images: string[];
  benefits: string[];
}

export interface ProductsData {
  [key: string]: Product;
}

export const products: ProductsData = {
  "phurandana": {
    id: "phurandana",
    name: "Phurandana",
    nepaliName: "फुरन्दाना",
    description: "A traditional Nepali snack made from fried beaten rice, nuts, seeds, and spices. Phurandana is a popular snack enjoyed with tea or as a light meal any time of the day. The combination of crispy flattened rice with crunchy nuts and aromatic spices creates a perfect balance of flavors and textures.",
    longDescription: "Our Phurandana is made using a traditional recipe that has been passed down through generations. We carefully select the highest quality flattened rice, peanuts, and spices, then mix them in just the right proportions before frying to perfection. The result is a crispy, flavorful snack that captures the authentic taste of Nepal.",
    price: 250,
    weight: "500g",
    shelfLife: "8 months",
    ingredients: ["Flattened rice", "Peanuts", "Salt", "Vegetable oil", "Traditional Nepali spices"],
    image: "/lovable-uploads/a37c8589-bf5d-465c-a6a1-7272494bb503.png",
    images: [
      "/lovable-uploads/a37c8589-bf5d-465c-a6a1-7272494bb503.png"
    ],
    benefits: [
      "All-natural ingredients",
      "No artificial preservatives",
      "Traditional preparation methods",
      "Authentic Nepali taste",
      "Carefully sealed for freshness"
    ]
  },
  "baked-peanuts-soyabeans": {
    id: "baked-peanuts-soyabeans",
    name: "Baked Peanuts & Soyabeans",
    nepaliName: "साँदेको बदाम र भटमास",
    description: "A crunchy and flavorful snack made with carefully selected peanuts and soybeans, seasoned to perfection. This protein-rich snack is perfect for a quick energy boost.",
    longDescription: "Our Baked Peanuts & Soyabeans are prepared using a traditional slow-baking process that enhances their natural flavors while keeping the nutritional value intact. We select only the finest quality peanuts and soybeans, then season them with a special blend of spices before baking them to crispy perfection.",
    price: 140,
    weight: "250g",
    shelfLife: "8 months",
    ingredients: ["Peanuts", "Soybeans", "Salt", "Vegetable oil", "Chili", "Traditional Nepali spices"],
    image: "/lovable-uploads/368f0561-802c-49f8-80b0-6bb7dfd2f042.png",
    images: [
      "/lovable-uploads/368f0561-802c-49f8-80b0-6bb7dfd2f042.png"
    ],
    benefits: [
      "High protein content",
      "No artificial additives",
      "Traditional preparation methods",
      "Authentic Nepali taste",
      "Carefully sealed for freshness"
    ]
  }
};
