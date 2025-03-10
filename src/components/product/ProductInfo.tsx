
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle } from "lucide-react";

interface BulkDiscount {
  quantity: number;
  discount: string;
}

interface ProductInfoProps {
  name: string;
  nepaliName: string;
  price: number;
  weight: string;
  description: string;
  bulkDiscounts: BulkDiscount[];
}

export const ProductInfo = ({ 
  name, 
  nepaliName, 
  price, 
  weight, 
  description, 
  bulkDiscounts 
}: ProductInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="inline-block bg-brand-red/10 text-brand-red text-sm font-medium px-3 py-1 rounded-full mb-4">
        Traditional Nepali Snack
      </div>
      
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
        {name}
      </h1>
      
      <p className="text-lg text-muted-foreground mb-6">
        {nepaliName}
      </p>
      
      <div className="flex items-center mb-6">
        <p className="text-3xl font-display font-bold">₹{price}</p>
        <p className="ml-2 text-muted-foreground">
          for {weight}
        </p>
      </div>
      
      <p className="text-gray-700 mb-8">{description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="font-medium mb-1">Weight</h3>
          <p>{weight}</p>
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="font-medium mb-1">Shelf Life</h3>
          <p>8 months</p>
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
          {bulkDiscounts.map((discount, index) => (
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
  );
};
