import React from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { insights } from '../../InsightsPage';
import { formatDistanceToNow } from 'date-fns';

// Define Insight interface to match data structure in InsightsPage
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

const InsightCategoryPage: React.FC = () => {
  // Use wouter's useRoute hook to get the category from URL
  const [_, params] = useRoute('/insights/category/:category');
  const category = params?.category || '';
  
  // Format category for display (capitalize first letter of each word)
  const formatCategoryName = (category: string): string => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  console.log('Category from URL:', category);
  console.log('Formatted category:', formatCategoryName(category));
  
  // Filter insights by category (using slug-friendly comparison)
  const categoryInsights = insights.filter((insight: Insight) => {
    if (!category) return false;
    
    // Convert category from URL to proper format for comparison
    const formattedUrlCategory = formatCategoryName(category);
    
    // Convert insight category to slug format for comparison with URL parameter
    const insightCategorySlug = insight.category.toLowerCase().replace(/\s+/g, '-');
    
    console.log('Comparing:', insightCategorySlug, 'vs', category.toLowerCase());
    console.log('Or:', insight.category, 'vs', formattedUrlCategory);
    
    // Compare either with slug format or directly
    return insightCategorySlug === category.toLowerCase() ||
           insight.category === formattedUrlCategory;
  });
  
  console.log('Filtered insights:', categoryInsights.length);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Get formatted category name for display
  const displayCategoryName = category ? formatCategoryName(category) : '';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {displayCategoryName || 'Loading...'}
            </h1>
            <p className="text-xl text-blue-100">
              Explore our latest insights on {displayCategoryName.toLowerCase() || 'various topics'}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          {/* Abstract background pattern */}
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
            <span className="text-gray-900 font-medium">
              {displayCategoryName || 'Category'}
            </span>
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <section className="py-16 container mx-auto px-4">
        {categoryInsights.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categoryInsights.map((insight: Insight, index: number) => (
              <motion.div 
                key={insight.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className={`aspect-video overflow-hidden ${insight.image}`}>
                  {/* Image is a CSS class in InsightsPage */}
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {insight.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{formatDistanceToNow(new Date(insight.date), { addSuffix: true })}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    <Link href={`/insights/${insight.id}`} className="hover:text-blue-600 transition-colors">
                      {insight.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{insight.excerpt}</p>
                  <Link href={`/insights/${insight.id}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No insights found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any insights in this category: "{displayCategoryName}". Check back later or explore other categories.</p>
            <Link href="/insights">
              <Button>View All Insights</Button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default InsightCategoryPage; 