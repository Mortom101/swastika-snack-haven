
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  index: number;
}

export const ReviewCard = ({
  name,
  rating,
  comment,
  date,
  index,
}: ReviewCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="glass-card p-6 h-full"
    >
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-brand-gold fill-brand-gold" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{comment}</p>
      <div className="mt-auto">
        <p className="font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </motion.div>
  );
};
