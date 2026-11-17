// import React, { useState, useEffect } from "react";
// import { Plus, X, Eye, Star, LayoutGrid } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import cert1 from "../assets/cert1.jpg";
// import cert2 from "../assets/cert2.jpg";
// import cert3 from "../assets/cert3.jpg";
// import cert4 from "../assets/cert4.jpg";
// import mlbiggner from "../assets/mlbiggner.jpg";
// import ing from "../assets/ing.png";
// import python from "../assets/python.jpg";

// // Set `top: true` on the certificates you want in the "Top Certificates" view.
// const certifications = [
//   { id: 1, image: cert1,  issuer: "", color: "#22d3ee", contain: true },
//   { id: 2, image: cert2,  issuer: "", color: "#a78bfa" },
//   { id: 3, image: cert3,  issuer: "", color: "#34d399"},
//   { id: 4, image: cert4,  issuer: "", color: "#f472b6" },
//   { id: 6, image: mlbiggner,  issuer: "", color: "#f89939", top: true },
//   { id: 7, image: ing,  issuer: "", color: "#f89939", top: true },
//   { id: 8, image: python,  issuer: "", color: "#f89939", top: true },
// ];

// export default function Certifications() {
//   const [selectedCert, setSelectedCert] = useState(null);
//   const [view, setView] = useState("top"); // "top" | "all"

//   // Close the popup with the Escape key
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && setSelectedCert(null);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const topCerts = certifications.filter((c) => c.top);
//   const count = view === "top" ? topCerts.length : certifications.length;

//   // Slick misbehaves when there are fewer slides than slidesToShow, so cap it
//   const show = (n) => Math.min(n, topCerts.length);
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: topCerts.length > 3,
//     speed: 500,
//     autoplay: topCerts.length > 3,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     slidesToShow: show(3),
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: show(2), infinite: topCerts.length > 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1, infinite: topCerts.length > 1 } },
//     ],
//   };

//   const tabClass = (active) =>
//     `flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300
//      focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
//        active
//          ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20"
//          : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
//      }`;

//   return (
//     <section
//       id="certifications"
//       className="relative bg-[#0b1226] min-h-screen flex items-center justify-center py-16 px-6 overflow-hidden"
//     >
//       {/* Soft background glows */}
//       <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

//       <div className="relative max-w-6xl w-full">
//         {/* Heading */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
//           My{" "}
//           <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
//             Certifications
//           </span>
//         </h2>
//         <p className="text-slate-400 text-center max-w-xl mx-auto mb-6 text-sm sm:text-base">
//           Courses and programs I have completed. Click or tap a certificate to
//           view it in full size.
//         </p>

//         {/* View toggle */}
//         <div className="flex flex-wrap justify-center gap-3 mb-4" role="tablist" aria-label="Certificate view">
//           <button
//             role="tab"
//             aria-selected={view === "top"}
//             onClick={() => setView("top")}
//             className={tabClass(view === "top")}
//           >
//             <Star size={16} /> Top Certificates
//           </button>
//           <button
//             role="tab"
//             aria-selected={view === "all"}
//             onClick={() => setView("all")}
//             className={tabClass(view === "all")}
//           >
//             <LayoutGrid size={16} /> View All Certificates
//           </button>
//         </div>

//         <div className="flex justify-center mb-10">
//           <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
//             {count} {view === "top" ? "top " : ""}certificate{count === 1 ? "" : "s"}
//           </span>
//         </div>

//         {/* TOP VIEW: slider */}
//         {view === "top" && (
//           <div key="top" className="animate-fade pb-10">
//             {topCerts.length === 0 ? (
//               <p className="text-center text-slate-400">No top certificates selected yet.</p>
//             ) : (
//               <Slider {...settings}>
//                 {topCerts.map((cert) => (
//                   <div key={cert.id} className="px-3 py-6">
//                     <div
//                       style={{ "--c": cert.color }}
//                       onClick={() => cert.image && setSelectedCert(cert)}
//                       className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg shadow-black/30 backdrop-blur-sm
//                                  hover:-translate-y-2 hover:bg-white/10 hover:border-[var(--c)] hover:shadow-[0_10px_25px_-8px_var(--c)]
//                                  transition-all duration-300"
//                     >
//                       {/* Image + hover overlay */}
//                       <div className="relative overflow-hidden rounded-xl bg-white h-48 flex items-center justify-center">
//                         {cert.image ? (
//                           <>
//                             <img
//                               src={cert.image}
//                               alt={cert.title}
//                               className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
//                                 cert.contain ? "object-contain p-2" : "object-cover"
//                               }`}
//                             />
//                             <div className="absolute inset-0 flex items-center justify-center bg-[#0b1226]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                               <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-[var(--c)]">
//                                 <Eye size={16} /> View
//                               </span>
//                             </div>
//                           </>
//                         ) : (
//                           <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold">
//                             <Plus className="w-10 h-10 mb-2" />
//                             Add certificate
//                           </div>
//                         )}
//                       </div>

