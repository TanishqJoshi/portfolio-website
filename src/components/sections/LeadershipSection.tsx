"use client";

import { motion } from "framer-motion";
import { Mic, ShieldCheck } from "lucide-react";

export function LeadershipSection() {
  return (
    <section id="leadership" className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Leadership & <span className="text-gradient-primary">Impact</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl text-balance">
          Scaling operations, optimizing budgets, and leading cross-functional teams outside of the codebase.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* TEDx Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-brand-purple/30 transition-colors shadow-lg"
        >
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Mic size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shadow-[0_0_15px_rgba(110,86,207,0.2)]">
                <Mic size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Curator, TEDxBITSGoa</h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
              Led a cross-functional team of 55 to scale attendance by 5x and revenue by 4x via data-driven marketing, reaching over 320K people.
            </p>
            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="text-xs font-bold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 rounded-full uppercase tracking-wider">320K Reach</span>
              <span className="text-xs font-bold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 rounded-full uppercase tracking-wider">5x Growth</span>
            </div>
          </div>
        </motion.div>

        {/* Fest Review Committee Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-brand-cyan/30 transition-colors shadow-lg"
        >
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <ShieldCheck size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Fest Review Committee</h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
              Selected 1 of 4 from 900+ applicants to oversee a ₹3Cr budget. Spearheaded proprietary embezzlement prevention software, saving ₹30L in student funds.
            </p>
            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="text-xs font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-4 py-1.5 rounded-full uppercase tracking-wider">₹3Cr Budget</span>
              <span className="text-xs font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-4 py-1.5 rounded-full uppercase tracking-wider">₹30L Saved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
