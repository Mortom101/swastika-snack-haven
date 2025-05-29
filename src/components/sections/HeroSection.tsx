
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
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
          style={{ backgroundImage: "url(/lovable-uploads/623cbeee-d5dd-44e1-87e5-ea19d8fb9db5.png)" }}
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
  );
};
