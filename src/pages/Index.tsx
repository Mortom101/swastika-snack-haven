
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CustomerReviewsSection } from "@/components/sections/CustomerReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reviews } from '@/components/reviews/Reviews';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <CustomerReviewsSection />
      <Reviews />
      <CTASection />
    </Layout>
  );
};

export default Index;
