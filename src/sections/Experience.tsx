import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Frontend Developer & UI/UX Designer",
      company: "Genzi AI",
      period: "Intern",
      description:
        "Developed the Prop Panda website, an AI-powered real estate assistant. Worked on frontend development and crafted UI/UX designs. Successfully delivered a live hosted project.",
    },
    {
      role: "Founder / CEO",
      company: "Volt Kingdom",
      period: "2024 – Present",
      description:
        "Lead a YouTube content creation team of 6 members. Oversee content strategy, creative direction, and video production management.",
    },
    {
      role: "Founder / CEO",
      company: "God of Gamerz",
      period: "2024 – Present",
      description:
        "Built and manage an esports team of 5 competitive Free Fire Max players. Handle team coordination, strategy, and leadership.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 px-6 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl pb-4 font-extrabold text-center mb-16
                   bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300
                   bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-400 opacity-30"></div>

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-3 top-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>

              {/* Card */}
              <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 
                              rounded-2xl p-6 shadow-md hover:shadow-purple-500/20 transition">
                <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-200">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
