export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imagePath?: string;
  featured: boolean;
  metrics?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
