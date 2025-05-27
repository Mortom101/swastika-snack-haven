import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
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
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <Check className="w-10 h-10 text-green-600" />
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-2xl font-display font-bold mb-4"
      >
        Thank You for Your Order!
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg text-muted-foreground mb-6"
      >
        We have received your order and will contact you soon at <span className="font-medium">{phone}</span> to confirm the details.
      </motion.p>

      {/* WhatsApp Screenshot Request */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8"
      >
        <div className="flex items-center justify-center mb-3">
          <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
          <h3 className="font-medium text-green-800">Important: Order Confirmation</h3>
        </div>
        <p className="text-green-700 text-sm">
          Please send a screenshot of your transaction to our WhatsApp for us to confirm your order.
        </p>
        <a
          href="https://wa.me/9779841234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Send to WhatsApp
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="bg-muted/50 p-6 rounded-lg mb-8 text-left"
      >
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
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="bg-muted/50 p-4 rounded-lg mb-6 text-left"
      >
        <h3 className="font-medium mb-2">Delivery Information</h3>
        <p className="text-sm text-muted-foreground">
          We deliver nationwide across Nepal. Delivery is free inside Kathmandu Valley. 
          Outside Kathmandu Valley, courier charges will be included based on your location.
        </p>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="text-muted-foreground"
      >
        If you have any questions about your order, please call us at{" "}
        <a
          href="tel:+9779841234567"
          className="text-brand-red hover:underline"
        >
          +977 9841234567
        </a>
      </motion.p>
    </motion.div>
  );
};

export default OrderConfirmation;
