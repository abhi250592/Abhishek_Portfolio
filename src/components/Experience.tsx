import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight, ChevronDown, Star } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {resumeData.experience.map((company, idx) => (
            <CompanyCard key={idx} company={company} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyCard: React.FC<{ company: any; index: number }> = ({ company, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 border-l border-white/10"
    >
      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">{company.company}</h3>
        <div className="flex items-center gap-2 text-white/40 text-sm mt-1">
          <MapPin size={14} />
          <span>{company.location}</span>
        </div>
      </div>

      <div className="space-y-6">
        {company.roles.map((role: any, rIdx: number) => (
          <RoleAccordion key={rIdx} role={role} />
        ))}
      </div>
    </motion.div>
  );
};

const RoleAccordion: React.FC<{ role: any }> = ({ role }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            {role.title}
            {role.duration && (
              <span className="text-[10px] uppercase tracking-widest bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                {role.duration}
              </span>
            )}
          </h4>
          <div className="flex items-center gap-2 text-white/40 text-sm mt-1">
            <Calendar size={14} />
            <span>{role.dates}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-white/40"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-white/5">
              <ul className="space-y-3">
                {role.bullets.map((bullet: string, bIdx: number) => (
                  <li key={bIdx} className="flex gap-3 text-white/60 leading-relaxed text-sm">
                    <ChevronRight size={16} className="text-emerald-500 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
