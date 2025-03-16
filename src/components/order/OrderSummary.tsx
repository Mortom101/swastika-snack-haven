
import { motion } from "framer-motion";
import { OrderItem } from "@/types/order";
import { products } from "@/data/order";
import { bulkDiscounts } from "@/data/order";

interface OrderSummaryProps {
  orderItems: OrderItem[];
}

const OrderSummary = ({ orderItems }: OrderSummaryProps) => {
  return (
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
            <p>₹{calculateSubtotal(orderItems)}</p>
          </div>
          
          <div className="flex justify-between text-green-600">
            <p>Discount</p>
            <p>- ₹{calculateTotalDiscount(orderItems)}</p>
          </div>
          
          <div className="flex justify-between font-bold text-lg pt-2 border-t border-brand-gold/30">
            <p>Total</p>
            <p>₹{calculateTotal(orderItems)}</p>
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
            Delivery fee: ₹100 within Kathmandu Valley, ₹200-₹500 for other regions depending on distance. Free delivery on orders above ₹1000 within Kathmandu Valley, ₹2000 for nationwide delivery.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getApplicableDiscount = (productId: string, quantity: number) => {
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

export const calculateItemDiscount = (productId: string, quantity: number) => {
  const product = getProductById(productId);
  if (!product) return 0;
  
  const discountPercentage = getApplicableDiscount(productId, quantity);
  return (product.price * quantity * discountPercentage) / 100;
};

export const calculateSubtotal = (orderItems: OrderItem[]) => {
  return orderItems.reduce((total, item) => {
    const product = getProductById(item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);
};

export const calculateTotalDiscount = (orderItems: OrderItem[]) => {
  return orderItems.reduce(
    (total, item) => total + calculateItemDiscount(item.productId, item.quantity),
    0
  );
};

export const calculateTotal = (orderItems: OrderItem[]) => {
  const subtotal = calculateSubtotal(orderItems);
  const discount = calculateTotalDiscount(orderItems);
  return subtotal - discount;
};

export default OrderSummary;
