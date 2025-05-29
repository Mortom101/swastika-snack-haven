
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Section } from "@/components/Section";

export const CTASection = () => {
  return (
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
  );
};
