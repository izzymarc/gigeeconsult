import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Search, 
  Filter, 
  TrendingUp, 
  BookOpen, 
  LineChart,
  BarChart3,
  PenTool,
  Briefcase,
  Globe,
  Lightbulb
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useI18n } from "../lib/i18n/i18n-provider";
import FeaturedInsights from "../components/insights/FeaturedInsights";

// Insights data
export const insights = [
  {
    id: 1,
    title: "Strategic Business Transformation in the Digital Age",
    excerpt: "Explore how businesses can adapt to rapid technological changes and transform their operations for sustainable growth.",
    category: "Strategy",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    author: "Dr. Michael Campbell",
    date: "May 15, 2023",
    readTime: "10 min read",
    tags: ["Digital Transformation", "Strategy", "Growth"],
    icon: LineChart,
    content: `
      <h2>Strategic Business Transformation in the Digital Age</h2>
      <p>In today's rapidly evolving business landscape, digital transformation has become a strategic imperative rather than just an option for growth. Organizations across industries are facing unprecedented disruption from technological advancements, changing customer expectations, and new business models. To remain competitive and drive sustainable growth, businesses must embrace digital transformation as a core component of their strategy.</p>
      
      <h3>Understanding Digital Transformation</h3>
      <p>Digital transformation is more than just implementing new technologies or digitizing existing processes. It represents a fundamental rethinking of how an organization uses technology, people, and processes to radically change business performance. This transformation touches every aspect of the business, from customer experience and operational processes to business models and organizational culture.</p>
      
      <h3>Key Elements of Successful Digital Transformation</h3>
      <ul>
        <li><strong>Customer-Centric Approach:</strong> Successful digital transformation begins with understanding customer needs and expectations. By leveraging data analytics and customer insights, organizations can create personalized experiences that drive loyalty and growth.</li>
        <li><strong>Agile Operating Model:</strong> Traditional hierarchical structures often impede innovation and quick decision-making. Adopting agile methodologies enables organizations to respond rapidly to market changes and customer feedback.</li>
        <li><strong>Data-Driven Decision Making:</strong> In the digital age, data is a strategic asset. Organizations must build capabilities to collect, analyze, and derive insights from data to make informed decisions and identify new opportunities.</li>
        <li><strong>Technology Integration:</strong> While technology is an enabler, successful transformation requires integration across systems, departments, and channels to create a seamless experience for customers and employees.</li>
        <li><strong>Cultural Alignment:</strong> Perhaps the most challenging aspect of digital transformation is cultivating a culture that embraces change, innovation, and continuous learning.</li>
      </ul>
      
      <h3>Strategic Approaches to Digital Transformation</h3>
      <p>Organizations can approach digital transformation through various strategic lenses:</p>
      
      <h4>1. Business Model Transformation</h4>
      <p>This involves fundamentally changing how a company creates, delivers, and captures value. Examples include transitioning from product-based to service-based models, implementing subscription models, or creating digital marketplaces.</p>
      
      <h4>2. Domain Transformation</h4>
      <p>Organizations can leverage their existing capabilities to enter new markets or domains. For instance, a retailer might use its logistics expertise to offer fulfillment services to third parties.</p>
      
      <h4>3. Cultural/Organizational Transformation</h4>
      <p>This focuses on changing the mindset, processes, and structure of an organization to become more agile, innovative, and customer-centric.</p>
      
      <h4>4. Process Transformation</h4>
      <p>Process transformation involves using technology to improve operational efficiency, reduce costs, and enhance quality through automation, AI, and data analytics.</p>
      
      <h3>Implementation Roadmap</h3>
      <p>A successful digital transformation journey typically includes the following steps:</p>
      <ol>
        <li>Develop a clear vision and strategy aligned with business objectives</li>
        <li>Assess current capabilities and identify gaps</li>
        <li>Prioritize initiatives based on business impact and feasibility</li>
        <li>Build a cross-functional team to lead the transformation</li>
        <li>Implement changes iteratively with continuous feedback</li>
        <li>Measure progress using well-defined metrics</li>
        <li>Scale successful pilots across the organization</li>
      </ol>
      
      <h3>Overcoming Common Challenges</h3>
      <p>Digital transformation initiatives often face several challenges:</p>
      <ul>
        <li><strong>Resistance to Change:</strong> Employees may resist new ways of working due to fear of job loss or lack of necessary skills.</li>
        <li><strong>Legacy Systems:</strong> Outdated technology infrastructure can impede integration and innovation.</li>
        <li><strong>Siloed Organizations:</strong> Departmental silos can create barriers to collaboration and data sharing.</li>
        <li><strong>Lack of Digital Skills:</strong> Organizations may struggle to attract and retain talent with the necessary digital capabilities.</li>
        <li><strong>Short-Term Focus:</strong> Pressure for immediate results can undermine long-term transformation efforts.</li>
      </ul>
      
      <p>To overcome these challenges, organizations should invest in change management, provide continuous learning opportunities, modernize core systems, promote cross-functional collaboration, and maintain a balance between short-term wins and long-term goals.</p>
      
      <h3>Conclusion</h3>
      <p>Digital transformation is not a one-time project but a continuous journey of adaptation and innovation. By taking a strategic approach to digital transformation, organizations can not only survive in the digital age but thrive by creating new sources of value, improving operational efficiency, and delivering exceptional customer experiences. The key to success lies in aligning technology investments with business strategy, fostering a culture of innovation, and maintaining a relentless focus on customer needs.</p>
    `
  },
  {
    id: 2,
    title: "Building Resilient Supply Chains: Lessons from Global Disruptions",
    excerpt: "Learn key strategies to build robust supply chains that can withstand global disruptions and maintain operational efficiency.",
    category: "Operations",
    image: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20",
    author: "Jessica Wong",
    date: "April 28, 2023",
    readTime: "8 min read",
    tags: ["Supply Chain", "Resilience", "Operations"],
    icon: Globe,
    content: `
      <h2>Building Resilient Supply Chains: Lessons from Global Disruptions</h2>
      <p>Recent global events have exposed vulnerabilities in supply chains across industries, emphasizing the critical need for resilience. This article explores strategies for building supply chains that can withstand disruptions while maintaining operational efficiency.</p>
      
      <h3>Key Components of Supply Chain Resilience</h3>
      <ul>
        <li><strong>Visibility and Transparency:</strong> Implementing end-to-end visibility across the supply chain</li>
        <li><strong>Diversification:</strong> Reducing dependency on single sources or regions</li>
        <li><strong>Flexibility:</strong> Building adaptable processes and partnerships</li>
        <li><strong>Risk Management:</strong> Developing comprehensive risk assessment frameworks</li>
      </ul>
      
      <h3>Technological Enablers</h3>
      <p>Advanced technologies playing a crucial role in supply chain resilience include blockchain for transparency, AI for forecasting, and IoT for real-time monitoring.</p>
      
      <h3>Case Studies</h3>
      <p>Examples of organizations that successfully navigated recent disruptions by implementing resilient supply chain practices.</p>
      
      <h3>Implementation Framework</h3>
      <p>A step-by-step approach to assess current vulnerabilities and implement resilience strategies in your supply chain.</p>
    `
  },
  {
    id: 3,
    title: "The Future of Work: Embracing Remote and Hybrid Models",
    excerpt: "Discover effective strategies for implementing and managing remote and hybrid work models in your organization.",
    category: "Leadership",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    author: "Jonathan Peters",
    date: "April 10, 2023",
    readTime: "7 min read",
    tags: ["Remote Work", "Leadership", "Future of Work"],
    icon: Briefcase,
    content: `
      <h2>The Future of Work: Embracing Remote and Hybrid Models</h2>
      <p>The workplace has undergone a paradigm shift, with remote and hybrid models becoming mainstream. This article explores strategies for effectively implementing and managing these new work models.</p>
      
      <h3>Benefits and Challenges</h3>
      <p>An analysis of the advantages of remote and hybrid work arrangements, as well as the challenges organizations face in implementation.</p>
      
      <h3>Best Practices for Implementation</h3>
      <ul>
        <li>Establishing clear communication protocols</li>
        <li>Designing effective performance management systems</li>
        <li>Creating inclusive virtual environments</li>
        <li>Managing team cohesion and culture</li>
      </ul>
      
      <h3>Technology Infrastructure</h3>
      <p>Essential tools and platforms to support remote and hybrid work models, ensuring security, collaboration, and productivity.</p>
      
      <h3>Leadership Approaches</h3>
      <p>How leadership styles and methods must evolve to effectively manage distributed teams and maintain organizational culture.</p>
    `
  },
  {
    id: 4,
    title: "Sustainable Business Practices for Long-term Growth",
    excerpt: "How integrating sustainability into your business strategy can drive innovation, reduce costs, and create value.",
    category: "Sustainability",
    image: "bg-gradient-to-br from-green-500/20 to-yellow-500/20",
    author: "Dr. Emily Roberts",
    date: "March 22, 2023",
    readTime: "9 min read",
    tags: ["Sustainability", "ESG", "Growth Strategy"],
    icon: BarChart3,
    content: `
      <h2>Sustainable Business Practices for Long-term Growth</h2>
      <p>Sustainability has evolved from a corporate social responsibility initiative to a strategic business imperative. This article explores how organizations can integrate sustainability into their core strategy.</p>
      
      <h3>The Business Case for Sustainability</h3>
      <p>How sustainable practices drive financial performance through cost reduction, risk mitigation, innovation, and enhanced brand value.</p>
      
      <h3>Key Sustainability Frameworks</h3>
      <p>Overview of ESG (Environmental, Social, Governance) criteria and other frameworks for measuring and reporting sustainability performance.</p>
      
      <h3>Implementation Strategies</h3>
      <ul>
        <li>Supply chain sustainability initiatives</li>
        <li>Circular economy models</li>
        <li>Renewable energy adoption</li>
        <li>Sustainable product design</li>
      </ul>
      
      <h3>Measuring Impact</h3>
      <p>Approaches to quantifying the business impact of sustainability initiatives and communicating results to stakeholders.</p>
    `
  },
  {
    id: 5,
    title: "Data-Driven Decision Making: A Framework for Executives",
    excerpt: "A comprehensive framework for leveraging data analytics to make better strategic decisions and drive business results.",
    category: "Analytics",
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    author: "Dr. Samuel Johnson",
    date: "March 15, 2023",
    readTime: "12 min read",
    tags: ["Data Analytics", "Decision Making", "Strategy"],
    icon: PenTool,
    content: `
      <h2>Data-Driven Decision Making: A Framework for Executives</h2>
      <p>In the era of big data, the ability to derive insights from information is a critical competitive advantage. This article presents a framework for executives to implement data-driven decision making.</p>
      
      <h3>Creating a Data Strategy</h3>
      <p>How to align data initiatives with business objectives and build the necessary infrastructure and governance frameworks.</p>
      
      <h3>Building Analytical Capabilities</h3>
      <p>Approaches to developing the right mix of talent, tools, and technologies to extract actionable insights from data.</p>
      
      <h3>Decision-Making Framework</h3>
      <p>A structured approach to incorporating data insights into the decision-making process while balancing analytical and intuitive thinking.</p>
      
      <h3>Overcoming Implementation Challenges</h3>
      <p>Strategies for addressing common obstacles in the journey toward data-driven decision making, including cultural resistance and data quality issues.</p>
    `
  },
  {
    id: 6,
    title: "Innovation Culture: How to Foster Creativity in Organizations",
    excerpt: "Strategies for building an innovation culture that encourages creative thinking and problem-solving across your organization.",
    category: "Innovation",
    image: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
    author: "Maria Chen",
    date: "February 28, 2023",
    readTime: "8 min read",
    tags: ["Innovation", "Creativity", "Organizational Culture"],
    icon: Lightbulb,
    content: `
      <h2>Innovation Culture: How to Foster Creativity in Organizations</h2>
      <p>Innovation is increasingly the primary source of competitive advantage. This article explores how organizations can foster a culture that encourages creativity and innovation.</p>
      
      <h3>Elements of an Innovation Culture</h3>
      <p>The key components that create an environment where innovative thinking can flourish, including psychological safety, autonomy, and resource allocation.</p>
      
      <h3>Leadership for Innovation</h3>
      <p>How leaders can model and encourage innovative thinking, including approaches to risk tolerance and failure management.</p>
      
      <h3>Innovation Processes and Systems</h3>
      <ul>
        <li>Idea generation and management systems</li>
        <li>Cross-functional collaboration methods</li>
        <li>Incubation and acceleration programs</li>
        <li>Innovation metrics and incentives</li>
      </ul>
      
      <h3>Case Studies</h3>
      <p>Examples of organizations that have successfully transformed their cultures to drive innovation and achieve significant business results.</p>
    `
  }
];

