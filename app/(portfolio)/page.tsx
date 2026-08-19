import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Languages } from "@/components/sections/languages";
import { ResumeCta } from "@/components/sections/resume-cta";
import { Skills } from "@/components/sections/skills";

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Languages />
      <ResumeCta />
      <Contact />
    </>
  );
}
