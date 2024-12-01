"use client";

import React from "react";
import { motion } from "framer-motion";
// import { Heart, Users, Trophy, Sparkles } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "./motion-div";

// const stats = [
//   { icon: Heart, label: "Happy Clients", value: "500+" },
//   { icon: Trophy, label: "Events Completed", value: "1000+" },
//   { icon: Users, label: "Team Members", value: "50+" },
//   { icon: Sparkles, label: "Awards Won", value: "25+" },
// ];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="section-title">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We&apos;ve been crafting unforgettable moments and turning dreams
            into reality.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <MotionDiv
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
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary">
              Learn More
            </motion.button> */}
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative">
            <Image
              src="https://plus.unsplash.com/premium_photo-1666184130709-f3709060899a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFydHl8ZW58MHx8MHx8fDA%3D"
              width={1200}
              height={1200}
              alt="Team Planning"
              className="rounded-lg shadow-xl"
            />
            <Image
              src="https://plus.unsplash.com/premium_photo-1661344231470-10b4ec4cf094?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1200}
              height={1200}
              alt="Celebration Moment"
              className="absolute -bottom-12 -right-12 w-2/3 rounded-lg shadow-xl border-4 border-white"
            />
          </MotionDiv>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <MotionDiv
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
            </MotionDiv>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
