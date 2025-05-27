
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { OrderItem } from "@/types/order";
import { getProductById, calculateTotal } from "./OrderSummary";

interface OrderConfirmationProps {
  name: string;
  phone: string;
  orderItems: OrderItem[];
}

const OrderConfirmation = ({ name, phone, orderItems }: OrderConfirmationProps) => {
  return (
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
            <div className="flex justify-between font-bold mt-2">
              <p>Total</p>
              <p>₹{calculateTotal(orderItems)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/50 p-4 rounded-lg mb-6 text-left">
        <h3 className="font-medium mb-2">Delivery Information</h3>
        <p className="text-sm text-muted-foreground">
          We deliver nationwide across Nepal. Delivery is free inside Kathmandu Valley. 
          Outside Kathmandu Valley, courier charges will be included based on your location.
        </p>
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
  );
};

export default OrderConfirmation;
