import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Check, ArrowRight, Lightbulb, Users, BarChart, Briefcase, MessagesSquare, ClipboardList, UserPlus, PieChart } from "lucide-react";
import { useI18n } from "../lib/i18n/i18n-provider";

export default function ServicesPage() {
  const { t } = useI18n();

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
                {t('services.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                {t('services.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 font-bold dark:bg-secondary"
                >
                  <Link href="/contact" className="text-white dark:text-white">
                    Request a Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white hover:bg-white hover:text-primary font-bold dark:border-white"
                >
                  <Link href="/projects" className="text-white dark:text-white" style={{ color: '#FFFFFF' }}>
                    View Our Projects
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
            <span className="text-primary font-medium">{t('common.services')}</span>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Comprehensive Consulting Solutions
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At GIGEE Consult Ltd., we provide a comprehensive range of consulting services designed to address 
                your organization's most pressing challenges and unlock new opportunities for growth and impact.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our team of experienced professionals brings deep industry knowledge, strategic insight, and 
                practical expertise to every engagement. We work collaboratively with our clients to deliver 
                solutions that are customized, actionable, and sustainable.
              </p>
              <ul className="space-y-3">
                {[
                  "Tailored strategies aligned with your objectives",
                  "Data-driven insights for informed decision making",
                  "Implementation support to ensure real-world results",
                  "Knowledge transfer that builds internal capacity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 text-secondary flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: <Lightbulb size={36} />, title: "Strategic Consulting" },
                { icon: <UserPlus size={36} />, title: "Capacity Building" },
                { icon: <Briefcase size={36} />, title: "Project Management" },
                { icon: <PieChart size={36} />, title: "Business Analysis" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-l-4 border-primary hover:border-secondary"
                >
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Key Services
            </h2>
            <p className="text-lg text-gray-700">
              Specialized expertise to address your most critical business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb />,
                title: "Strategic Consulting",
                description: "Develop clear, actionable strategies that align with your vision and create sustainable competitive advantage.",
                features: [
                  "Organizational Strategy Development",
                  "Market Entry & Expansion Planning",
                  "Competitive Analysis",
                  "Business Model Innovation"
                ]
              },
              {
                icon: <ClipboardList />,
                title: "Project Management",
                description: "Expert guidance and implementation support to ensure your projects achieve their objectives on time and within budget.",
                features: [
                  "Project Planning & Design",
                  "Implementation Support",
                  "Monitoring & Evaluation",
                  "Risk Management"
                ]
              },
              {
                icon: <UserPlus />,
                title: "Capacity Building",
                description: "Enhance your organization's internal capabilities through targeted training and knowledge transfer.",
                features: [
                  "Leadership Development",
                  "Team Building & Training",
                  "Process Optimization",
                  "Skill Enhancement Programs"
                ]
              },
              {
                icon: <BarChart />,
                title: "Business Analysis",
                description: "Gain data-driven insights to optimize operations, reduce costs, and enhance performance.",
                features: [
                  "Operational Assessment",
                  "Financial Analysis",
                  "Process Optimization",
                  "Performance Improvement"
                ]
              },
              {
                icon: <Users />,
                title: "HR Consulting",
                description: "Build and maintain high-performing teams through effective people strategies and practices.",
                features: [
                  "Talent Acquisition",
                  "Performance Management",
                  "Organizational Development",
                  "Change Management"
                ]
              },
              {
                icon: <MessagesSquare />,
                title: "Special Advisory",
                description: "Expert guidance on specialized topics tailored to your industry and specific challenges.",
                features: [
                  "Industry-Specific Consulting",
                  "Digital Transformation",
                  "Sustainability Planning",
                  "Regulatory Compliance"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="mr-2 text-secondary flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <Button 
                    asChild
                    variant="ghost" 
                    className="group hover:text-primary/80 p-0 font-bold"
                  >
                    <Link href="/contact" className="text-primary dark:text-primary">
                      {t('buttons.learn')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700">
              A proven methodology that delivers consistent results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discover",
                description: "We begin by understanding your unique challenges, objectives, and context through in-depth research and stakeholder interviews."
              },
              {
                number: "02",
                title: "Analyze",
                description: "Our team conducts thorough analysis to identify key issues, opportunities, and the root causes of challenges."
              },
              {
                number: "03",
                title: "Develop",
                description: "We create tailored strategies and solutions designed to address your specific needs and achieve your objectives."
              },
              {
                number: "04",
                title: "Implement",
                description: "We work alongside your team to implement solutions, measure results, and ensure sustainable positive change."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-700">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Industry Expertise</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team brings deep expertise across a wide range of industries, allowing us to 
                provide insightful, contextually relevant guidance for your specific sector.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We understand the unique challenges, opportunities, and regulatory environments 
                of different industries, ensuring that our recommendations are both innovative and 
                practical for your specific context.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Healthcare & Life Sciences",
                  "Financial Services",
                  "Manufacturing & Industry",
                  "Technology & Telecommunications",
                  "Education & Non-profit",
                  "Government & Public Sector",
                  "Retail & Consumer Goods",
                  "Energy & Utilities"
                ].map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square bg-primary/5 rounded-full relative flex items-center justify-center"
            >
              <div className="w-3/4 h-3/4 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-2">15+</div>
                  <div className="text-xl font-medium text-gray-700">Industries Served</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-1/4 -left-8 bg-secondary text-white p-4 rounded-lg shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                }}
              >
                <Briefcase size={30} />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 -right-8 bg-primary text-white p-4 rounded-lg shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3.5,
                  delay: 0.5
                }}
              >
                <BarChart size={30} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with our team to discuss how our services can help address your specific challenges and unlock new opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-gray-100 font-bold dark:bg-white"
          >
            <Link href="/contact" className="text-primary dark:text-primary" style={{ color: '#2C3E50' }}>
              {t('buttons.contact')}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}