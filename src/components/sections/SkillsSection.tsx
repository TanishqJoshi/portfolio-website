"use client";

import { motion } from "framer-motion";
import { backendSkills, aiSkills, mathSkills, tools } from "@/data/skills";
import { Server, BrainCircuit, Sigma, Compass, ChartBar, TrendingUp, Trophy, Terminal } from "lucide-react";

export function SkillsSection() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]";
      case "Proficient": return "bg-brand-purple shadow-[0_0_8px_rgba(110,86,207,0.8)]";
      case "Familiar": return "bg-brand-blue shadow-[0_0_8px_rgba(59,130,246,0.8)]";
      default: return "bg-muted-foreground";
    }
  };

  return (
    <section id="skills" className="container mx-auto px-6 pt-32 pb-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Technical <span className="text-gradient-primary">Arsenal</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl text-balance">
          Architectural depth spanning distributed systems, AI orchestration, and mathematical foundations.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        {/* The Backend Core (Prominent) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass p-8 rounded-3xl md:col-span-2 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Server size={100} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-brand-cyan" size={24} />
              <h3 className="text-2xl font-bold text-foreground">The Backend Core</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between py-2.5 border-b border-border last:border-0 hover:bg-foreground/5 rounded-md px-2 -mx-2 transition-colors">
                  <span className="font-medium text-foreground/90">{skill.name}</span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider hidden sm:block">{skill.level}</span>
                    <div className={`h-2 w-2 rounded-full ${getLevelColor(skill.level)}`} title={skill.level} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Beyond the IDE (Wildcard) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass p-8 rounded-3xl md:col-span-1 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Compass size={100} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="text-brand-purple" size={22} />
              <h3 className="text-xl font-bold text-foreground">Beyond the IDE</h3>
            </div>
            <div className="flex flex-col gap-3 mt-auto">
              <div className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                <ChartBar size={18} className="text-brand-cyan shrink-0" />
                <span className="font-medium text-sm">Equity Research</span>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                <TrendingUp size={18} className="text-brand-blue shrink-0" />
                <span className="font-medium text-sm">Value Investing</span>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                <Trophy size={18} className="text-brand-purple shrink-0" />
                <span className="font-medium text-sm">Cricket</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI & ML */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass p-8 rounded-3xl md:col-span-1 lg:col-span-2 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <BrainCircuit size={100} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit className="text-brand-blue" size={24} />
              <h3 className="text-2xl font-bold text-foreground">AI & ML Orchestration</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {aiSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between py-2.5 border-b border-border last:border-0 hover:bg-foreground/5 rounded-md px-2 -mx-2 transition-colors">
                  <span className="font-medium text-foreground/90">{skill.name}</span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider hidden sm:block">{skill.level}</span>
                    <div className={`h-2 w-2 rounded-full ${getLevelColor(skill.level)}`} title={skill.level} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mathematical Foundations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass p-8 rounded-3xl md:col-span-2 lg:col-span-1 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Sigma size={100} />
          </div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Sigma className="text-brand-purple" size={22} />
              <h3 className="text-xl font-bold text-foreground">Foundations</h3>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              {mathSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between py-2.5 border-b border-border last:border-0 hover:bg-foreground/5 rounded-md px-2 -mx-2 transition-colors">
                  <span className="font-medium text-foreground/90 text-sm">{skill.name}</span>
                  <div className={`h-2 w-2 rounded-full ${getLevelColor(skill.level)}`} title={skill.level} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Infinite Marquee for Tools & Infrastructure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-lg font-bold text-foreground">Tools & Infrastructure</h3>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden flex items-center py-2">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex whitespace-nowrap gap-6 w-max"
          >
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="glass px-5 py-2 rounded-full text-muted-foreground text-sm font-medium tracking-wide hover:text-brand-cyan hover:border-brand-cyan/30 transition-colors cursor-default"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
