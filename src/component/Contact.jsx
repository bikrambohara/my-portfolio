// import React, { useState } from "react";
// import contact from "../assets/contact.png";
// import Swal from "sweetalert2";

// const Contact = () => {
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true); // start loading
//     const formData = new FormData(event.target);

//     // Add your Web3Forms access key
//     formData.append("access_key", "c5d1cece-9787-4f4e-9f3b-12d8f9623bcb");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       Swal.fire({
//         title: "Success!",
//         text: "Message sent successfully!",
//         icon: "success",
//       });
//       event.target.reset(); // reset form after submit
//     } else {
//       Swal.fire({
//         title: "Error!",
//         text: "Something went wrong. Please try again.",
//         icon: "error",
//       });
//     }

//     // stop loading
//   };

//   return (
//     <div className="bg-gradient-to-br from-[#0f0320] to-[#1a0836] min-h-screen flex flex-col items-center justify-center py-12 px-6 text-white">
//       <h1 className="text-3xl md:text-4xl font-bold mb-3">
//         Contact <span className="text-pink-500">With Me</span>
//       </h1>
//       <p className="text-gray-400 text-center max-w-xl mb-10">
//         Feel free to directly contact with me via phone or email below or fill
//         up this form and send me a message.
//       </p>

//       {/* Contact Box */}
//       <div className="relative p-[3px] sm:p-[4px] bg-gradient-to-tr from-pink-500 to-orange-400 z-10 rounded-tr-[55px] rounded-bl-[55px] group via-orange-400 shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
//         {/* Left Side - Info */}
//         <div className="w-full md:w-1/2 bg-white/10 p-6 flex flex-col justify-between">
//           <div>
//             <p className="text-lg font-semibold">
//               Phone: <span className="text-white">+977-9868886773</span>
//             </p>
//             <p className="text-lg font-semibold mt-2">
//               Email: <span className="text-white">bikrambohara822@gmail.com</span>
//             </p>
//           </div>
//           <div className="mt-7">
//             <img src={contact} alt="Handshake" className="rounded-bl-[55px] rounded-xl shadow-lg" />
//           </div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-1/2 p-6">
//           <form className="flex flex-col gap-4" onSubmit={onSubmit}>
//             <div className="flex gap-4">
//               <input type="text" name="name" placeholder="Your Name" className="w-1/2 p-3 rounded-md text-black bg-yellow-50" required />
//               <input type="text" name="phone" placeholder="Your Phone Number" className="w-1/2 p-3 rounded-md text-black bg-yellow-50" required />
//             </div>
//             <input type="email" name="email" placeholder="Your Email" className="p-3 rounded-md text-black bg-yellow-50" required />
//             <textarea  name="message" placeholder="Your Message" rows="5" className="p-3 rounded-md text-black bg-yellow-50" required ></textarea>
//             <button type="submit" disabled={loading}
//               className="bg-white text-pink-600 font-bold py-3 rounded-md hover:bg-gray-200 transition disabled:opacity-70 disabled:cursor-not-allowed"  >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import contact from "../assets/contact.png";
import Swal from "sweetalert2";

const info = [
  { id: "phone", label: "phone", value: "+977-9868886773" },
  { id: "email", label: "email", value: "bikrambohara822@gmail.com" },
];

// Shared input style: glow on focus, brighter border on hover
const inputStyle =
  "w-full p-3 rounded-lg bg-[#0b1226] border border-white/10 text-slate-100 placeholder-slate-500 " +
  "hover:border-white/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 " +
  "transition-all duration-300";

