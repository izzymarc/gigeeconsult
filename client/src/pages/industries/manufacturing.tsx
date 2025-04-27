import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Factory, 
  Cog, 
  TrendingUp,
  Truck,
  LineChart,
  Users,
  Workflow,
  ShieldCheck
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function ManufacturingPage() {
  const { t } = useI18n();
  
  // Manufacturing solutions
  const manufacturingSolutions = [
    {
      title: "Operational Excellence",
      description: "Process optimization, lean manufacturing implementation, and continuous improvement programs to enhance efficiency and productivity.",
      icon: Factory
    },
    {
      title: "Digital Manufacturing",
      description: "Smart factory solutions, IoT integration, and digital transformation strategies to modernize manufacturing operations.",
      icon: Cog
    },
    {
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain solutions to improve resilience, reduce costs, and enhance coordination with suppliers and distributors.",
      icon: Truck
    },
    {
      title: "Quality & Compliance",
      description: "Quality management systems, compliance frameworks, and certification support to ensure adherence to industry standards and regulations.",
      icon: ShieldCheck
    },
    {
      title: "Manufacturing Analytics",
      description: "Data-driven solutions for production monitoring, predictive maintenance, and performance optimization across manufacturing operations.",
      icon: LineChart
    },
    {
      title: "Workforce Development",
      description: "Specialized training and capability building programs for manufacturing personnel to address skill gaps and enhance productivity.",
      icon: Users
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
                Manufacturing Industry Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Strategic consulting and implementation services to help manufacturers optimize operations, embrace innovation, and achieve sustainable growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Discuss Your Manufacturing Challenges
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
            <span className="text-primary font-medium">{t('industries.manufacturing')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Transforming Manufacturing for the Future</h2>
              <p className="text-gray-700 mb-4">
                Today's manufacturing landscape is experiencing significant transformation, driven by technological innovation, changing consumer demands, supply chain challenges, and sustainability imperatives. Manufacturers face both challenges and opportunities as they navigate this complex environment.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we help manufacturers address these challenges with practical solutions that enhance operational efficiency, drive innovation, and create sustainable competitive advantage. Our manufacturing industry expertise spans across sectors, processes, and geographies.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're implementing lean manufacturing principles, digitizing operations, optimizing your supply chain, or developing new capabilities, our tailored solutions address your specific manufacturing challenges and opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request Manufacturing Consultation
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Manufacturing Case Studies
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Manufacturing Challenges We Address</h3>
              <ul className="space-y-4">
                {[
                  "Operational efficiency and cost optimization",
                  "Digital transformation and Industry 4.0 adoption",
                  "Supply chain resilience and flexibility",
                  "Quality management and regulatory compliance",
                  "Workforce development and skills gaps",
                  "Sustainability and environmental impact reduction"
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
            <h2 className="text-3xl font-bold mb-4">Our Manufacturing Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of consulting services tailored to the unique needs of manufacturers,
              from strategy to implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingSolutions.map((solution, index) => (
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

      {/* Manufacturing Sectors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Manufacturing Sectors We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our manufacturing expertise spans across various sectors, enabling us to provide specialized solutions for different types of manufacturers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Automotive & Transportation",
                description: "Strategic and operational solutions for automotive manufacturers and suppliers addressing quality, efficiency, and innovation challenges.",
                icon: Truck
              },
              {
                title: "Industrial Equipment",
                description: "Specialized services for industrial equipment manufacturers focusing on product innovation, operational excellence, and service-based business models.",
                icon: Cog
              },
              {
                title: "Consumer Goods",
                description: "Solutions for consumer goods manufacturers managing rapid product lifecycles, supply chain complexity, and changing consumer preferences.",
                icon: ShieldCheck
              },
              {
                title: "Electronics & High-Tech",
                description: "Strategic support for electronics manufacturers addressing product innovation, supply chain resilience, and manufacturing agility.",
                icon: Factory
              },
              {
                title: "Food & Beverage",
                description: "Specialized solutions for food and beverage processors focusing on quality, safety, compliance, and operational efficiency.",
                icon: Workflow
              },
              {
                title: "Industrial Materials",
                description: "Advisory and implementation services for materials manufacturers addressing efficiency, sustainability, and market adaptation.",
                icon: TrendingUp
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

      {/* Featured Insights Section */}
      <FeaturedInsights 
        title="Insights on Manufacturing" 
        description="Explore our latest thinking on manufacturing excellence, digital transformation, and industrial innovation."
        category="Manufacturing"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to navigate manufacturing challenges, optimize operations, and drive sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Discuss Your Manufacturing Needs
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Manufacturing Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 