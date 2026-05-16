import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon, Code2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getProject, getAllProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-lg font-semibold mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
      i++;
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-xl font-semibold tracking-tight mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
      i++;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    } else if (line.trim() === "") {
      i++;
    } else {
      elements.push(
        <p key={key++} className="leading-7 text-muted-foreground mb-4">
          {line}
        </p>
      );
      i++;
    }
  }

  return elements;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className={`inline-flex items-center gap-1 mb-8 ${buttonVariants({ variant: "ghost", size: "sm" })}`}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back
        </Link>

        <Card className="border-border/60">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {project.description}
                </CardDescription>
              </div>
              <div className="flex gap-2 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    <Code2Icon className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-1" />
                    Demo
                  </a>
                )}
              </div>
            </div>
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
              <div className="pt-3 border-t border-border">
                <p className="text-sm font-medium text-primary">{project.result}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {project.body && (
          <Card className="border-border/60 mt-6">
            <CardContent className="p-6">
              <article className="prose prose-neutral dark:prose-invert max-w-none">
                {renderBody(project.body)}
              </article>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
