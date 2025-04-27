import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Zap, 
  Lightbulb, 
  Wind,
  Globe,
  BarChart,
  Users,
  LineChart,
  ShieldCheck
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function EnergyPage() {
  const { t } = useI18n();
  
  // Energy solutions
  const energySolutions = [
    {
      title: "Energy Transition Strategy",
      description: "Strategic advisory services to help energy companies navigate the transition to low-carbon and renewable energy sources.",
      icon: Wind
    },
    {
      title: "Energy Operations Excellence",
      description: "Process optimization and efficiency initiatives for energy generation, transmission, distribution, and retail operations.",
      icon: Zap
    },
    {
      title: "Smart Energy & Digitalization",
      description: "Digital transformation solutions, including smart grid technologies, IoT integration, and data analytics for energy companies.",
      icon: Lightbulb
    },
    {
      title: "Energy Regulatory Compliance",
      description: "Advisory and implementation support for navigating complex regulatory environments and compliance requirements in the energy sector.",
      icon: ShieldCheck
    },
    {
      title: "Energy Market Analysis",
      description: "Data-driven market intelligence and forecasting to inform strategic decisions and investment planning.",
      icon: BarChart
    },
    {
      title: "Energy Workforce Development",
      description: "Specialized training and capability building programs to develop the skills needed for the future energy landscape.",
      icon: Users
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-600 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Energy Industry Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Strategic consulting and implementation services to help energy companies navigate market transitions, operational challenges, and the path to a sustainable future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Discuss Your Energy Challenges
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
            <span className="text-primary font-medium">{t('industries.energy')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Powering the Energy Transition</h2>
              <p className="text-gray-700 mb-4">
                The energy industry is undergoing a profound transformation, driven by the imperative to reduce carbon emissions, the rise of renewable energy, technological innovation, and evolving regulatory landscapes. Energy companies face both challenges and opportunities as they navigate this complex environment.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we help energy companies address these challenges with practical solutions that enhance operational efficiency, drive innovation, and create sustainable competitive advantage. Our energy industry expertise spans across the value chain, from generation and transmission to distribution and retail.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're developing renewable energy strategies, optimizing existing operations, navigating regulatory requirements, or planning for the future energy landscape, our tailored solutions address your specific challenges and opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request Energy Consultation
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Energy Case Studies
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Energy Industry Challenges We Address</h3>
              <ul className="space-y-4">
                {[
                  "Energy transition and decarbonization strategies",
                  "Operational efficiency and cost optimization",
                  "Regulatory compliance and policy navigation",
                  "Energy market volatility and risk management",
                  "Digital transformation and smart energy systems",
                  "Infrastructure resilience and grid modernization"
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
            <h2 className="text-3xl font-bold mb-4">Our Energy Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of consulting services tailored to the unique needs of energy companies,
              from strategy to implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {energySolutions.map((solution, index) => (
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

      {/* Energy Segments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Energy Segments We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our energy expertise spans across various segments of the energy industry, enabling us to provide specialized solutions for different types of energy companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Renewable Energy",
                description: "Strategy, development, and operational support for solar, wind, hydro, and other renewable energy providers navigating growth and integration challenges.",
                icon: Wind
              },
              {
                title: "Power Generation",
                description: "Performance optimization, emission reduction, and transformation strategies for conventional power generation companies.",
                icon: Zap
              },
              {
                title: "Transmission & Distribution",
                description: "Grid modernization, resilience enhancement, and digital transformation for electric transmission and distribution utilities.",
                icon: Lightbulb
              },
              {
                title: "Oil & Gas",
                description: "Strategic transition, operational excellence, and sustainability initiatives for upstream, midstream, and downstream oil and gas companies.",
                icon: Globe
              },
              {
                title: "Energy Retail",
                description: "Customer experience, service innovation, and competitive strategies for energy retail companies in liberalized markets.",
                icon: Users
              },
              {
                title: "Energy Services",
                description: "Business model development, operational efficiency, and growth strategies for energy service providers and ESCOs.",
                icon: LineChart
              }
            ].map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <segment.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{segment.title}</h3>
                  <p className="text-gray-600">{segment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <FeaturedInsights 
        title="Insights on Energy" 
        description="Explore our latest thinking on energy transition, operational excellence, and sustainability in the energy sector."
        category="Energy"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Navigate the Energy Transition?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to address energy challenges, optimize operations, and develop strategies for a sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Discuss Your Energy Needs
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Energy Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 