const MAX_CHARS = 300;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState("");

  // Click a contact row -> copy value to clipboard
  const handleCopy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopied(item.id);
      setTimeout(() => setCopied(""), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "c5d1cece-9787-4f4e-9f3b-12d8f9623bcb");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      }).then((r) => r.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          background: "#131c38",
          color: "#fff",
          confirmButtonColor: "#06b6d4",
        });
        form.reset();
        setMessage("");
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        background: "#131c38",
        color: "#fff",
        confirmButtonColor: "#8b5cf6",
      });
    } finally {
      setLoading(false); // always stop loading (your old code never did)
    }
  };

  return (
    <div className="relative bg-[#0b1226] min-h-screen flex flex-col items-center justify-center py-12 px-6 text-white overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Heading */}
      <h1 className="relative text-3xl md:text-4xl font-bold mb-3">
        Contact{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          With Me
        </span>
      </h1>
      <p className="relative text-slate-400 text-center max-w-xl mb-3">
        Have a data, ML or AI project in mind? Reach out by phone or email, or
        send me a message using the form.
      </p>
      <p className="relative text-sm text-emerald-400 mb-10">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
        Open to new opportunities
      </p>

      {/* Contact box */}
      <div className="border-flow relative w-full max-w-6xl p-[3px] rounded-tl-[60px] rounded-br-[60px] rounded-tr-[16px] rounded-bl-[16px] shadow-2xl shadow-violet-900/40 hover:shadow-cyan-500/30 transition-shadow duration-500">
        {/* Corner brackets on the two sharp corners */}
        <span className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-[10px] pointer-events-none"></span>
        <span className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-violet-400 rounded-bl-[10px] pointer-events-none"></span>
        {/* Glowing corner dots on the rounded corners */}
        <span className="absolute top-5 left-5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.8)] animate-pulse pointer-events-none z-10"></span>
        <span className="absolute bottom-5 right-5 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.8)] animate-pulse pointer-events-none z-10"></span>

        {/* Animated gradient border */}
        <style>
          {`
            .border-flow {
              background: linear-gradient(120deg, #22d3ee, #6366f1, #a78bfa, #22d3ee);
              background-size: 300% 300%;
              animation: border-flow 6s ease infinite;
            }
            @keyframes border-flow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @media (prefers-reduced-motion: reduce) {
              .border-flow { animation: none; }
            }
          `}
        </style>

        <div className="flex flex-col md:flex-row md:min-h-[530px] rounded-tl-[57px] rounded-br-[57px] rounded-tr-[13px] rounded-bl-[13px] bg-[#101a36] overflow-hidden">
          {/* ---------- Left: terminal-style info ---------- */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-[#0d1530]">
            <div>
              {/* Fake terminal top bar */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-300/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                <span className="ml-3 text-xs text-slate-500 font-mono">contact.py</span>
              </div>

              <p className="font-mono text-sm text-slate-500 mb-3">
                # click a line to copy it
              </p>

              <div className="space-y-3">
                {info.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleCopy(item)}
                    className="w-full text-left rounded-xl bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm
                               hover:bg-white/10 hover:border-cyan-400/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10
                               active:scale-[0.98] transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-violet-400">{item.label}</span>
                    <span className="text-slate-500"> = </span>
                    <span className="text-amber-300 break-all">"{item.value}"</span>
                    <span className="block text-xs text-cyan-400 mt-1 h-4">
                      {copied === item.id ? "Copied to clipboard" : ""}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 group overflow-hidden rounded-xl shadow-lg shadow-black/40">
              <img
                src={contact}
                alt="Handshake"
                className="w-full h-60 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* ---------- Right: form ---------- */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" name="name" placeholder="Your Name or Company Name" className={inputStyle} required />
                <input type="text" name="phone" placeholder="Contact  Number" className={inputStyle} required />
              </div>

              <input type="email" name="email" placeholder="Your Email" className={inputStyle} required />

              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  maxLength={MAX_CHARS}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputStyle}
                  required
                ></textarea>
                {/* Live character counter */}
                <p
                  className={`text-right text-xs mt-1 font-mono ${
                    message.length > MAX_CHARS - 30 ? "text-amber-300" : "text-slate-500"
                  }`}
                >
                  {message.length}/{MAX_CHARS}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white
                           bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-violet-500/30
                           hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30 active:scale-95
                           transition-all duration-300 cursor-pointer
                           disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading && (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;