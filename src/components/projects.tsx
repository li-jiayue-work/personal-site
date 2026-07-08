"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, WrenchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLang } from "@/components/language-provider";
import type { ProjectMeta } from "@/lib/projects";

const AI_TOOL_SLUGS = ["cursor-cc"];

interface Props {
  projects: ProjectMeta[];
}

export function Projects({ projects }: Props) {
  const { t } = useLang();

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-14 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-2">{t.projects.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t.projects.title}</h2>
          <p className="text-muted-foreground">{t.projects.comingSoon}</p>
        </div>
      </section>
    );
  }

  const featured = projects.filter((p) => p.featured);
  const aiTools = projects.filter((p) => AI_TOOL_SLUGS.includes(p.slug));
  const rest = projects.filter((p) => !p.featured && !AI_TOOL_SLUGS.includes(p.slug));

  return (
    <section id="projects" className="py-14 px-6">
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
          <div className="space-y-4 mb-12">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} featured />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {rest.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}

        {aiTools.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-border/60" />
              <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider flex items-center gap-1.5">
                <WrenchIcon className="h-3 w-3" /> 工具探索
              </span>
              <div className="flex-1 h-px bg-border/60" />
            </div>
            <div className="space-y-2">
              {aiTools.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-border/30 bg-background/50 hover:bg-accent/5 hover:border-border/60 transition-colors group no-underline"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors truncate">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted-foreground/60 truncate mt-0.5">
                      {project.description}
                    </p>
                  </div>
                  <ArrowRightIcon className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-accent shrink-0 ml-3 transition-colors" />
                </Link>
              ))}
            </div>
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
      <Link href={`/projects/${project.slug}`} className="block">
        <Card className="group h-full border-border/60 hover:border-accent/30 hover:shadow-sm transition-all duration-200 cursor-pointer">
          {featured ? (
            <div className="p-6 sm:flex sm:gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(project.tech||[]).map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              {project.result && (
                <div className="sm:w-48 shrink-0 mt-4 sm:mt-0 sm:border-l sm:border-border sm:pl-6 sm:flex sm:items-center">
                  <div>
                    <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {project.slug === "csdn-content" ? "Result" : "Core Insights"}
                    </p>
                    <p className="text-sm font-medium text-primary leading-relaxed">{project.result}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {(project.tech||[]).map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
                {project.result && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">{project.slug === "csdn-content" ? "Result" : "Core Insights"}</p>
                    <p className="text-sm font-medium text-primary leading-relaxed">{project.result}</p>
                  </div>
                )}
              </CardContent>
            </>
          )}
        </Card>
      </Link>
    </motion.div>
  );
}
