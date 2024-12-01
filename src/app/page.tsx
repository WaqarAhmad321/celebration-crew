
import React from "react";
import { motion } from "framer-motion";
import { Cake, PartyPopper, Gift, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import PricingCard from "@/components/PricingCard";
import Image from "next/image";
import ContactSection from "@/components/Contact-Section";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-div";
import FaqSection from "@/components/faq-section";

function App() {
  return (
    <>
      {/* Hero Section */}
      {/* <AuroraBackground> */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
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
          </MotionDiv>

          <MotionDiv
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
          </MotionDiv>
        </div>
      </section>
      {/* </AuroraBackground> */}

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
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
          </MotionDiv>

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
      <FaqSection />
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
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-primary-600" />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </MotionDiv>
);

export default App;
