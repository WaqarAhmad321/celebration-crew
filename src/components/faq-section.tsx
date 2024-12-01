import React from "react";
import { MotionDiv } from "./motion-div";
import FAQ from "@/components/FAQ";

const faqs = [
  {
    question: "What services do you offer for birthday event planning?",
    answer:
      "We provide complete event management services, including theme selection, venue decoration, entertainment, photography, party favors, and more. We can also handle custom requests to make your event truly special.",
  },
  {
    question: "Can you plan both kids’ and adults’ birthday parties?",
    answer:
      "Absolutely! We specialize in creating unique and personalized experiences for all age groups, from children’s fun-filled celebrations to elegant adult gatherings.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Yes, we work with catering partners who can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and other specific allergies or restrictions.",
  },
  {
    question: "4. How far in advance should I book your services?",
    answer:
      "To ensure we provide the best experience, we recommend booking at least 2-4 days in advance. However, we can accommodate last-day requests based on availability.",
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
