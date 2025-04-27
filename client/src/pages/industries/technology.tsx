import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Cpu, 
  Globe, 
  Code,
  ServerIcon,
  Shield,
  Users,
  Zap,
  LineChart
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function TechnologyPage() {
  const { t } = useI18n();
  
  // Technology solutions
  const techSolutions = [
    {
      title: "Digital Transformation Strategy",
      description: "Comprehensive digital transformation roadmaps to help technology companies adapt to changing market dynamics and leverage emerging technologies.",
      icon: Globe
    },
    {
      title: "Product Strategy & Development",
      description: "Strategic guidance and implementation support for developing innovative tech products and services that address market needs.",
      icon: Code
    },
    {
      title: "Technology Operations Excellence",
      description: "Optimization of IT operations, infrastructure management, and technology delivery models for improved efficiency and resilience.",
      icon: ServerIcon
    },
    {
      title: "Cybersecurity & Risk Management",
      description: "Comprehensive security assessments, strategy development, and implementation to protect technology assets and ensure compliance.",
      icon: Shield
    },
    {
      title: "Technology Talent Development",
      description: "Specialized training and capacity building programs to develop the skills needed in rapidly evolving technology landscapes.",
      icon: Users
    },
    {
      title: "Tech Performance Analytics",
      description: "Data-driven analysis of technology performance metrics to optimize operations and identify improvement opportunities.",
      icon: LineChart
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-600 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Technology Industry Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Strategic consulting and implementation services to help technology companies innovate, scale, and navigate digital disruption in a rapidly evolving marketplace.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Discuss Your Tech Challenges
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
            <span className="text-primary font-medium">{t('industries.technology')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Accelerating Technology Innovation</h2>
              <p className="text-gray-700 mb-4">
                The technology sector is defined by rapid innovation, disruptive business models, and intense competition. Technology companies must continuously evolve their products, services, and operations to maintain market leadership and drive sustainable growth.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we combine deep technology industry knowledge with business strategy expertise to help technology companies of all sizes – from startups to global enterprises – navigate challenges, seize opportunities, and achieve their growth objectives.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're developing new products, optimizing operations, expanding into new markets, or managing digital transformation, our tailored solutions address your specific technology industry challenges and opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request Technology Consultation
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Technology Case Studies
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Technology Industry Challenges We Address</h3>
              <ul className="space-y-4">
                {[
                  "Rapid technological change and innovation management",
                  "Competitive pressure and market differentiation",
                  "Talent acquisition and retention in high-demand skills",
                  "Scaling operations while maintaining agility",
                  "Cybersecurity and data protection requirements",
                  "Regulatory compliance across global markets"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of consulting services tailored to the unique needs of technology companies, 
              from strategy to implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <Button 
                  asChild
                  variant="ghost" 
                  className="p-0 h-auto text-primary flex items-center"
                >
                  <Link href="/contact">
                    Learn more
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Sectors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology Sectors We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our technology expertise spans across various sectors within the tech industry, enabling us to provide specialized solutions for different types of technology companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Software & SaaS",
                description: "Strategy, product development, and go-to-market support for software companies, including SaaS, enterprise software, and consumer applications.",
                icon: Code
              },
              {
                title: "IT Services & Consulting",
                description: "Operational excellence, service delivery optimization, and business development for IT service providers and technology consultancies.",
                icon: Globe
              },
              {
                title: "Hardware & Devices",
                description: "Product strategy, supply chain optimization, and manufacturing excellence for hardware manufacturers and technology device companies.",
                icon: Cpu
              },
              {
                title: "Cloud & Infrastructure",
                description: "Scaling strategies, operational excellence, and service innovation for cloud service providers and infrastructure companies.",
                icon: ServerIcon
              },
              {
                title: "Cybersecurity",
                description: "Product development, market positioning, and growth strategies for cybersecurity technology companies and service providers.",
                icon: Shield
              },
              {
                title: "Emerging Technologies",
                description: "Business model development, market entry, and scaling support for companies in AI, blockchain, IoT, and other emerging tech sectors.",
                icon: Zap
              }
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <sector.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{sector.title}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach to Technology Consulting</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a proven approach that combines industry best practices with cutting-edge methodologies to deliver exceptional results for technology clients.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Innovation-Driven",
                  description: "We embrace innovative thinking and emerging technologies to help our clients stay ahead of the curve in a rapidly evolving industry.",
                  icon: Zap
                },
                {
                  title: "Agile & Adaptive",
                  description: "Our flexible approach allows us to adapt quickly to changing requirements and market conditions, ensuring relevant and timely solutions.",
                  icon: Users
                },
                {
                  title: "Data-Informed",
                  description: "We leverage data analytics and market intelligence to inform strategic decisions and optimize technology operations.",
                  icon: LineChart
                },
                {
                  title: "Future-Focused",
                  description: "We help clients not only address current challenges but also prepare for future industry shifts and technological advancements.",
                  icon: Globe
                }
              ].map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <approach.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <FeaturedInsights 
        title="Insights on Technology" 
        description="Explore our latest thinking on technology innovation, digital transformation, and tech industry trends."
        category="Technology"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Technology Success?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to navigate technology challenges, drive innovation, and achieve sustainable growth in today's competitive landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Discuss Your Technology Needs
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Technology Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 