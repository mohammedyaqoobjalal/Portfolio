import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Me", href: "#about" },
    { name: "My Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Work Experience", href: "#experience" },
    { name: "Get in Touch", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#0f172a] via-[#0a0f1c] to-[#0f172a] border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo on the Left */}
        <motion.div
          className="font-extrabold text-2xl tracking-wide bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          MYJ
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium tracking-wide">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.href}
                className="relative text-gray-300 hover:text-white transition group"
              >
                {link.name}
                {/* Gradient underline on hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400 transition-all group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gradient-to-b from-[#0f172a] via-[#0a0f1c] to-[#0f172a] backdrop-blur-md shadow-lg border-t border-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center py-6 space-y-4 font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
