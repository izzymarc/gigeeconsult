import React from "react";
import { Link } from "wouter";
import { useI18n } from "../../lib/i18n/i18n-provider";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  
  // Footer columns data
  const footerColumns = [
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.about'), href: "/about" },
        { label: t('footer.services'), href: "/services" },
        { label: t('footer.careers'), href: "/careers" },
        { label: t('footer.contact'), href: "/contact" },
      ]
    },
    {
      title: t('footer.insights'),
      links: [
        { label: t('footer.articles'), href: "/insights" },
        { label: t('footer.reports'), href: "/reports" },
        { label: t('footer.case_studies'), href: "/case-studies" },
        { label: t('footer.newsletter_section'), href: "/newsletter" },
      ]
    },
    {
      title: t('footer.legal'),
      links: [
        { label: t('footer.privacy'), href: "/privacy" },
        { label: t('footer.terms'), href: "/terms" },
        { label: t('footer.cookies'), href: "/cookies" },
        { label: t('footer.accessibility'), href: "/accessibility" },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Upper banner with newsletter signup */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700">
        <div className="container mx-auto px-4 py-10 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t('footer.newsletter.title')}</h3>
              <p className="text-white/90 mb-0">{t('footer.newsletter.description')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input 
                type="email" 
                placeholder={t('footer.newsletter.placeholder')} 
                className="bg-white/20 text-white placeholder:text-white/70 border-white/30 focus-visible:ring-white"
              />
              <Button 
                variant="outline" 
                className="bg-white text-orange-600 hover:bg-white/90 border-white hover:text-orange-700"
              >
                {t('footer.newsletter.button')}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-10 sm:py-16 max-w-6xl">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center">
                <img src="/images/logo.jpeg" alt="GIGEE Consult Logo" className="h-10 sm:h-12 w-auto mr-2 sm:mr-3 rounded" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  GIGEE<span className="text-orange-500">Consult</span>
                </span>
              </div>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm">
              {t('footer.description')}
            </p>
            
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/gigee-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/gigeeconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-300"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/gigee_consult"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-300"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </motion.div>
          
          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <motion.div key={index} className="md:col-span-1" variants={itemVariants}>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4 sm:mb-6 relative inline-block">
                {column.title}
                <span className="absolute -bottom-2 left-0 w-6 sm:w-8 h-0.5 bg-orange-500"></span>
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      {link.label}
                      <ArrowUpRight className="ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Contact Information */}
        <motion.div 
          className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-1.5 sm:p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 mr-3 sm:mr-4">
              <Mail size={16} className="text-orange-500" />
            </div>
            <a href={`mailto:${t('footer.address.email')}`} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 text-xs sm:text-sm font-medium">
              {t('footer.address.email')}
            </a>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <motion.div 
              className="flex items-start"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-1.5 sm:p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 mr-3 sm:mr-4 mt-1">
                <Phone className="text-orange-500 h-4 w-4" />
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-medium mb-1">{t('contact.form.phone')}</p>
                <a href={`tel:${t('footer.address.phone1')}`} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 text-xs sm:text-sm">
                  {t('footer.address.phone1')}
                </a>
                <br />
                <a href={`tel:${t('footer.address.phone2')}`} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 text-xs sm:text-sm">
                  {t('footer.address.phone2')}
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-1.5 sm:p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 mr-3 sm:mr-4 mt-1">
                <MapPin className="text-orange-500 h-4 w-4" />
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-medium mb-1">{t('footer.address.title')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2">
                  {t('footer.address.kano')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2">
                  {t('footer.address.kaduna')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  {t('footer.address.abuja')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div 
          className="mt-8 sm:mt-16 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
            © {currentYear} GIGEE Consult Ltd. {t('common.allRightsReserved')}
          </p>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-orange-500 p-1.5 sm:p-2 rounded-full text-xs sm:text-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="mr-2">{t('common.backToTop')}</span>
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
