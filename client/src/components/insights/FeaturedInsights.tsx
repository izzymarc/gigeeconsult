import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { insights } from "../../pages/InsightsPage";

interface FeaturedInsightsProps {
  title?: string;
  description?: string;
  count?: number;
  category?: string;
  showViewAll?: boolean;
}

export default function FeaturedInsights({
  title = "Featured Insights",
  description = "Expert analysis and perspectives to help your organization navigate complex challenges and seize new opportunities.",
  count = 3,
  category,
  showViewAll = true
}: FeaturedInsightsProps) {
  // Filter insights based on category if provided, then take the specified count
  const filteredInsights = insights
    .filter(insight => !category || insight.category === category)
    .slice(0, count);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`h-48 ${insight.image} flex items-center justify-center p-6`}>
                <insight.icon size={64} className="text-primary/40" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                    {insight.category}
                  </span>
                  <span className="text-gray-500 text-xs">{insight.readTime}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{insight.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {insight.date} • {insight.author}
                  </div>
                  <Button 
                    asChild
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/5"
                  >
                    <Link href={`/insights/${insight.id}`}>
                      Read more
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center mt-10">
            <Button 
              asChild
              variant="outline"
            >
              <Link href={category ? `/insights/category/${category.toLowerCase()}` : "/insights"}>
                View {category ? `All ${category}` : "All"} Insights
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
} 