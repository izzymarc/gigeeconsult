import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  Briefcase, 
  BarChart3, 
  Users, 
  Building, 
  TrendingUp,
  LineChart,
  LightbulbIcon
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function ConsultancyPage() {
  const { t } = useI18n();
  
  // Consultancy services
  const consultancyServices = [
    {
      title: "Strategic Planning",
      description: "We help organizations develop comprehensive strategic plans that align with their vision, mission, and long-term objectives, providing a clear roadmap for sustainable growth.",
      icon: LineChart
    },
    {
      title: "Organizational Development",
      description: "Our consultants specialize in enhancing organizational effectiveness through structure optimization, culture transformation, and talent management strategies.",
      icon: Building
    },
    {
      title: "Process Improvement",
      description: "We identify inefficiencies and implement proven methodologies to streamline operations, reduce costs, and enhance quality across your organization.",
      icon: TrendingUp
    },
    {
      title: "Change Management",
      description: "Our structured approach helps organizations navigate complex transitions, ensuring stakeholder buy-in and successful implementation of new initiatives.",
      icon: Users
    },
    {
      title: "Performance Optimization",
      description: "We design and implement performance measurement systems that drive accountability and continuous improvement throughout your organization.",
      icon: BarChart3
    },
    {
      title: "Innovation Consulting",
      description: "Our experts help you foster a culture of innovation, develop new products and services, and implement strategies to stay ahead of market disruptions.",
      icon: LightbulbIcon
    },
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
                Management Consulting Services
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Expert guidance and solutions to tackle your most complex business challenges and drive sustainable growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
            <span className="text-primary font-medium">{t('services.consultancy')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Transformative Consulting Solutions</h2>
              <p className="text-gray-700 mb-4">
                In today's dynamic business environment, organizations face unprecedented challenges and opportunities. Navigating this complexity requires strategic thinking, specialized expertise, and innovative approaches.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we partner with you to develop tailored solutions that address your unique challenges, leverage your strengths, and help you achieve your strategic objectives. Our team of experienced consultants brings deep industry knowledge and proven methodologies to every engagement.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're looking to optimize operations, drive growth, navigate change, or develop new capabilities, our consulting services provide the insights and support you need to succeed in an increasingly competitive landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Discuss Your Challenges
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
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Approach</h3>
              <ul className="space-y-4">
                {[
                  "Comprehensive assessment of your current situation",
                  "Collaborative development of tailored solutions",
                  "Implementation support and change management",
                  "Measurement and optimization of results",
                  "Knowledge transfer and capability building",
                  "Long-term partnership for sustainable success"
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

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of consulting services to help you address challenges, 
              seize opportunities, and achieve your strategic objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultancyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure we deliver tailored solutions that drive measurable results.
            </p>
          </div>
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  title: "Discovery",
                  description: "We begin by understanding your organization's current state, challenges, objectives, and unique context through in-depth interviews, data analysis, and stakeholder engagement.",
                  icon: Briefcase
                },
                {
                  title: "Analysis",
                  description: "Our team analyzes the gathered information to identify root causes, systemic issues, potential opportunities, and areas for improvement, applying industry benchmarks and best practices.",
                  icon: LineChart
                },
                {
                  title: "Solution Design",
                  description: "We develop tailored recommendations and a detailed implementation roadmap, collaborating closely with your team to ensure alignment with your goals and organizational capabilities.",
                  icon: LightbulbIcon
                },
                {
                  title: "Implementation Support",
                  description: "We assist with execution of the recommended strategies, providing project management, change management, and expertise to ensure successful adoption and implementation.",
                  icon: Users
                },
                {
                  title: "Monitoring & Optimization",
                  description: "We continuously track progress against key metrics, making adjustments as needed to optimize outcomes and ensure long-term sustainable results.",
                  icon: BarChart3
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 pb-8 md:pb-0">
                    <div className={`w-full max-w-md p-6 rounded-lg ${index % 2 === 0 ? 'bg-primary/5' : 'bg-gray-50'}`}>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center relative">
                    <div className="w-6 h-6 bg-primary rounded-full z-10"></div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <FeaturedInsights 
        title="Insights on Strategy & Management" 
        description="Explore our latest thinking on strategic management and organizational effectiveness."
        category="Strategy"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to overcome challenges, seize opportunities, and achieve sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Request a Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                Explore Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 