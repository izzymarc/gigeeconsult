import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  ClipboardList, 
  Clock, 
  TrendingUp,
  FileCheck,
  Users,
  Target,
  BarChart3,
  Workflow
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function ProjectManagementPage() {
  const { t } = useI18n();
  
  // Project management services
  const pmServices = [
    {
      title: "Project Planning & Design",
      description: "Comprehensive project planning services including scope definition, work breakdown structure development, and creation of detailed project plans.",
      icon: ClipboardList
    },
    {
      title: "Project Implementation",
      description: "End-to-end project execution services ensuring adherence to scope, schedule, budget, and quality requirements.",
      icon: FileCheck
    },
    {
      title: "Project Monitoring & Control",
      description: "Rigorous monitoring and control processes to track progress, identify issues early, and implement corrective actions.",
      icon: BarChart3
    },
    {
      title: "PMO Establishment",
      description: "Setup and operationalization of Project Management Offices (PMOs) to standardize processes and ensure project success across your organization.",
      icon: Workflow
    },
    {
      title: "Project Recovery",
      description: "Specialized services to diagnose and address issues in troubled projects, getting them back on track toward successful completion.",
      icon: TrendingUp
    },
    {
      title: "Project Management Training",
      description: "Customized training programs to build project management capabilities within your organization.",
      icon: Users
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-600 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Project Management Services
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Delivering complex projects on time, within budget, and with exceptional quality through disciplined project management expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Discuss Your Project
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
            <span className="text-primary font-medium">{t('services.project')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Expert Project Management for Complex Initiatives</h2>
              <p className="text-gray-700 mb-4">
                In today's fast-paced business environment, successful project execution is critical to achieving strategic objectives, driving change, and maintaining competitive advantage.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we bring deep project management expertise across diverse industries and project types. Our certified project managers employ proven methodologies, industry best practices, and innovative tools to deliver projects that meet or exceed expectations.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're undertaking a digital transformation, infrastructure development, organizational change, or any complex initiative, our project management services provide the structure, discipline, and expertise needed for success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request Project Support
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Project Examples
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Why Choose GIGEE Project Management</h3>
              <ul className="space-y-4">
                {[
                  "Certified project managers with experience across diverse industries",
                  "Structured methodologies adaptable to your project needs and organizational context",
                  "Comprehensive risk management to identify and mitigate potential issues",
                  "Advanced project management tools and digital solutions",
                  "Transparent communication and stakeholder management",
                  "Focus on knowledge transfer and capability building"
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
            <h2 className="text-3xl font-bold mb-4">Our Project Management Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of project management services tailored to your specific needs, 
              from planning through implementation to evaluation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pmServices.map((service, index) => (
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
                <p className="text-gray-600 mb-4">{service.description}</p>
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

      {/* Project Lifecycle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Project Management Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured yet flexible project management approach that ensures consistent delivery while adapting to your specific project needs.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Process timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  title: "Initiation",
                  description: "We work with stakeholders to define the project vision, objectives, scope, and success criteria, establishing a solid foundation for project planning and execution.",
                  icon: Target
                },
                {
                  title: "Planning",
                  description: "Our team develops comprehensive project plans including scope, schedule, budget, resources, quality standards, risk management, and communication protocols.",
                  icon: ClipboardList
                },
                {
                  title: "Execution",
                  description: "We systematically implement the project plan, coordinate resources, manage stakeholders, and ensure adherence to quality standards throughout the project lifecycle.",
                  icon: FileCheck
                },
                {
                  title: "Monitoring & Control",
                  description: "Throughout execution, we diligently track progress, compare against the baseline, identify variances, and implement corrective actions to keep the project on track.",
                  icon: BarChart3
                },
                {
                  title: "Closure",
                  description: "We ensure formal project completion, including deliverable acceptance, documentation of lessons learned, and transition to operations for sustainable long-term results.",
                  icon: Clock
                }
              ].map((phase, index) => (
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
                        <phase.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
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

      {/* Project Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Projects We Manage</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our project management expertise extends across a wide range of project types and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Digital Transformation",
                description: "Implementation of enterprise software, IT infrastructure, and digital business capabilities to modernize operations and enhance customer experiences.",
                icon: TrendingUp
              },
              {
                title: "Organizational Change",
                description: "Restructuring, culture transformation, and process reengineering initiatives to improve efficiency and adaptability.",
                icon: Users
              },
              {
                title: "Infrastructure Development",
                description: "Planning and execution of complex infrastructure projects, including construction, energy, and telecommunications projects.",
                icon: Workflow
              },
              {
                title: "Product Development",
                description: "Bringing new products and services to market, from concept and design through development, testing, and launch.",
                icon: Target
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <FeaturedInsights 
        title="Insights on Project Management" 
        description="Explore our latest thinking on effective project management and successful project delivery."
        category="Operations"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ensure Your Project's Success?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to deliver your critical projects on time, within budget, and to the highest quality standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Discuss Your Project Needs
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Project Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 