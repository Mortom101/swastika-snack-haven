
import { OrderItem } from "@/types/order";
import { products } from "@/data/order";

interface ProductSelectorProps {
  orderItems: OrderItem[];
  onQuantityChange: (productId: string, quantity: number) => void;
}

const ProductSelector = ({ orderItems, onQuantityChange }: ProductSelectorProps) => {
  return (
    <>
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
                  onQuantityChange(
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
                onQuantityChange(
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
                onQuantityChange(
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
    </>
  );
};

export default ProductSelector;
