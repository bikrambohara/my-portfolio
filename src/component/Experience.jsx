import React, { useState } from "react";

import {
  Briefcase,
  ChevronDown,
  GraduationCap,
  Laptop,
  Building2,
} from "lucide-react";

import portfolio from "../data/portfolio";

// Get experience data from portfolio.js
const experience = portfolio.experience || [];

// Icon mapping
const iconMap = {
  briefcase: <Briefcase size={20} />,
  graduation: <GraduationCap size={20} />,
  laptop: <Laptop size={20} />,
  building: <Building2 size={20} />,
};

// Number of experiences shown initially
const INITIAL_COUNT = 4;

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Show limited or all experiences
  const visibleExperience = showAll
    ? experience
    : experience.slice(0, INITIAL_COUNT);

  // Toggle individual experience details
  const toggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Show more / Show less
  const toggleShowAll = () => {
    setShowAll(!showAll);
    setOpenIndex(null);
  };

  return (
    <section
      id="experience"
      className="relative bg-[#0b1226] min-h-screen flex items-center justify-center py-16 px-6 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-4xl w-full">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          Job{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>

        <p className="text-slate-400 text-center max-w-xl mx-auto mb-12 text-sm sm:text-base">
          Where I have worked and what I did there. Click "Read more" on a card
          to see the details.
        </p>

        {/* Timeline */}
        {experience.length > 0 ? (
          <div className="relative pl-14 sm:pl-16">

            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-violet-400 opacity-60"></div>

            {visibleExperience.map((job) => {
              const isOpen = openIndex === job.id;
              const inProgress = job.status === "In Progress";

              return (
                <div
                  key={job.id}
                  style={{ "--c": job.color || "#22d3ee" }}
                  className="relative mb-8 last:mb-0"
                >

                  {/* Icon on the timeline */}
                  <span
                    style={{ color: job.color || "#22d3ee" }}
                    className="absolute -left-14 sm:-left-16 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0b1226] border-2 border-[var(--c)]"
                  >

                    {/* Pulsing ring for ongoing experience */}
                    {inProgress && (
                      <span className="absolute inset-0 rounded-full border-2 border-[var(--c)] animate-ping opacity-40"></span>
                    )}

                    {iconMap[job.icon] || <Briefcase size={20} />}

                  </span>

                  {/* Experience card */}
                  <div
                    className={`group rounded-2xl border p-5 shadow-lg shadow-black/30 backdrop-blur-sm
                      hover:-translate-y-1 hover:border-[var(--c)] hover:shadow-[0_15px_35px_-10px_var(--c)]
                      transition-all duration-300 ${
                        isOpen
                          ? "bg-white/10 border-[var(--c)] shadow-[0_15px_35px_-10px_var(--c)]"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                  >

                    {/* Job title */}
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {job.title}
                    </h3>

                    {/* Company */}
                    <p
                      style={{ color: job.color || "#22d3ee" }}
                      className="text-sm font-medium mt-1"
                    >
                      {job.place}
                    </p>

                    {/* Date and status */}
                    <div className="flex flex-wrap items-center gap-2 mt-3">

                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-[var(--c)] transition-colors duration-300">
                        {job.year}
                      </span>

                      <span
                        className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                          inProgress
                            ? "bg-amber-400/15 text-amber-300"
                            : "bg-emerald-400/15 text-emerald-300"
                        }`}
                      >
                        {inProgress && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                        )}

                        {job.status}
                      </span>

                    </div>

                    {/* Technologies and tools */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {(job.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300
                            hover:border-[var(--c)] hover:text-white transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Experience highlights */}
                    {isOpen && (
                      <ul className="animate-fade mt-4 pt-4 border-t border-white/10 space-y-2">

                        {(job.highlights || []).map((item, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-sm text-slate-300 leading-relaxed"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--c)] shrink-0"></span>

                            {item}
                          </li>
                        ))}

                      </ul>
                    )}

                    {/* Read more button */}
                    <button
                      type="button"
                      onClick={() => toggle(job.id)}
                      aria-expanded={isOpen}
                      style={{ color: job.color || "#22d3ee" }}
                      className="mt-4 flex items-center gap-1 text-sm font-medium cursor-pointer hover:underline rounded
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      {isOpen ? "Show less" : "Read more"}

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                  </div>
                </div>
              );
            })}

          </div>
        ) : (
          <p className="text-center text-slate-400 py-10">
            No experience information available yet.
          </p>
        )}

        {/* Show more / Show less */}
        {experience.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={toggleShowAll}
              aria-expanded={showAll}
              className="px-8 py-3 rounded-full text-sm font-medium text-white cursor-pointer bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {showAll
                ? "Show less"
                : `Read more (${experience.length - INITIAL_COUNT} more experiences)`}
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

export default Experience;
