import React from "react";
import { MotionDiv } from "./motion-div";
import FAQ from "@/components/FAQ";

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

const FaqSection = () => {
  return (
    <section
      id="faqs"
      className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-3xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services
          </p>
        </MotionDiv>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQ key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
