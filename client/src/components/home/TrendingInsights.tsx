import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Clock, TrendingUp, BookOpen, FileText } from "lucide-react";

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

interface Insight {
  title: string;
  description: string;
  link: string;
}

const insights: Insight[] = [
  {
    title: "The Evolution of Strategic Consultancy in the Public Sector",
    description: "How consultancy approaches are adapting to meet the unique challenges faced by government agencies.",
    link: "/#insights",
  },
  {
    title: "Building Organizational Capacity: Beyond Traditional Training",
    description: "Innovative approaches to developing talent and strengthening institutional capabilities.",
    link: "/#insights",
  },
  {
    title: "Project Management Excellence: Keys to Consistent Delivery",
    description: "Best practices for managing complex projects and ensuring successful outcomes.",
    link: "/#insights",
  },
  {
    title: "Strategic Procurement: Optimizing the Supply Chain",
    description: "How organizations can transform their procurement processes to drive efficiency and value.",
    link: "/#insights",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function TrendingInsights() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0.5, 0.8], [0, -50]);
  
  const iconMap = {
    "FEATURED INSIGHT": TrendingUp,
    "ARTICLE": FileText,
    "REPORT": BookOpen,
  };
  
  return (
    <>
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <ShapeDecoration className="bg-primary/5 dark:bg-primary/10 w-96 h-96 top-20 -right-40" />
        <ShapeDecoration className="bg-blue-100 dark:bg-blue-900/20 w-72 h-72 bottom-10 -left-20" />
      
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight relative inline-block"
          >
            TRENDING INSIGHTS
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-0.5 bg-primary absolute bottom-0 left-0"
            />
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-12"
          >
            {insights.map((insight, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="flex group cursor-pointer p-4 rounded-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                <div className="mr-3 text-xl font-bold text-primary">{index + 1}</div>
                <div>
                  <a href={insight.link} className="block">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-base group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{insight.description}</p>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {[
              {
                category: "FEATURED INSIGHT",
                title: "The Strategic Value of Integrated Service Delivery",
                description:
                  "Organizations that integrate consultancy, capacity building, project management, and supply services achieve more sustainable outcomes and higher returns on investment.",
                cta: "Explore our approach",
              },
              {
                category: "ARTICLE",
                title: "Building Institutional Capacity in Emerging Markets",
                description:
                  "Our work with organizations in developing economies demonstrates how targeted capacity building creates resilient institutions capable of navigating complex challenges.",
                cta: "Read the article",
              },
              {
                category: "REPORT",
                title: "Effective Project Management: Lessons from the Field",
                description:
                  "Drawing from our extensive project portfolio, we've identified key success factors that consistently lead to on-time, on-budget project delivery across diverse sectors.",
                cta: "Download the report",
              },
            ].map((article, index) => {
              const IconComponent = iconMap[article.category as keyof typeof iconMap] || FileText;
              
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-950 p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all hover:translate-y-[-3px] rounded-sm h-full flex flex-col group"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full w-7 h-7 flex items-center justify-center mr-3">
                      <IconComponent className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary">{article.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{article.description}</p>
                  <a href="#" className="text-primary font-medium text-sm flex items-center hover:underline group">
                    {article.cta}
                    <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <ShapeDecoration className="bg-blue-100 dark:bg-blue-900/20 w-72 h-72 -top-20 -left-20" />
      
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-gray-900 dark:text-white tracking-tight relative inline-block"
            >
              NEW AT GIGEECONSULT BLOG
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-0.5 bg-primary absolute bottom-0 left-0"
              />
            </motion.h2>
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="#" 
              className="text-primary font-medium text-sm flex items-center hover:underline group"
            >
              Read more on our blog
              <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                date: "July 15, 2024",
                title: "Transforming Government Services: A Case Study in Public Sector Consultancy",
                readTime: "5 min read",
              },
              {
                date: "July 8, 2024",
                title: "Developing the Next Generation of Leaders: GIGEEConsult's Capacity Building Approach",
                readTime: "4 min read",
              },
              {
                date: "July 1, 2024",
                title: "Supply Chain Resilience: Strategies for Uncertain Times",
                readTime: "6 min read",
              },
            ].map((post, index) => (
              <motion.a 
                href="#" 
                key={index} 
                variants={itemVariants}
                className="block p-6 bg-white dark:bg-gray-950 hover:shadow-md transition-all hover:translate-y-[-3px] rounded-sm border border-gray-100 dark:border-gray-800 group"
              >
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-primary" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-primary" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-semibold text-base text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
} 