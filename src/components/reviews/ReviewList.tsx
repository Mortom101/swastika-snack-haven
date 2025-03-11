
import { Star, Trash2 } from 'lucide-react';
import { Review } from '@/types/review';
import { motion } from 'framer-motion';

interface ReviewListProps {
  reviews: Review[];
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

export const ReviewList = ({ reviews, onDelete, isAdmin = false }: ReviewListProps) => {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="font-medium text-gray-900">{review.name}</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < review.rating
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            {isAdmin && onDelete && (
              <button
                onClick={() => onDelete(review.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Delete review"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
          <p className="mt-2 text-gray-600">{review.comment}</p>
          <p className="mt-2 text-sm text-gray-400">{review.date}</p>
        </motion.div>
      ))}

      {reviews.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No reviews yet. Be the first to share your experience!
        </p>
      )}
    </div>
  );
};
