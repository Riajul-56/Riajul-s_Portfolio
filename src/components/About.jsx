import React from "react";
import { motion } from "framer-motion";
import { University, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Bridging the gap between{" "}
              <span className="text-brand">Academic Theory</span> and{" "}
              <span className="text-brand">Professional Practice</span>.
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I am currently pursuing my{" "}
              <strong>BSc in Computer Science & Engineering</strong> at
              Metropolitan University, Sylhet. My academic journey has provided
              me with a strong foundation in algorithms and data structures,
              while my passion for web development has driven me to master the
              MERN stack.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialize in building responsive, user-centric web
              applications. Whether it's crafting complex backend APIs with
              Node.js or creating dynamic front-end interfaces with React, I
              focus on writing clean, maintainable, and efficient code.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-brand">2+</p>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>
              <div className="p-4 bg-bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-brand">20+</p>
                <p className="text-sm text-slate-400">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-6 bg-bg-card border border-border rounded-xl hover:border-brand transition-colors">
              <University className="text-brand mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">
                Education
              </h4>
              <p className="text-slate-400 text-sm">
                BSc in CSE
                <br />
                Metropolitan University, Sylhet
              </p>
            </div>
            <div className="p-6 bg-bg-card border border-border rounded-xl hover:border-brand transition-colors">
              <Briefcase className="text-brand mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">
                Experience
              </h4>
              <p className="text-slate-400 text-sm">
                Full Stack Developer
                <br />
                Freelance & Projects
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
