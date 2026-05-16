"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, Code2Icon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLang } from "@/components/language-provider";
import type { ProjectMeta } from "@/lib/projects";


interface Props {
  projects: ProjectMeta[];
}

export function Projects({ projects }: Props) {
  const { t } = useLang();

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-2">{t.projects.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t.projects.title}</h2>
          <p className="text-muted-foreground">{t.projects.comingSoon}</p>
        </div>
      </section>
    );
  }

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <Badge variant="secondary" className="mb-2">{t.projects.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.projects.description}
          </p>
        </motion.div>

        {featured.length > 0 && (
          <div className="mb-8">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              {t.projects.featured}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {featured.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} featured />
              ))}
            </div>
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: ProjectMeta;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card
        className={`group h-full border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300 ${
          featured ? "sm:col-span-1" : ""
        }`}
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg">
              <Link
                href={`/projects/${project.slug}`}
                className="group-hover:text-primary transition-colors hover:underline"
              >
                {project.title}
              </Link>
            </CardTitle>
            <div className="flex gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Code2Icon className="h-4 w-4" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs font-normal">
                {t}
              </Badge>
            ))}
          </div>
          {project.result && (
            <div className="pt-2 border-t border-border">
              <p className="text-sm font-medium text-primary">{project.result}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
