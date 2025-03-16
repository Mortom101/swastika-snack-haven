
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for orders and inquiries"
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-display font-semibold mb-6">
              Get In Touch
            </h2>
            
            <p className="text-muted-foreground mb-8">
              We'd love to hear from you! For orders, inquiries, or feedback, please reach out using the contact information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-1">
                    Call us directly to place orders or ask questions
                  </p>
                  <a
                    href="tel:+9779841234567"
                    className="text-brand-red hover:underline font-medium"
                  >
                    +977 9841234567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground mb-1">
                    Send us an email for bulk orders or business inquiries
                  </p>
                  <a
                    href="mailto:info@swastikafood.com"
                    className="text-brand-red hover:underline font-medium"
                  >
                    info@swastikafood.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground mb-1">
                    Our production facility is located at
                  </p>
                  <p className="font-medium">
                    Jorpati, Kathmandu, Nepal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Sunday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-display font-semibold mb-6">
              Quick Contact
            </h2>
            
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red transition-colors"
                  placeholder="Enter your name"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red transition-colors"
                  placeholder="What would you like to ask?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 bg-brand-gold/10 p-4 rounded-md">
              <h3 className="font-medium mb-2">Delivery Information</h3>
              <p className="text-sm text-muted-foreground">
                We deliver all over Nepal. Delivery fee ranges from ₹100 within Kathmandu Valley to ₹200-₹500 for other regions depending on distance. Free delivery on orders above ₹1000 within Kathmandu Valley and ₹2000 for nationwide orders. Standard delivery time is 1-2 business days within the valley, and 3-7 days for other regions.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section className="bg-brand-lightGold py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Ready to Experience Authentic Nepali Snacks?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Order now and get fresh, preservative-free products delivered to your doorstep anywhere in Nepal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+9779841234567"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              <span>Call to Order</span>
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
