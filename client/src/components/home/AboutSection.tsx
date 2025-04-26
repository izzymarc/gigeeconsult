import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Users, BarChart, Briefcase, Award } from "lucide-react";
import { Button } from "../ui/button";
import { useI18n } from "../../lib/i18n/i18n-provider";

export default function AboutSection() {
  const { t } = useI18n();

  // Core values of the company
  const coreValues = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: t('about.values.excellence'),
      description: t('about.values.excellence_desc')
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t('about.values.collaboration'),
      description: t('about.values.collaboration_desc')
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: t('about.values.impact'),
      description: t('about.values.impact_desc')
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: t('about.values.integrity'),
      description: t('about.values.integrity_desc')
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block"
            >
              {t('about.subtitle')}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              {t('about.title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 mb-6 text-lg"
            >
              {t('about.description1')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
            >
              {t('about.description2')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/about">
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 group"
                >
                  {t('buttons.learn_more')}
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Right side - Core values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-md shadow-sm"
              >
                <div className="p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: t('about.stats.years') },
              { value: "200+", label: t('about.stats.clients') },
              { value: "95%", label: t('about.stats.satisfaction') },
              { value: "50+", label: t('about.stats.experts') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
