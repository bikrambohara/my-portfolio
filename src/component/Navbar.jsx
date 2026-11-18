import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";


const links = [
  { label: "Home", to: "Home" },
  { label: "About Me", to: "About" },
  { label: "Education", to: "Education" },
  { label: "Experience", to: "Experience" },
  { label: "Skills", to: "Skills" },
  { label: "Certificate", to: "Certificate" },
  { label: "Project", to: "Project" },
  { label: "Contact", to: "Contact" },
];

// Shared styles: underline grows on hover, "active-link" (see <style> below) marks the current section
const linkClass =
  "relative inline-block cursor-pointer text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 " +
  "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400 " +
  "after:transition-all after:duration-300 hover:after:w-full";

const hireClass =
  "cursor-pointer text-center text-sm font-semibold text-white py-2 px-6 rounded-full " +
  "bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-violet-500/30 " +
  "hover:scale-105 hover:shadow-[0_8px_25px_-5px_#8b5cf6] transition-all duration-300";

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [scrolled, setScrolled] = useState(false); // page scrolled a bit?
  const [progress, setProgress] = useState(0); // % of the page scrolled

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setProgress(height > 0 ? (y / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1226]/90 py-2 shadow-lg shadow-black/40"
          : "bg-[#0b1226]/60 py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="Home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-xl sm:text-2xl font-extrabold text-white hover:scale-105 transition-transform duration-300"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            BIKRAM
          </span>{" "}
          BOHARA
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active-link"
                  className={linkClass}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Hire Me button */}
        <Link
          to="Contact"
          smooth={true}
          offset={-80}
          duration={500}
          className={`hidden md:inline-block ${hireClass}`}
        >
          Hire Me
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white cursor-pointer
                     hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden animate-fade container mx-auto px-6 pt-5 pb-3 flex flex-col items-start gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active-link"
              onClick={closeMenu}
              className={linkClass}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="Contact"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={closeMenu}
            className={`w-full ${hireClass}`}
          >
            Hire Me
          </Link>
        </div>
      )}

      {/* Scroll progress bar */}
      <div
        style={{ width: `${progress}%` }}
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 transition-[width] duration-150"
      ></div>

      {/* Active link style + fade-in for the mobile menu */}
      <style>
        {`
          header a.active-link { color: #22d3ee; }
          header a.active-link::after { width: 100%; }
          @keyframes fade {
            from { opacity: 0; transform: translateY(-6px); }
          }
          .animate-fade {
            animation: fade 0.25s ease-out;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;