//                       {/* Title */}
//                       <p className="text-white font-semibold mt-3 text-center group-hover:text-[var(--c)] transition-colors duration-300">
//                         {cert.title}
//                       </p>
//                       {cert.issuer && (
//                         <p className="text-xs text-slate-400 text-center mt-1">{cert.issuer}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             )}
//           </div>
//         )}

//         {/* ALL VIEW: image gallery grid */}
//         {view === "all" && (
//           <div
//             key="all"
//             className="animate-fade grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10"
//           >
//             {certifications.map((cert) => (
//               <button
//                 key={cert.id}
//                 type="button"
//                 onClick={() => cert.image && setSelectedCert(cert)}
//                 aria-label={`View ${cert.title}`}
//                 style={{ "--c": cert.color }}
//                 className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white cursor-pointer
//                            hover:border-[var(--c)] hover:shadow-[0_10px_25px_-8px_var(--c)]
//                            focus:outline-none focus-visible:ring-2 focus-visible:ring-white
//                            transition-all duration-300"
//               >
//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   loading="lazy"
//                   className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
//                     cert.contain ? "object-contain p-2" : "object-cover"
//                   }`}
//                 />

//                 {/* Top badge */}
//                 {cert.top && (
//                   <span className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-medium text-white bg-[#0b1226]/80 border border-white/20">
//                     <Star size={12} className="text-amber-300" fill="currentColor" /> Top
//                   </span>
//                 )}

//                 {/* Hover overlay with title */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-3 bg-gradient-to-t from-[#0b1226]/90 via-[#0b1226]/20 to-transparent opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300">
//                   <span className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white bg-[var(--c)]">
//                     <Eye size={14} /> View
//                   </span>
//                   <span className="text-sm font-semibold text-white">{cert.title}</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Popup */}
//       {selectedCert && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           onClick={() => setSelectedCert(null)}
//           className="animate-fade fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{ "--c": selectedCert.color }}
//             className="animate-pop relative bg-[#0b1226] border border-[var(--c)] rounded-2xl p-4 max-w-3xl w-full max-h-[90vh] overflow-auto
//                        shadow-[0_20px_50px_-15px_var(--c)]"
//           >
//             {/* Close button */}
//             <button
//               onClick={() => setSelectedCert(null)}
//               aria-label="Close"
//               className="absolute top-3 right-3 p-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white cursor-pointer
//                          hover:rotate-90 hover:scale-110 transition-transform duration-300
//                          focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
//             >
//               <X size={20} />
//             </button>

//             <img
//               src={selectedCert.image}
//               alt={selectedCert.title}
//               className={`rounded-lg w-full h-auto bg-white ${
//                 selectedCert.contain ? "max-h-[400px] object-contain" : ""
//               }`}
//             />
//             <p className="mt-3 text-center font-semibold text-white">
//               {selectedCert.title}
//             </p>
//             {selectedCert.issuer && (
//               <p className="text-sm text-slate-400 text-center">{selectedCert.issuer}</p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Dot colors for the slider + animations */}
//       <style>
//         {`
//           .slick-dots li button:before { color: #94a3b8; opacity: 0.5; font-size: 10px; }
//           .slick-dots li.slick-active button:before { color: #22d3ee; opacity: 1; }
//           @keyframes fade { from { opacity: 0; } }
//           @keyframes pop { from { opacity: 0; transform: scale(0.95); } }
//           .animate-fade { animation: fade 0.25s ease-out; }
//           .animate-pop { animation: pop 0.3s ease-out; }
//           @media (prefers-reduced-motion: reduce) {
//             .animate-fade, .animate-pop { animation: none; }
//           }
//         `}
//       </style>
//     </section>
//   );
// }




import React, { useState, useEffect } from "react";

import {
  Plus,
  X,
  Eye,
  Star,
  LayoutGrid,
} from "lucide-react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import portfolio from "../data/portfolio";

// Get certificates from portfolio.js
const certifications = portfolio.certifications || [];

