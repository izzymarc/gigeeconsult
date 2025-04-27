import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Search, Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { useI18n } from "../lib/i18n/i18n-provider";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Unlocking Organizational Potential Through Strategic Alignment",
    excerpt: "Discover how aligning your organization's strategy, structure, and culture can drive breakthrough performance and sustainable growth.",
    category: "Strategy",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    author: "Dr. Sarah Johnson",
    date: "April 15, 2025",
    readTime: "8 min read",
    tags: ["Strategy", "Organizational Development", "Leadership"]
  },
  {
    id: 2,
    title: "The Future of Work: Embracing Remote and Hybrid Models",
    excerpt: "Explore the evolving landscape of work arrangements and how organizations can create effective, productive remote and hybrid work environments.",
    category: "Workplace Trends",
    image: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20",
    author: "Michael Chen",
    date: "April 8, 2025",
    readTime: "6 min read",
    tags: ["Remote Work", "Future of Work", "Workplace Culture"]
  },
  {
    id: 3,
    title: "Sustainable Business Practices for the 21st Century",
    excerpt: "Learn how integrating sustainability into your business strategy can drive innovation, reduce costs, and create long-term value for stakeholders.",
    category: "Sustainability",
    image: "bg-gradient-to-br from-green-500/20 to-yellow-500/20",
    author: "Dr. Emily Roberts",
    date: "March 30, 2025",
    readTime: "10 min read",
    tags: ["Sustainability", "ESG", "Corporate Responsibility"]
  },
  {
    id: 4,
    title: "Effective Change Management in Times of Uncertainty",
    excerpt: "Navigate organizational change successfully with proven strategies for managing resistance, building buy-in, and sustaining momentum.",
    category: "Change Management",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    author: "James Wilson",
    date: "March 22, 2025",
    readTime: "7 min read",
    tags: ["Change Management", "Leadership", "Organizational Behavior"]
  },
  {
    id: 5,
    title: "Building High-Performing Teams in Diverse Environments",
    excerpt: "Discover strategies for leveraging diversity to create innovative, resilient teams that consistently outperform expectations.",
    category: "Team Development",
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    author: "Angela Williams",
    date: "March 14, 2025",
    readTime: "9 min read",
    tags: ["Team Building", "Diversity", "Leadership"]
  },
  {
    id: 6,
    title: "Digital Transformation: Beyond the Technology",
    excerpt: "Understand why successful digital transformation depends more on culture, leadership, and people than on technology alone.",
    category: "Digital Transformation",
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    author: "Michael Chen",
    date: "March 5, 2025",
    readTime: "8 min read",
    tags: ["Digital Transformation", "Change Management", "Technology"]
  }
];

// Available categories from blog posts
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function BlogPage() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blog posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    // Category filter
    if (activeCategory && post.category !== activeCategory) {
      return false;
    }
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                {t('blog.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90"
                >
                  <Link href="/contact">
                    Subscribe to Our Newsletter
                  </Link>
                </Button>
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
            <span className="text-primary font-medium">{t('common.blog')}</span>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Search and Categories */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
              {/* Search */}
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search blog posts..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(null)}
                className={activeCategory === null ? "bg-primary text-white" : ""}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "bg-primary text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-16">
              <FeaturedPostCard post={filteredPosts[0]} index={0} />
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 1 ? (
              filteredPosts.slice(1).map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))
            ) : filteredPosts.length === 0 ? (
              <div className="col-span-full text-center py-10">
                <div className="text-4xl text-gray-300 mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Blog Posts Found</h3>
                <p className="text-gray-500 mb-4">
                  We couldn't find any blog posts matching your current filters.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setActiveCategory(null);
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600">
                Stay updated with our latest insights, industry trends, and expert advice. 
                We deliver valuable content directly to your inbox.
              </p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button className="bg-secondary text-white hover:bg-secondary/90">
                Subscribe
              </Button>
            </form>
            <div className="text-xs text-gray-500 mt-4 text-center">
              By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturedPostCard({ post, index }: { post: any, index: number }) {
  const { t } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className={`h-56 lg:h-auto ${post.image} relative group-hover:scale-105 transition-transform duration-500`}>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {post.date}
            </span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </h2>
          
          <p className="text-gray-600 mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <User size={18} className="text-gray-500" />
              </div>
              <span className="text-sm font-medium">{post.author}</span>
            </div>
            
            <Button 
              asChild
              variant="ghost" 
              className="group text-primary hover:text-primary/80 p-0"
            >
              <Link href={`/blog/${post.id}`}>
                {t('buttons.read')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PostCard({ post, index }: { post: any, index: number }) {
  const { t } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group h-full flex flex-col"
    >
      {/* Image */}
      <div className={`h-48 ${post.image} relative group-hover:scale-105 transition-transform duration-500`}>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
              <User size={14} className="text-gray-500" />
            </div>
            <span className="text-xs font-medium">{post.author}</span>
          </div>
          
          <Button 
            asChild
            variant="ghost" 
            className="group text-primary hover:text-primary/80 p-0"
          >
            <Link href={`/blog/${post.id}`}>
              {t('buttons.read')} <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}