"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cake, PartyPopper, Gift, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import PricingCard from "@/components/PricingCard";
import Image from "next/image";

function App() {
  const pricingPlans = [
    {
      title: "Basic Celebration",
      price: "999",
      features: [
        "Up to 50 guests",
        "Basic decorations",
        "Event coordination",
        "Basic catering options",
        "4-hour venue rental",
      ],
      color: "purple" as const,
    },
    {
      title: "Premium Party",
      price: "1999",
      features: [
        "Up to 100 guests",
        "Premium decorations",
        "Full event planning",
        "Custom catering menu",
        "6-hour venue rental",
        "Photography service",
      ],
      color: "orange" as const,
      featured: true,
    },
    {
      title: "Luxury Event",
      price: "3999",
      features: [
        "Up to 200 guests",
        "Luxury decorations",
        "Full event planning",
        "Premium catering",
        "8-hour venue rental",
        "Photo & video service",
        "Live entertainment",
      ],
      color: "purple" as const,
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book my event?",
      answer:
        "We recommend booking at least 3-6 months in advance for regular events, and 6-12 months for large or luxury events to ensure availability and proper planning time.",
    },
    {
      question: "What is included in the decoration package?",
      answer:
        "Our decoration packages include theme-based setups, balloon arrangements, floral decorations, lighting, backdrop designs, and table settings. Specific items vary by package level.",
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer:
        "Yes, we work with catering partners who can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and other specific allergies or restrictions.",
    },
    {
      question: "Do you provide day-of coordination?",
      answer:
        "Yes, all our packages include day-of coordination to ensure your event runs smoothly. Our coordinators will manage vendors, timeline, and handle any issues that arise.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 hero-pattern font-dmsans">
      <Navbar />

      {/* Hero Section */}
      {/* <AuroraBackground> */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold font-display gradient-text mb-6">
                Make Every Moment Magical
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We turn your special occasions into unforgettable celebrations
                with our premium party planning services.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary">
                Start Planning
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Image
                src="https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?auto=format&fit=crop&q=80"
                alt="Celebration 1"
                width={500}
                height={500}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
              <Image
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80"
                alt="Celebration 2"
                width={1200}
                height={1200}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow md:mt-12"
              />
              <Image
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80"
                alt="Celebration 3"
                width={1200}
                height={1200}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </motion.div>
          </div>
        </section>
      {/* </AuroraBackground> */}

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From intimate gatherings to grand celebrations, we create
              experiences that last a lifetime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={PartyPopper}
              title="Birthday Parties"
              description="Create unforgettable birthday celebrations with our custom themes and entertainment options."
            />
            <ServiceCard
              icon={Gift}
              title="Special Events"
              description="Whether it's an anniversary or graduation, we'll make your special day perfect."
            />
            <ServiceCard
              icon={Cake}
              title="Corporate Events"
              description="Elevate your corporate gatherings with our professional planning services."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="section-title">Simple Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the perfect package for your celebration needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Let&apos;s start planning your perfect celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">hello@celebrationscrew.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">
                    123 Party Street, Event City, EC 12345
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary"
                type="submit">
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQ key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold gradient-text mb-4">
            Celebrations Crew
          </h2>
          <p className="text-gray-600 mb-8">
            Making your special moments unforgettable
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              LinkedIn
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Celebrations Crew. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-primary-600" />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default App;
