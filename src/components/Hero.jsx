import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Database, Server } from "lucide-react";

// Counter Animation Component
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / 1000;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(percentage * end));
        if (progress < duration) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {end === 100 ? "%" : "+"}
    </span>
  );
};

const Hero = () => {
  return (
    <>
      {/* ─── Per-page SEO (overrides <title> in index.html while React is live) ─── */}
      <Helmet>
        <title>Riajul Hasan | MERN Stack Developer – Sylhet, Bangladesh</title>
        <meta
          name="description"
          content="Riajul Hasan is a MERN Stack Developer and CSE student at Metropolitan University, Sylhet. Building scalable React and Node.js web applications."
        />
      </Helmet>

      {/* ─── Hero Section – semantic <header> landmark ─── */}
      <header
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
        aria-label="Introduction"
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── Text Content ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 order-2 lg:order-1"
            >
              {/* Status Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card/50 text-brand text-sm font-medium"
                aria-label="Availability status: Available for freelance projects"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Available for Freelance Projects
              </div>

              {/* Heading hierarchy — one h1 per page */}
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-3xl font-semibold text-brand"
                >
                  Hello, I'm
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
                >
                  Riajul Hasan
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl font-medium text-text-muted"
                >
                  <span className="text-brand">MERN Stack Developer</span>
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-text-muted max-w-lg leading-relaxed"
              >
                Computer Science student at{" "}
                <strong className="text-white font-semibold">
                  Metropolitan University, Sylhet
                </strong>
                . Passionate about building scalable web applications with
                modern technologies.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 pt-4"
                aria-label="Experience highlights"
              >
                <div className="text-center">
                  <p
                    className="text-3xl font-bold text-white"
                    aria-label="2 plus years experience"
                  >
                    <Counter end={2} duration={2} />
                  </p>
                  <p className="text-sm text-text-muted">Years Experience</p>
                </div>
                <div className="w-px bg-border" aria-hidden="true"></div>
                <div className="text-center">
                  <p
                    className="text-3xl font-bold text-white"
                    aria-label="20 plus projects completed"
                  >
                    <Counter end={20} duration={2} />
                  </p>
                  <p className="text-sm text-text-muted">Projects Completed</p>
                </div>
                <div className="w-px bg-border" aria-hidden="true"></div>
                <div className="text-center">
                  <p
                    className="text-3xl font-bold text-white"
                    aria-label="100 percent client satisfaction"
                  >
                    <Counter end={100} duration={2} />
                  </p>
                  <p className="text-sm text-text-muted">Client Satisfaction</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
                aria-label="Social profiles"
              >
                <a
                  href="https://github.com/Riajul-56"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Riajul Hasan on GitHub"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-border hover:border-brand text-slate-300 hover:text-white bg-transparent hover:bg-brand/10"
                >
                  <Github size={18} className="mr-2" aria-hidden="true" />{" "}
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/riajul-hasan112/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Riajul Hasan on LinkedIn"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-border hover:border-brand text-slate-300 hover:text-white bg-transparent hover:bg-brand/10"
                >
                  <Linkedin size={18} className="mr-2" aria-hidden="true" />{" "}
                  LinkedIn
                </a>
                <a
                  href="mailto:hasanriajul112@gmail.com"
                  aria-label="Email Riajul Hasan"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-border hover:border-brand text-slate-300 hover:text-white bg-transparent hover:bg-brand/10"
                >
                  <Mail size={18} className="mr-2" aria-hidden="true" /> Email
                </a>
              </motion.nav>
            </motion.div>

            {/* ── Profile Image ── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:mt-0 mt-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-brand/40"
                  aria-hidden="true"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-4 rounded-full border-4 border-brand/30"
                  aria-hidden="true"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-brand/10 rounded-full blur-3xl"
                  aria-hidden="true"
                ></motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-brand/50 shadow-2xl shadow-brand/30 bg-bg-card"
                >
                  <img
                    src="DP.png"
                    alt="Riajul Hasan – MERN Stack Developer based in Sylhet, Bangladesh"
                    width={384}
                    height={384}
                    loading="eager"
                    fetchpriority="high"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Overlay badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="hidden md:block absolute top-4 left-0 z-20 bg-bg-card border border-border rounded-xl p-3 shadow-lg"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="text-brand" size={20} />
                    <span className="text-white text-sm font-medium">
                      MERN Stack
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="hidden md:block absolute top-4 right-0 z-20 bg-bg-card border border-border rounded-xl p-3 shadow-lg"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">
                      Open to Work
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="hidden md:block absolute bottom-4 left-0 z-20 bg-bg-card border border-border rounded-xl p-3 shadow-lg"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-2">
                    <Database className="text-brand" size={20} />
                    <span className="text-white text-sm font-medium">
                      MongoDB
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="hidden md:block absolute bottom-4 right-0 z-20 bg-bg-card border border-border rounded-xl p-3 shadow-lg"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-2">
                    <Server className="text-brand" size={20} />
                    <span className="text-white text-sm font-medium">
                      Node.js
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
