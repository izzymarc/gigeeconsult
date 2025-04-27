import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Building2, 
  LightbulbIcon, 
  Stethoscope, 
  ShoppingBag, 
  Factory, 
  Leaf,
  Network,
  GraduationCap,
  Globe,
  Building
} from "lucide-react";
import { useI18n } from "../lib/i18n/i18n-provider";

export default function IndustriesPage() {
  const { t } = useI18n();

  // Industries data
  const industries = [
    {
      id: "financial-services",
      title: t('industries.financial'),
      description: "Strategic solutions for banks, investment firms, insurance companies, and fintech startups navigating complex industry challenges.",
      icon: Building2,
      color: "bg-blue-500",
      href: "/industries/financial-services"
    },
    {
      id: "healthcare",
      title: t('industries.healthcare'),
      description: "Consulting services for healthcare providers, pharmaceutical companies, and life sciences organizations seeking operational excellence.",
      icon: Stethoscope,
      color: "bg-teal-500",
      href: "/industries/healthcare"
    },
    {
      id: "technology",
      title: t('industries.technology'),
      description: "Expert guidance for technology companies and media organizations in rapidly evolving markets and digital landscapes.",
      icon: Network,
      color: "bg-indigo-500",
      href: "/industries/technology"
    },
    {
      id: "retail",
      title: t('industries.retail'),
      description: "Transformative strategies for retail businesses and consumer goods companies facing changing consumer behaviors and digital disruption.",
      icon: ShoppingBag,
      color: "bg-orange-500",
      href: "/industries/retail"
    },
    {
      id: "manufacturing",
      title: t('industries.manufacturing'),
      description: "Operational improvement and digital transformation for manufacturing organizations in competitive global markets.",
      icon: Factory,
      color: "bg-gray-700",
      href: "/industries/manufacturing"
    },
    {
      id: "energy",
      title: t('industries.energy'),
      description: "Forward-thinking solutions for energy companies navigating sustainability challenges and evolving regulatory environments.",
      icon: Leaf,
      color: "bg-green-500",
      href: "/industries/energy"
    },
    {
      id: "education",
      title: "Education",
      description: "Strategic consulting for educational institutions adapting to changing learning environments and student expectations.",
      icon: GraduationCap,
      color: "bg-purple-500",
      href: "/industries/education"
    },
    {
      id: "government",
      title: "Government & Public Sector",
      description: "Specialized services for government agencies and public organizations focused on efficiency, transparency, and citizen service.",
      icon: Building,
      color: "bg-red-500",
      href: "/industries/government"
    },
    {
      id: "non-profit",
      title: "Non-Profit & NGO",
      description: "Impact-focused consulting for non-profit organizations and NGOs seeking to maximize their effectiveness and reach.",
      icon: Globe,
      color: "bg-yellow-500",
      href: "/industries/non-profit"
    }
  ];

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
                Industries We Serve
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                We bring deep industry expertise and tailored consulting solutions to address the unique challenges and opportunities across diverse sectors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90"
                >
                  <Link href="/contact">
                    Discuss Your Industry Challenges
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
            <span className="text-primary font-medium">{t('nav.industries')}</span>
          </div>
        </div>
      </div>

      {/* Industries Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`h-2 ${industry.color}`}></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <industry.icon className={`h-6 w-6 ${industry.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Button 
                    asChild
                    variant="ghost" 
                    className="text-primary hover:text-primary-dark p-0"
                  >
                    <Link href={industry.href}>
                      Learn more
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cross-Industry Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond our industry-specific knowledge, we offer specialized expertise that drives value across all sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Transformation",
                description: "We help organizations across all industries leverage digital technologies to improve operations, enhance customer experiences, and create new business models.",
                icon: Network,
                iconColor: "text-indigo-500"
              },
              {
                title: "Operational Excellence",
                description: "Our consultants identify inefficiencies, optimize processes, and implement continuous improvement methodologies to enhance productivity and reduce costs.",
                icon: LightbulbIcon,
                iconColor: "text-yellow-500"
              },
              {
                title: "Sustainability",
                description: "We support organizations in developing and implementing sustainability strategies that create long-term value while addressing environmental and social challenges.",
                icon: Leaf,
                iconColor: "text-green-500"
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <expertise.icon className={`h-6 w-6 ${expertise.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{expertise.title}</h3>
                <p className="text-gray-600">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Industry Approach</h2>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we understand that each industry faces unique challenges and opportunities. Our approach combines deep industry knowledge with proven methodologies to deliver tailored solutions that drive real results.
              </p>
              <p className="text-gray-700 mb-6">
                We maintain specialized industry teams led by consultants with extensive experience in their respective sectors. This ensures that our clients benefit from both broad consulting expertise and industry-specific insights.
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  "Industry-specific research and market analysis",
                  "Customized frameworks and methodologies aligned with sector challenges",
                  "Benchmarking against industry best practices",
                  "Access to specialized industry networks and partnerships",
                  "Implementation support tailored to industry constraints and opportunities"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-3">
                      <ChevronRight className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild
                variant="default"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/about">
                  Learn More About Our Approach
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Industries Served", value: "15+" },
                { label: "Industry Specialists", value: "40+" },
                { label: "Years of Experience", value: "20+" },
                { label: "Client Success Rate", value: "98%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to navigate industry challenges, seize opportunities, and achieve sustainable growth in today's competitive landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Contact Our Industry Experts
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 