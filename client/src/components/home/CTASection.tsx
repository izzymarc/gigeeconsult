import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useLocation } from "wouter";

export default function CTASection() {
  const [, setLocation] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setLocation(href);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-secondary to-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
            Ready to Transform Your Potential?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto">
            Whether you're building a new team, leading a project, scaling your operations, or investing in your community — 
            GIGEE Consult Ltd. is your trusted partner for success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full max-w-md mx-auto">
            <Button 
              asChild
              className="bg-white hover:bg-gray-100 font-bold dark:bg-white px-3 py-2 text-sm md:text-base md:px-4 md:py-2.5 h-auto w-full sm:w-auto"
            >
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-primary dark:text-primary"
                style={{ color: '#2C3E50' }}
              >
                Book a Consultation
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-white hover:bg-white hover:text-primary font-bold dark:border-white px-3 py-2 text-sm md:text-base md:px-4 md:py-2.5 h-auto w-full sm:w-auto"
            >
              <a 
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="text-white dark:text-white"
                style={{ color: '#FFFFFF' }}
              >
                Explore Our Services
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
