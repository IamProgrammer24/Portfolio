import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-10 px-[8vw] md:px-[10vw] lg:px-[15vw] transition-all duration-300">
      <div className="container mx-auto text-center space-y-6">
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-purple-500 tracking-wide">
          Brajesh Chhekur
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base font-medium">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/IamProgrammer24",
            },
            {
              icon: <FaSquareXTwitter />,
              link: "https://twitter.com/",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/brajesh-chhekur/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 w-2/3 mx-auto mt-6"></div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500 tracking-wide mt-4">
          © 2025 Brajesh Chhekur. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
