import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Languages } from "@/components/sections/languages";
import { Projects } from "@/components/sections/projects";
import { ResumeCta } from "@/components/sections/resume-cta";
import { Skills } from "@/components/sections/skills";

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Skills />
      <Certifications />
      <Languages />
      <ResumeCta />
      <Contact />
    </>
  );
}
