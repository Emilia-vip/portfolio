import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import AboutMe from "./Page/AboutMe";
import Github from "./Page/Github";
import Contact from "./Page/Contact";

function App() {
  return (
    // "min-h-screen" makes the background cover the whole page
    // "bg-slate-950" gives it that deep space/future dark blue
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      
      {/* HEADER: Glassmorphism effect */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between p-6">
          <div className="text-xl font-bold tracking-tighter text-cyan-400 uppercase">
            Portfolio<span className="animate-pulse">_</span>
          </div>
          
          <div className="flex gap-8">
            {/* Using a custom function for active styles */}
            <NavLink to="/" className={({ isActive }) => 
              `transition-all duration-300 hover:text-cyan-400 ${isActive ? 'text-cyan-400 shadow-[0_10px_20px_-10px_rgba(34,211,238,0.5)]' : 'text-slate-400'}`
            }>
              <span className="text-sm font-medium tracking-widest uppercase">About</span>
            </NavLink>

            <NavLink to="/future" className={({ isActive }) => 
              `transition-all duration-300 hover:text-cyan-400 ${isActive ? 'text-cyan-400 shadow-[0_10px_20px_-10px_rgba(34,211,238,0.5)]' : 'text-slate-400'}`
            }>
              <span className="text-sm font-medium tracking-widest uppercase">Future</span>
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => 
              `transition-all duration-300 hover:text-cyan-400 ${isActive ? 'text-cyan-400 shadow-[0_10px_20px_-10px_rgba(34,211,238,0.5)]' : 'text-slate-400'}`
            }>
              <span className="text-sm font-medium tracking-widest uppercase">Contact</span>
            </NavLink>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT: Centered with a glow effect */}
      <main className="relative mx-auto max-w-4xl p-8 pt-20">
        {/* Background Decorative Glow */}
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"></div>
        <div className="absolute top-40 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]"></div>

        <section className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-12 backdrop-blur-sm">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/future" element={<Github />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;