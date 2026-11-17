
import React, { useState } from "react";

import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaChartPie,
  FaProjectDiagram,
  FaTasks,
  FaComments,
} from "react-icons/fa";

import {
  SiC,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

import portfolio from "../data/portfolio";

// Get skills from portfolio.js
const skills = portfolio.skills;

// Automatically generate categories
const tabs = [
  "All",
  ...new Set(skills.map((skill) => skill.category)),
];

// Icon mapping
const iconMap = {
  brain: <FaBrain />,
  robot: <FaRobot />,
  database: <FaDatabase />,
  pandas: <SiPandas />,
  numpy: <SiNumpy />,
  sklearn: <SiScikitlearn />,
  chart: <FaChartLine />,
  pie: <FaChartPie />,
  python: <FaPython />,
  project: <FaProjectDiagram />,
  cJava: (
    <>
      <SiC />
      <FaJava />
    </>
  ),
  javascript: <FaJs />,
  react: <FaReact />,
  node: <FaNodeJs />,
  php: <FaPhp />,
  tasks: <FaTasks />,
  comments: <FaComments />,
};

// Number of skills shown initially
const INITIAL_COUNT = 6;

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openSkill, setOpenSkill] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Filter skills by category
  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeTab
        );

  // Show limited or all skills
  const visibleSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_COUNT);

  // Toggle individual skill description
  const toggleSkill = (name) => {
    setOpenSkill(openSkill === name ? null : name);
  };

  // Change category
  const changeTab = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
    setOpenSkill(null);
  };

  return (
    <section
      id="Skills"
      className="relative bg-[#0b1226] min-h-screen flex items-center justify-center py-16 px-6 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl w-full">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>

        <p className="text-slate-400 text-center max-w-xl mx-auto mb-8 text-sm sm:text-base">
          Tools and technologies I use for data, machine learning and web
          projects. Pick a category and click "Read more" on any card.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => changeTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-violet-500/30"
                  : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

          {visibleSkills.map((skill) => {
            const isOpen = openSkill === skill.name;

            return (
              <div
                key={skill.name}
                style={{ "--c": skill.color }}
                className={`group rounded-2xl border p-5 shadow-lg shadow-black/30 backdrop-blur-sm
                  hover:-translate-y-2 hover:border-[var(--c)] hover:shadow-[0_15px_35px_-10px_var(--c)]
                  transition-all duration-300 ${
                    isOpen
                      ? "bg-white/10 border-[var(--c)] shadow-[0_15px_35px_-10px_var(--c)]"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
              >

                {/* Skill icon and name */}
                <div className="flex items-center gap-4 mb-3">

                  <div
                    style={{ color: skill.color }}
                    className="flex items-center gap-1 justify-center min-w-14 h-14 px-3 rounded-2xl bg-[#0b1226] border border-white/10 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                  >
                    {iconMap[skill.icon] || <FaBrain />}
                  </div>

                  <p className="text-white font-semibold leading-tight">
                    {skill.name}
                  </p>

                </div>

                {/* Short description */}
                <p className="text-sm text-slate-400 mb-4">
                  {skill.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-[var(--c)] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Detailed description */}
                {isOpen && (
                  <p className="animate-fade text-sm text-slate-300 leading-relaxed mt-4 pt-4 border-t border-white/10">
                    {skill.more}
                  </p>
                )}

                {/* Individual Read more button */}
                <button
                  type="button"
                  onClick={() => toggleSkill(skill.name)}
                  aria-expanded={isOpen}
                  style={{ color: skill.color }}
                  className="mt-4 text-sm font-medium cursor-pointer hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                >
                  {isOpen ? "Show less" : "Read more"}
                </button>

              </div>
            );
          })}

        </div>

        {/* Read more / Show less for entire list */}
        {filteredSkills.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => {
                setShowAll(!showAll);
                setOpenSkill(null);
              }}
              aria-expanded={showAll}
              className="px-8 py-3 rounded-full text-sm font-medium text-white cursor-pointer bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {showAll
                ? "Show less"
                : `Read more (${filteredSkills.length - INITIAL_COUNT} more skills)`}
            </button>
          </div>
        )}

      </div>

      {/* Fade-in animation */}
      <style>
        {`
          @keyframes fade {
            from {
              opacity: 0;
              transform: translateY(-4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade {
            animation: fade 0.3s ease-out;
          }
        `}
      </style>

    </section>
  );
};

export default Skills;
