import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Search, 
  Filter, 
  Building2, 
  Stethoscope, 
  ShoppingBag, 
  Factory, 
  Leaf, 
  Network,
  GraduationCap,
  Briefcase,
  BadgeCheck,
  DollarSign,
  LightbulbIcon,
  Download,
  FileText,
  BarChart3
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useI18n } from "../lib/i18n/i18n-provider";

// Case Studies data
const caseStudies = [
  {
    id: 1,
    title: "Digital Transformation Strategy for a Leading Bank",
    client: "Major Regional Bank",
    industry: "Financial Services",
    industryIcon: Building2,
    challenge: "The client faced increasing competition from digital-first fintech companies and needed to modernize its operations and customer experience.",
    solution: "We developed a comprehensive digital transformation roadmap, implemented core system upgrades, and created a mobile-first customer experience strategy.",
    results: [
      "40% increase in customer satisfaction scores",
      "25% reduction in operational costs",
      "60% growth in mobile banking adoption",
      "Successful launch of 3 new digital products"
    ],
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    featured: true,
  },
  {
    id: 2,
    title: "Supply Chain Optimization for Healthcare Provider",
    client: "Multi-Regional Hospital Network",
    industry: "Healthcare",
    industryIcon: Stethoscope,
    challenge: "The client struggled with inefficient supply chain processes, leading to inventory shortages, excess costs, and clinical staff frustration.",
    solution: "We redesigned the end-to-end supply chain, implemented inventory management technology, and established vendor collaboration protocols.",
    results: [
      "32% reduction in inventory costs",
      "99.8% critical item availability (up from 92%)",
      "45% decrease in rush orders",
      "$4.2M annual savings"
    ],
    image: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20",
    featured: true,
  },
  {
    id: 3,
    title: "Organizational Restructuring for Manufacturing Company",
    client: "Global Manufacturing Firm",
    industry: "Manufacturing",
    industryIcon: Factory,
    challenge: "Following a series of acquisitions, the client needed to restructure its organization to eliminate redundancies and improve operational efficiency.",
    solution: "We designed a new organizational structure, developed role clarity, and implemented change management processes to ensure smooth transition.",
    results: [
      "22% reduction in management overhead",
      "Streamlined reporting structure with clear accountability",
      "Improved cross-functional collaboration",
      "15% increase in employee engagement scores"
    ],
    image: "bg-gradient-to-br from-gray-500/20 to-gray-700/20",
    featured: false,
  },
  {
    id: 4,
    title: "Market Entry Strategy for Technology Startup",
    client: "Emerging EdTech Company",
    industry: "Technology",
    industryIcon: Network,
    challenge: "The client had developed an innovative educational technology platform but lacked a clear strategy for market entry and scaling.",
    solution: "We developed a go-to-market strategy, identified target customer segments, and created a roadmap for platform scaling and partnership development.",
    results: [
      "Successful launch in 3 key markets",
      "40% month-over-month user growth in first year",
      "Strategic partnerships with 5 major educational institutions",
      "Secured Series A funding of $12M"
    ],
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    featured: false,
  },
  {
    id: 5,
    title: "Sustainability Initiative for Retail Chain",
    client: "National Retail Brand",
    industry: "Retail",
    industryIcon: ShoppingBag,
    challenge: "The client wanted to improve its sustainability practices while maintaining profitability and enhancing brand reputation.",
    solution: "We developed a comprehensive sustainability strategy, including supply chain improvements, packaging redesign, and energy efficiency initiatives.",
    results: [
      "30% reduction in carbon footprint",
      "100% sustainable packaging implemented",
      "15% decrease in energy costs",
      "Significant improvement in brand perception metrics"
    ],
    image: "bg-gradient-to-br from-green-500/20 to-yellow-500/20",
    featured: true,
  },
  {
    id: 6,
    title: "Talent Development Program for Energy Company",
    client: "Multinational Energy Corporation",
    industry: "Energy",
    industryIcon: Leaf,
    challenge: "The client faced a skills gap and succession planning challenges as experienced personnel approached retirement age.",
    solution: "We designed a comprehensive talent development program, including skills assessment, targeted training, and leadership development pathways.",
    results: [
      "95% retention rate for high-potential employees",
      "Successful knowledge transfer from retiring experts",
      "40% of key positions filled through internal promotion",
      "Improved leadership capabilities across all levels"
    ],
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    featured: false,
  }
];

