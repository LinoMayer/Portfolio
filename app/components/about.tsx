"use client"

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-500" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-lg mb-8 text-white">
            I&apos;m a passionate frontend developer with 1 years of experience in building web applications. I specialize
            in Next.js, Tailwind CSS, and TypeScript. My goal is to create efficient, scalable, and user-friendly
            solutions that solve real-world problems.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/LinoMayer" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition">
                GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/lino-mayer-2441a528b/" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition">
                LinkedIn
              </button>
            </a>
            <a href="https://x.com/lino_mayer0" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition">
                X
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
