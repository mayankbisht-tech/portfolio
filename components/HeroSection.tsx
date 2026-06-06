'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const highlights = [
    {
      title: 'Full-Stack Web Developer',
      text: 'Building real-time, scalable applications with React, Next.js, Node.js, and WebSockets.',
    },
    {
      title: 'AI Engineer',
      text: 'Working with applied ML, deep learning, NLP, LangChain, LangGraph, TensorFlow, and Keras.',
    },
    {
      title: 'Education',
      text: 'B.Tech in Artificial Intelligence & Data Science at GGSIPU with a 8.55 CGPA.',
    },
    {
      title: 'Leadership',
      text: 'i3 Web Development lead, technical event organizer, and hands-on workshop facilitator.',
    },
  ];

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
    <section id="home" className="min-h-screen flex items-center relative pt-28 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800/50 to-gray-900"></div>
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.p
              className="text-cyan-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-5"
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
                className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
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
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Full-Stack Web Developer and AI Engineer focused on real-time, scalable applications and applied machine
              learning systems.
            </motion.p>

            <motion.p
              className="text-gray-400 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              I build practical products with React, Next.js, Node.js, WebSockets, WebRTC, and AI/ML tooling. My work
              blends clean engineering, thoughtful design, and hands-on problem solving.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-full border border-gray-700 bg-gray-800/60 text-sm text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 font-medium transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-700 text-gray-200 hover:border-cyan-500/50 hover:text-white transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 blur-2xl" />

            <div className="relative rounded-3xl border border-gray-700 bg-gray-800/70 backdrop-blur-md p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-cyan-500/30 bg-gray-900">
                  <img src="/mayank.jpg" alt="Mayank Bisht" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-2">Resume Snapshot</p>
                  <h2 className="text-2xl font-bold text-white">Mayank Bisht</h2>
                  <p className="text-gray-400">Full-Stack Web Developer and AI Engineer</p>
                </div>
              </div>

              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="rounded-2xl border border-gray-700 bg-gray-900/50 p-4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.08 }}
                  >
                    <p className="text-cyan-400 font-semibold mb-1">{item.title}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
