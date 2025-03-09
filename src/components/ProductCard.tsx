
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

interface ProductCardProps {
  id: string;
  name: string;
  nepaliName?: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  images?: string[];
  index?: number;
}

export const ProductCard = ({
  id,
  name,
  nepaliName,
  description,
  price,
  weight,
  image,
  images = [],
  index = 0,
}: ProductCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  // Use the first image from the gallery if available, otherwise use the main image
  const displayImage = images && images.length > 0 ? images[0] : image;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="product-card glass-card overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="product-image-container relative">
        <img 
          src={displayImage} 
          alt={name} 
          className="product-image w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">
          ₹{price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <h3 className="text-xl font-display font-semibold">{name}</h3>
            {nepaliName && (
              <span className="ml-2 text-sm text-muted-foreground">
                ({nepaliName})
              </span>
            )}
          </div>
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground">{weight}</span>
            <div className="mx-2 w-1 h-1 rounded-full bg-muted-foreground/50"></div>
            <span className="text-sm text-muted-foreground">8 month shelf life</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <Link
            to={`/products/${id}`}
            className="text-brand-red hover:text-brand-red/80 font-medium text-sm flex items-center transition-colors duration-300"
          >
            View Details
          </Link>
          
          <Link
            to="/order"
            className="bg-brand-red hover:bg-brand-red/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md"
          >
            Order Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
