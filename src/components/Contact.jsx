import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-bg-dark"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Get In Touch
          </h2>
          <div
            className="w-20 h-1 bg-brand mx-auto rounded-full"
            aria-hidden="true"
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white">
              Let's Work Together
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>

            <address className="not-italic space-y-4">
              <a
                href="mailto:hasanriajul112@gmail.com"
                aria-label="Send email to Riajul Hasan"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-lg hover:border-brand transition-colors group"
              >
                <Mail
                  className="text-brand group-hover:scale-110 transition-transform"
                  size={24}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white">hasanriajul112@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/riajul-hasan112/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Riajul Hasan on LinkedIn"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-lg hover:border-brand transition-colors group"
              >
                <Linkedin
                  className="text-brand group-hover:scale-110 transition-transform"
                  size={24}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="text-white">Riajul Hasan</p>
                </div>
              </a>

              <a
                href="https://github.com/Riajul-56"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Riajul Hasan on GitHub"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-lg hover:border-brand transition-colors group"
              >
                <Github
                  className="text-brand group-hover:scale-110 transition-transform"
                  size={24}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-white">Riajul Hasan</p>
                </div>
              </a>
            </address>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-card border border-border rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="w-full px-4 py-3 bg-slate-900 border border-border rounded-lg text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="Your Name"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-slate-900 border border-border rounded-lg text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="your@email.com"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-border rounded-lg text-white focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Your message..."
                  required
                  aria-required="true"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full gap-2">
                <Send size={18} aria-hidden="true" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
