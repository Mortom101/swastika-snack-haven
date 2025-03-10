
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronRight } from "lucide-react";

interface ProductCTAProps {
  productName: string;
}

export const ProductCTA = ({ productName }: ProductCTAProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
        Ready to Experience the Authentic Taste of Nepal?
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        Order now and get fresh, preservative-free {productName} delivered to your doorstep.
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
  );
};
