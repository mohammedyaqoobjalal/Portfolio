import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const designSkills = [
    { name: "Adobe Illustrator", level: 90 },
    { name: "Adobe XD", level: 85 },
    { name: "Adobe Photoshop", level: 92 },
    { name: "Figma", level: 88 },
    { name: "Canva", level: 95 },
    { name: "Adobe Premiere Pro", level: 80 },
    { name: "DaVinci Resolve", level: 75 },
  ];

  const devSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "React + TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Supabase", level: 70 },
  ];

  const managementSkills = [
    { name: "Leadership", level: 90 },
    { name: "Team Management", level: 88 },
    { name: "Content Creation", level: 85 },
    { name: "Project Management", level: 87 },
  ];

  // Progress bar component
  const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-200">{skill}</span>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 bg-gray-950 text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-24 -left-16 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12
                   bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300
                   bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">
        {/* Design Skills */}
        <motion.div
          className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-6">🎨 Design</h3>
          {designSkills.map((s, i) => (
            <SkillBar key={i} skill={s.name} level={s.level} />
          ))}
        </motion.div>

        {/* Development Skills */}
        <motion.div
          className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-6">💻 Development</h3>
          {devSkills.map((s, i) => (
            <SkillBar key={i} skill={s.name} level={s.level} />
          ))}
        </motion.div>

        {/* Management Skills */}
        <motion.div
          className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-orange-400 mb-6">🚀 Leadership</h3>
          {managementSkills.map((s, i) => (
            <SkillBar key={i} skill={s.name} level={s.level} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
