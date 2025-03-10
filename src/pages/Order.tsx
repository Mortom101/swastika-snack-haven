
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";

// Product data
const products = [
  {
    id: "phurandana",
    name: "Phurandana",
    nepaliName: "फुरन्दाना",
    price: 250,
    weight: "500g",
    image: "https://images.unsplash.com/photo-1589365252845-092198ba5979?q=80&w=1000"
  },
  {
    id: "baked-peanuts-soyabeans",
    name: "Baked Peanuts & Soyabeans",
    nepaliName: "साँदेको बदाम र भटमास",
    price: 70,
    weight: "125g",
    image: "https://images.unsplash.com/photo-1567892737950-30ec3a50f965?q=80&w=1000"
  }
];

// Bulk discount data
const bulkDiscounts = [
  { productId: "phurandana", quantity: 5, discount: 5 },
  { productId: "phurandana", quantity: 10, discount: 10 },
  { productId: "phurandana", quantity: 20, discount: 15 },
  { productId: "baked-peanuts-soyabeans", quantity: 10, discount: 5 },
  { productId: "baked-peanuts-soyabeans", quantity: 20, discount: 10 },
  { productId: "baked-peanuts-soyabeans", quantity: 30, discount: 15 }
];

interface OrderItem {
  productId: string;
  quantity: number;
}

const Order = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { productId: "phurandana", quantity: 1 },
    { productId: "baked-peanuts-soyabeans", quantity: 0 }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setOrderItems(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return orderItems.reduce((total, item) => {
      const product = getProductById(item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const getApplicableDiscount = (productId: string, quantity: number) => {
    const productDiscounts = bulkDiscounts.filter(
      discount => discount.productId === productId
    );
    
    let maxDiscount = 0;
    for (const discount of productDiscounts) {
      if (quantity >= discount.quantity && discount.discount > maxDiscount) {
        maxDiscount = discount.discount;
      }
    }
    
    return maxDiscount;
  };

  const calculateItemDiscount = (productId: string, quantity: number) => {
    const product = getProductById(productId);
    if (!product) return 0;
    
    const discountPercentage = getApplicableDiscount(productId, quantity);
    return (product.price * quantity * discountPercentage) / 100;
  };

  const calculateTotalDiscount = () => {
    return orderItems.reduce(
      (total, item) => total + calculateItemDiscount(item.productId, item.quantity),
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateTotalDiscount();
    return subtotal - discount;
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
    
    // Process the order
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      
      // Reset form after success
      toast({
        title: "Order placed successfully!",
        description: "We'll contact you shortly to confirm your order."
      });
      
      console.log({
        name,
        phone,
        address,
        notes,
        items: orderItems.filter(item => item.quantity > 0),
        total: calculateTotal()
      });
    }, 1500);
  };

  return (
    <Layout>
      <PageHeader
        title="Place Your Order"
        subtitle="Fill out the form below to order our handmade Nepali snacks"
      />
      
      <Section>
        {orderPlaced ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-display font-bold mb-4">
              Thank You for Your Order!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              We have received your order and will contact you soon at <span className="font-medium">{phone}</span> to confirm the details.
            </p>
            
            <div className="bg-muted/50 p-6 rounded-lg mb-8 text-left">
              <h3 className="font-medium mb-4">Order Summary</h3>
              
              <div className="space-y-4">
                {orderItems
                  .filter(item => item.quantity > 0)
                  .map(item => {
                    const product = getProductById(item.productId);
                    return (
                      <div key={item.productId} className="flex justify-between">
                        <div>
                          <p className="font-medium">{product?.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.quantity} × ₹{product?.price} ({product?.weight})
                          </p>
                        </div>
                        <p className="font-medium">
                          ₹{(product?.price || 0) * item.quantity}
                        </p>
                      </div>
                    );
                  })}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>₹{calculateSubtotal()}</p>
                  </div>
                  
                  <div className="flex justify-between text-green-600">
                    <p>Bulk Discount</p>
                    <p>- ₹{calculateTotalDiscount()}</p>
                  </div>
                  
                  <div className="flex justify-between font-bold mt-2">
                    <p>Total</p>
                    <p>₹{calculateTotal()}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              If you have any questions about your order, please call us at{" "}
              <a
                href="tel:+9779841234567"
                className="text-brand-red hover:underline"
              >
                +977 9841234567
              </a>
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
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
                  
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center border-b border-gray-100 py-4 last:border-0"
                    >
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 aspect-square">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {product.nepaliName} • {product.weight}
                        </p>
                        <p className="text-brand-red font-medium mt-1">
                          ₹{product.price}
                        </p>
                      </div>
                      
                      <div className="flex items-center ml-4">
                        <button
                          type="button"
                          onClick={() => {
                            const currentItem = orderItems.find(
                              item => item.productId === product.id
                            );
                            const currentQuantity = currentItem?.quantity || 0;
                            if (currentQuantity > 0) {
                              handleQuantityChange(
                                product.id,
                                currentQuantity - 1
                              );
                            }
                          }}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100 transition-colors"
                        >
                          -
                        </button>
                        
                        <input
                          type="number"
                          min="0"
                          value={
                            orderItems.find(
                              item => item.productId === product.id
                            )?.quantity || 0
                          }
                          onChange={(e) =>
                            handleQuantityChange(
                              product.id,
                              parseInt(e.target.value, 10) || 0
                            )
                          }
                          className="w-12 h-8 border-y border-gray-300 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        
                        <button
                          type="button"
                          onClick={() => {
                            const currentItem = orderItems.find(
                              item => item.productId === product.id
                            );
                            const currentQuantity = currentItem?.quantity || 0;
                            handleQuantityChange(
                              product.id,
                              currentQuantity + 1
                            );
                          }}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
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
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-brand-lightGold p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-display font-semibold mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  {orderItems
                    .filter(item => item.quantity > 0)
                    .map(item => {
                      const product = getProductById(item.productId);
                      const discount = calculateItemDiscount(item.productId, item.quantity);
                      
                      return (
                        <div key={item.productId}>
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">{product?.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.quantity} × ₹{product?.price}
                              </p>
                            </div>
                            <p className="font-medium">
                              ₹{(product?.price || 0) * item.quantity}
                            </p>
                          </div>
                          
                          {discount > 0 && (
                            <div className="flex justify-between text-green-600 text-sm mt-1">
                              <p>Bulk Discount ({getApplicableDiscount(item.productId, item.quantity)}%)</p>
                              <p>- ₹{discount}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  
                  {orderItems.every(item => item.quantity === 0) && (
                    <p className="text-muted-foreground text-center py-2">
                      No items selected
                    </p>
                  )}
                </div>
                
                <div className="border-t border-brand-gold/30 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>₹{calculateSubtotal()}</p>
                  </div>
                  
                  <div className="flex justify-between text-green-600">
                    <p>Discount</p>
                    <p>- ₹{calculateTotalDiscount()}</p>
                  </div>
                  
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-brand-gold/30">
                    <p>Total</p>
                    <p>₹{calculateTotal()}</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Bulk Order Discounts</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 pt-0.5">•</div>
                      <div>
                        <span className="font-medium">Phurandana:</span> 5% off on 5+ units, 10% off on 10+ units, 15% off on 20+ units
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 pt-0.5">•</div>
                      <div>
                        <span className="font-medium">Baked Peanuts & Soyabeans:</span> 5% off on 10+ units, 10% off on 20+ units, 15% off on 30+ units
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>
                    Delivery fee: ₹100. Free delivery on orders above ₹1000 within Kathmandu Valley.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </Section>
    </Layout>
  );
};

export default Order;
