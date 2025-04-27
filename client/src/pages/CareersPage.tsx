import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at GIGEE Consult</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Join a team of passionate professionals making a difference for organizations and communities around the world.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example positions - replace with dynamic data as needed */}
            {[
              {
                title: "Management Consultant",
                location: "Remote / Nairobi, Kenya",
                description: "Lead client engagements, develop strategies, and deliver impactful solutions for organizations across industries.",
                href: "/careers/management-consultant"
              },
              {
                title: "Training & Development Specialist",
                location: "Remote / Nairobi, Kenya",
                description: "Design and deliver high-impact training programs to build client capabilities and drive organizational change.",
                href: "/careers/training-specialist"
              },
              {
                title: "Project Manager",
                location: "Remote / Nairobi, Kenya",
                description: "Oversee complex projects, manage teams, and ensure successful delivery of client initiatives.",
                href: "/careers/project-manager"
              }
            ].map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 text-left flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{job.title}</h3>
                  <div className="text-sm text-primary font-semibold mb-2">{job.location}</div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                </div>
                <Button asChild variant="ghost" className="p-0 h-auto text-primary flex items-center self-end">
                  <Link href={job.href}>
                    View Details
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented, driven individuals to join our team. If you don't see a role that fits, reach out anyway!
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Send Your CV</Link>
          </Button>
        </div>
      </section>
    </>
  );
} 