// Tab styling
const tabClass = (active) =>
  `flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300
   focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
     active
       ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20"
       : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
   }`;

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [view, setView] = useState("top");

  // Filter featured certificates
  const topCerts = certifications.filter((cert) => cert.top);

  // Certificate count
  const count =
    view === "top"
      ? topCerts.length
      : certifications.length;

  // Close popup using Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Slider settings
  const show = (n) => Math.min(n, topCerts.length);

  const settings = {
    dots: true,
    arrows: false,
    infinite: topCerts.length > 3,
    speed: 500,
    autoplay: topCerts.length > 3,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: show(3),
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: show(2),
          infinite: topCerts.length > 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: show(1),
          infinite: topCerts.length > 1,
        },
      },
    ],
  };

  return (
    <section
      id="certifications"
      className="relative bg-[#0b1226] min-h-screen flex items-center justify-center py-16 px-6 overflow-hidden"
    >

      {/* Background glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl w-full">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <p className="text-slate-400 text-center max-w-xl mx-auto mb-6 text-sm sm:text-base">
          Courses and programs I have completed. Click or tap a certificate to
          view it in full size.
        </p>

        {/* View toggle */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-4"
          role="tablist"
          aria-label="Certificate view"
        >
          <button
            type="button"
            role="tab"
            aria-selected={view === "top"}
            onClick={() => setView("top")}
            className={tabClass(view === "top")}
          >
            <Star size={16} />
            Top Certificates
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={view === "all"}
            onClick={() => setView("all")}
            className={tabClass(view === "all")}
          >
            <LayoutGrid size={16} />
            View All Certificates
          </button>
        </div>

        {/* Certificate count */}
        <div className="flex justify-center mb-10">
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
            {count} {view === "top" ? "top " : ""}
            certificate{count === 1 ? "" : "s"}
          </span>
        </div>

        {/* TOP CERTIFICATES SLIDER */}
        {view === "top" && (
          <div key="top" className="animate-fade pb-10">

            {topCerts.length === 0 ? (
              <p className="text-center text-slate-400">
                No top certificates selected yet.
              </p>
            ) : (
              <Slider {...settings}>
                {topCerts.map((cert) => (
                  <div key={cert.id} className="px-3 py-6">

                    <div
                      style={{ "--c": cert.color }}
                      onClick={() => cert.image && setSelectedCert(cert)}
                      className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg shadow-black/30 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/10 hover:border-[var(--c)] hover:shadow-[0_10px_25px_-8px_var(--c)] transition-all duration-300"
                    >

                      {/* Certificate image */}
                      <div className="relative overflow-hidden rounded-xl bg-white h-48 flex items-center justify-center">

                        {cert.image ? (
                          <>
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
                                cert.contain
                                  ? "object-contain p-2"
                                  : "object-cover"
                              }`}
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-[#0b1226]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-[var(--c)]">
                                <Eye size={16} />
                                View
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold">
                            <Plus className="w-10 h-10 mb-2" />
                            Add certificate
                          </div>
                        )}

                      </div>

                      {/* Certificate title */}
                      <p className="text-white font-semibold mt-3 text-center group-hover:text-[var(--c)] transition-colors duration-300">
                        {cert.title}
                      </p>

                      {cert.issuer && (
                        <p className="text-xs text-slate-400 text-center mt-1">
                          {cert.issuer}
                        </p>
                      )}

                    </div>
                  </div>
                ))}
              </Slider>
            )}

          </div>
        )}

        {/* ALL CERTIFICATES GALLERY */}
        {view === "all" && (
          <div
            key="all"
            className="animate-fade grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10"
          >

            {certifications.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => cert.image && setSelectedCert(cert)}
                aria-label={`View ${cert.title}`}
                style={{ "--c": cert.color }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white cursor-pointer hover:border-[var(--c)] hover:shadow-[0_10px_25px_-8px_var(--c)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300"
              >

                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
                    cert.contain
                      ? "object-contain p-2"
                      : "object-cover"
                  }`}
                />

                {/* Top badge */}
                {cert.top && (
                  <span className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-medium text-white bg-[#0b1226]/80 border border-white/20">
                    <Star
                      size={12}
                      className="text-amber-300"
                      fill="currentColor"
                    />
                    Top
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-3 bg-gradient-to-t from-[#0b1226]/90 via-[#0b1226]/20 to-transparent opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white bg-[var(--c)]">
                    <Eye size={14} />
                    View
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {cert.title}
                  </span>
                </div>

              </button>
            ))}

          </div>
        )}

      </div>

      {/* CERTIFICATE POPUP */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          onClick={() => setSelectedCert(null)}
          className="animate-fade fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ "--c": selectedCert.color }}
            className="animate-pop relative bg-[#0b1226] border border-[var(--c)] rounded-2xl p-4 max-w-3xl w-full max-h-[90vh] overflow-auto shadow-[0_20px_50px_-15px_var(--c)]"
          >

            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white cursor-pointer hover:rotate-90 hover:scale-110 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={20} />
            </button>

            {/* Full-size certificate */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className={`rounded-lg w-full h-auto bg-white ${
                selectedCert.contain
                  ? "max-h-[400px] object-contain"
                  : ""
              }`}
            />

            <p className="mt-3 text-center font-semibold text-white">
              {selectedCert.title}
            </p>

            {selectedCert.issuer && (
              <p className="text-sm text-slate-400 text-center">
                {selectedCert.issuer}
              </p>
            )}

          </div>
        </div>
      )}

      {/* Slider dots and animations */}
      <style>
        {`
          .slick-dots li button:before {
            color: #94a3b8;
            opacity: 0.5;
            font-size: 10px;
          }

          .slick-dots li.slick-active button:before {
            color: #22d3ee;
            opacity: 1;
          }

          @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes pop {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade {
            animation: fade 0.25s ease-out;
          }

          .animate-pop {
            animation: pop 0.3s ease-out;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-fade,
            .animate-pop {
              animation: none;
            }
          }
        `}
      </style>

    </section>
  );
}
