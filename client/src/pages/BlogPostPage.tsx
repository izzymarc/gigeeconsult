import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link, useRoute } from "wouter";
import { 
  ChevronRight, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  MessageSquare, 
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";

// Blog post data from BlogPage
const blogPosts = [
  {
    id: 1,
    title: "Unlocking Organizational Potential Through Strategic Alignment",
    excerpt: "Discover how aligning your organization's strategy, structure, and culture can drive breakthrough performance and sustainable growth.",
    category: "Strategy",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    author: "Dr. Sarah Johnson",
    authorRole: "Chief Strategy Officer",
    authorImage: null,
    date: "April 15, 2025",
    readTime: "8 min read",
    tags: ["Strategy", "Organizational Development", "Leadership"],
    content: `
      <h2>Introduction</h2>
      <p>In today's rapidly evolving business landscape, organizations face unprecedented challenges and opportunities. The ability to adapt, innovate, and execute effectively has never been more critical. Yet, many organizations struggle to achieve their strategic objectives despite having talented teams and well-crafted plans.</p>
      
      <p>The missing element is often strategic alignment—the process of bringing the organization's structure, systems, people, and culture into alignment with its mission, vision, and strategy.</p>
      
      <h2>The Three Pillars of Strategic Alignment</h2>
      
      <h3>1. Structural Alignment</h3>
      <p>Structural alignment ensures that your organizational design supports your strategic priorities. This includes reporting relationships, decision-making processes, and resource allocation mechanisms. When structure is misaligned with strategy, even the best strategic plans will falter during implementation.</p>
      
      <p>For example, if your strategy emphasizes innovation and agility, but your organizational structure is rigid and hierarchical, you've created a structural impediment to your strategic success.</p>
      
      <h3>2. Systems Alignment</h3>
      <p>Systems alignment focuses on ensuring that your operational systems, technology platforms, performance metrics, and reward systems reinforce your strategic direction. Misaligned systems can create conflicting incentives that undermine strategic execution.</p>
      
      <p>Consider an organization that emphasizes customer experience in its strategy but measures and rewards employees primarily on cost-cutting or production volume. This misalignment creates confusion and diverts energy from strategic priorities.</p>
      
      <h3>3. Cultural Alignment</h3>
      <p>Cultural alignment is perhaps the most powerful yet often overlooked aspect of strategic execution. It involves shaping the beliefs, behaviors, and norms within your organization to support your strategic objectives.</p>
      
      <p>A strategy that requires cross-functional collaboration will struggle in a culture that rewards individual achievement over team success. Similarly, a strategy focused on innovation will falter in a culture that punishes failure rather than treating it as a learning opportunity.</p>
      
      <h2>The Benefits of Strategic Alignment</h2>
      
      <p>Organizations that achieve high levels of strategic alignment experience numerous benefits:</p>
      
      <ul>
        <li><strong>Enhanced Execution:</strong> When strategy, structure, systems, and culture are aligned, implementation becomes more straightforward, with fewer conflicting priorities and mixed messages.</li>
        <li><strong>Increased Engagement:</strong> Employees understand how their work contributes to organizational success, leading to higher levels of engagement and discretionary effort.</li>
        <li><strong>Improved Agility:</strong> Aligned organizations can respond more quickly to market changes because decision-making at all levels is guided by shared strategic understanding.</li>
        <li><strong>Resource Optimization:</strong> Resources are directed toward strategic priorities rather than being scattered across competing initiatives.</li>
        <li><strong>Sustainable Growth:</strong> Alignment creates a foundation for sustainable growth by ensuring that all organizational elements are working together toward common objectives.</li>
      </ul>
      
      <h2>Achieving Strategic Alignment: A Practical Approach</h2>
      
      <p>Achieving strategic alignment is not a one-time event but an ongoing process. Here are key steps to enhance alignment in your organization:</p>
      
      <h3>1. Clarify and Communicate Strategy</h3>
      <p>Start by ensuring your strategy is clear, compelling, and well-communicated. It should articulate not just what you aim to achieve, but why it matters and how success will be measured. Translate strategic objectives into concrete priorities that guide decision-making at all levels.</p>
      
      <h3>2. Assess Current Alignment</h3>
      <p>Conduct a thorough assessment of your current state of alignment. Identify areas where structure, systems, or culture may be at odds with your strategic direction. This assessment should involve input from multiple levels of the organization to capture diverse perspectives.</p>
      
      <h3>3. Redesign for Alignment</h3>
      <p>Based on your assessment, systematically redesign elements that are misaligned with your strategy. This might involve restructuring teams, revamping performance metrics, or implementing new operational systems.</p>
      
      <h3>4. Align Leadership Behaviors</h3>
      <p>Leaders play a critical role in driving alignment through their behaviors, decisions, and communications. Ensure that leaders at all levels understand the strategy and consistently reinforce it through their actions and resource allocation decisions.</p>
      
      <h3>5. Build Alignment Skills</h3>
      <p>Develop the capabilities needed to support your strategy. This might include technical skills, leadership capabilities, or collaborative competencies. Alignment between your strategy and your talent development initiatives is essential for long-term success.</p>
      
      <h3>6. Monitor and Adjust</h3>
      <p>Establish mechanisms to monitor alignment on an ongoing basis. Regular check-ins, clear metrics, and feedback loops help identify when misalignments are emerging so they can be addressed promptly.</p>
      
      <h2>Conclusion</h2>
      
      <p>Strategic alignment is the difference between an organization that consistently executes with excellence and one that struggles to translate strategic intent into operational reality. By thoughtfully aligning structure, systems, and culture with strategy, organizations create the conditions for sustainable success.</p>
      
      <p>The investment in alignment pays dividends through enhanced execution, increased agility, and improved performance. In today's complex and rapidly changing environment, strategic alignment isn't just a nice-to-have—it's a critical capability for organizational success.</p>
    `
  },
  {
    id: 2,
    title: "The Future of Work: Embracing Remote and Hybrid Models",
    excerpt: "Explore the evolving landscape of work arrangements and how organizations can create effective, productive remote and hybrid work environments.",
    category: "Workplace Trends",
    image: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20",
    author: "Michael Chen",
    authorRole: "Director of Organizational Development",
    authorImage: null,
    date: "April 8, 2025",
    readTime: "6 min read",
    tags: ["Remote Work", "Future of Work", "Workplace Culture"],
    content: `<p>This is a placeholder for the full blog content...</p>`
  },
  {
    id: 3,
    title: "Sustainable Business Practices for the 21st Century",
    excerpt: "Learn how integrating sustainability into your business strategy can drive innovation, reduce costs, and create long-term value for stakeholders.",
    category: "Sustainability",
    image: "bg-gradient-to-br from-green-500/20 to-yellow-500/20",
    author: "Dr. Emily Roberts",
    authorRole: "Sustainability Consultant",
    authorImage: null,
    date: "March 30, 2025",
    readTime: "10 min read",
    tags: ["Sustainability", "ESG", "Corporate Responsibility"],
    content: `<p>This is a placeholder for the full blog content...</p>`
  },
  {
    id: 4,
    title: "Effective Change Management in Times of Uncertainty",
    excerpt: "Navigate organizational change successfully with proven strategies for managing resistance, building buy-in, and sustaining momentum.",
    category: "Change Management",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    author: "James Wilson",
    authorRole: "Change Management Specialist",
    authorImage: null,
    date: "March 22, 2025",
    readTime: "7 min read",
    tags: ["Change Management", "Leadership", "Organizational Behavior"],
    content: `<p>This is a placeholder for the full blog content...</p>`
  },
  {
    id: 5,
    title: "Building High-Performing Teams in Diverse Environments",
    excerpt: "Discover strategies for leveraging diversity to create innovative, resilient teams that consistently outperform expectations.",
    category: "Team Development",
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    author: "Angela Williams",
    authorRole: "Team Performance Coach",
    authorImage: null,
    date: "March 14, 2025",
    readTime: "9 min read",
    tags: ["Team Building", "Diversity", "Leadership"],
    content: `<p>This is a placeholder for the full blog content...</p>`
  },
  {
    id: 6,
    title: "Digital Transformation: Beyond the Technology",
    excerpt: "Understand why successful digital transformation depends more on culture, leadership, and people than on technology alone.",
    category: "Digital Transformation",
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    author: "Michael Chen",
    authorRole: "Director of Organizational Development",
    authorImage: null,
    date: "March 5, 2025",
    readTime: "8 min read",
    tags: ["Digital Transformation", "Change Management", "Technology"],
    content: `<p>This is a placeholder for the full blog content...</p>`
  }
];

// Related posts (simplified for demo)
const getRelatedPosts = (currentPostId: number, currentTags: string[]) => {
  // Filter posts that share at least one tag with the current post and aren't the current post
  return blogPosts
    .filter(post => 
      post.id !== currentPostId && 
      post.tags.some(tag => currentTags.includes(tag))
    )
    .slice(0, 3); // Limit to 3 related posts
};

export default function BlogPostPage() {
  // Get post ID from URL
  const [match, params] = useRoute<{ id: string }>("/blog/:id");
  
  if (!match) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Button asChild variant="default">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Button asChild variant="default">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  
  const relatedPosts = getRelatedPosts(post.id, post.tags);
  
  return (
    <>
      {/* Hero Section */}
      <section className={`pt-32 pb-16 ${post.image}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <span className="px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center text-sm text-gray-600 gap-3 md:gap-6">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <User size={16} className="mr-1" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link href="/blog" className="hover:text-primary">Insights</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-primary font-medium">Blog Post</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-10"
              >
                {/* Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <Link key={idx} href={`/blog?tag=${tag}`}>
                        <span className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                          #{tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Social Share */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="text-sm font-medium text-gray-700 flex items-center">
                    <Share2 size={16} className="mr-2" /> Share this article:
                  </span>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 p-0">
                      <Facebook size={16} className="text-blue-600" />
                    </Button>
                    <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 p-0">
                      <Twitter size={16} className="text-blue-400" />
                    </Button>
                    <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 p-0">
                      <Linkedin size={16} className="text-blue-700" />
                    </Button>
                    <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 p-0">
                      <Mail size={16} className="text-gray-600" />
                    </Button>
                  </div>
                </div>
                
                {/* Author Bio */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <Avatar className="h-20 w-20">
                      {post.authorImage ? (
                        <AvatarImage src={post.authorImage} alt={post.author} />
                      ) : (
                        <AvatarFallback className="bg-primary text-white text-xl">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className="text-center md:text-left">
                      <h3 className="font-bold text-lg mb-1">{post.author}</h3>
                      <p className="text-gray-500 text-sm mb-3">{post.authorRole}</p>
                      <p className="text-gray-700">
                        A seasoned expert with extensive experience in consulting and strategic advisory. 
                        Specializes in helping organizations navigate complex challenges and drive transformative change.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Comments Section - Placeholder */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-xl flex items-center">
                      <MessageSquare size={20} className="mr-2" /> Comments (5)
                    </h3>
                    <Button variant="outline" size="sm">
                      <ThumbsUp size={16} className="mr-2" /> Like Article
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-500">Comments are not enabled in this demo version.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Related Posts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 mb-8"
                >
                  <h3 className="font-bold text-xl mb-6">Related Articles</h3>
                  
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-4">
                        <div className={`w-16 h-16 flex-shrink-0 rounded-md ${relatedPost.image}`}></div>
                        <div>
                          <h4 className="font-medium text-gray-900 line-clamp-2 mb-1">
                            <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="text-xs text-gray-500">{relatedPost.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button 
                      asChild
                      variant="ghost" 
                      className="w-full justify-between"
                    >
                      <Link href="/blog">
                        View All Articles <ChevronRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
                
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6 mb-8"
                >
                  <h3 className="font-bold text-xl mb-6">Categories</h3>
                  
                  <div className="space-y-2">
                    {Array.from(new Set(blogPosts.map(p => p.category))).map((category, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <Link href={`/blog?category=${category}`} className="text-gray-700 hover:text-primary transition-colors">
                          {category}
                        </Link>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {blogPosts.filter(p => p.category === category).length}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-primary text-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="font-bold text-xl mb-4">Subscribe</h3>
                  <p className="text-gray-100 text-sm mb-4">
                    Get the latest insights delivered directly to your inbox.
                  </p>
                  <div className="space-y-2">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-3 py-2 text-sm text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      Subscribe
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next/Prev Post Navigation - Could be added here */}
    </>
  );
}