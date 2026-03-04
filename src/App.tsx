import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500 selection:text-white">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <main key="main" className="relative">
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <Experience />
            <Skills />
            <Education />
            
            <footer className="py-12 px-6 border-t border-white/10 text-center">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} Abhishek Singh. All rights reserved.
              </p>
              <p className="text-white/20 text-[10px] mt-2 uppercase tracking-widest">
                Built with React, Tailwind & Framer Motion
              </p>
            </footer>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
