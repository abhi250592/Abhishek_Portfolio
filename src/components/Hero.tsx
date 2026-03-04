import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, ChevronDown, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            {resumeData.basics.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 font-medium mb-8 max-w-3xl leading-relaxed">
            {resumeData.basics.title}
          </p>

          <p className="text-lg text-white/40 mb-10 max-w-2xl leading-relaxed">
            {resumeData.basics.summary.split('.')[0]}. {resumeData.basics.summary.split('.')[1]}.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToExperience}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View Experience
            </button>
            <a
              href="#"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-white/40 mb-12">
            <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} />
              <span className="text-sm font-medium">{resumeData.basics.email}</span>
            </a>
            <a href={`https://${resumeData.basics.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Linkedin size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm font-medium">{resumeData.basics.location}</span>
            </div>
          </div>

          {/* Top 3 Impact Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-y border-white/10">
            <div className="space-y-1">
              <p className="text-emerald-500 font-bold text-xl">11+ Years</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">PLM Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-emerald-500 font-bold text-xl">20+ Members</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">Team Leadership</p>
            </div>
            <div className="space-y-1">
              <p className="text-emerald-500 font-bold text-xl">Global Leaders</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">Airbus, BMW, Honda</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
