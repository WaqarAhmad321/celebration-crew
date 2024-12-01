"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "./motion-div";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
            Celebrations Crew
          </MotionDiv>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/#home" text="Home" />
            <NavLink href="/#about" text="About" />
            <NavLink href="/#services" text="Services" />
            <NavLink href="/#faqs" text="FAQ" />
            <NavLink href="/#contact" text="Contact" />
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/order"
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold">
                Order Now!
              </Link>
            </MotionDiv>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#home" text="Home" />
              <MobileNavLink href="#about" text="About" />
              <MobileNavLink href="#services" text="Services" />
              <MobileNavLink href="#pricing" text="Pricing" />
              <MobileNavLink href="#contact" text="Contact" />
              <Link href="/order">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold w-full">
                  Order Now!
                </motion.button>
              </Link>
            </div>
          </MotionDiv>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href={href} className="text-gray-600 hover:text-gray-900 font-medium">
      {text}
    </Link>
  </MotionDiv>
);

const MobileNavLink = ({ href, text }: { href: string; text: string }) => (
  <MotionDiv whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-900 font-medium block px-4 py-2 hover:bg-gray-100 rounded-lg">
      {text}
    </Link>
  </MotionDiv>
);

export default Navbar;
