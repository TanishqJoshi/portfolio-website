"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-6 pt-32 pb-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Experience & <span className="text-gradient-primary">Growth</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          My journey through the ranks at Telus Digital, architecting AI solutions and distributed systems.
        </p>
      </motion.div>

      <div className="relative max-w-4xl">
        {/* Continuous glowing vertical line to show progression */}
        <div className="absolute left-0 md:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent opacity-50" />

        <div className="flex flex-col gap-12">
          {/* Telus Digital Group Header */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-20"
          >
            {/* Main Glowing Root Node */}
            <div className="absolute left-[-5px] md:left-[27px] top-1 h-3 w-3 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(6,182,212,1)] z-10" />
            <div className="absolute left-[-9px] md:left-[23px] top-0 h-5 w-5 rounded-full border border-brand-cyan/50 animate-ping z-0" />
            
            <h3 className="text-3xl font-bold text-foreground tracking-tight">Telus Digital</h3>
            <p className="text-brand-purple font-medium mt-1">Bengaluru, India</p>
          </motion.div>

          {/* Roles Listing */}
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 md:pl-20 group"
            >
              {/* Individual Role Node on the timeline */}
              <div className="absolute left-[-4px] md:left-[28px] top-6 h-2.5 w-2.5 rounded-full bg-background border-[2px] border-brand-purple group-hover:bg-brand-purple transition-colors z-10" />
              
              <div className="glass p-6 md:p-8 rounded-3xl group-hover:border-foreground/20 transition-colors shadow-lg shadow-black/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                  <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-brand-purple transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-sm font-semibold text-brand-cyan px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 shrink-0">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="text-brand-cyan mr-3 mt-1.5 opacity-80 text-xs">◆</span>
                      <span className="text-[0.95rem]">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-semibold text-muted-foreground bg-card border border-border px-3 py-1.5 rounded-full hover:bg-foreground/5 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
