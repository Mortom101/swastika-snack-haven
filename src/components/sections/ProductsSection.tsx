
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Section } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";

const productImages = {
  phurandana: "/lovable-uploads/a37c8589-bf5d-465c-a6a1-7272494bb503.png",
  bakedPeanuts: "/lovable-uploads/368f0561-802c-49f8-80b0-6bb7dfd2f042.png",
};

export const ProductsSection = () => {
  return (
    <Section 
      title="Our Products" 
      subtitle="Traditional Nepali Snacks"
      className="bg-brand-lightGold"
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ProductCard
          id="phurandana"
          name="Phurandana"
          nepaliName="फुरन्दाना"
          description="A traditional Nepali snack made from fried beaten rice, nuts, seeds, and spices. Perfect for any time of day."
          price={250}
          weight="500g"
          image={productImages.phurandana}
          index={0}
        />
        
        <ProductCard
          id="baked-peanuts-soyabeans"
          name="Baked Peanuts & Soyabeans"
          nepaliName="साँदेको बदाम र भटमास"
          description="A crunchy and flavorful snack made with carefully selected peanuts and soybeans, seasoned to perfection."
          price={140}
          weight="250g"
          image={productImages.bakedPeanuts}
          index={1}
        />
      </div>
      
      <div className="text-center mt-12">
        <Link 
          to="/order" 
          className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
        >
          <ShoppingBag size={18} />
          <span>Order Now</span>
        </Link>
      </div>
    </Section>
  );
};
