import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { useI18n } from "../../lib/i18n/i18n-provider";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/theme-toggle";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -2]);
  
  // Navigation links - GIGEEConsult style with industries and capabilities
  const navLinks = [
    { href: "/insights", label: "Insights" },
    { 
      href: "#", 
      label: "Industries",
      dropdown: true,
      submenu: [
        { href: "/industries/financial-services", label: "Financial Services" },
        { href: "/industries/healthcare", label: "Healthcare & Life Sciences" },
        { href: "/industries/technology", label: "Technology & Media" },
        { href: "/industries/retail", label: "Retail & Consumer" },
        { href: "/industries/manufacturing", label: "Manufacturing" },
        { href: "/industries/energy", label: "Energy & Sustainability" },
      ]
    },
    {
      href: "#",
      label: "Services",
      dropdown: true,
      submenu: [
        { href: "/services/consultancy", label: "Consultancy Services" },
        { href: "/services/capacity-building", label: "Capacity Building" },
        { href: "/services/project-management", label: "Project Management" },
        { href: "/services/general-supplies", label: "General Supplies" },
      ]
    },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
  ];

  // Handle scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1 + custom * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled 
          ? "py-2 bg-white/95 dark:bg-gray-950/95 shadow-sm border-b border-gray-100 dark:border-gray-800" 
          : "py-3 bg-white/90 dark:bg-gray-950/90 border-b border-gray-100 dark:border-gray-800"
      }`}
      style={{ 
        opacity: headerOpacity,
        y: headerY
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Gigee-style Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                GIGEE<span className="text-secondary">Consult</span>
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation - Gigee style */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.href} 
                className="relative group"
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                custom={index}
              >
                <Link 
                  href={link.href} 
                  className="px-1 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors duration-200 flex items-center after:content-[''] after:h-0.5 after:scale-x-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:origin-left after:bg-primary after:transition-transform hover:after:scale-x-100 group-hover:after:scale-x-100"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute left-0 mt-1 w-48 bg-white dark:bg-gray-950 shadow-md rounded-sm border border-gray-100 dark:border-gray-800 hidden group-hover:block origin-top-left transition-all opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100">
                    <div className="py-2">
                      {link.submenu?.map((subitem) => (
                        <Link 
                          key={subitem.href} 
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-primary transition-all"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </nav>
          
          {/* Right Side Actions - Gigee style */}
          <div className="flex items-center space-x-5">
            <motion.button 
              aria-label="Search"
              className="p-1 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={18} />
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
            
            {/* Mobile Menu Trigger */}
            <motion.button 
              className="ml-2 md:hidden p-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Gigee style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-0">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link 
                      href={link.href}
                      className="py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium border-b border-gray-100 dark:border-gray-800 flex justify-between items-center"
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform" />}
                    </Link>
                    
                    {link.dropdown && (
                      <div className="bg-gray-50 dark:bg-gray-900">
                        {link.submenu?.map((subitem) => (
                          <Link 
                            key={subitem.href} 
                            href={subitem.href}
                            className="py-2 px-8 text-sm text-gray-700 dark:text-gray-300 block border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="p-4">
                  <Button 
                    variant="gigeeFilled"
                    className="w-full text-white transition-all hover:shadow-md group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                    <ChevronDown className="ml-2 h-4 w-4 rotate-270 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
