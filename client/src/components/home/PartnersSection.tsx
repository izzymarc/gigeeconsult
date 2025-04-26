import { motion } from "framer-motion";
import { useI18n } from "../../lib/i18n/i18n-provider";

const partners = [
  {
    name: "Microsoft",
    logo: "https://via.placeholder.com/150x50?text=Microsoft",
  },
  {
    name: "Amazon",
    logo: "https://via.placeholder.com/150x50?text=Amazon",
  },
  {
    name: "Google",
    logo: "https://via.placeholder.com/150x50?text=Google",
  },
  {
    name: "IBM",
    logo: "https://via.placeholder.com/150x50?text=IBM",
  },
  {
    name: "Oracle",
    logo: "https://via.placeholder.com/150x50?text=Oracle",
  },
  {
    name: "Salesforce",
    logo: "https://via.placeholder.com/150x50?text=Salesforce",
  },
];

export default function PartnersSection() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 theme-transition-text">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto card-text">
          We collaborate with industry leaders to deliver exceptional solutions to our clients.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-[120px] h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 bg-white dark:bg-transparent p-2 rounded"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="max-w-full max-h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 