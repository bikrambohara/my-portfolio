import React, { useState } from "react";
import {
  FaGithub,
  FaLayerGroup,
  FaLaptopCode,
  FaFlask,
  FaBrain,
  FaChartBar,
  FaCubes,
} from "react-icons/fa";

import portfolio from "../data/portfolio";

// Category colors and icons
const categories = {
  "Full Stack": {
    color: "#22d3ee",
    icon: <FaLayerGroup />,
  },
  Frontend: {
    color: "#a78bfa",
    icon: <FaLaptopCode />,
  },
  "Data Science": {
    color: "#34d399",
    icon: <FaFlask />,
  },
  "AI / ML": {
    color: "#f472b6",
    icon: <FaBrain />,
  },
  "Data Analysis": {
    color: "#f89939",
    icon: <FaChartBar />,
  },
  Other: {
    color: "#94a3b8",
    icon: <FaCubes />,
  },
};

// Get projects from portfolio.js
const projects = portfolio.projects || [];

const tabs = ["All", ...Object.keys(categories)];

const INITIAL_COUNT = 6;

const ProjectPortfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Filter projects by category
  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeTab
        );

  const visible = showAll
    ? filtered
    : filtered.slice(0, INITIAL_COUNT);

  // Change category
  const changeTab = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section
      id="portfolio"
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
            Projects
          </span>
        </h1>

        <p className="text-slate-400 text-center max-w-xl mx-auto mb-8 text-sm sm:text-base">
          Pick a category to see my work. Click "View on GitHub"
          to explore the project source code.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
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

        {/* Project cards */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((project) => {
              const category =
                categories[project.category] || categories.Other;

              const { color, icon } = category;

              return (
                <div
                  key={project.id || project.title}
                  style={{ "--c": color }}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/10 hover:border-[var(--c)] hover:shadow-[0_15px_35px_-10px_var(--c)] transition-all duration-300"
                >
                  {/* Project heading */}
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      style={{ color }}
                      className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0b1226] border border-white/10 text-2xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                    >
                      {icon}
                    </div>

                    <div>
                      <p className="text-white font-semibold leading-tight">
                        {project.title}
                      </p>

                      <p
                        style={{ color }}
                        className="text-xs mt-1"
                      >
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Project description */}
                  <p className="text-sm text-slate-400 mb-4">
                    {project.problem}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {(project.tags || []).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-[var(--c)] transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[var(--c)] border border-[var(--c)] hover:bg-[var(--c)] hover:text-[#0b1226] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <FaGithub />
                        View on GitHub
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-white bg-white/10 border border-white/10 hover:bg-white/20 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-slate-400 py-10">
            No projects found in this category.
          </p>
        )}

        {/* Show more / Show less */}
        {filtered.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="px-8 py-3 rounded-full text-sm font-medium text-white cursor-pointer bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {showAll
                ? "Show less"
                : `Show more (${filtered.length - INITIAL_COUNT} more projects)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectPortfolio;
