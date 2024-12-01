import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/124Y4a8ZTtk/?mibextid=LQQJ4d",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/celebration_.crew?igsh=b3hzMDNjdGZwZmg1&utm_source=qr",
  },
  {
    name: "Whatsapp",
    link: "/",
  },
  {
    name: "Facebook",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold gradient-text mb-4">
          Celebrations Crew
        </h2>
        <p className="text-gray-600 mb-8">
          Making your special moments unforgettable
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map(({ link, name }, index) => (
            <Link
              key={index}
              href={link}
              target="_blank"
              className="text-gray-600 hover:text-gray-900">
              {name}
            </Link>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Celebrations Crew. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
