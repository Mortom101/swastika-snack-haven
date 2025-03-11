
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { OrderItem } from "@/types/order";
import ProductSelector from "./ProductSelector";

interface OrderFormProps {
  onSubmitOrder: (orderData: {
    name: string;
    phone: string;
    address: string;
    notes: string;
    items: OrderItem[];
    total: number;
  }) => void;
  isSubmitting: boolean;
}

const OrderForm = ({ onSubmitOrder, isSubmitting }: OrderFormProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { productId: "phurandana", quantity: 1 },
    { productId: "baked-peanuts-soyabeans", quantity: 0 }
  ]);

  const handleQuantityChange = (productId: string, quantity: number) => {
    setOrderItems(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    
    if (!phone.trim()) {
      toast({ title: "Please enter your phone number", variant: "destructive" });
      return;
    }
    
    if (!address.trim()) {
      toast({ title: "Please enter your address", variant: "destructive" });
      return;
    }
    
    const hasItems = orderItems.some(item => item.quantity > 0);
    if (!hasItems) {
      toast({ title: "Please select at least one product", variant: "destructive" });
      return;
    }
    
    // Calculate totals using the utility functions from OrderSummary
    const subtotal = orderItems.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
    
    const totalDiscount = orderItems.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return total;
      
      const discountPercentage = getApplicableDiscount(item.productId, item.quantity);
      return total + (product.price * item.quantity * discountPercentage) / 100;
    }, 0);
    
    const total = subtotal - totalDiscount;
    
    // Submit order
    onSubmitOrder({
      name,
      phone,
      address,
      notes,
      items: orderItems.filter(item => item.quantity > 0),
      total
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-3"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-2xl font-display font-semibold mb-6">
            Your Information
          </h2>
          
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1"
              >
                Delivery Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red transition-colors"
                placeholder="Enter your delivery address (within Kathmandu Valley)"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-display font-semibold mb-6">
            Select Products
          </h2>
          
          <ProductSelector
            orderItems={orderItems}
            onQuantityChange={handleQuantityChange}
          />
        </div>
        
        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium mb-1"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red transition-colors"
            placeholder="Any special instructions or requests"
          />
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <>
                <ShoppingBag size={18} />
                <span>Place Order</span>
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default OrderForm;
