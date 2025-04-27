import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Globe,
  Loader2,
  SendIcon
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../../lib/queryClient";
import { useToast } from "../../hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// Form schema with validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Decorative shapes for visual interest
const ShapeDecoration = ({ className }: { className: string }) => (
  <motion.div 
    className={`absolute rounded-full opacity-70 blur-3xl ${className}`}
    animate={{ 
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0]
    }}
    transition={{ 
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  />
);

export default function ContactSection() {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0.5, 0.8], [0, -50]);
  
  // Create form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  // Submit mutation
  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Form submission handler
  function onSubmit(data: ContactFormValues) {
    mutate(data);
  }

  // GIGEEConsult office locations
  const officeLocations = [
    {
      city: "Kano",
      address: "#67, Babban Kwari Street, Off Lamido Street, Nasarawa GRA, Kano State.",
      phone: "+234 812 222 4471",
    },
    {
      city: "Kaduna",
      address: "#6, Gimbason Street, Mahuta New Extension, Off NNPC Junction, Kaduna.",
      phone: "+234 809 111 6342",
    },
    {
      city: "Abuja",
      address: "#21, Nathaniel Ogwuche Crescent, Dawaki, Abuja.",
      phone: "+234 812 222 4471",
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <ShapeDecoration className="bg-blue-100 dark:bg-blue-900/20 w-96 h-96 -top-20 -right-40" />
      <ShapeDecoration className="bg-primary/5 dark:bg-primary/10 w-72 h-72 bottom-10 -left-20" />
    
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-3 text-gray-900 dark:text-white relative inline-block"
          >
            START YOUR TRANSFORMATION JOURNEY
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-0.5 bg-primary absolute bottom-0 left-0"
            />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Whether you need consultancy services, capacity building, project management expertise, or reliable supplies, we're here to help you achieve your goals and drive meaningful change in your organization.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ y: parallaxY }}
          >
            <div className="bg-white dark:bg-gray-950 p-8 rounded-sm shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <SendIcon className="mr-2 h-5 w-5 text-primary" /> 
                Send us a message
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" className="bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your email" className="bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" className="bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">Area of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 transition-all">
                                <SelectValue placeholder="Select area of interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="consultancy">Consultancy Services</SelectItem>
                              <SelectItem value="capacity">Capacity Building</SelectItem>
                              <SelectItem value="project">Project Management</SelectItem>
                              <SelectItem value="supplies">General Supplies</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help your organization?" 
                            rows={4}
                            className="bg-white dark:bg-gray-900 resize-none focus:ring-2 focus:ring-primary/20 transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <Button 
                      type="submit" 
                      variant="gigeeFilled" 
                      disabled={isPending}
                      className="mt-2 text-white transition-all hover:shadow-lg hover:translate-y-[-2px] group"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Offices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officeLocations.map((office, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-white dark:bg-gray-950 p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all hover:translate-y-[-3px] group rounded-sm"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{office.city}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{office.address}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Phone size={14} className="mr-2 text-primary" />
                      {office.phone}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                General Inquiries
              </h3>
              <div className="flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start bg-white dark:bg-gray-950 p-4 rounded-sm shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
                >
                  <Mail className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">Email</p>
                    <a href="mailto:gigeeconsultltd@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      gigeeconsultltd@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
