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
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Discover how we've helped organizations achieve measurable results through our consulting, training, and project management services.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Start Your Success Story</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example case studies - replace with dynamic data as needed */}
            {[
              {
                title: "Digital Transformation for a Leading Bank",
                description: "How we guided a major financial institution through a successful digital transformation, improving customer experience and operational efficiency.",
                href: "/case-studies/digital-transformation-bank"
              },
              {
                title: "Capacity Building in Healthcare",
                description: "Our training programs empowered healthcare professionals to deliver better patient outcomes and adapt to new technologies.",
                href: "/case-studies/healthcare-capacity-building"
              },
              {
                title: "Supply Chain Optimization for Retailer",
                description: "We helped a national retailer streamline their supply chain, reducing costs and improving delivery times.",
                href: "/case-studies/retail-supply-chain"
              }
            ].map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 text-left flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{cs.title}</h3>
                  <p className="text-gray-600 mb-4">{cs.description}</p>
                </div>
                <Button asChild variant="ghost" className="p-0 h-auto text-primary flex items-center self-end">
                  <Link href={cs.href}>
                    Read More
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn how we can help your organization achieve its goals.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
} 