import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed bottom-6 right-6 z-50"
          )}
        >
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg w-12 h-12 flex items-center justify-center"
            onClick={scrollToTop}
          >
            <ChevronUp size={24} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 