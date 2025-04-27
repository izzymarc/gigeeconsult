import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Users, BarChart, Briefcase, Award, ArrowRight, Linkedin, Twitter, Mail, X, Facebook, Instagram } from "lucide-react";
import { useI18n } from "../lib/i18n/i18n-provider";
import { Button } from "../components/ui/button";
import { Helmet } from "react-helmet";

export default function AboutPage() {
  const ceoImage = "/isaac.jpg";
  const { t } = useI18n();
  const [showFullImage, setShowFullImage] = useState(false);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Helmet>
        <title>About Us | GIGEE CONSULT LTD</title>
        <meta name="description" content="Learn about GIGEE CONSULT LTD, a dynamic and results-driven firm specializing in Consultancy Services, Capacity Building, Project Management, and General Supplies." />
      </Helmet>
      <Fragment>
        {/* Modal for full image */}
        {showFullImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowFullImage(false)}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-gray-800/50 rounded-full p-2 hover:bg-gray-700/50 transition-colors"
              onClick={() => setShowFullImage(false)}
            >
              <X size={24} />
            </button>
            <div 
              className="max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={ceoImage} 
                alt="CEO/President Portrait - Full Size" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}

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
                  {t('about.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                  Empowering lives through excellent service delivery
                </p>
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
              <span className="text-primary font-medium">{t('common.about')}</span>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  GIGEE Consult Ltd. was founded with a clear vision: to help organizations transform their 
                  potential into concrete results while creating positive social impact. 
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our journey began when a group of experienced industry professionals recognized that many 
                  organizations were struggling to navigate increasingly complex business environments. Seeing 
                  a gap in the market for consultancy that truly puts people at the center, we established 
                  GIGEE Consult Ltd. to provide actionable, ethical, and effective solutions.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Today, we pride ourselves on our ability to combine strategic thinking with practical 
                  implementation, helping our clients achieve sustainable growth and meaningful transformation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <div className="w-full h-full bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-7xl font-bold text-primary mb-4">2024</div>
                        <div className="text-xl font-medium text-gray-700">Established April</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-secondary text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Vision & Mission
              </h2>
              <p className="text-lg text-gray-700">
                Guided by core principles and a commitment to excellence, we aim to create lasting 
                positive impact for our clients and communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="text-primary" size={30} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Our Vision</h3>
                <p className="text-gray-700 text-center">
                  To be a leading consultancy and supply firm recognized for excellence, reliability, and transformative growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <BarChart className="text-secondary" size={30} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
                <p className="text-gray-700 text-center">
                  To deliver innovative, sustainable, and high-impact solutions that empower organizations to achieve their goals efficiently.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-700">
                The principles that guide every aspect of our work and relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award size={30} />,
                  title: "Expert Team",
                  description: "Highly qualified professionals with industry experience."
                },
                {
                  icon: <Users size={30} />,
                  title: "Client-Centric",
                  description: "Customized solutions to meet unique needs."
                },
                {
                  icon: <Briefcase size={30} />,
                  title: "Proven Track Record",
                  description: "Successful projects across multiple sectors."
                },
                {
                  icon: <Award size={30} />,
                  title: "Integrity & Transparency",
                  description: "Ethical business practices in all operations."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border-t-4 border-primary"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Meet the dedicated team behind our company's success, bringing expertise and innovation to every project.</p>
            </div>
            
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div 
                    className="relative overflow-hidden group cursor-pointer"
                    onClick={() => setShowFullImage(true)}
                  >
                    <img 
                      src={ceoImage} 
                      alt="CEO/President Portrait - Gimbason Junior" 
                      className="w-full h-[600px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/400x500?text=CEO/President";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                      <span className="text-white font-medium mb-8 px-4 py-2 bg-primary/80 rounded-md">Click to view full image</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Gimbason Junior <span className="text-primary font-bold">ACIPM, HRPL, M.HCD, M.IPS</span>
                    </h3>
                    <p className="text-primary font-medium mb-4 text-lg">CEO/President</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">As our CEO/President, Gimbason Junior leads GIGEE Consult with vision and excellence, driving our mission to empower lives through excellent service delivery across all our business areas.</p>
                    
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/company/gigee-consult" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-full">
                        <Linkedin size={20} />
                      </a>
                      <a href="https://www.facebook.com/gigeeconsult" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-full">
                        <Facebook size={20} />
                      </a>
                      <a href="https://www.instagram.com/gigee_consult" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-full">
                        <Instagram size={20} />
                      </a>
                      <a href="mailto:gigeeconsultltd@gmail.com" className="text-gray-500 hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-full">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with GIGEE Consult and unlock your full potential with our strategic consulting services.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                {t('buttons.contact')}
              </Link>
            </Button>
          </div>
        </section>
      </Fragment>
    </>
  );
}