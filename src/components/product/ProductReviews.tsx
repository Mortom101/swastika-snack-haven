
interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

export const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-display font-bold mb-6">Reviews</h2>
      <div className="space-y-4">
        {reviews.slice(0, 3).map((review, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 mr-1 ${
                    i < review.rating ? "text-brand-gold" : "text-gray-300"
                  }`}
                >
                  ★
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-2">{review.comment}</p>
            <div className="flex items-center justify-between text-sm">
              <p className="font-medium">{review.name}</p>
              <p className="text-muted-foreground">{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
