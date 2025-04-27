import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  ShoppingBag, 
  TrendingUp, 
  Users,
  Store,
  Truck,
  BarChart,
  Smartphone,
  Tag
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function RetailPage() {
  const { t } = useI18n();
  
  // Retail solutions
  const retailSolutions = [
    {
      title: "Retail Strategy & Innovation",
      description: "Strategic advisory services to help retailers adapt to changing consumer behaviors, market conditions, and competitive landscapes.",
      icon: TrendingUp
    },
    {
      title: "Omnichannel Retail Excellence",
      description: "Solutions for seamlessly integrating physical and digital retail channels to create cohesive customer experiences.",
      icon: Smartphone
    },
    {
      title: "Retail Operations Optimization",
      description: "Process improvement and efficiency initiatives for store operations, supply chain, inventory management, and fulfillment.",
      icon: Store
    },
    {
      title: "Customer Experience Enhancement",
      description: "Strategies and implementation support to elevate the customer journey across all touchpoints and build brand loyalty.",
      icon: Users
    },
    {
      title: "Retail Analytics & Insights",
      description: "Data-driven solutions to gain actionable consumer insights, optimize merchandising, and improve retail performance.",
      icon: BarChart
    },
    {
      title: "Retail Supply Chain Management",
      description: "End-to-end supply chain solutions to enhance efficiency, resilience, and sustainability in retail logistics.",
      icon: Truck
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-500 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Retail Industry Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Strategic consulting and implementation services to help retailers thrive in today's rapidly evolving consumer marketplace.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Discuss Your Retail Challenges
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
            <span className="text-primary font-medium">{t('industries.retail')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Transforming Retail For The Future</h2>
              <p className="text-gray-700 mb-4">
                Today's retail landscape is experiencing unprecedented transformation. Evolving consumer expectations, digital disruption, supply chain challenges, and changing market dynamics are creating both challenges and opportunities for retailers of all types and sizes.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we help retailers navigate this complex environment with strategic insights and practical solutions. Our retail industry expertise spans across formats, categories, and geographies, enabling us to support retailers in enhancing customer experiences, optimizing operations, and driving sustainable growth.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're expanding your omnichannel capabilities, reimagining store experiences, optimizing your supply chain, or seeking innovative growth strategies, our tailored solutions address your specific retail challenges and opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request Retail Consultation
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Retail Case Studies
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Retail Industry Challenges We Address</h3>
              <ul className="space-y-4">
                {[
                  "Shifting consumer behaviors and expectations",
                  "Omnichannel integration and seamless experiences",
                  "Supply chain resilience and last-mile delivery",
                  "Data-driven merchandising and inventory optimization",
                  "Store experience reinvention and associate enablement",
                  "Digital transformation and technology adoption"
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
            <h2 className="text-3xl font-bold mb-4">Our Retail Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of consulting services tailored to the unique needs of retailers,
              from strategy to implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retailSolutions.map((solution, index) => (
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

      {/* Retail Segments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Retail Segments We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our retail expertise spans across various segments, enabling us to provide specialized solutions for different types of retailers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Fashion & Apparel",
                description: "Strategic and operational solutions for fashion retailers, from luxury to fast fashion, addressing merchandising, supply chain, and customer experience challenges.",
                icon: ShoppingBag
              },
              {
                title: "Grocery & Food Retail",
                description: "Specialized services for grocery retailers facing unique challenges in fresh food management, omnichannel fulfillment, and changing consumer food preferences.",
                icon: Store
              },
              {
                title: "Electronics & Technology",
                description: "Solutions for consumer electronics retailers managing complex product lifecycles, technical support requirements, and high-value inventory.",
                icon: Smartphone
              },
              {
                title: "Home & Furnishings",
                description: "Strategic support for home goods retailers addressing showroom experience, delivery logistics, and visualization technology integration.",
                icon: Tag
              },
              {
                title: "Department Stores",
                description: "Transformation strategies for traditional department stores reinventing their value proposition and customer experience in the digital age.",
                icon: Store
              },
              {
                title: "Specialty Retail",
                description: "Tailored solutions for specialty retailers focusing on niche markets, building community, and creating distinctive brand experiences.",
                icon: ShoppingBag
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
        title="Insights on Retail" 
        description="Explore our latest thinking on retail innovation, consumer trends, and retail operations."
        category="Retail"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to navigate retail challenges, enhance customer experiences, and drive sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Discuss Your Retail Needs
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Retail Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 