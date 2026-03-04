import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Home, Briefcase, Code2, GraduationCap, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', icon: <Home size={18} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
    { name: 'Skills', href: '#skills', icon: <Code2 size={18} /> },
    { name: 'Education', href: '#education', icon: <GraduationCap size={18} /> },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter text-white">
            AS<span className="text-emerald-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:abhishek.singh.bly@gmail.com"
              className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : '100%' }}
        className="fixed inset-0 z-[55] bg-[#0a0a0a] md:hidden flex flex-col items-center justify-center gap-8"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-bold text-white hover:text-emerald-500 transition-colors flex items-center gap-4"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
        <a
          href="mailto:abhishek.singh.bly@gmail.com"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 px-8 py-4 bg-emerald-500 text-white text-xl font-bold rounded-2xl"
        >
          Get in Touch
        </a>
      </motion.div>
    </>
  );
};
