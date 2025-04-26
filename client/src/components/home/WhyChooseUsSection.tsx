import { motion } from "framer-motion";
import { 
  Award, 
  Heart, 
  Recycle, 
  Star 
} from "lucide-react";
import { Button } from "../ui/button";
import { useLocation } from "wouter";

const features = [
  {
    icon: <Award className="text-2xl text-secondary" />,
    title: "Expertise That Matters",
    description: "Our team brings a wealth of knowledge, cross-sector experience, and proven results to every project."
  },
  {
    icon: <Heart className="text-2xl text-secondary" />,
    title: "Client-Centric Approach",
    description: "We don't believe in one-size-fits-all. Every solution we offer is customized to your unique goals and challenges."
  },
  {
    icon: <Recycle className="text-2xl text-secondary" />,
    title: "Sustainable Impact",
    description: "Our focus is not just on short-term gains, but on creating systems, skills, and structures that drive long-term success."
  },
  {
    icon: <Star className="text-2xl text-secondary" />,
    title: "Excellence Without Compromise",
    description: "We hold ourselves to the highest standards — because your future deserves nothing less."
  }
];

export default function WhyChooseUsSection() {
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
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Why Choose GIGEE Consult?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're not just another consulting firm. Here's what sets us apart:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-secondary text-white hover:bg-secondary/90"
          >
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Start Your Journey With Us
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
