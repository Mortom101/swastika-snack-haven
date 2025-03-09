
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  delay?: number;
}

export const Section = ({
  children,
  className,
  title,
  subtitle,
  centered = false,
  delay = 0,
}: SectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay + 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 md:py-24 px-6",
        centered && "text-center",
        className
      )}
    >
      <div className="container mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headerVariants}
            className={cn("mb-12", centered && "mx-auto max-w-2xl")}
          >
            {subtitle && (
              <p className="text-brand-red font-medium tracking-wide mb-2 uppercase text-sm">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
