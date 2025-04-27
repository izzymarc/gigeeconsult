import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  ArrowRight, 
  GraduationCap, 
  Users, 
  Brain,
  BookOpen,
  Workflow,
  Target,
  PenSquare,
  Network
} from "lucide-react";
import { useI18n } from "../../lib/i18n/i18n-provider";
import FeaturedInsights from "../../components/insights/FeaturedInsights";

export default function CapacityBuildingPage() {
  const { t } = useI18n();
  
  // Capacity building programs
  const capacityPrograms = [
    {
      title: "Leadership Development",
      description: "Comprehensive programs to develop effective leaders at all levels of your organization, from emerging talent to senior executives.",
      icon: Users
    },
    {
      title: "Management Training",
      description: "Practical workshops and courses designed to strengthen core management skills and competencies for improved team performance.",
      icon: Target
    },
    {
      title: "Technical Skills Enhancement",
      description: "Specialized training to build expertise in specific technical areas relevant to your industry and organizational needs.",
      icon: PenSquare
    },
    {
      title: "Team Building & Collaboration",
      description: "Interactive workshops focused on improving team dynamics, communication, and collaborative problem-solving.",
      icon: Network
    },
    {
      title: "Organizational Learning",
      description: "Strategies and systems to promote a culture of continuous learning and knowledge sharing throughout your organization.",
      icon: Brain
    },
    {
      title: "Custom Training Solutions",
      description: "Tailored training programs designed to address your organization's unique challenges and development needs.",
      icon: BookOpen
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-600 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Capacity Building & Training
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Develop your organization's most valuable asset—your people—with our comprehensive training and development programs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Request a Training Program
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
            <span className="text-primary font-medium">{t('services.capacity')}</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Invest in People, Invest in Success</h2>
              <p className="text-gray-700 mb-4">
                In today's rapidly evolving business landscape, an organization's ability to adapt and grow depends largely on the capabilities of its people. Investing in human capital is no longer optional—it's essential for sustainable success.
              </p>
              <p className="text-gray-700 mb-4">
                At GIGEE Consult, we design and deliver high-impact training and development programs that equip your team with the knowledge, skills, and mindsets needed to excel in their roles and drive organizational performance.
              </p>
              <p className="text-gray-700 mb-6">
                Our capacity building solutions are tailored to your specific needs, combining proven learning methodologies with innovative approaches to ensure lasting behavioral change and tangible business results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Discuss Your Training Needs
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                >
                  <Link href="/case-studies">
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">The GIGEE Learning Advantage</h3>
              <ul className="space-y-4">
                {[
                  "Practical, real-world focus that participants can immediately apply",
                  "Experienced facilitators with deep industry and functional expertise",
                  "Engaging, interactive learning experiences that drive retention",
                  "Customized content aligned with your organizational context",
                  "Blended learning approaches combining in-person and digital formats",
                  "Robust measurement of outcomes and impact on performance"
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

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Training & Development Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of capacity building programs designed to develop critical skills 
              and capabilities at individual, team, and organizational levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capacityPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
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

      {/* Our Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Training Methodology</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We employ a comprehensive approach to learning and development that ensures long-term skill retention and behavioral change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Needs Assessment",
                description: "We begin by thoroughly understanding your organization's unique context, challenges, and development needs through interviews, surveys, and performance data analysis.",
                icon: Target
              },
              {
                title: "Custom Program Design",
                description: "Our learning experts design tailored programs that address your specific objectives, incorporating relevant case studies, exercises, and content from your industry.",
                icon: PenSquare
              },
              {
                title: "Engaging Delivery",
                description: "Our experienced facilitators deliver interactive, participant-centered learning experiences that blend theory with practical application and foster active engagement.",
                icon: BookOpen
              },
              {
                title: "Application & Integration",
                description: "We incorporate action learning projects, coaching, and follow-up sessions to ensure participants apply new skills and knowledge in their daily work.",
                icon: Workflow
              },
              {
                title: "Measurement & Refinement",
                description: "We evaluate program effectiveness through multiple metrics and continuously refine our approach based on participant feedback and observed outcomes.",
                icon: GraduationCap
              },
              {
                title: "Sustainable Impact",
                description: "Our holistic approach ensures that learning is not a one-time event but becomes embedded in your organization's culture and practices for lasting impact.",
                icon: Network
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-gray-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Flexible Delivery Formats</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer various delivery options to accommodate different learning preferences, scheduling constraints, and geographical considerations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "In-Person Workshops",
                description: "Immersive, facilitator-led sessions at your location or our training facilities, ideal for high-interaction learning and team building.",
                icon: Users
              },
              {
                title: "Virtual Live Training",
                description: "Interactive online sessions led by expert facilitators, providing convenience and global accessibility without sacrificing engagement.",
                icon: BookOpen
              },
              {
                title: "Blended Learning",
                description: "A combination of in-person and digital learning experiences, offering flexibility while maximizing the benefits of both approaches.",
                icon: Brain
              }
            ].map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <format.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{format.title}</h3>
                <p className="text-gray-600">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <FeaturedInsights 
        title="Insights on Learning & Development" 
        description="Explore our latest thinking on organizational learning and talent development."
        category="Leadership"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock Your Organization's Full Potential</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult to develop the capabilities your team needs to excel in today's competitive landscape.
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/case-studies">
                View Client Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 