
import { useParams, Link } from "react-router-dom";
import { ShoppingBag, CheckCircle, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ReviewCard } from "@/components/ReviewCard";

// Product data (in a real app, this would come from an API or database)
const products = {
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
    image: "https://images.unsplash.com/photo-1589365252845-092198ba5979?q=80&w=1000",
    benefits: [
      "All-natural ingredients",
      "No artificial preservatives",
      "Traditional preparation methods",
      "Authentic Nepali taste",
      "Carefully sealed for freshness"
    ],
    bulkDiscounts: [
      { quantity: 5, discount: "5%" },
      { quantity: 10, discount: "10%" },
      { quantity: 20, discount: "15%" }
    ]
  },
  "baked-peanuts-soyabeans": {
    id: "baked-peanuts-soyabeans",
    name: "Baked Peanuts & Soyabeans",
    nepaliName: "साँदेको बदाम र भटमास",
    description: "A crunchy and flavorful snack made with carefully selected peanuts and soybeans, seasoned to perfection. This protein-rich snack is perfect for a quick energy boost.",
    longDescription: "Our Baked Peanuts & Soyabeans are prepared using a traditional slow-baking process that enhances their natural flavors while keeping the nutritional value intact. We select only the finest quality peanuts and soybeans, then season them with a special blend of spices before baking them to crispy perfection.",
    price: 70,
    weight: "125g",
    shelfLife: "8 months",
    ingredients: ["Peanuts", "Soybeans", "Salt", "Vegetable oil", "Chili", "Traditional Nepali spices"],
    image: "https://images.unsplash.com/photo-1567892737950-30ec3a50f965?q=80&w=1000",
    benefits: [
      "High protein content",
      "No artificial additives",
      "Traditional preparation methods",
      "Authentic Nepali taste",
      "Carefully sealed for freshness"
    ],
    bulkDiscounts: [
      { quantity: 10, discount: "5%" },
      { quantity: 20, discount: "10%" },
      { quantity: 30, discount: "15%" }
    ]
  }
};

// Sample reviews data
const reviews = [
  {
    name: "Ramesh Sharma",
    rating: 5,
    comment: "Phurandana is exactly like my grandmother used to make. The authentic taste brings back so many memories!",
    date: "March 15, 2023"
  },
  {
    name: "Anita Gurung",
    rating: 5,
    comment: "I order the baked peanuts every month. They're so addictive and much healthier than store-bought snacks.",
    date: "January 28, 2023"
  },
  {
    name: "Sunil Thapa",
    rating: 4,
    comment: "Great quality products. The packaging keeps everything fresh for months. Will definitely order again.",
    date: "April 10, 2023"
  }
];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId as keyof typeof products] : null;

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
            <p className="mb-6">We couldn't find the product you're looking for.</p>
            <Link 
              to="/"
              className="bg-brand-red text-white px-4 py-2 rounded-md hover:bg-brand-red/90 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader 
        title={product.name}
        subtitle={`${product.nepaliName} - Traditional Nepali Snack`}
        imageUrl={product.image}
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="product-image-container overflow-hidden rounded-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block bg-brand-red/10 text-brand-red text-sm font-medium px-3 py-1 rounded-full mb-4">
              Traditional Nepali Snack
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              {product.name}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {product.nepaliName}
            </p>
            
            <div className="flex items-center mb-6">
              <p className="text-3xl font-display font-bold">₹{product.price}</p>
              <p className="ml-2 text-muted-foreground">
                for {product.weight}
              </p>
            </div>
            
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Weight</h3>
                <p>{product.weight}</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Shelf Life</h3>
                <p>{product.shelfLife}</p>
              </div>
            </div>
            
            <Link
              to="/order"
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 mb-6"
            >
              <ShoppingBag size={18} />
              <span>Order Now</span>
            </Link>
            
            <div className="bg-brand-gold/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Bulk Order Discounts</h3>
              <ul className="space-y-1">
                {product.bulkDiscounts.map((discount, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className="text-brand-gold" />
                    <span>
                      {discount.discount} off on orders of {discount.quantity} or more
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section className="bg-brand-lightGold">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">About This Product</h2>
            <p className="mb-6 text-gray-700">{product.longDescription}</p>
            
            <h3 className="text-xl font-medium mb-4">Ingredients</h3>
            <ul className="space-y-2 mb-8">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-red" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-medium mb-4">Product Benefits</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-red" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-6">Reviews</h2>
            <div className="space-y-4">
              {reviews.slice(0, 3).map((review, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 mr-1 ${
                          i < review.rating ? "text-brand-gold" : "text-gray-300"
                        }`}
                      >
                        ★
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-2">{review.comment}</p>
                  <div className="flex items-center justify-between text-sm">
                    <p className="font-medium">{review.name}</p>
                    <p className="text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Ready to Experience the Authentic Taste of Nepal?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Order now and get fresh, preservative-free {product.name} delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/order"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              <span>Order Now</span>
            </Link>
            <Link
              to="/"
              className="border border-brand-red text-brand-red hover:bg-brand-red/5 px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Browse More Products</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ProductDetail;
