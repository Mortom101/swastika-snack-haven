
import { useState } from 'react';
import { Star } from 'lucide-react';
import { ReviewFormData } from '@/types/review';

interface ReviewFormProps {
  onSubmit: (data: ReviewFormData) => void;
}

export const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !comment.trim() || rating === 0) {
      setError('Please fill in all fields and select a rating');
      return;
    }

    onSubmit({ name, rating, comment });
    setName('');
    setRating(0);
    setComment('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating *
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => setRating(index)}
              onMouseEnter={() => setHoverRating(index)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 hover:scale-110 transition-transform"
            >
              <Star
                size={24}
                className={`${
                  index <= (hoverRating || rating)
                    ? 'fill-brand-gold text-brand-gold'
                    : 'text-gray-300'
                } transition-colors`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
          Review *
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
          placeholder="Share your experience..."
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
};
