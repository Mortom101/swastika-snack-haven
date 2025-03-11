
import { useState, useEffect } from 'react';
import { Review } from '@/types/review';
import { useToast } from '@/hooks/use-toast';

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedReviews = localStorage.getItem('product-reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const addReview = (review: Review) => {
    const newReviews = [review, ...reviews];
    setReviews(newReviews);
    localStorage.setItem('product-reviews', JSON.stringify(newReviews));
    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback.",
    });
  };

  const deleteReview = (reviewId: string) => {
    const newReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(newReviews);
    localStorage.setItem('product-reviews', JSON.stringify(newReviews));
    toast({
      title: "Review deleted",
      description: "The review has been removed.",
    });
  };

  return {
    reviews,
    addReview,
    deleteReview
  };
};
