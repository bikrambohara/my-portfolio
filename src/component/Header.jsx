
import React, { useEffect, useRef, useState } from 'react';

import './File.css';
import logo from '../assets/logoo.png';
import cv from '../assets/cv.pdf';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

// ---- Edit these to match your real details ----
const ROLES = ['Web Developer', 'Problem Solver', 'Lifelong Learner', 'Data Scientist','Machine Learning Engineer','Ai Engineer','Full Stack Developer','Data Analyst'];


// Animated network of points that moves away from the mouse
const NetworkBackground = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w, h, pts = [], raf;
    const mouse = { x: -999, y: -999 };

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      pts = Array.from({ length: Math.min(90, Math.floor(w / 12)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 120 && d > 0) { p.x += (dx / d) * 2; p.y += (dy / d) * 2; }
        ctx.fillStyle = 'rgba(96,165,250,0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(96,165,250,${0.35 * (1 - d / 110)})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
};

// Types and deletes each role in turn
const useTyping = (words) => {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0, c = 0, deleting = false, t;
    const tick = () => {
      const word = words[i];
      setText(word.slice(0, c));
      if (!deleting && c === word.length) { deleting = true; t = setTimeout(tick, 1400); return; }
      if (deleting && c === 0) { deleting = false; i = (i + 1) % words.length; }
      c += deleting ? -1 : 1;
      t = setTimeout(tick, deleting ? 40 : 80);
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);
  return text;
};

// Counts up from 0 when mounted
const Counter = ({ value, suffix }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= value) return;
    const t = setTimeout(() => setN(n + 1), 900 / value);
    return () => clearTimeout(t);
  }, [n, value]);
  return <>{n}{n >= value ? suffix : ''}</>;
};

const Header = () => {
  const role = useTyping(ROLES);

  return (
    <section className="relative overflow-hidden bg-[#0f172a] min-h-screen flex items-center px-6 sm:px-12 py-10">
      <NetworkBackground />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-16 md:mt-0">

        {/* Left - Text */}
        <div className="space-y-6">
          <p className="text-lg text-slate-400">
            Hello<span className="text-red-500">.</span> I'm
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Bikram{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Bohara
            </span>
          </h1>

          {/* Typing role */}
          <p className="text-xl sm:text-2xl text-slate-300 h-8">
            {role}
            <span className="animate-pulse text-cyan-300">|</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#Project"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-6 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Got a project?
            </a>
            <a
              href={cv}
              download="Bikram-Bohara-CV.pdf"
              className="border border-slate-500 text-white py-2.5 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              My resume
            </a>
          </div>

        <div className="flex gap-4 text-white text-xl pt-2">
         <a href="https://facebook.com"  target="_blank"  rel="noopener noreferrer" 
              className="p-3 rounded-full  border-2 border-cyan-400 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 active:scale-95" >
              <FaFacebookF /> </a>
            <a href="http://www.linkedin.com/in/bikram-bohara-011bb62a5" 
              target="_blank"   rel="noopener noreferrer" 
              className="p-3 rounded-full border-2 border-cyan-400  hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 transform hover:-translate-y-1 active:scale-95" >
              <FaLinkedinIn /> </a>
            <a  href="https://github.com"  target="_blank"  rel="noopener noreferrer" 
              className="p-3 rounded-full border-2 border-cyan-400  hover:border-gray-400 hover:text-gray-400 hover:bg-gray-400/10 hover:scale-110 hover:shadow-lg hover:shadow-gray-400/25 transition-all duration-300 transform hover:-translate-y-1 active:scale-95" >
              <FaGithub /> </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              className="p-3 rounded-full border-2 border-cyan-400  hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500/10 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 active:scale-95" >
              <FaInstagram /> </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-72 h-72 sm:w-98 sm:h-98 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-transparent opacity-20 blur-2xl animate-pulse" />
          <img src={logo} alt="Bikram Bohara" className="profile-img relative z-10 w-75 h-72 sm:w-100 sm:h-98" />
        </div>


      </div>
    </section>
  );
};

export default Header;