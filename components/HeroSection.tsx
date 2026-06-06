'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const skills = [
    'React 19',
    'Next.js',
    'Node.js',
    'Socket.io',
    'WebRTC',
    'MongoDB',
    'PostgreSQL',
    'Prisma',
    'TensorFlow',
    'Keras',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/15 bg-gray-800 shadow-2xl">
            <img src="/mayank.jpg" alt="Mayank Bisht" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.p
            className="text-slate-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Personal Portfolio
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          I&apos;m{' '}
          <motion.span
            className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Mayank Bisht
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Full-Stack Web Developer and AI Engineer focused on real-time, scalable applications and applied machine
          learning systems.
        </motion.p>

        <motion.p
          className="text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          I build practical products with React, Next.js, Node.js, WebSockets, WebRTC, and AI/ML tooling. I&apos;m
          currently pursuing B.Tech in Artificial Intelligence & Data Science at GGSIPU and leading web development
          work through hands-on technical projects and workshops.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8 text-sm md:text-base text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span>React 19</span>
          <span className="text-neutral-700">/</span>
          <span>Next.js</span>
          <span className="text-neutral-700">/</span>
          <span>Node.js</span>
          <span className="text-neutral-700">/</span>
          <span>WebRTC</span>
          <span className="text-neutral-700">/</span>
          <span>TensorFlow</span>
          <span className="text-neutral-700">/</span>
          <span>PostgreSQL</span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-white to-slate-200 text-black hover:from-slate-200 hover:to-white font-medium transition-all duration-300"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/15 text-gray-200 hover:border-white/35 hover:text-white transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
