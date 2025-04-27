import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Box, 
  ShoppingCart, 
  Building2,
  Truck,
  Wrench,
  Shield,
  Banknote,
  Zap
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function GeneralSuppliesPage() {
  const { t } = useI18n();
  
  // Supply categories
  const supplyCategories = [
    {
      title: "Office Supplies & Equipment",
      description: "Full range of office supplies, furniture, and equipment to create productive and ergonomic work environments for your team.",
      icon: Building2
    },
    {
      title: "IT Hardware & Accessories",
      description: "Latest computers, servers, networking equipment, and peripherals from trusted brands to power your digital operations.",
      icon: Zap
    },
    {
      title: "Industrial & Construction Materials",
      description: "High-quality materials, tools, and equipment for construction, manufacturing, and industrial operations.",
      icon: Wrench
    },
    {
      title: "Medical Equipment & Supplies",
      description: "Specialized medical equipment, supplies, and consumables for healthcare facilities, meeting international standards.",
      icon: Shield
    },
    {
      title: "Logistics & Transportation",
      description: "Comprehensive logistics solutions including transportation, warehousing, and distribution services to optimize your supply chain.",
      icon: Truck
    },
    {
      title: "Procurement Solutions",
      description: "End-to-end procurement management solutions to streamline your purchasing processes and ensure value for money.",
      icon: Banknote
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-500 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                General Supplies & Procurement
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Reliable supply chain solutions and procurement services to ensure your organization has the resources it needs to operate efficiently.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Request Quote
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
            <Link href="/services" className="hover:text-primary">{t('nav.services')}</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-primary font-medium">{t('services.supplies')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Streamlining Your Supply Chain</h2>
              <p className="text-gray-700 mb-4">
                Efficient procurement and reliable supply chains are essential pillars for organizational success. At GIGEE Consult, we provide comprehensive supply and procurement services to ensure your organization has the right resources, at the right time, and at competitive prices.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you need office supplies, IT equipment, construction materials, or specialized goods, our extensive supplier network and procurement expertise enable us to source and deliver high-quality products that meet your specifications and timelines.
              </p>
              <p className="text-gray-700 mb-6">
                We take a consultative approach, working closely with you to understand your needs, optimize your procurement processes, and identify opportunities for cost savings and efficiency improvements throughout your supply chain.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request Supply Services
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Client Examples
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Supply Advantages</h3>
              <ul className="space-y-4">
                {[
                  "Extensive supplier network across multiple industries",
                  "Competitive pricing through volume purchasing and established relationships",
                  "Rigorous quality control and supplier vetting processes",
                  "Efficient logistics and delivery solutions for timely procurement",
                  "Customized procurement strategies aligned with your business needs",
                  "Transparent processes and detailed reporting on all purchases"
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

      {/* Supply Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Supply Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of supply and procurement services across diverse categories, 
              tailored to meet your specific organizational needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplyCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
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

      {/* Procurement Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Procurement Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured yet flexible procurement process that ensures quality, timeliness, and value for money in every purchase.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="space-y-10">
                {[
                  {
                    title: "Needs Assessment",
                    description: "We start by thoroughly understanding your requirements, specifications, and timeline. Our team works closely with you to define exactly what you need and when you need it.",
                    icon: Building2
                  },
                  {
                    title: "Supplier Selection",
                    description: "Based on your requirements, we identify and evaluate potential suppliers, considering factors such as quality, reliability, price, and delivery capabilities.",
                    icon: ShoppingCart
                  },
                  {
                    title: "Quotation & Negotiation",
                    description: "We obtain competitive quotes from multiple suppliers and negotiate terms to secure the best possible value. All options are presented to you with our recommendations.",
                    icon: Banknote
                  },
                  {
                    title: "Order Placement",
                    description: "Once you approve, we place orders with the selected suppliers, providing clear specifications and delivery requirements to ensure accuracy.",
                    icon: Box
                  },
                  {
                    title: "Logistics & Delivery",
                    description: "We manage the logistics process, tracking shipments and coordinating delivery to your specified location, ensuring everything arrives on schedule.",
                    icon: Truck
                  },
                  {
                    title: "Quality Inspection",
                    description: "Upon delivery, we conduct quality inspections to verify that all items meet specifications before final acceptance and handover.",
                    icon: Shield
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-6"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center z-10">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      {index < 5 && (
                        <div className="w-1 flex-grow bg-primary/20 absolute top-14 bottom-0 h-[calc(100%+2.5rem)]"></div>
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our supply and procurement services cater to diverse organizations across various sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Government Agencies",
                description: "Supporting public sector organizations with transparent and efficient procurement processes that comply with regulatory requirements.",
                icon: Building2
              },
              {
                title: "Private Businesses",
                description: "Helping businesses of all sizes optimize their supply chains, reduce costs, and focus on their core operations.",
                icon: Box
              },
              {
                title: "NGOs & Nonprofits",
                description: "Providing cost-effective procurement solutions that maximize the impact of limited resources for mission-driven organizations.",
                icon: Shield
              }
            ].map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <segment.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{segment.title}</h3>
                <p className="text-gray-600">{segment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <FeaturedInsights 
        title="Insights on Supply Chain Management" 
        description="Explore our latest thinking on effective procurement and supply chain optimization."
        category="Operations"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult for reliable procurement services and access to quality supplies at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Request a Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Our Supply Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 