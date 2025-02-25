"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { logo: "/next.png" },
    { logo: "/tail.webp" },
    { logo: "/js.png" },
    { logo: "/react.png" },
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-20">
          {skills.map((skill, index) => (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={skill.logo}
            >
              <Image
                src={skill.logo}
                alt={skill.logo}
                width={skill.logo === "/react.png" ? 110 : skill.logo === "/js.png" ? 70 : 80} // React is larger, JS is smaller
                height={skill.logo === "/react.png" ? 110 : skill.logo === "/js.png" ? 70 : 80} // React is larger, JS is smaller
                className="mb-2 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
