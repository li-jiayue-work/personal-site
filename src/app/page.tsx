import { Hero } from "@/components/hero";
import { About } from "@/components/about";
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
      <About />
      <Projects projects={projects} />
      <Skills />
      <Strengths />
      <Experience />
      <Contact />
    </>
  );
}
