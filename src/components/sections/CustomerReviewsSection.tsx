
import { Section } from "@/components/Section";
import { ReviewCard } from "@/components/ReviewCard";

const reviews = [
  {
    name: "Ramesh Sharma",
    rating: 5,
    comment: "Phurandana is exactly like my grandmother used to make. The authentic taste brings back so many memories!",
    date: "March 15, 2023"
  },
  {
    name: "Anita Gurung",
    rating: 5,
    comment: "I order the baked peanuts every month. They're so addictive and much healthier than store-bought snacks.",
    date: "January 28, 2023"
  },
  {
    name: "Sunil Thapa",
    rating: 4,
    comment: "Great quality products. The packaging keeps everything fresh for months. Will definitely order again.",
    date: "April 10, 2023"
  },
  {
    name: "Priya Magar",
    rating: 5,
    comment: "These snacks are perfect with tea! I love that they're preservative-free and made with traditional methods.",
    date: "December 5, 2022"
  }
];

export const CustomerReviewsSection = () => {
  return (
    <Section 
      title="Customer Reviews" 
      subtitle="What Our Customers Say"
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            comment={review.comment}
            date={review.date}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};
