"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cake, PartyPopper, Gift, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import PricingCard from "@/components/PricingCard";
import Image from "next/image";
import ContactSection from "@/components/Contact-Section";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-div";

function App() {
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
    <>
      {/* Hero Section */}
      {/* <AuroraBackground> */}
      <section id="home" className="pt-32 pb-20 px-4">
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
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/order" className="btn-primary">
                Start Planning
              </Link>
            </MotionDiv>
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
      <section id="services" className="py-20 px-4 bg-white">
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
              icon={Cake}
              title="Birthday Parties"
              description="Create unforgettable birthday celebrations with our custom themes and entertainment options."
            />
            <ServiceCard
              icon={Gift}
              title="Theme design"
              description="Let us bring your event's theme to life with creativity, elegance, and precision."
            />
            <ServiceCard
              icon={PartyPopper}
              title="Guest management"
              description="Enjoy your occasion without being worried about guests for a single time with our management."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section
        id="faqs"
        className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
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
    </>
  );
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
}) => (
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