// Filter categories
const industries = [
  "All Industries",
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Technology",
  "Retail",
  "Energy"
];

export default function CaseStudiesPage() {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  // Filter case studies based on search query and selected industry
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesIndustry = selectedIndustry === "All Industries" || study.industry === selectedIndustry;
    
    return matchesSearch && matchesIndustry;
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
                Client Success Stories
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Explore our portfolio of successful client engagements across diverse industries, showcasing our expertise in solving complex business challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90"
                >
                  <Link href="/contact">
                    Discuss Your Project
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
            <span className="text-primary font-medium">{t('nav.caseStudies')}</span>
          </div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Success Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className={`h-48 ${study.image} flex items-center justify-center p-6`}>
                  <study.industryIcon size={64} className="text-primary/60" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center gap-1">
                        <BadgeCheck size={12} />
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.challenge.substring(0, 100)}...</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Client: {study.client}
                    </div>
                    <Button 
                      asChild
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-dark hover:bg-primary/5"
                    >
                      <Link href={`/case-studies/${study.id}`}>
                        Read full story
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Filter size={18} className="mr-2 text-primary" />
              Find Case Studies
            </h3>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search by title, client, or industry..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-shrink-0">
                <Tabs defaultValue="All Industries" className="w-full md:w-auto">
                  <TabsList className="grid grid-cols-2 md:flex md:flex-wrap h-auto">
                    {industries.map((industry) => (
                      <TabsTrigger
                        key={industry}
                        value={industry}
                        onClick={() => setSelectedIndustry(industry)}
                        className="text-xs md:text-sm"
                      >
                        {industry}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">All Case Studies</h2>
            <div className="text-sm text-gray-500">
              Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
            </div>
          </div>
          
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <study.industryIcon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{study.title}</h3>
                    <p className="text-sm text-gray-700 mb-2">Client: {study.client}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-600 mb-3">{study.challenge.substring(0, 120)}...</p>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Key Results:</h4>
                      <ul className="text-sm text-gray-600 mb-4 space-y-1 pl-5 list-disc">
                        {study.results.slice(0, 2).map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                        {study.results.length > 2 && <li>And more...</li>}
                      </ul>
                    </div>
                    <Button 
                      asChild
                      variant="link" 
                      className="text-primary p-0 h-auto flex items-center"
                    >
                      <Link href={`/case-studies/${study.id}`}>
                        Read full case study
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-100">
              <FileText size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No case studies found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria.</p>
              <Button variant="outline" onClick={() => {setSearchQuery(""); setSelectedIndustry("All Industries");}}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Additional Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our in-depth case studies, white papers, and industry reports for more insights into our work and methodology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Industry Benchmark Reports",
                description: "Access our comprehensive industry benchmark reports covering key performance metrics across various sectors.",
                icon: BarChart3,
                link: "/resources/benchmark-reports"
              },
              {
                title: "Methodology White Papers",
                description: "Dive into our approach and methodologies through detailed white papers written by our expert consultants.",
                icon: LightbulbIcon,
                link: "/resources/white-papers"
              },
              {
                title: "Client Testimonials",
                description: "Hear directly from our clients about their experience working with GIGEE Consult and the results achieved.",
                icon: Briefcase,
                link: "/testimonials"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button 
                  asChild
                  variant="link" 
                  className="text-primary p-0 h-auto flex items-center"
                >
                  <Link href={resource.link}>
                    Explore resources
                    <Download size={16} className="ml-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to transform your challenges into opportunities and achieve measurable results for your organization.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link href="/contact">
              Start the Conversation
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
} 