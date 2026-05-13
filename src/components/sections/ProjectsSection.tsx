"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Featured <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl text-balance">
          Architectural overhauls, high-performance pipelines, and ML systems built for scale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl min-h-[400px]`}
            >
              {/* Shimmering Border Effect - The 'Linear' Card Hover */}
              <div className="absolute inset-0 z-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(6,182,212,1)_360deg)]" />
              </div>

              {/* Actual Card Content - Inset by 1px to reveal the animated border underneath */}
              <div className="absolute inset-[1px] z-10 glass rounded-[calc(1.5rem-1px)] bg-background/60 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-4 shrink-0 pl-4">
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                          <GithubIcon width={22} height={22} />
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                          <ArrowUpRight size={22} />
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* High-Impact Metric Highlighting */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.metrics.map((metric, j) => (
                        <div key={j} className="px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                          <span className="text-sm font-bold text-brand-cyan tracking-wide">{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/40">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-semibold text-muted-foreground bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
