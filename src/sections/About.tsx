import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 bg-gray-950 text-white flex items-center justify-center overflow-hidden"
    >
      {/* Blurred gradient circles for mesh background */}
      <div className="absolute -top-24 -left-16 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-10"></div>

      {/* Content Card */}
      <motion.div
        className="relative max-w-3xl bg-gray-900/60 backdrop-blur-lg border border-gray-800 
                   rounded-2xl shadow-xl p-10 text-gray-300 leading-relaxed text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 
                     bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300 
                     bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <p className="text-lg mb-4">
          I’m <span className="font-semibold text-white">Mohammed Yaqoob Jalal</span>, 
          a dedicated professional currently working at{" "}
          <span className="font-medium text-blue-400">[24]7.ai</span>. I support customers by
          handling queries, resolving issues efficiently, and maintaining high service quality
          in a fast-paced environment. This role has strengthened my professionalism,
          adaptability, and ability to work effectively with diverse users and teams.
        </p>

        {/* Genzi.ai */}
        <p className="text-lg mb-4">
          Previously, I worked at{" "}
          <span className="font-medium text-purple-400">Genzi.ai</span>, a{" "}
          <span className="text-white font-medium">software development startup</span>, where
          I gained early-stage industry exposure and hands-on experience in supporting product
          and operational workflows. Working in a startup environment helped me understand
          real-world problem solving, fast iteration, and collaboration across technical and
          non-technical teams.
        </p>

        {/* Freelance */}
        <p className="text-lg mb-4">
          Alongside my full-time roles, I have also worked as a{" "}
          <span className="font-medium text-orange-300">freelancer</span>, collaborating with
          clients on project-based work. This experience improved my ability to work
          independently, manage time efficiently, and communicate clearly to deliver results
          aligned with client expectations.
        </p>

        {/* Career Direction */}
        <p className="text-lg">
          With experience in a software startup, freelance work, and my current role at{" "}
          <span className="font-medium text-blue-400">[24]7.ai</span>, I continue to grow
          professionally and remain focused on building a career in the{" "}
          <span className="text-white font-medium">IT and technical support domain</span>.
        </p>
      </motion.div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,739.36,14.24c-87.42-17.34-172.57-5.88-258.71,14.72C386.2,52.8,302.9,95.74,218.34,109.07,146.41,120.45,73.36,110.16,0,95.29V0H1200V27.35C1132.19,49.46,1059.78,111.39,985.66,92.83Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
