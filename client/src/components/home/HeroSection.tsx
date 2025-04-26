import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
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

export default function HeroSection() {
  const { t } = useI18n();
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

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
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Main Gigee-style featured article */}
        <div className="mb-16 border-b border-gray-100 dark:border-gray-800 pb-16">
          {/* Main headline */}
          <motion.div 
            className="max-w-4xl mb-12"
            style={{ opacity: headerOpacity, y: headerY }}
          >
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
                Discover Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="gigeeOutline"
                size="lg"
                className="group transition-all hover:shadow-md"
                onClick={(e) => handleNavClick(e, "/#about")}
              >
                About GIGEEConsult
                <ArrowUpRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-40 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </motion.div>
          
          {/* Image with Gigee style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full overflow-hidden rounded-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Business professionals in a meeting" 
              className="w-full h-auto max-h-[500px] object-cover object-center transition-transform hover:scale-105 duration-1000"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 via-transparent to-transparent"></div>
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
                className="flex group cursor-pointer p-4 rounded-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                <div className="mr-3 text-xl font-bold text-primary">{index + 1}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-base group-hover:text-primary transition-colors duration-300">
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
                className="group cursor-pointer bg-white dark:bg-gray-950 p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 rounded-sm hover:translate-y-[-3px]"
              >
                <span className="text-xs font-medium text-primary mb-2 block">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {article.description}
                </p>
                <span className="flex items-center text-primary text-sm font-medium group">
                  {article.cta}
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}