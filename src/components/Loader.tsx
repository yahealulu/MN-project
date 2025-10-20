import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      onAnimationComplete={() => {
        setIsVisible(false);
        if (onComplete) {
          onComplete();
        }
      }}
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-primary shadow-glow"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-background" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-2xl font-bold text-gradient">M&N</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;