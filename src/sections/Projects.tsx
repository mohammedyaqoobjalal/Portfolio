import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Prop Panda",
      description:
        "An AI-powered real estate assistant website developed during my internship at Genzi AI. I worked as a Frontend Developer and UI/UX Designer. The website is live and hosted.",
      link: "#", // Replace with actual hosted link if available
      tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    },
    {
      title: "Hotel Management System",
      description:
        "A real-time client project to manage hotel bookings, rooms, and customer data. Still under development.",
      link: "#", // replace with hosted project / GitHub later
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gray-950  text-white overflow-hidden"
    >
      {/* Background Effects */}
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
        Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-900/70 backdrop-blur-lg border border-gray-800 
                       rounded-2xl shadow-lg hover:shadow-purple-500/20 
                       transition-all duration-500 p-6 "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full 
                             bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                             text-gray-200 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-orange-400 hover:text-orange-300 transition"
              >
                
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