// Categories for filtering
const categories = [
  "All",
  "Strategy",
  "Leadership",
  "Operations",
  "Analytics",
  "Innovation",
  "Sustainability"
];

export default function InsightsPage() {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Get category and search from URL parameters
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category');
  const searchParam = params.get('search');
  
  // Set selected category and search from URL parameters on mount
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [categoryParam, searchParam]);

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    // Update URL without reloading the page
    const url = new URL(window.location.href);
    if (category === "All") {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url.toString());
  };
  
  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Update URL after a short delay
    const url = new URL(window.location.href);
    if (query) {
      url.searchParams.set('search', query);
    } else {
      url.searchParams.delete('search');
    }
    window.history.pushState({}, '', url.toString());
  };

  // Filter insights based on search query and category
  const filteredInsights = insights.filter(insight => {
    const matchesSearch = 
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || insight.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Thought Leadership</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Explore our latest articles, research, and expert perspectives on strategy, operations, technology, and industry trends.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Insights */}
      <FeaturedInsights 
        title="Featured Insights" 
        description="Handpicked articles and research from our team of experts."
        showViewAll={false}
      />

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Strategy", href: "/insights/category/strategy" },
              { label: "Operations", href: "/insights/category/operations" },
              { label: "Technology", href: "/insights/category/technology" },
              { label: "Leadership", href: "/insights/category/leadership" },
              { label: "Healthcare", href: "/insights/category/healthcare" },
              { label: "Retail", href: "/insights/category/retail" },
              { label: "Sustainability", href: "/insights/category/sustainability" },
              { label: "Analytics", href: "/insights/category/analytics" },
              { label: "Future of Work", href: "/insights/category/future-of-work" },
              { label: "Supply Chain", href: "/insights/category/supply-chain" },
              { label: "Digital Transformation", href: "/insights/category/digital-transformation" },
            ].map((cat) => (
              <Button asChild key={cat.href} variant="outline" className="text-primary border-primary">
                <Link href={cat.href}>{cat.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Question or Want to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reach out to our team for custom research, interviews, or to discuss your organization's unique challenges.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
} 