'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
// react-router-dom Link not needed here

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Build Something{' '}
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Amazing</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Whether you have a project in mind or want to explore possibilities, I&apos;m just a message away.
        </motion.p>

        <motion.p
          className="text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I guarantee a response within 24 hours.
        </motion.p>

        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mayankbisht1107@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-white to-slate-200 text-black hover:from-slate-200 hover:to-white px-8 py-4 rounded-lg font-medium transition-all duration-300 border border-white/10"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(255,255,255,0.08)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Mail className="mr-2" size={20} />
          Get In Touch
        </motion.a>

        <motion.div
          className="mt-16 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {['Fast Response', 'Clear Communication', 'Quality Work'].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="text-gray-500 text-sm"
            >
              &#10003; {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
