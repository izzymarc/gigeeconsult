import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { useI18n } from "../../lib/i18n/i18n-provider";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/theme-toggle";
import LanguageSelector from "../language/LanguageSelector";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useI18n();
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -2]);
  
  // Navigation links - GIGEEConsult style with industries and capabilities
  const navLinks = [
    { 
      href: "#", 
      label: t('nav.insights'),
      dropdown: true,
      submenu: [
        { href: "/insights", label: "All Insights" },
        { href: "/insights/category/strategy", label: "Strategy" },
        { href: "/insights/category/leadership", label: "Leadership" },
        { href: "/insights/category/operations", label: "Operations" },
        { href: "/insights/category/analytics", label: "Analytics" },
        { href: "/insights/category/innovation", label: "Innovation" },
        { href: "/insights/category/sustainability", label: "Sustainability" },
      ]
    },
    { 
      href: "#", 
      label: t('nav.industries'),
      dropdown: true,
      submenu: [
        { href: "/industries/financial-services", label: t('industries.financial') },
        { href: "/industries/healthcare", label: t('industries.healthcare') },
        { href: "/industries/technology", label: t('industries.technology') },
        { href: "/industries/retail", label: t('industries.retail') },
        { href: "/industries/manufacturing", label: t('industries.manufacturing') },
        { href: "/industries/energy", label: t('industries.energy') },
      ]
    },
    {
      href: "#",
      label: t('nav.services'),
      dropdown: true,
      submenu: [
        { href: "/services/consultancy", label: t('services.consultancy') },
        { href: "/services/capacity-building", label: t('services.capacity') },
        { href: "/services/project-management", label: t('services.project') },
        { href: "/services/general-supplies", label: t('services.supplies') },
      ]
    },
    { href: "/case-studies", label: t('nav.caseStudies') },
    { href: "/about", label: t('nav.about') },
    { href: "/careers", label: t('nav.careers') },
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

  // Toggle dropdown on mobile
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

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

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const mobileDropdownVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
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
                  className="px-1 py-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 text-sm font-medium transition-colors duration-200 flex items-center after:content-[''] after:h-0.5 after:scale-x-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:origin-left after:bg-orange-500 after:transition-transform hover:after:scale-x-100 group-hover:after:scale-x-100"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
                
                {link.dropdown && (
                  <AnimatePresence>
                    <motion.div 
                      className="absolute left-0 mt-1 w-48 bg-white dark:bg-gray-950 shadow-lg rounded-md border border-gray-100 dark:border-gray-800 overflow-hidden hidden group-hover:block z-50"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                    >
                      <div className="py-1">
                        {link.submenu?.map((subitem, idx) => (
                          <motion.div 
                            key={subitem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.2 }}
                          >
                            <Link 
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-orange-500 transition-all"
                            >
                              {subitem.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>
          
          {/* Right Side Actions - Gigee style */}
          <div className="flex items-center space-x-5">
            <motion.button 
              aria-label="Search"
              className="p-1 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={18} />
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <LanguageSelector />
            </motion.div>
            
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
                    {link.dropdown ? (
                      <button
                        className="w-full py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 font-medium border-b border-gray-100 dark:border-gray-800 flex justify-between items-center"
                        onClick={() => toggleDropdown(link.label)}
                      >
                        {link.label}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    ) : (
                      <Link 
                        href={link.href}
                        className="py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 font-medium border-b border-gray-100 dark:border-gray-800 flex justify-between items-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                    
                    {link.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div 
                            className="bg-gray-50 dark:bg-gray-900 overflow-hidden"
                            variants={mobileDropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            {link.submenu?.map((subitem, idx) => (
                              <motion.div
                                key={subitem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05, duration: 0.2 }}
                              >
                                <Link 
                                  href={subitem.href}
                                  className="py-2 px-8 text-sm text-gray-700 dark:text-gray-300 block border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-orange-500 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subitem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {t('nav.preferences')}
                    </span>
                    <div className="flex items-center space-x-4">
                      <LanguageSelector />
                      <ThemeToggle />
                    </div>
                  </div>
                  <Button 
                    variant="gigeeFilled"
                    className="w-full text-white transition-all hover:shadow-md group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.contact')}
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="ml-2 h-4 w-4 rotate-90" />
                    </motion.span>
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
