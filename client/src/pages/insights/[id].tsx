import React, { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";

// Import insights data
import { insights } from "../InsightsPage";

// Define Insight type
interface Insight {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  icon: React.ComponentType<any>;
  content: string;
}

export default function InsightDetailPage() {
  const { t } = useI18n();
  const [_, params] = useRoute("/insights/:id");
  const [insight, setInsight] = useState<Insight | null>(null);
  const [relatedInsights, setRelatedInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      // Find the insight with the matching ID
      const foundInsight = insights.find(item => item.id.toString() === params.id);
      
      if (foundInsight) {
        setInsight(foundInsight as Insight);
        
        // Find related insights (same category or shared tags)
        const related = insights
          .filter(item => 
            item.id !== foundInsight.id && 
            (item.category === foundInsight.category || 
             item.tags.some(tag => foundInsight.tags.includes(tag)))
          )
          .slice(0, 3); // Limit to 3 related insights
        
        setRelatedInsights(related as Insight[]);
      }
    }
    
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (!insight) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Insight not found</h1>
        <p className="mb-6">The insight you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/insights">Back to Insights</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                {insight.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {insight.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-200 mb-6">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {insight.date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {insight.readTime}
                </div>
                <div>
                  <span className="font-medium">By {insight.author}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">{t('common.home')}</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link href="/insights" className="hover:text-primary">{t('nav.insights')}</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-primary font-medium">{insight.title.substring(0, 30)}...</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Main content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: insight.content }} />
              </div>
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {insight.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full flex items-center"
                    >
                      <Tag size={14} className="mr-1 text-gray-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Author info */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">About the Author</h3>
                <p className="text-gray-700">
                  {insight.author} is an expert in {insight.category.toLowerCase()} with extensive experience 
                  advising organizations on {insight.tags.join(", ").toLowerCase()}.
                </p>
              </div>
              
              {/* Navigation */}
              <div className="mt-8 flex justify-between">
                <Button 
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <Link href="/insights">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Insights
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="text-primary border-primary hover:bg-primary/5"
                >
                  <Link href="/contact">
                    Discuss this topic with our experts
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {/* Sidebar */}
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-3">Related Insights</h3>
                <div className="space-y-6">
                  {relatedInsights.length > 0 ? (
                    relatedInsights.map((related) => (
                      <div key={related.id} className="group">
                        <Link href={`/insights/${related.id}`} className="block">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {related.category}
                          </span>
                          <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors mt-2 mb-1">
                            {related.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{related.date}</span>
                            <span className="mx-2">•</span>
                            <span>{related.readTime}</span>
                          </div>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No related insights found.</p>
                  )}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-3">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(insights.flatMap(i => i.tags)))
                      .slice(0, 8)
                      .map((tag, index) => (
                        <Link 
                          key={index} 
                          href={`/insights?search=${encodeURIComponent(tag as string)}`}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
                        >
                          {tag as string}
                        </Link>
                      ))}
                  </div>
                </div>
                
                <div className="mt-8 bg-primary/10 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Stay Updated</h3>
                  <p className="text-gray-700 text-sm mb-4">Subscribe to our newsletter for the latest insights and industry trends.</p>
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <Link href="/contact?subscribe=true">
                      Subscribe
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Expert Guidance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team of experts to discuss how we can help your organization implement strategies based on the latest industry insights.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
} 