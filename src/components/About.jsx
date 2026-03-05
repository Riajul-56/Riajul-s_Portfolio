import { motion } from "framer-motion";
import { University, GraduationCap } from "lucide-react";

const About = () => {
  const academicData = [
    {
      year: "2018",
      title: "SSC",
      institution: "Jalalabad Cantonment Public School & College, Sylhet",
      result: "GPA 5.00",
      icon: <GraduationCap className="text-brand" size={24} />,
    },
    {
      year: "2020",
      title: "HSC",
      institution: "Jalalabad Cantonment Public School & College, Sylhet",
      result: "GPA 5.00",
      icon: <GraduationCap className="text-brand" size={24} />,
    },
    {
      year: "Present",
      title: "BSc in CSE",
      institution: "Metropolitan University, Sylhet",
      result: "Currently Pursuing",
      icon: <University className="text-brand" size={24} />,
    },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - About Text & Quick Info */}
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
            <p className="text-text-muted leading-relaxed">
              I am currently pursuing my{" "}
              <strong>BSc in Computer Science & Engineering</strong> at
              Metropolitan University, Sylhet. My academic journey has provided
              me with a strong foundation in algorithms and data structures,
              while my passion for web development has driven me to master the
              MERN stack.
            </p>
            <p className="text-text-muted leading-relaxed">
              I specialize in building responsive, user-centric web
              applications. Whether it's crafting complex backend APIs with
              Node.js or creating dynamic front-end interfaces with React, I
              focus on writing clean, maintainable, and efficient code.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-brand">2+</p>
                <p className="text-sm text-text-muted">Years Experience</p>
              </div>
              <div className="p-4 bg-bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-brand">20+</p>
                <p className="text-sm text-text-muted">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Academic Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Academic Journey
            </h3>
            {academicData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-brand transition-colors"
              >
                <div className="flex-shrink-0 p-3 bg-brand/10 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-brand font-bold text-sm">
                      {item.year}
                    </span>
                    <span className="text-white font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mb-1">
                    {item.institution}
                  </p>
                  <p className="text-text-muted text-xs">{item.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
