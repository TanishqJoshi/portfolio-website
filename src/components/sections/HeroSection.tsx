"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import React from "react";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive cursor glow tracking the mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(110, 86, 207, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            Currently architecting RAG-powered AI assistants
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-balance mb-6"
        >
          Building Scalable Backend Systems &{" "}
          <span className="text-gradient-primary">High-Impact AI Solutions.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance mb-10"
        >
          Software Development Engineer at Telus Digital. BITS Pilani Alumnus. Focused on Go, Python, and Architecting Distributed Systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <Link
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              const elem = document.getElementById("experience");
              if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#experience");
              }
            }}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white transition-all rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-foreground transition-all rounded-full glass hover:bg-foreground/5 dark:hover:bg-white/5 hover:border-brand-purple/50 shadow-sm hover:shadow-[0_0_20px_rgba(110,86,207,0.2)] hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Read Resume
            <FileText size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
