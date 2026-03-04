import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-emerald-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-8">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500" />
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-emerald-500 font-medium mt-1">{edu.degree}</p>
                  <p className="text-white/40 text-sm mt-1">{edu.dates}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <Award className="text-emerald-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-start gap-3 group hover:border-emerald-500/50 transition-all duration-300"
                >
                  <CheckCircle className="text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-white/80 text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Extra Section for Completeness */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-6">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resumeData.extra.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-white/60 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
