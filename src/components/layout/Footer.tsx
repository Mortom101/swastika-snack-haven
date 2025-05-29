import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-red text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-semibold">Swastik</h3>
            <p className="text-white/80 max-w-xs">
              A small cottage industry dedicated to crafting authentic,
              preservative-free Nepali snacks with traditional recipes.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <div className="w-8 h-0.5 bg-brand-gold"></div>
              <span>Established 2024</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products/phurandana"
                  className="text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  Phurandana
                </Link>
              </li>
              <li>
                <Link
                  to="/products/baked-peanuts-soyabeans"
                  className="text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  Baked Peanuts & Soyabeans
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  Order Now
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-gold" />
                <a
                  href="tel:+9779841234567"
                  className="text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  +977 9841234567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-gold" />
                <a
                  href="mailto:info@swastikfood.com"
                  className="text-white/80 hover:text-brand-gold transition-colors duration-300"
                >
                  info@swastikfood.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-gold mt-1" />
                <span className="text-white/80">
                  Jorpati, Kathmandu, Nepal
                </span>
              </li>
              <li className="pt-4">
                <div className="bg-brand-gold/20 backdrop-blur-sm p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-1">Delivery</h4>
                  <p className="text-sm text-white/80">
                    We deliver nationwide across Nepal. Delivery is free inside Kathmandu Valley. Outside Kathmandu Valley, courier charges will be included based on your location.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Swastik Small Cottage Industry. All rights reserved.
          </p>
          <p className="text-sm text-white/60 flex items-center mt-2 md:mt-0">
            Crafted with <Heart size={14} className="mx-1 text-brand-gold" /> in
            Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
