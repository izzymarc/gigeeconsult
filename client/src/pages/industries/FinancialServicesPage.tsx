import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight,
  Building2, 
  Shield, 
  TrendingUp, 
  Users, 
  LineChart,
  BriefcaseIcon,
  BarChart3,
  DollarSign,
  Landmark
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";

export default function FinancialServicesPage() {
  const { t } = useI18n();
  
  // Expertise areas in financial services
  const expertiseAreas = [
    {
      title: "Digital Transformation",
      description: "We help financial institutions adopt digital technologies to enhance customer experience, streamline operations, and stay competitive in a rapidly evolving landscape.",
      icon: TrendingUp
    },
    {
      title: "Risk Management & Compliance",
      description: "Our expert consultants help you navigate complex regulatory environments, develop robust risk management frameworks, and ensure compliance with evolving standards.",
      icon: Shield
    },
    {
      title: "Operational Efficiency",
      description: "We identify and eliminate inefficiencies in your operations, optimize processes, and implement best practices to reduce costs and improve service delivery.",
      icon: BarChart3
    },
    {
      title: "Talent Strategy & Development",
      description: "We help financial institutions attract, develop, and retain top talent through effective HR strategies, training programs, and organizational development initiatives.",
      icon: Users
    },
    {
      title: "Strategic Planning",
      description: "Our consultants work with you to develop and implement strategic plans that align with your business objectives and respond to market opportunities and challenges.",
      icon: LineChart
    },
    {
      title: "Mergers & Acquisitions",
      description: "We provide end-to-end M&A advisory services, from target identification and due diligence to post-merger integration and value realization.",
      icon: Building2
    }
  ];
  
  // Case studies
  const caseStudies = [
    {
      title: "Digital Transformation for a Leading Bank",
      client: "Major Regional Bank",
      description: "Helped a leading bank modernize its digital infrastructure, resulting in a 40% improvement in customer satisfaction and 25% reduction in operational costs.",
      industry: "Banking",
      icon: DollarSign
    },
    {
      title: "Risk Management Framework Implementation",
      client: "Investment Firm",
      description: "Developed and implemented a comprehensive risk management framework for an investment firm, ensuring regulatory compliance and enhancing decision-making processes.",
      industry: "Investment Management",
      icon: Shield
    },
    {
      title: "Post-Merger Integration Support",
      client: "Insurance Provider",
      description: "Facilitated the successful integration of two major insurance providers, achieving synergy targets ahead of schedule and minimizing business disruption.",
      industry: "Insurance",
      icon: Landmark
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financial Services
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Strategic consulting solutions for banks, investment firms, insurance companies, and fintech startups facing complex industry challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Discuss Your Challenges
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
            <Link href="/industries" className="hover:text-primary">{t('nav.industries')}</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-primary font-medium">{t('industries.financial')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Navigating Complexity in Financial Services</h2>
              <p className="text-gray-700 mb-4">
                The financial services industry is experiencing unprecedented change driven by technological innovation, regulatory shifts, changing customer expectations, and market volatility.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we combine deep industry expertise with innovative thinking to help financial institutions navigate these challenges, improve performance, and position themselves for sustainable growth.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of consultants brings experience across banking, capital markets, asset management, insurance, and fintech, offering tailored solutions to address your specific challenges and opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Talk to Our Experts
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Industry Challenges</h3>
              <ul className="space-y-3">
                {[
                  "Increasing regulatory pressure and compliance costs",
                  "Digital disruption and competition from fintech innovators",
                  "Cybersecurity threats and data protection concerns",
                  "Legacy systems and technological transformation",
                  "Changing customer expectations and demand for personalized services",
                  "Talent acquisition and retention in a competitive market",
                  "Economic uncertainty and market volatility"
                ].map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Financial Services Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We deliver specialized consulting services across the financial services sector, offering solutions tailored to your unique challenges and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore how we've helped financial services organizations overcome challenges and achieve their strategic objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <study.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{study.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">Client: {study.client}</p>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Button 
                    asChild
                    variant="link" 
                    className="text-primary p-0"
                  >
                    <Link href="/case-studies/financial-services">
                      Read full case study
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              asChild
              variant="outline"
              size="lg"
            >
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team & Experts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Financial Services Experts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team brings decades of experience across banking, investment management, insurance, and fintech sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Head of Financial Services",
                bio: "Former banking executive with 15+ years of experience in digital transformation and strategic planning.",
                image: "bg-gradient-to-br from-blue-500/70 to-purple-500/70"
              },
              {
                name: "Michael Chen",
                role: "Risk & Compliance Lead",
                bio: "Certified risk management professional with expertise in regulatory compliance and governance frameworks.",
                image: "bg-gradient-to-br from-teal-500/70 to-blue-500/70"
              },
              {
                name: "Dr. Emily Roberts",
                role: "Fintech Innovation Specialist",
                bio: "Specializes in helping traditional financial institutions adapt to digital disruption and embrace innovation.",
                image: "bg-gradient-to-br from-purple-500/70 to-pink-500/70"
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className={`h-48 ${expert.image} flex items-center justify-center`}>
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{expert.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{expert.role}</p>
                  <p className="text-gray-600">{expert.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Services Organization?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to navigate industry challenges, seize opportunities, and achieve sustainable growth in today's competitive landscape.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link href="/contact">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
} 