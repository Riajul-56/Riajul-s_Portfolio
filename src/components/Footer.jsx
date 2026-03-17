import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 bg-bg-dark border-t border-border"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Terminal className="text-brand" size={20} aria-hidden="true" />
            <span className="font-bold text-white">
              RIAJUL<span className="text-brand">.DEV</span>
            </span>
          </div>

          {/* Social Links */}
          <nav aria-label="Social media links">
            <ul className="flex gap-6 list-none">
              <li>
                <a
                  href="https://github.com/Riajul-56"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Riajul Hasan on GitHub"
                  className="text-slate-400 hover:text-brand transition-colors"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/riajul-hasan112/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Riajul Hasan on LinkedIn"
                  className="text-slate-400 hover:text-brand transition-colors"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hasanriajul112@gmail.com"
                  aria-label="Email Riajul Hasan"
                  className="text-slate-400 hover:text-brand transition-colors"
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-text-muted text-sm">
            <small>© {currentYear} Riajul Hasan. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
