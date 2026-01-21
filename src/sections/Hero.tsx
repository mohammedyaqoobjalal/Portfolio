import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/Xd.png", alt: "Adobe XD", className: "top-20 left-10" },
  { src: "/logos/Ai.png", alt: "Illustrator", className: "top-32 right-16" },
  { src: "/logos/Ps.png", alt: "Photoshop", className: "bottom-28 left-20" },
  { src: "/logos/Figma.png", alt: "Figma", className: "top-40 left-[45%]" },
  { src: "/logos/PP.png", alt: "Premiere Pro", className: "bottom-32 right-24" },
  { src: "/logos/Davinci.png", alt: "DaVinci Resolve", className: "top-16 right-[40%]" },
];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 
                 bg-gray-950 text-white overflow-hidden"
    >
      {/* Blurred gradient circles for mesh background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

      {/* Floating + Spinning Logos */}
      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className={`w-12 h-12 md:w-16 md:h-16 absolute opacity-90 drop-shadow-xl ${logo.className}`}
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 4 + index * 0.5,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              duration: 10 + index * 2,
              ease: "linear",
            },
          }}
          whileHover={{
            scale: 1.3,
            rotateX: 20,
            rotateY: -20,
            rotateZ: 10,
            boxShadow: "0px 15px 40px rgba(0,0,0,0.6)",
          }}
        />
      ))}

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl pb-4 font-extrabold mb-4 
                   bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300 
                   bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Hi, I’m Mohammed Yaqoob Jalal
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A passionate{" "}
        <span className="font-semibold text-blue-400">Graphic Designer</span> & 
        <span className="font-semibold text-purple-400"> Frontend Developer</span>, 
        blending creativity with modern web technologies.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-6 flex-wrap justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* View Projects Button */}
        <motion.a
          href="#projects"
          whileTap={{ scale: 0.9 }}
          className="px-8 py-3 rounded-full text-white font-semibold shadow-lg 
                     bg-gradient-to-r from-blue-600 to-purple-600 
                     hover:scale-110 hover:shadow-2xl hover:shadow-purple-400/50 
                     transform transition duration-300"
        >
          🚀 View Projects
        </motion.a>

        {/* Download Resume Button */}
        <motion.a
          href="/Mohammed_Yaqoob_Jalal.pdf"
          download="Mohammed_Yaqoob_Jalal.pdf"
          whileTap={{ scale: 0.9 }}
          className="px-8 py-3 rounded-full text-white font-semibold shadow-lg 
                     bg-gradient-to-r from-orange-500 to-pink-500 
                     hover:scale-110 hover:shadow-2xl hover:shadow-pink-400/50 
                     transform transition duration-300"
        >
          📄 Download Resume
        </motion.a>
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

export default Hero;



