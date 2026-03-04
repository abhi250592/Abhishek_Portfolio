import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Wrench, Globe, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory
            title="Programming Languages"
            icon={<Code2 className="text-emerald-500" />}
            skills={resumeData.skills.programming}
          />
          <SkillCategory
            title="PLM Tools & Methods"
            icon={<Cpu className="text-emerald-500" />}
            skills={resumeData.skills.plmMethods}
          />
          <SkillCategory
            title="Utilities & Tools"
            icon={<Wrench className="text-emerald-500" />}
            skills={resumeData.skills.tools}
          />
          <div className="space-y-8">
            <SkillCategory
              title="Top Skills"
              icon={<Star className="text-emerald-500" />}
              skills={resumeData.skills.topSkills}
            />
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-emerald-500" />
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="space-y-4">
                {resumeData.skills.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-white/80 font-medium">{lang.name}</span>
                    <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest px-2 py-1 bg-emerald-500/10 rounded-lg">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const SkillCategory: React.FC<{ title: string; icon: React.ReactNode; skills: string[] }> = ({ title, icon, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/60 text-sm hover:border-emerald-500/50 hover:text-white transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
