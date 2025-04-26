import React from "react";
import { Link } from "wouter";
import { useI18n } from "../../lib/i18n/i18n-provider";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

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
        { label: t('footer.newsletter'), href: "/newsletter" },
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

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                GIGEE
                <span className="text-primary">Consult</span>
              </span>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
              {t('footer.description')}
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <Mail size={16} className="text-primary mr-3" />
            <a href="mailto:contact@gigeeconsult.com" className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm">
              contact@gigeeconsult.com
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Phone className="mr-3 text-primary h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-0.5">Phone Number</p>
                <a href="tel:+2348122224471" className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm">
                  +234 812 222 4471
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="mr-3 text-primary h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-0.5">Kano Office</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  #67, Babban Kwari Street, Off Lamido Street, Nasarawa GRA, Kano State.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} GIGEE Consult Ltd. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
