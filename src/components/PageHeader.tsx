
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

export const PageHeader = ({ title, subtitle, imageUrl }: PageHeaderProps) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 ${
              imageUrl ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-lg md:text-xl ${
                imageUrl ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent z-10" />
      
      {imageUrl && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      )}
    </div>
  );
};
