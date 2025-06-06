import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import GigeeCTA from "../components/home/GigeeCTA";
import ContactSection from "../components/home/ContactSection";
import FeaturedInsights from "../components/insights/FeaturedInsights";
import AboutSection from "../components/home/AboutSection";
import { Helmet } from "react-helmet";
import { ArrowUp } from "lucide-react";

// Scroll-to-top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
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
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all z-50 hover:translate-y-[-2px]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>GIGEE CONSULT LTD | Empowering Lives Through Excellent Service Delivery</title>
        <meta name="description" content="GIGEE CONSULT LTD is a dynamic and results-driven firm specializing in Consultancy Services, Capacity Building, Project Management, and General Supplies." />
      </Helmet>
      
      {/* Main Content with Gigee-style layout */}
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Featured Insights */}
        <FeaturedInsights />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Scroll to top button */}
        <ScrollToTopButton />
      </div>
    </>
  );
}
