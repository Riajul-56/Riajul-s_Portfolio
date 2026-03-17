import { motion } from "framer-motion";
import { Code2, Database, Server, Globe } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: <Code2 className="text-brand" size={24} aria-hidden="true" />,
    items: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "Redux"],
  },
  {
    name: "Backend",
    icon: <Server className="text-brand" size={24} aria-hidden="true" />,
    items: ["Node.js", "Express", "REST APIs", "Authentication", "JWT"],
  },
  {
    name: "Database",
    icon: <Database className="text-brand" size={24} aria-hidden="true" />,
    items: ["MongoDB", "Mongoose", "SQL", "Sequelize", "Data Modeling"],
  },
  {
    name: "Tools",
    icon: <Globe className="text-brand" size={24} aria-hidden="true" />,
    items: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
  },
];

const proficiency = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Tailwind CSS", level: 95 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-bg-dark"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Technical Skills
          </h2>
          <div
            className="w-20 h-1 bg-brand mx-auto rounded-full"
            aria-hidden="true"
          ></div>
        </motion.div>

        {/* Skill Category Cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 list-none"
          aria-label="Skill categories"
        >
          {skills.map((skill, index) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-brand transition-all duration-300 hover:shadow-lg hover:shadow-brand/10 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {skill.name}
              </h3>
              <ul
                className="flex flex-wrap gap-2 list-none"
                aria-label={`${skill.name} technologies`}
              >
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 group-hover:bg-brand/10 group-hover:text-brand transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>

        {/* Proficiency Bars */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Proficiency Levels
          </h3>
          <dl className="space-y-6">
            {proficiency.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <dt className="text-slate-300 font-medium">{skill.name}</dt>
                  <dd className="text-brand font-bold">{skill.level}%</dd>
                </div>
                <div
                  className="w-full bg-slate-800 rounded-full h-3 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} proficiency ${skill.level}%`}
                >
                  <motion.div
                    className="bg-brand h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Skills;
