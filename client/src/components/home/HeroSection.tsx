import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Star, CheckCircle, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { useI18n } from "../../lib/i18n/i18n-provider";

// Decorative shapes for visual interest
const ShapeDecoration = ({ className }: { className: string }) => (
  <motion.div 
    className={`absolute rounded-full opacity-50 blur-3xl ${className}`}
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

// Float animation for elements
const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    className={className}
    initial={{ y: 0 }}
    animate={{ y: [-5, 5, -5] }}
    transition={{
      duration: 6,
      delay: delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export default function HeroSection() {
  const { t } = useI18n();
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Highlights to cycle through
  const highlights = [
    { icon: <Star className="w-5 h-5 text-yellow-500" />, text: "Award-winning consultancy services" },
    { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "Trusted by 100+ organizations" },
    { icon: <Zap className="w-5 h-5 text-blue-500" />, text: "Innovative solutions for complex challenges" }
  ];

  useEffect(() => {
    // Auto-cycle through highlights unless hovered
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveHighlight((prev) => (prev + 1) % highlights.length);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered, highlights.length]);

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <section className="pt-28 md:pt-32 pb-12 bg-white dark:bg-gray-950 overflow-hidden relative">
      {/* Decorative elements */}
      <ShapeDecoration className="bg-blue-100 dark:bg-blue-900/20 w-96 h-96 top-20 -right-20" />
      <ShapeDecoration className="bg-primary/5 dark:bg-primary/10 w-72 h-72 bottom-10 -left-10" />
      <ShapeDecoration className="bg-orange-100 dark:bg-orange-900/20 w-64 h-64 bottom-40 right-40" />
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Main Gigee-style featured article */}
        <div className="mb-16 border-b border-gray-100 dark:border-gray-800 pb-16">
          {/* Main headline */}
          <motion.div 
            className="max-w-4xl mb-12"
            style={{ opacity: headerOpacity, y: headerY }}
          >
            <motion.div 
              className="flex items-center mb-6 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeHighlight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center bg-gray-50 dark:bg-gray-900 py-2 px-4 rounded-full"
                >
                  {highlights[activeHighlight].icon}
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {highlights[activeHighlight].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
            >
              Empowering Organizations Through Strategic Excellence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-6"
            >
              GIGEEConsult delivers transformative consultancy, capacity building, project management, and supply services that help organizations navigate unique challenges and achieve sustainable growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "4rem" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-1 bg-primary mb-6"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 flex gap-4 flex-wrap"
            >
              <Button
                variant="gigeeFilled"
                size="lg"
                className="group transition-all hover:shadow-lg hover:translate-y-[-2px]"
                onClick={(e) => handleNavClick(e, "/#services")}
              >
                <span className="relative z-10">Discover Our Services</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
              
              <Button
                variant="gigeeOutline"
                size="lg"
                className="group transition-all hover:shadow-md"
                onClick={(e) => handleNavClick(e, "/#about")}
              >
                <span className="relative">About GIGEEConsult</span>
                <motion.div
                  initial={{ x: 0, y: 0 }}
                  whileHover={{ x: 3, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-40 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileHover={{ scale: 1.2 }}
          >
            <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </motion.div>
          
          {/* Image with Gigee style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.01 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Business professionals in a meeting" 
              className="w-full h-auto max-h-[500px] object-cover object-center transition-transform hover:scale-105 duration-1000"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
            
            {/* Image overlay elements */}
            <FloatingElement delay={0.5} className="absolute top-10 right-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 opacity-90">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium">Trusted Solutions</span>
              </div>
            </FloatingElement>
            
            <FloatingElement delay={1.2} className="absolute bottom-10 left-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 opacity-90">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm font-medium">Expert Consultants</span>
              </div>
            </FloatingElement>
          </motion.div>
        </div>
        
        {/* Gigee-style Trending Insights headings with numbers */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight relative inline-block"
          >
            TRENDING INSIGHTS
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-0.5 bg-primary absolute bottom-0 left-0"
            />
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Strategic Public Sector Consultancy",
              "Leadership Development Programs",
              "Project Management Excellence",
              "Reliable Supply Services"
            ].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(249, 115, 22, 0.05)" }}
                className="flex group cursor-pointer p-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                <div className="mr-3 text-xl font-bold text-orange-500">{index + 1}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-base group-hover:text-orange-500 transition-colors duration-300">
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>
          
          {/* Gigee-style featured articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                category: "FEATURED INSIGHT",
                title: "Transforming Public Services",
                description: "How our consultancy services have helped government agencies and parastatals streamline operations and enhance service delivery to citizens.",
                cta: "Read case study"
              },
              {
                category: "ARTICLE",
                title: "Building Future Leaders for Growth",
                description: "Our capacity building programs are creating a new generation of leaders equipped to tackle complex organizational challenges.",
                cta: "Learn more"
              },
              {
                category: "REPORT",
                title: "Infrastructure Project Excellence",
                description: "Discover how our project management methodology consistently achieves excellence across diverse sectors in various challenging environments.",
                cta: "Download report"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
                className="group cursor-pointer bg-white dark:bg-gray-950 p-6 shadow-sm transition-all duration-300 border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden"
              >
                <span className="text-xs font-medium text-orange-500 mb-2 block">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {article.description}
                </p>
                <span className="flex items-center text-orange-500 text-sm font-medium">
                  {article.cta}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={14} className="ml-2" />
                  </motion.div>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}