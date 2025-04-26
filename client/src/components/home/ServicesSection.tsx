import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, ArrowDown, BarChart3, Briefcase, Code, Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import { useI18n } from "../../lib/i18n/i18n-provider";
import TrendingInsights from "./TrendingInsights";
import GigeeCTA from "./GigeeCTA";

// Services data with icons, titles, descriptions
const services = [
  {
    icon: Briefcase,
    title: "Consultancy Services",
    description: "We partner with organizations across public and private sectors to navigate complex challenges, sharpen strategies, and unlock new growth opportunities.",
    tagline: "Smart solutions for dynamic environments",
    link: "/#services"
  },
  {
    icon: BarChart3,
    title: "Capacity Building",
    description: "We design and deliver training programs, workshops, and mentorship initiatives that develop leadership and strengthen competencies across the workforce.",
    tagline: "Building the next generation of leaders",
    link: "/#services"
  },
  {
    icon: Code,
    title: "Project Management",
    description: "Our project management services ensure seamless execution from planning to delivery, optimizing resources and mitigating risks within your unique context.",
    tagline: "Delivering excellence across projects",
    link: "/#services"
  },
  {
    icon: Lightbulb,
    title: "General Supplies",
    description: "From essential office equipment to specialized project materials, we provide high-quality, timely, and reliable supply services to meet your needs.",
    tagline: "Supplying quality for your business",
    link: "/#services"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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

// Main ServicesSection component
export default function ServicesSection() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle navigation click for smooth scrolling
  const handleNavClick = (e: any, href: string) => {
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
    <>
      <section id="services" className="py-16 md:py-20 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <ShapeDecoration className="bg-blue-100 dark:bg-blue-900/20 w-64 h-64 -top-10 -left-10" />
        <ShapeDecoration className="bg-primary/5 dark:bg-primary/10 w-96 h-96 top-1/3 -right-20" />
        <ShapeDecoration className="bg-gray-100 dark:bg-gray-800/50 w-72 h-72 bottom-20 left-10" />
        
        {/* Progress indicator */}
        <motion.div
          className="fixed top-[70px] left-0 right-0 h-1 bg-primary z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </motion.div>
      
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Main headline feature - Gigee style */}
          <div className="mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
            >
              Transformative Professional Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-4"
            >
              Through our comprehensive service offerings, we deliver value that goes beyond service — we deliver transformation across diverse sectors and industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-16 h-1 bg-primary"
            ></motion.div>
          </div>
          
          {/* Section header - Gigee-style minimalist heading */}
          <div className="mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-3 text-gray-900 dark:text-white gigee-section-title relative pl-3 border-l-4 border-primary"
            >
              {t('services.title', 'Our Services')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-gray-600 dark:text-gray-300 max-w-2xl ml-4"
            >
              {t('services.subtitle', 'Comprehensive solutions tailored to meet your business needs and drive sustainable growth.')}
            </motion.p>
          </div>
          
          {/* Services grid - Gigee-style card layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="gigee-card h-full flex flex-col bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-3px] rounded-sm group"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <service.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{service.description}</p>
                  
                  <a 
                    href={service.link} 
                    className="text-primary font-medium text-sm flex items-center hover:underline group"
                    onClick={(e) => handleNavClick(e, service.link)}
                  >
                    {service.tagline}
                    <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA section - Gigee style */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 text-center relative"
          >
            {isVisible && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full"
              >
                Take Action Now
              </motion.div>
            )}
            <div className="mt-12 flex justify-center">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button 
                  variant="default" 
                  size="lg"
                  className="text-white"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Include the TrendingInsights component */}
      <TrendingInsights />
      
      {/* Include the GigeeCTA component */}
      <GigeeCTA />
    </>
  );
}
