'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const groups = [
    {
      label: 'Frontend',
      items: ['React 19', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      label: 'Backend',
      items: ['Node.js', 'Express.js', 'Socket.io', 'WebRTC'],
    },
    {
      label: 'AI / ML',
      items: ['TensorFlow', 'Keras', 'LangChain', 'LangGraph', 'NLP'],
    },
    {
      label: 'Data',
      items: ['MongoDB', 'PostgreSQL', 'Prisma', 'SQL'],
    },
    {
      label: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'C++'],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 45%)',
            'radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.12) 0%, transparent 45%)',
            'radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 45%)',
          ],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-300 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tools I Use to{' '}
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A focused stack for full-stack apps, real-time features, and AI-driven products.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              className="relative min-h-[120px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/50 p-5 transition-all duration-300 hover:border-white/18"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: '0 18px 32px -18px rgba(255, 255, 255, 0.08)' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-3xl"
                initial={{ scale: 0.25, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
              <h3 className="text-lg font-semibold text-slate-200 mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-neutral-400 leading-relaxed">
                {group.items.map((item, itemIndex) => (
                  <React.Fragment key={item}>
                    <span className="transition-colors duration-200 hover:text-white">{item}</span>
                    {itemIndex < group.items.length - 1 && <span className="text-neutral-700">/</span>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
