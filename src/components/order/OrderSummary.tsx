
import { motion } from "framer-motion";
import { OrderItem } from "@/types/order";
import { products } from "@/data/order";

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
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>₹{calculateTotal(orderItems)}</p>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            <strong>Delivery Information:</strong> We deliver nationwide across Nepal. 
            Delivery is free inside Kathmandu Valley. Outside Kathmandu Valley, 
            courier charges will be included based on your location.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const calculateTotal = (orderItems: OrderItem[]) => {
  return orderItems.reduce((total, item) => {
    const product = getProductById(item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);
};

export default OrderSummary;
