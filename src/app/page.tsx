import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";

export default function Home() {
  return (
    <div className="flex flex-col pb-24">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <LeadershipSection />
    </div>
  );
}
