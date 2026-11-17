
import React, { useState } from "react";
import portfolio from "../data/portfolio";
import profile from "../assets/image.png"; 
import cv from "../assets/cv.pdf";

const tabs = [
  { label: "Skills", to: "Skills" },
  { label: "Project", to: "Project" },
  { label: "Experience", to: "Experience" },
  { label: "Certificate", to: "Certificate" },
];

const highlights = [
  {
    label: "Problem Solver",
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
    ),
  },
  {
    label: "Lifelong Learner",
    icon: (
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16zM8 7h8M8 11h6" />
    ),
  },
  {
    label: "Tech Enthusiast",
    icon: (
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M7 6h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM10 10h4v4h-4z" />
    ),
  },
];

const fadeMask =
  "radial-gradient(ellipse 70% 75% at 50% 50%, #000 55%, transparent 100%)";

const About = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  const [expanded, setExpanded] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab.label);

    const section = document.getElementById(tab.to);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`No section found with id="${tab.to}"`);
    }
  };

  return (
    <section
      id="about"
      className="relative bg-[#070d1f] text-white py-16 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-6">
        {/* ================= LEFT: PORTRAIT ================= */}
        <div className="relative flex justify-center md:justify-start">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none md:w-[85%] md:ml-0">
            <img
              src={profile}
              alt="Profile portrait"
              className="w-full h-auto block"
              style={{ WebkitMaskImage: fadeMask, maskImage: fadeMask }}
            />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-4 sm:left-8 bg-[#131c38]/90 backdrop-blur border border-white/10 rounded-2xl px-4 py-2 shadow-xl animate-bounce">
              <p className="text-xs text-slate-400">Available for</p>
              <p className="text-sm font-semibold text-emerald-400">● work</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: CONTENT ================= */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
{/* Description */}
<p className="text-slate-300 leading-relaxed mb-2 mx-auto md:mx-0 text-sm">
  {portfolio.about.description}

  {expanded && (
    <>
      {" "}
      {portfolio.about.moreDescription}
    </>
  )}
</p>

          {/* Read More Button */}
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="text-cyan-400 text-sm font-medium mb-6 hover:text-cyan-300 hover:underline cursor-pointer"
          >
            {expanded ? "Show less" : "Read more"}
          </button>

          {/* ================= HIGHLIGHTS ================= */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0 mb-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-cyan-400/30 shadow-[0_0_18px_rgba(99,102,241,0.35)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-cyan-300"
                  >
                    {item.icon}
                  </svg>
                </span>
                <span className="text-xs text-slate-200 text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* ================= TABS ================= */}
          <div className="max-w-md mx-auto md:mx-0">
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.to}
                  type="button"
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                    ${
                      activeTab === tab.label
                        ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-violet-500/30"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
            <a
              href="#Contact"
              className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium py-2 px-6 rounded-full shadow-lg
                shadow-violet-500/30 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-95 transition-all duration-300 cursor-pointer inline-block"
            >
              Hire Me
            </a>

            <a
              href={cv}
              download="Bikram-Bohara-CV.pdf"
              className="border border-white/20 text-slate-200 font-medium py-2 px-6 rounded-full hover:bg-white/10 hover:border-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;