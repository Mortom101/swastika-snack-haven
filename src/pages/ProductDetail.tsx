
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ProductImageCarousel } from "@/components/product/ProductImageCarousel";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductDetails } from "@/components/product/ProductDetails";
import { ProductReviews } from "@/components/product/ProductReviews";
import { ProductCTA } from "@/components/product/ProductCTA";
import { products } from "@/data/productData";
import { reviews } from "@/data/reviewData";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId as keyof typeof products] : null;

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
            <p className="mb-6">We couldn't find the product you're looking for.</p>
            <Link 
              to="/"
              className="bg-brand-red text-white px-4 py-2 rounded-md hover:bg-brand-red/90 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const displayImages = product.images && product.images.length > 0 ? product.images : [product.image];
  
  return (
    <Layout>
      <PageHeader 
        title={product.name}
        subtitle={`${product.nepaliName} - Traditional Nepali Snack`}
        imageUrl={displayImages[0]}
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProductImageCarousel 
            images={displayImages} 
            productName={product.name} 
          />
          
          <ProductInfo 
            name={product.name}
            nepaliName={product.nepaliName}
            price={product.price}
            weight={product.weight}
            description={product.description}
          />
        </div>
      </Section>
      
      <Section className="bg-brand-lightGold">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProductDetails 
            longDescription={product.longDescription}
            ingredients={product.ingredients}
            benefits={product.benefits}
          />
          
          <ProductReviews reviews={reviews} />
        </div>
      </Section>
      
      <Section className="bg-white">
        <ProductCTA productName={product.name} />
      </Section>
    </Layout>
  );
};

export default ProductDetail;
