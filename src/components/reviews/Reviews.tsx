
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';
import { useReviews } from '@/hooks/use-reviews';
import { ReviewFormData } from '@/types/review';
import { Section } from '@/components/Section';

interface ReviewsProps {
  isAdmin?: boolean;
}

export const Reviews = ({ isAdmin = false }: ReviewsProps) => {
  const { reviews, addReview, deleteReview } = useReviews();

  const handleSubmit = (data: ReviewFormData) => {
    const newReview = {
      ...data,
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
    addReview(newReview);
  };

  return (
    <Section
      title="Customer Reviews"
      subtitle="Share Your Experience"
      className="bg-brand-lightGold"
      centered={false}
    >
      <div className="space-y-12">
        <ReviewForm onSubmit={handleSubmit} />
        <ReviewList
          reviews={reviews}
          onDelete={isAdmin ? deleteReview : undefined}
          isAdmin={isAdmin}
        />
      </div>
    </Section>
  );
};
