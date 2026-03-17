import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Skip-to-content – invisible until focused, helps screen readers & Google */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>

      <nav
        className="fixed w-full z-50 bg-bg-dark/90 backdrop-blur-md border-b border-border"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex items-center gap-2 cursor-pointer"
                aria-label="Riajul Hasan – home"
              >
                <Terminal className="text-brand" size={24} aria-hidden="true" />
                <span className="font-bold text-xl tracking-tighter">
                  RIAJUL<span className="text-brand">.DEV</span>
                </span>
              </a>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand transition-colors duration-200 text-[16px] font-medium text-slate-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1stb8-F_VbsRChShp5VwD9Uw4xE0Hcc-b/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Riajul Hasan's CV (opens in new tab)"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2 focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <X size={24} aria-hidden="true" />
                ) : (
                  <Menu size={24} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-bg-card border-b border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-800 hover:text-brand transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://drive.google.com/file/d/1stb8-F_VbsRChShp5VwD9Uw4xE0Hcc-b/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  aria-label="Download Riajul Hasan's CV"
                  className=" w-full mt-4 inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
