// import React from "react";
// import { Heart } from "lucide-react"; // for heart icon

// const projects = [
//   {
//     id: 1,
//     img: "https://via.placeholder.com/300x200", 
//     likes: 651,
//     title: "Web design for Digital Marketing",
//   },
//   {
//     id: 2,
//     img: "https://via.placeholder.com/300x200",
//     likes: 630,
//     title: "Web design for Digital Agency",
//   },
//   {
//     id: 3,
//     img: "https://via.placeholder.com/300x200",
//     likes: 340,
//     title: "Web design for Email Marketing",
//   },
// ];

// const ProjectPortfolio = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#0f0320] to-[#1a0836] min-h-screen flex flex-col items-center py-12 px-6 text-white">
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold mb-3">
//         My <span className="text-pink-500">Projects</span>
//       </h1>
//       <p className="text-gray-400 text-center max-w-lg mb-10">
//         All of my latest developed projects are here. Simply click the project
//         title and visit my full project.
//       </p>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-[#1d1035] rounded-2xl p-4 shadow-lg hover:scale-105 transition duration-300"
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="rounded-xl mb-4"
//             />
//             <div className="flex items-center gap-2 mb-2 text-pink-500">
//               <Heart size={18} />
//               <span>{project.likes}</span>
//             </div>
//             <h2 className="text-lg font-semibold hover:text-pink-400 cursor-pointer">
//               {project.title}
//             </h2>
//           </div>
//         ))}
//       </div>

//       {/* Slider Dots (fake for now) */}
//       <div className="flex gap-2 mt-8">
//         <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
//         <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
//         <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
//       </div>
//     </div>
//   );
// };

// export default ProjectPortfolio;






// import React, { useState } from "react";
// import { Heart, ExternalLink } from "lucide-react";

// // ---- Edit your projects here ----
// // color = glow color of the card, tags = small chips, link = where the project opens
// const projects = [
//   {
//     id: 1,
//     img: "https://placehold.co/600x400/1d1035/ec4899?text=Digital+Marketing",
//     likes: 651,
//     title: "Web design for Digital Marketing",
//     tags: ["React", "Tailwind"],
//     color: "#ec4899",
//     link: "#",
//   },
//   {
//     id: 2,
//     img: "https://placehold.co/600x400/1d1035/22d3ee?text=Digital+Agency",
//     likes: 630,
//     title: "Web design for Digital Agency",
//     tags: ["JavaScript", "UI"],
//     color: "#22d3ee",
//     link: "#",
//   },
//   {
//     id: 3,
//     img: "https://placehold.co/600x400/1d1035/a78bfa?text=Email+Marketing",
//     likes: 340,
//     title: "Web design for Email Marketing",
//     tags: ["HTML", "CSS"],
//     color: "#a78bfa",
//     link: "#",
//   },
// ];

// const ProjectPortfolio = () => {
//   const [liked, setLiked] = useState([]); // ids of the projects the visitor liked

//   // Like a project, or remove the like if it is already liked
//   const toggleLike = (id) =>
//     setLiked(liked.includes(id) ? liked.filter((x) => x !== id) : [...liked, id]);

//   return (
//     <section className="relative bg-gradient-to-br from-[#0f0320] to-[#1a0836] min-h-screen flex flex-col items-center py-16 px-6 text-white overflow-hidden">
//       {/* Soft background glows */}
//       <div className="absolute -top-24 -right-24 w-72 h-72 bg-pink-600/25 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-violet-600/25 rounded-full blur-3xl animate-pulse"></div>

//       <div className="relative max-w-6xl w-full flex flex-col items-center">
//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold mb-3">
//           My{" "}
//           <span className="bg-gradient-to-r from-pink-500 to-violet-400 bg-clip-text text-transparent">
//             Projects
//           </span>
//         </h1>
//         <p className="text-gray-400 text-center max-w-lg mb-10 text-sm sm:text-base">
//           All of my latest developed projects are here. Hover a card to preview
//           it, click the heart to like it, or click the title to open the full
//           project.
//         </p>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//           {projects.map((project) => {
//             const isLiked = liked.includes(project.id);

//             return (
//               <div
//                 key={project.id}
//                 style={{ "--c": project.color }}
//                 className="group bg-[#1d1035] rounded-2xl p-4 border border-white/10 shadow-lg shadow-black/30
//                            hover:-translate-y-2 hover:border-[var(--c)] hover:shadow-[0_15px_35px_-10px_var(--c)]
//                            transition-all duration-300"
//               >
//                 {/* Image + hover overlay */}
//                 <div className="relative overflow-hidden rounded-xl mb-4">
//                   <img
//                     src={project.img}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <a
//                       href={project.link}
//                       className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-[var(--c)]
//                                  hover:scale-105 transition-transform duration-300
//                                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
//                     >
//                       View project <ExternalLink size={16} />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Like button */}
//                 <button
//                   onClick={() => toggleLike(project.id)}
//                   aria-pressed={isLiked}
//                   aria-label={isLiked ? "Remove like" : "Like this project"}
//                   style={{ color: project.color }}
//                   className="flex items-center gap-2 mb-2 cursor-pointer active:scale-125 transition-transform duration-200
//                              focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
//                 >
//                   <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
//                   <span>{project.likes + (isLiked ? 1 : 0)}</span>
//                 </button>

//                 {/* Title */}
//                 <h2 className="text-lg font-semibold mb-3">
//                   <a
//                     href={project.link}
//                     className="hover:text-[var(--c)] transition-colors duration-300"
//                   >
//                     {project.title}
//                   </a>
//                 </h2>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300
//                                  group-hover:border-[var(--c)] transition-colors duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectPortfolio;






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

