import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  color: "purple" | "orange";
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  color,
  featured = false,
}) => {
  const cardClass = featured
    ? "transform scale-105 shadow-xl"
    : "hover:scale-105 hover:shadow-xl";

  const buttonClass =
    color === "purple"
      ? "bg-purple-600 hover:bg-purple-700"
      : "bg-orange-500 hover:bg-orange-600";

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl p-8 transition-all duration-300 ${cardClass}`}>
      {featured && (
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-600">/event</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full ${buttonClass} text-white py-3 rounded-lg font-semibold transition-colors`}>
        Choose Plan
      </motion.button>
    </MotionDiv>
  );
};

export default PricingCard;
