import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Trophy, Sparkles } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Heart, label: "Happy Clients", value: "500+" },
  { icon: Trophy, label: "Events Completed", value: "1000+" },
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Sparkles, label: "Awards Won", value: "25+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="section-title">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Since 2010, we&apos;ve been crafting unforgettable moments and
            turning dreams into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-gray-900">
              Creating Magical Moments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Celebrations Crew, we believe every celebration should be as
              unique as the people it brings together. Our passion for creating
              extraordinary experiences drives us to push boundaries and exceed
              expectations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience in event planning and celebration
              management, we&apos;ve mastered the art of turning your vision
              into reality. Our dedicated team of creative professionals works
              tirelessly to ensure every detail is perfect.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary">
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative">
            <Image
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80"
              width={1200}
              height={1200}
              alt="Team Planning"
              className="rounded-lg shadow-xl"
            />
            <Image
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80"
              width={1200}
              height={1200}
              alt="Celebration Moment"
              className="absolute -bottom-12 -right-12 w-2/3 rounded-lg shadow-xl border-4 border-white"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
