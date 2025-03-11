
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { OrderItem } from "@/types/order";
import OrderForm from "@/components/order/OrderForm";
import OrderSummary from "@/components/order/OrderSummary";
import OrderConfirmation from "@/components/order/OrderConfirmation";

const Order = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    items: [] as OrderItem[]
  });
  
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { productId: "phurandana", quantity: 1 },
    { productId: "baked-peanuts-soyabeans", quantity: 0 }
  ]);

  const handleSubmitOrder = (orderData: {
    name: string;
    phone: string;
    address: string;
    notes: string;
    items: OrderItem[];
    total: number;
  }) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      setOrderDetails({
        name: orderData.name,
        phone: orderData.phone,
        items: orderData.items
      });
      
      // Reset form after success
      toast({
        title: "Order placed successfully!",
        description: "We'll contact you shortly to confirm your order."
      });
      
      console.log(orderData);
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
          <OrderConfirmation
            name={orderDetails.name}
            phone={orderDetails.phone}
            orderItems={orderDetails.items}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <OrderForm 
              onSubmitOrder={handleSubmitOrder}
              isSubmitting={isSubmitting}
            />
            <OrderSummary orderItems={orderItems} />
          </div>
        )}
      </Section>
    </Layout>
  );
};

export default Order;
