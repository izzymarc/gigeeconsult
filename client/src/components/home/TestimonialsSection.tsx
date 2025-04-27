import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function TestimonialsSection() {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Tech Innovations Ltd",
      content: "GIGEE Consult's approach to project management transformed how our team operates. Their consultants were incredibly thorough and provided actionable insights that made an immediate impact on our efficiency.",
      avatar: "/images/testimonials/avatar-1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Solutions Inc",
      content: "Working with GIGEE Consult has been a game-changer for our organization. Their capacity building programs empowered our team with the skills needed to tackle complex challenges with confidence.",
      avatar: "/images/testimonials/avatar-2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Elizabeth Okafor",
      role: "CEO/President",
      company: "Horizon Enterprises",
      content: "I've collaborated with many consulting firms over my career, but GIGEE Consult stands out for their commitment to excellence and genuine partnership approach. They don't just provide solutions – they ensure you have the tools to sustain success.",
      avatar: "/images/testimonials/avatar-3.jpg",
      rating: 4
    },
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % testimonials.length);
    
    // Reset the automatic timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startAutoRotation();
    }
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex: number) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    // Reset the automatic timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startAutoRotation();
    }
  };

  const startAutoRotation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(true);
    }, 8000);
  };

  useEffect(() => {
    startAutoRotation();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset animation state after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 700);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/4 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
        <Quote 
          className="absolute top-12 left-12 text-primary/10 dark:text-gray-700" 
          size={180} 
          strokeWidth={0.8}
        />
        <Quote 
          className="absolute bottom-12 right-12 text-secondary/10 dark:text-gray-700 rotate-180" 
          size={120} 
          strokeWidth={0.8}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            {t("testimonials.title", "What Our Clients Say")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("testimonials.subtitle", "Hear from organizations that have experienced our commitment to excellence and meaningful results.")}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative overflow-hidden min-h-[400px] md:min-h-[320px]">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={testimonials[currentIndex].id}
                variants={variants}
                custom={currentIndex}
                initial="enter"
                animate="center"
                exit="exit"
                onAnimationComplete={() => setIsAnimating(false)}
                className="absolute w-full"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-primary/20 dark:text-primary/10" size={40} />
                    <div className="pl-6">
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 italic mb-8 leading-relaxed">
                        "{testimonials[currentIndex].content}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-5 flex-shrink-0">
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://via.placeholder.com/150';
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-1.5">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={18} 
                                className={`${
                                  i < testimonials[currentIndex].rating 
                                    ? "text-yellow-400 fill-yellow-400" 
                                    : "text-gray-300 dark:text-gray-600"
                                }`} 
                              />
                            ))}
                          </div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentIndex) {
                      setCurrentIndex(index);
                      setIsAnimating(true);
                      
                      if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        startAutoRotation();
                      }
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index 
                      ? "bg-primary w-8" 
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
