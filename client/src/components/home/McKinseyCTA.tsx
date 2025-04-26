import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Users } from "lucide-react";
import { Button } from "../ui/button";

// Decorative shapes for visual interest
const ShapeDecoration = ({ className }: { className: string }) => (
  <motion.div 
    className={`absolute rounded-full opacity-70 blur-3xl ${className}`}
    animate={{ 
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0]
    }}
    transition={{ 
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  />
);

export default function GigeeCTA() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0.6, 0.9], [0, -50]);
  
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <ShapeDecoration className="bg-primary/5 dark:bg-primary/10 w-96 h-96 top-20 -right-20" />
      <ShapeDecoration className="bg-blue-100 dark:bg-blue-900/20 w-72 h-72 -bottom-20 -left-20" />
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:pr-8"
            style={{ y: parallaxY }}
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Special Report
            </motion.span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              What does it mean to accelerate sustainable and inclusive growth?
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
              Gigee partners from around the world weigh in
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="gigeeFilled"
                size="lg"
                className="mb-4 text-white group"
              >
                Making the case for a new kind of growth
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:border-l md:border-gray-200 md:dark:border-gray-800 md:pl-8"
          >
            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-all rounded-sm border border-gray-100 dark:border-gray-800 hover:translate-y-[-3px]"
              >
                <div className="flex items-start mb-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Are you seeking an exciting role that will challenge and inspire you?
                    </h3>
                    <a 
                      href="#" 
                      className="text-primary font-medium text-sm flex items-center hover:underline group"
                    >
                      Careers
                      <span className="mx-2 text-gray-400">|</span>
                      <span className="font-normal">Search jobs</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-all rounded-sm border border-gray-100 dark:border-gray-800 hover:translate-y-[-3px]"
              >
                <div className="flex items-start mb-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      How can we help you?
                    </h3>
                    <a 
                      href="#" 
                      className="text-primary font-medium text-sm flex items-center hover:underline group"
                    >
                      Get in touch with us or find an office closest to you.
                      <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 