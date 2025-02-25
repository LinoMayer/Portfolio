"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Loom",
      category: "web",
      image: "/loom.png",
      description: "A full-stack zoom clone",
      link: "https://loom-gilt.vercel.app/sign-in",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Chat To PDF",
      category: "web",
      image: "/chat.png",
      description: "A chatbot that can chat with a PDF file",
      link: "https://chat-with-pfd.vercel.app/",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 3,
      title: "LiveDocs",
      category: "web",
      image: "/docs.png",
      description: "A full-stack google docs clone",
      link: "https://livedocs-zeta.vercel.app/",
      color: "from-blue-600 to-blue-800",
    }
  ];

  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className={`overflow-hidden bg-gradient-to-br ${project.color}`}>
                  <CardContent className="p-0">
                    <div className="relative group">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={192}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Button asChild variant="secondary">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
