import React from 'react'
import PricingCard from './PricingCard';
import { motion } from 'framer-motion';

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

const Pricing = () => {
  return (
    <section
    id="pricing"
    className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
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
  </section>  )
}

export default Pricing