import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  AtSign,
  User,
  MessageSquare,
  Building,
  Briefcase
} from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { contactSchema } from "../shared/schema";
import { useI18n } from "../lib/i18n/i18n-provider";

// Extended schema with validation rules
const contactFormSchema = contactSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  service: z.string().optional(),
  source: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// List of services offered
const services = [
  { value: "strategic-consulting", label: "Strategic Consulting" },
  { value: "capacity-building", label: "Capacity Building" },
  { value: "project-management", label: "Project Management" },
  { value: "business-analysis", label: "Business Analysis" },
  { value: "hr-consulting", label: "HR Consulting" },
  { value: "other", label: "Other Services" }
];

// How did you hear about us options
const referralSources = [
  { value: "search", label: "Search Engine" },
  { value: "social", label: "Social Media" },
  { value: "recommendation", label: "Personal Recommendation" },
  { value: "advertisement", label: "Advertisement" },
  { value: "conference", label: "Conference/Event" },
  { value: "other", label: "Other Source" }
];

export default function ContactPage() {
  const { toast } = useToast();
  const { t } = useI18n();
  
  // Define form with validation schema
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      service: "",
      source: ""
    }
  });
  
  // Create mutation for form submission
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest('/api/contact', 'POST', data),
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond shortly.",
        variant: "default"
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
      console.error("Contact form error:", error);
    }
  });
  
  // Handle form submission
  function onSubmit(data: ContactFormValues) {
    mutation.mutate(data);
  }

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
                {t('contact.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                {t('contact.subtitle')}
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
            <span className="text-primary font-medium">{t('common.contact')}</span>
          </div>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <MapPin size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Locations</h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">Kano Office:</span><br />
                        #67, Babban Kwari Street,<br />
                        Off Lamido Street, Nasarawa GRA,<br />
                        Kano State.
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">Kaduna Office:</span><br />
                        #6, Gimbason Street,<br />
                        Mahuta New Extension,<br />
                        Off NNPC Junction, Kaduna.
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Abuja Office:</span><br />
                        #21, Nathaniel Ogwuche Crescent,<br />
                        Dawaki, Abuja.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Phone size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone Numbers</h3>
                      <p className="text-gray-600 mb-1">+234 812 222 4471</p>
                      <p className="text-gray-600">+234 809 111 6342</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Mail size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                      <p className="text-gray-600">gigeeconsultltd@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Clock size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Weekends: Closed</p>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="mt-10 h-56 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Here</p>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below, and our team will get back to you within 24 hours.
                </p>
                
                {/* Contact Form */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <Input className="pl-10" placeholder="Your full name" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <Input className="pl-10" placeholder="Your email address" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Phone */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <Input className="pl-10" placeholder="Your phone number (optional)" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Company */}
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <Input className="pl-10" placeholder="Your company name (optional)" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Service Interested In */}
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <div className="relative">
                                  <SelectTrigger className="pl-10">
                                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <SelectValue placeholder="Select a service (optional)" />
                                  </SelectTrigger>
                                </div>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service.value} value={service.value}>
                                    {service.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* How did you hear about us */}
                      <FormField
                        control={form.control}
                        name="source"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How did you hear about us?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an option (optional)" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {referralSources.map((source) => (
                                  <SelectItem key={source.value} value={source.value}>
                                    {source.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* Subject */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MessageSquare className="absolute left-3 top-3 text-gray-400" size={16} />
                              <Textarea 
                                className="pl-10 min-h-[150px]" 
                                placeholder="How can we help you?" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-secondary text-white hover:bg-secondary/90 font-semibold"
                      style={{ textShadow: '0 0 1px rgba(0,0,0,0.1)' }}
                      size="lg"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? 
                        "Sending Message..." : (
                        <>
                          Send Message <Send className="ml-2" size={16} />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "What is the first step in working with GIGEE Consult?",
                answer: "The first step is a complimentary consultation where we discuss your needs, challenges, and objectives. This helps us understand your unique situation and determine how our services can best support your goals."
              },
              {
                question: "How long does a typical consulting project take?",
                answer: "Project duration varies based on complexity, scope, and organizational readiness. Some focused initiatives may take 4-6 weeks, while comprehensive transformations might span 6-12 months. We'll provide a clear timeline during our initial discussions."
              },
              {
                question: "Do you work with small businesses or only large corporations?",
                answer: "We work with organizations of all sizes, from startups and small businesses to multinational corporations. Our approach is tailored to meet the specific needs and scale of each client."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have expertise across multiple sectors including healthcare, financial services, education, manufacturing, technology, and non-profit. Our methodologies are adaptable to various industry contexts."
              },
              {
                question: "How do you measure the success of your consulting projects?",
                answer: "We establish clear, measurable objectives at the beginning of each engagement. Success metrics are customized to your goals but often include operational improvements, financial outcomes, employee engagement, and client satisfaction."
              },
              {
                question: "What is your approach to maintaining confidentiality?",
                answer: "We uphold the highest standards of confidentiality. All client information is protected through formal confidentiality agreements, secure data handling protocols, and strict access controls."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-xl text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your question answered here? Feel free to contact us directly.
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="tel:+2348122224471">
                Call Us: +234 812 222 4471
              </a>
              <span className="text-gray-300">|</span>
              <a href="mailto:gigeeconsultltd@gmail.com">
                Email Us: gigeeconsultltd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with GIGEE Consult and unlock your full potential with our strategic consulting services.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold"
            style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
          >
            <a href="tel:+2348122224471">
              Call Us: +234 812 222 4471
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}