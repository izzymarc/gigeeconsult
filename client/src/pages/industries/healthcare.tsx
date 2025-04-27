import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Stethoscope, 
  HeartPulse, 
  Brain,
  ClipboardList,
  Users,
  Microscope,
  Shield,
  Database
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function HealthcarePage() {
  const { t } = useI18n();
  
  // Healthcare solutions
  const healthcareSolutions = [
    {
      title: "Healthcare Digital Transformation",
      description: "Comprehensive digital transformation strategies and implementation support for healthcare organizations seeking to leverage technology for improved care delivery and operational efficiency.",
      icon: Database
    },
    {
      title: "Clinical Operations Excellence",
      description: "Process optimization and quality improvement for clinical workflows, patient journey mapping, and healthcare delivery models.",
      icon: HeartPulse
    },
    {
      title: "Healthcare Workforce Development",
      description: "Customized training and capacity building programs for clinical and administrative staff to enhance skills and adapt to evolving healthcare landscapes.",
      icon: Users
    },
    {
      title: "Health Systems Strengthening",
      description: "Strategic advisory services to enhance health system resilience, governance, financing, and service delivery, particularly in emerging markets.",
      icon: Shield
    },
    {
      title: "Healthcare Project Management",
      description: "Specialized project management for hospital expansions, technology implementations, and healthcare transformation initiatives.",
      icon: ClipboardList
    },
    {
      title: "Health Research & Analytics",
      description: "Data-driven research and analytics to support evidence-based decision making and policy development in healthcare settings.",
      icon: Microscope
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-500 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare Industry Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Strategic consulting and implementation services to help healthcare organizations deliver better patient outcomes, improve operational efficiency, and navigate industry transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Discuss Your Healthcare Challenges
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
            <span className="text-primary font-medium">{t('industries.healthcare')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Navigating Healthcare Complexity</h2>
              <p className="text-gray-700 mb-4">
                Today's healthcare landscape is characterized by escalating costs, evolving regulations, shifting patient expectations, and rapid technological change. Healthcare organizations need strategic partners who understand these challenges and can help navigate complexity to deliver better care and sustainability.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we bring deep healthcare industry expertise, combining clinical insights with business acumen to help healthcare providers, payers, and life sciences organizations transform their operations, enhance patient experiences, and achieve better outcomes.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're implementing new healthcare technologies, optimizing clinical workflows, strengthening health systems, or developing healthcare workforce capabilities, our tailored solutions address your specific challenges and opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request Healthcare Consultation
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Healthcare Case Studies
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Healthcare Industry Challenges We Address</h3>
              <ul className="space-y-4">
                {[
                  "Rising operational costs and pressure for financial sustainability",
                  "Workforce shortages and capacity development needs",
                  "Digital transformation and health information technology integration",
                  "Regulatory compliance and quality standards",
                  "Patient experience enhancement and care delivery models",
                  "Health equity and access to care in diverse populations"
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
            <h2 className="text-3xl font-bold mb-4">Our Healthcare Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of consulting services tailored to the unique needs of healthcare organizations, 
              from strategy to implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareSolutions.map((solution, index) => (
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

      {/* Healthcare Sectors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Healthcare Sectors We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our healthcare expertise spans across various sectors within the healthcare industry, enabling us to provide specialized solutions for different types of organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Hospitals & Health Systems",
                description: "Strategic advisory, operational improvement, and digital transformation for hospitals, health systems, and integrated delivery networks.",
                icon: HeartPulse
              },
              {
                title: "Primary & Specialty Care",
                description: "Practice optimization, patient experience enhancement, and clinical workflow improvement for ambulatory and specialty care providers.",
                icon: Stethoscope
              },
              {
                title: "Public Health Organizations",
                description: "Capacity building, program design, and implementation support for public health agencies and organizations focused on population health.",
                icon: Shield
              },
              {
                title: "Mental Health Services",
                description: "Service delivery models, workforce development, and technology integration for mental health and behavioral health providers.",
                icon: Brain
              },
              {
                title: "Health Insurance & Payers",
                description: "Strategy development, operational efficiency, and member experience enhancement for health insurance companies and payer organizations.",
                icon: ClipboardList
              },
              {
                title: "Life Sciences & Pharmaceuticals",
                description: "Research optimization, regulatory compliance, and go-to-market strategies for pharmaceutical companies and medical device manufacturers.",
                icon: Microscope
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
        title="Insights on Healthcare" 
        description="Explore our latest thinking on healthcare transformation, digital health, and clinical excellence."
        category="Healthcare"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to navigate healthcare challenges, improve patient outcomes, and achieve operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Discuss Your Healthcare Needs
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Healthcare Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 