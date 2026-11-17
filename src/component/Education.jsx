
import React, { useState } from "react";
import { GraduationCap, School, BookOpen, ChevronDown } from "lucide-react";

// ---- Edit your education here ----
// color = icon + glow color, status = "In Progress" or "Completed", details = text shown on "Read more"
const qualifications = [
  {
    title: "Bachelor of Computer Systems and Information Technology (BCSIT)",
    place: "Apex College Pokhara University",
    year: "2023 - present",
    icon: <GraduationCap size={20} />,
    color: "#22d3ee",
    status: "In Progress",
    details:
      "Currently pursuing my bachelor's degree in Computer Systems and Information Technology.",
  },
  {
    title: "Higher Secondary Certificate",
    place: "Radiant Secondary School",
    year: "2021 - 2023",
    icon: <BookOpen size={20} />,
    color: "#a78bfa",
    status: "Completed",
    details: "Completed higher secondary education with a focus on science subjects.",
  },
  {
    title: "Secondary School Certificate",
    place: "Bhumiraj Secondary School",
    year: "2008 - 2021",
    icon: <School size={20} />,
    color: "#34d399",
    status: "Completed",
    details: "Completed secondary education, laying the foundation for further studies.",
  },
];

const Education = () => {
  const [openIndex, setOpenIndex] = useState(null); // index of the expanded card

  // Open a card, or close it if it is already open
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="education"
      className="relative bg-[#0b1226] min-h-screen flex items-center justify-center py-16 px-6 overflow-hidden"
    >
      {/* Soft background glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          Academic{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Qualification
          </span>
        </h1>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-12 text-sm sm:text-base">
          My education path, from school to university. Click "Read more" on any
          card to see the details.
        </p>

        {/* Timeline */}
        <div className="relative pl-14 sm:pl-16">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-400 to-emerald-400 opacity-60"></div>

          {qualifications.map((q, i) => {
            const isOpen = openIndex === i;
            const inProgress = q.status === "In Progress";

            return (
              <div key={q.title} style={{ "--c": q.color }} className="relative mb-8 last:mb-0">
                {/* Icon on the line */}
                <span
                  style={{ color: q.color }}
                  className="absolute -left-14 sm:-left-16 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0b1226] border-2 border-[var(--c)]"
                >
                  {/* Pulsing ring for the course that is still running */}
                  {inProgress && (
                    <span className="absolute inset-0 rounded-full border-2 border-[var(--c)] animate-ping opacity-40"></span>
                  )}
                  {q.icon}
                </span>

                {/* Card */}
                <div
                  className={`group rounded-2xl border p-4 shadow-lg shadow-black/30 backdrop-blur-sm
                             hover:-translate-y-1 hover:border-[var(--c)] hover:shadow-[0_15px_35px_-10px_var(--c)]
                             transition-all duration-300 ${
                               isOpen
                                 ? "bg-white/10 border-[var(--c)] shadow-[0_15px_35px_-10px_var(--c)]"
                                 : "bg-white/5 border-white/10 hover:bg-white/10"
                             }`}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {q.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">{q.place}</p>

                  {/* Year + status chips */}
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-[var(--c)] transition-colors duration-300">
                      {q.year}
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
                      {q.status}
                    </span>
                  </div>

                  {/* Extra text, shown after clicking Read more */}
                  {isOpen && (
                    <p className="animate-fade text-sm text-slate-300 leading-relaxed mt-4 pt-4 border-t border-white/10">
                      {q.details}
                    </p>
                  )}

                  {/* Read more button */}
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    style={{ color: q.color }}
                    className="mt-4 flex items-center gap-1 text-sm font-medium cursor-pointer hover:underline rounded
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {isOpen ? "Show less" : "Read more"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Small fade-in for the expanded text */}
      <style>
        {`
          @keyframes fade {
            from { opacity: 0; transform: translateY(-4px); }
          }
          .animate-fade {
            animation: fade 0.3s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default Education;