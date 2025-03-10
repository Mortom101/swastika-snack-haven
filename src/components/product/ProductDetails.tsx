
import { CheckCircle } from "lucide-react";

interface ProductDetailsProps {
  longDescription: string;
  ingredients: string[];
  benefits: string[];
}

export const ProductDetails = ({ 
  longDescription, 
  ingredients, 
  benefits 
}: ProductDetailsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-display font-bold mb-6">About This Product</h2>
      <p className="mb-6 text-gray-700">{longDescription}</p>
      
      <h3 className="text-xl font-medium mb-4">Ingredients</h3>
      <ul className="space-y-2 mb-8">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle size={16} className="text-brand-red" />
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>
      
      <h3 className="text-xl font-medium mb-4">Product Benefits</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle size={16} className="text-brand-red" />
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
