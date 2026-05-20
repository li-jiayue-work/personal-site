import { Hero } from "@/components/hero";
import { KpiCards } from "@/components/kpi-cards";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Strengths } from "@/components/strengths";
import { Contact } from "@/components/contact";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <Hero />
      <KpiCards />
      <About />
      <Education />
      <Projects projects={projects} />
      <Skills />
      <Strengths />
      <Experience />
      <Contact />
    </>
  );
}
