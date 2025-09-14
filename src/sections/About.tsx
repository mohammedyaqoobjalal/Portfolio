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
          a passionate <span className="text-blue-400 font-medium">graphic designer</span> and{" "}
          <span className="text-purple-400 font-medium">frontend developer</span>, 
          recently graduated from{" "}
          <span className="font-medium text-white">Atria Institute of Technology</span> in Information Science. 
          I enjoy blending creativity with functionality to build seamless and engaging digital experiences.
        </p>

        {/* Highlights */}
        <p className="text-lg mb-4">
          Beyond academics, I played key roles in{" "}
          <span className="text-blue-400 font-medium">Cicada</span> as the{" "}
          <span className="font-semibold text-white">SPOC</span> managing 80+ people and 9 events, 
          and led my team to the{" "}
          <span className="text-purple-400 font-medium">top 30 nationally</span> in{" "}
          <span className="font-medium">Aveshana</span>, a prestigious prototype competition. 
          I also contributed as a member of the{" "}
          <span className="text-orange-300 font-medium">Grievance Cell</span>, 
          where I honed skills in teamwork, communication, and problem-solving.
        </p>

        {/* Founder Roles */}
        <p className="text-lg">
          Beyond design and code, I am the founder of{" "}
          <span className="font-medium text-blue-400">Volt Kingdom</span> – a YouTube content creation team, 
          and <span className="font-medium text-purple-400">God of Gamerz</span> – an esports team for Free Fire Max, 
          where I manage talented creators and players.
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
