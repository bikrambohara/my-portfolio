import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

// ---- Edit your links here ----
const links = [
  { label: "About Me", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: " Certifications", href: "#Certificate" },
  { label: "Project", href: "#Project" },
];

// color = glow + icon color for each social button
const socials = [
  { name: "Facebook", href: "https://facebook.com", color: "#1877f2", icon: <FaFacebookF /> },
  { name: "Instagram", href: "https://instagram.com", color: "#e1306c", icon: <FaInstagram /> },
  { name: "LinkedIn", href: "https://linkedin.com", color: "#0a66c2", icon: <FaLinkedinIn /> },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative text-white bg-gradient-to-r from-gray-800 via-blue-900 to-black shadow-lg shadow-black/40">
      {/* Colored accent line on top */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-900 via-violet-500 to-pink-500"></div>

      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Bikram
          </h2>
          <p className="mt-2 text-sm text-gray-300 max-w-xs mx-auto md:mx-0">
            Building data, machine learning and web projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg">Quick Links</h2>
          <ul className="mt-3 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative inline-block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  {/* Underline grows on hover */}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-lg">Follow Me On</h2>
          <div className="mt-3 flex justify-center md:justify-start gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                style={{ "--c": s.color }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[var(--c)]
                           hover:bg-[var(--c)] hover:text-white hover:-translate-y-1 hover:scale-110
                           hover:shadow-[0_8px_20px_-4px_var(--c)]
                           transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright + back to top */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Bikram. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 cursor-pointer
                       hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-500 hover:text-white hover:-translate-y-1
                       hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <FaArrowUp className="text-xs" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;