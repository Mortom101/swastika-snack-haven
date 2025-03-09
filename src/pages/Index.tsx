import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ShoppingBag, Clock, Leaf, Truck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Section } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { motion, useScroll, useTransform } from "framer-motion";

const productImages = {
  phurandana: "/lovable-uploads/623cbeee-d5dd-44e1-87e5-ea19d8fb9db5.png",
  bakedPeanuts: "/lovable-uploads/368f0561-802c-49f8-80b0-6bb7dfd2f042.png",
};

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
  },
  {
    name: "Priya Magar",
    rating: 5,
    comment: "These snacks are perfect with tea! I love that they're preservative-free and made with traditional methods.",
    date: "December 5, 2022"
  }
];

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <Layout>
      <div 
        ref={targetRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ opacity, scale, y }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/lovable-uploads/c4218253-7110-4d14-ac25-b822e8ba6195.png)" }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>

        <div className="container px-6 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Authentic Nepali Snacks
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Handcrafted with tradition, made with love
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/products/phurandana" 
                className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <ShoppingBag size={18} />
                <span>Explore Products</span>
              </Link>
              <Link 
                to="/order" 
                className="bg-white hover:bg-white/90 text-brand-red px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center flex items-center gap-2"
              >
                <span>Order Now</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <ChevronRight 
              size={30} 
              className="text-white transform rotate-90" 
            />
          </motion.div>
        </div>
      </div>

      <Section title="Our Story" centered>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-center">
            Swastika Small Cottage Industry was founded with a simple mission: to preserve the authentic taste of traditional Nepali snacks, made with love and care just like our grandmothers used to make.
          </p>
          <p className="text-center mb-8">
            We use only the finest ingredients, traditional recipes, and avoid preservatives to bring you the most authentic and delicious Nepali snacks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-lg font-medium mb-2">All Natural</h3>
              <p className="text-muted-foreground text-sm">
                We use only natural ingredients without any artificial additives or preservatives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-lg font-medium mb-2">Long Shelf Life</h3>
              <p className="text-muted-foreground text-sm">
                Our traditional preparation methods naturally extend shelf life up to 8 months.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-lg font-medium mb-2">Valley-Wide Delivery</h3>
              <p className="text-muted-foreground text-sm">
                We deliver fresh products to your doorstep anywhere in Kathmandu Valley.
              </p>
            </div>
          </div>
        </div>
      </Section>

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
            price={70}
            weight="125g"
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

      <Section 
        title="Customer Reviews" 
        subtitle="What Our Customers Say"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              rating={review.rating}
              comment={review.comment}
              date={review.date}
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-brand-red text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Experience Authentic Nepali Flavors?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Place your order now and get fresh, preservative-free Nepali snacks delivered right to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/order" 
              className="bg-white text-brand-red hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              <span>Order Online</span>
            </Link>
            <a 
              href="tel:+9779841234567" 
              className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Call to Order</span>
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
