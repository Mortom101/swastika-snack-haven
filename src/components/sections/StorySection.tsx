
import { Clock, Leaf, Truck } from "lucide-react";
import { Section } from "@/components/Section";

export const StorySection = () => {
  return (
    <Section title="Our Story" centered>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6 text-center">
          Swastik Small Cottage Industry was founded with a simple mission: to preserve the authentic taste of traditional Nepali snacks, made with love and care just like our grandmothers used to make.
        </p>
        <p className="text-center mb-8">
          We use only the finest ingredients, traditional recipes, and avoid preservatives to bring you the most authentic and delicious Nepali snacks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-lg font-medium mb-2">All Natural</h3>
            <p className="text-muted-foreground text-sm">
              We use only natural ingredients without any artificial additives or preservatives.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-lg font-medium mb-2">Long Shelf Life</h3>
            <p className="text-muted-foreground text-sm">
              Our traditional preparation methods naturally extend shelf life up to 8 months.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-lg font-medium mb-2">Valley-Wide Delivery</h3>
            <p className="text-muted-foreground text-sm">
              We deliver fresh products to your doorstep anywhere in Kathmandu Valley.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
