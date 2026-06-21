'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
 
interface Project {
  title: string;
  description: string;
  tools: string[];
  image: string;
  url?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'ChitChat',
      description: 'A decentralized chat application using MERN framework and socket connectivity.',
      tools: ['Next.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Socket.io'],
      image: '/chitchat.png',
      url: 'https://chit-chat-1ze4.vercel.app'
    },
    {
      title: 'ExceliDraw',
      description: 'An Online Drawing Application with collaborative features and a user-friendly interface.',
      tools: ['next.js', 'PostgreSQL', 'Prisma', 'Websocket.io',],
      image: '/draw.png',
      url:'https://draw-app-brown-omega.vercel.app'
    },
    {
      title: 'Khata',
      description: 'A free bill-splitting tool with equal and itemized split, tax/tip handling, and per-person totals.',
      tools: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      image: '/logo.png',
      url: 'https://digital-heroes-cyan-alpha.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black/35 relative overflow-hidden">
      <motion.div
      className="absolute inset-0 opacity-18"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A selection of projects that highlight my work in building practical, user-focused digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  const glowVariants = {
    rest: { scale: 0.25, opacity: 0 },
    hover: { scale: 1, opacity: 1 },
  };

  const cardVariants = {
    rest: { opacity: 0, y: 50, boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
    hover: { opacity: 1, y: -8, boxShadow: '0 20px 40px -10px rgba(255, 255, 255, 0.08)' },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-neutral-950/70 rounded-xl overflow-hidden border border-neutral-800 hover:border-white/18 transition-all duration-300"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/8 blur-3xl"
        variants={glowVariants}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      />
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.slice(0, 4).map((tool, i) => (
            <motion.span
              key={i}
              className="px-2.5 py-1 bg-neutral-800 rounded text-xs text-slate-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tool}
            </motion.span>
          ))}
          {project.tools.length > 4 && (
            <span className="px-2.5 py-1 bg-neutral-800 rounded text-xs text-neutral-400">
              +{project.tools.length - 4}
            </span>
          )}
        </div>
        <motion.a href={project.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-200 hover:text-white transition-colors"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}>
          View Project <ExternalLink className="ml-2" size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
