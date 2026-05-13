import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-border/40 py-12 mt-24 bg-background/30 backdrop-blur-lg">
      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Contact Info (Left) */}
        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Contact</p>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-brand-cyan" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-brand-cyan" />
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-foreground transition-colors">
              {siteConfig.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-cyan" />
            <span>{siteConfig.location}</span>
          </div>
        </div>

        {/* Center Brand / Tech Stack */}
        <div className="flex flex-col items-center justify-center gap-4 text-center mt-4 md:mt-0">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground hover:text-brand-cyan transition-colors">
            Tanishq Joshi<span className="text-brand-cyan"></span>
          </Link>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-muted-foreground shadow-sm">
            <Code2 size={14} className="text-brand-purple" />
            <span>Built with Next.js & Tailwind v4</span>
          </div>
        </div>

        {/* Links (Right) */}
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:items-end">
          <p className="font-semibold text-foreground">Links</p>
          <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </Link>
          <Link href={`${siteConfig.links.github}/portfolio-website`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            View Source
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/40 pt-6 text-center mt-12">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tanishq Joshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
