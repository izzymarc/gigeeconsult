import React from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { insights } from '../InsightsPage';
import { formatDistanceToNow, format } from 'date-fns';

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

const InsightDetailPage: React.FC = () => {
  // Use wouter's useRoute hook instead of Next.js useRouter
  const [match, params] = useRoute('/insights/:id');
  const id = params?.id;
  
  // Find the insight with the matching ID
  const insight = insights.find(insight => insight.id.toString() === id);
  
  // Get related insights in the same category (max 3)
  const relatedInsights = insights
    .filter(item => item.id !== (insight?.id || null) && item.category === insight?.category)
    .slice(0, 3);

  if (!insight && id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Insight not found</h1>
          <p className="text-gray-600 mb-6">The insight you're looking for doesn't exist or has been removed.</p>
          <Link href="/insights">
            <Button>Back to Insights</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {insight && (
        <>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  {insight.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-blue-100"
                >
                  {insight.excerpt}
                </motion.p>
              </div>
            </div>
          </section>

          {/* Breadcrumbs */}
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <div className="flex items-center text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <Link href="/insights" className="hover:text-blue-600">Insights</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <Link 
                  href={`/insights/category/${insight.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-blue-600"
                >
                  {insight.category}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-gray-900 font-medium truncate max-w-[200px]">{insight.title}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className={`mb-8 rounded-xl overflow-hidden shadow-md aspect-video ${insight.image}`}>
                  {/* Image is a CSS class in InsightsPage */}
                </div>

                {/* Meta information */}
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-y-2">
                  <div className="flex items-center mr-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{format(new Date(insight.date), 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <User className="h-4 w-4 mr-2" />
                    <span>{insight.author}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <Tag className="h-4 w-4 mr-2" />
                    <Link 
                      href={`/insights/category/${insight.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-blue-600"
                    >
                      {insight.category}
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: insight.content }} />
                </div>

                {/* Tags */}
                {insight.tags && insight.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-lg font-semibold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {insight.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Share2 className="h-5 w-5 mr-2" /> Share this insight
                  </h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Back to insights */}
                <div className="mt-12">
                  <Link href="/insights">
                    <Button variant="outline" className="flex items-center">
                      <ArrowLeft className="h-4 w-4 mr-2" /> Back to all insights
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Related Insights */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Related Insights</h3>
                  <div className="space-y-6">
                    {relatedInsights.length > 0 ? (
                      relatedInsights.map(relatedInsight => (
                        <div key={relatedInsight.id} className="group">
                          <Link 
                            href={`/insights/${relatedInsight.id}`}
                            className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors"
                          >
                            {relatedInsight.title}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {relatedInsight.excerpt}
                          </p>
                          <div className="text-xs text-gray-500 mt-2">
                            {formatDistanceToNow(new Date(relatedInsight.date), { addSuffix: true })}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No related insights found</p>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {Array.from(new Set(insights.map(i => i.category))).map((category, idx) => (
                      <Link 
                        key={idx}
                        href={`/insights/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100"
                      >
                        <span className="font-medium">{category}</span>
                        <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                          {insights.filter(i => i.category === category).length}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InsightDetailPage; 