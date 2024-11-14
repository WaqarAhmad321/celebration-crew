"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
            Celebrations Crew
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#" text="Home" />
            <NavLink href="#" text="About" />
            <NavLink href="#" text="Services" />
            <NavLink href="#" text="Pricing" />
            <NavLink href="#" text="Contact" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold">
              Get Started
            </motion.button>
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#" text="Home" />
              <MobileNavLink href="#" text="About" />
              <MobileNavLink href="#" text="Services" />
              <MobileNavLink href="#" text="Pricing" />
              <MobileNavLink href="#" text="Contact" />
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold w-full">
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-gray-900 font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}>
    {text}
  </motion.a>
);

const MobileNavLink = ({ href, text }: { href: string; text: string }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-gray-900 font-medium block px-4 py-2 hover:bg-gray-100 rounded-lg"
    whileTap={{ scale: 0.95 }}>
    {text}
  </motion.a>
);

export default Navbar;
