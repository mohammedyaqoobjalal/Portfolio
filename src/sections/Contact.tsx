import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16
                   bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300
                   bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Info + Socials */}
      <motion.div
        className="max-w-2xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-gray-300">
          Let’s collaborate or just say hi 👋  
          I’m always open to new opportunities and creative projects.
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-6 h-6 text-blue-400" />
            <a
              href="mailto:mdyaqoobjalal@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              mdyaqoobjalal@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-6 h-6 text-purple-400" />
            <a
              href="tel:+91XXXXXXXXXX"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              +91 7795789300
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-5 mt-8">
          <a
            href="https://www.linkedin.com/in/mohammedyaqoobjalal/"
            target="_blank"
            className="p-3 bg-gray-900 border border-gray-700 rounded-full hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/mohammedyaqoobjalal"
            target="_blank"
            className="p-3 bg-gray-900 border border-gray-700 rounded-full hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/kingofgodz.myj/"
            target="_blank"
            className="p-3 bg-gray-900 border border-gray-700 rounded-full hover:text-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