// ---- Category colors and icons (same style as the Skills section) ----
const categories = {
  "Full Stack": { color: "#22d3ee", icon: <FaLayerGroup /> },
  Frontend: { color: "#a78bfa", icon: <FaLaptopCode /> },
  "Data Science": { color: "#34d399", icon: <FaFlask /> },
  "AI / ML": { color: "#f472b6", icon: <FaBrain /> },
  "Data Analysis": { color: "#f89939", icon: <FaChartBar /> },
  Other: { color: "#94a3b8", icon: <FaCubes /> },
};

// ---- Edit your projects here ----
// problem = the problem the project solves, tags = tech used,
// github = link to the repository (replace "your-username" and the repo name)
const projects = [
  // Full Stack
  { title: "Task Manager App", category: "Full Stack",
    problem: "Teams lose track of who is doing what. This app lets users sign in, create tasks, assign them and mark them done.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/your-username/task-manager" },
  { title: "Student Management System", category: "Full Stack",
    problem: "Schools still keep student records on paper. This system stores students, marks and attendance in one database.",
    tags: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/your-username/student-management" },

  // Frontend
  { title: "Personal Portfolio Website", category: "Frontend",
    problem: "Recruiters need a quick way to see my skills and projects. This responsive site presents both in one place.",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/portfolio" },
  { title: "Weather Dashboard", category: "Frontend",
    problem: "Checking the weather across many sites is slow. This dashboard shows the forecast for any city from a public API.",
    tags: ["JavaScript", "API", "CSS"],
    github: "https://github.com/your-username/weather-dashboard" },

  // Data Science
  { title: "House Price Prediction", category: "Data Science",
    problem: "Buyers and sellers cannot easily tell a fair price. This model predicts house prices from size, location and rooms.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/your-username/house-price-prediction" },
  { title: "Customer Churn Prediction", category: "Data Science",
    problem: "Companies lose customers without warning. This model finds customers likely to leave so the company can act early.",
    tags: ["Python", "Scikit-learn", "Modeling"],
    github: "https://github.com/your-username/customer-churn" },

  // AI / ML
  { title: "Spam Message Classifier", category: "AI / ML",
    problem: "Spam messages waste time and can be scams. This classifier learns from text to mark a message as spam or not spam.",
    tags: ["Python", "NLP", "ML"],
    github: "https://github.com/your-username/spam-classifier" },
  { title: "Movie Recommendation System", category: "AI / ML",
    problem: "Finding a good movie takes too long. This system suggests movies similar to the ones a user already likes.",
    tags: ["Python", "Pandas", "ML"],
    github: "https://github.com/your-username/movie-recommender" },

  // Data Analysis
  { title: "Sales Data Analysis", category: "Data Analysis",
    problem: "Shop owners do not know which products earn the most. This analysis shows sales trends by product and month.",
    tags: ["Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/your-username/sales-analysis" },
  { title: "Student Performance Analysis", category: "Data Analysis",
    problem: "Schools want to know why some students score lower. This analysis compares marks with study time and attendance.",
    tags: ["Pandas", "NumPy", "Seaborn"],
    github: "https://github.com/your-username/student-performance" },

  // Other
  { title: "File Organizer Script", category: "Other",
    problem: "Download folders get messy fast. This script sorts files into folders by type automatically.",
    tags: ["Python", "Automation"],
    github: "https://github.com/your-username/file-organizer" },
  { title: "DSA Practice Solutions", category: "Other",
    problem: "Practicing algorithms needs a place to keep and review solutions. This repo holds my solved problems with notes.",
    tags: ["C", "Java", "DSA"],
    github: "https://github.com/your-username/dsa-practice" },
];

const tabs = ["All", ...Object.keys(categories)];

// How many cards to show before the "Show more" button reveals the rest
const INITIAL_COUNT = 6;

const ProjectPortfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  // Switching tabs starts with the short list again
  const changeTab = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section
      id="portfolio"
      className="relative bg-[#0b1226] min-h-screen flex items-center justify-center py-16 px-6 overflow-hidden"
    >
      {/* Soft background glows */}
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
          Pick a category to see my work. Click "View on GitHub" on any card to
          open the full code of that project.
        </p>

        {/* Filter tabs */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project) => {
            const { color, icon } = categories[project.category];

            return (
              <div
                key={project.title}
                style={{ "--c": color }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30 backdrop-blur-sm
                           hover:-translate-y-2 hover:bg-white/10 hover:border-[var(--c)] hover:shadow-[0_15px_35px_-10px_var(--c)]
                           transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  {/* Category icon */}
                  <div
                    style={{ color }}
                    className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0b1226] border border-white/10 text-2xl shrink-0
                               group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold leading-tight">{project.title}</p>
                    <p style={{ color }} className="text-xs mt-1">{project.category}</p>
                  </div>
                </div>

                {/* Problem it solves */}
                <p className="text-sm text-slate-400 mb-4">{project.problem}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300
                                 group-hover:border-[var(--c)] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link (opens in a new tab) */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                             text-[var(--c)] border border-[var(--c)] hover:bg-[var(--c)] hover:text-[#0b1226]
                             transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            );
          })}
        </div>

        {/* Show more / Show less */}
        {filtered.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="px-8 py-3 rounded-full text-sm font-medium text-white cursor-pointer
                         bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-violet-500/30
                         hover:scale-105 transition-transform duration-300
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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