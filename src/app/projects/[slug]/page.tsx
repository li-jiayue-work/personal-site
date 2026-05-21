import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon, Code2Icon, FileTextIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProject, getAllProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Back */}
        <Link
          href="/#projects"
          className={`inline-flex items-center gap-1 mb-8 ${buttonVariants({ variant: "ghost", size: "sm" })}`}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back
        </Link>

        {/* Title Card */}
        <Card className="border-border/60 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}>
                    <Code2Icon className="h-4 w-4 mr-1" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}>
                    <ExternalLinkIcon className="h-4 w-4 mr-1" /> Demo
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-normal">{t}</Badge>
              ))}
            </div>
            {project.result && (
              <div className="pt-3 mt-3 border-t border-border">
                <p className="text-sm font-medium text-primary">{project.result}</p>
              </div>
            )}
          </CardHeader>
        </Card>

        {/* Data Source */}
        {project.dataset && (
          <SectionCard title="Data Source">
            <p className="text-sm text-muted-foreground leading-relaxed">{project.dataset}</p>
          </SectionCard>
        )}

        {/* Toolchain */}
        {project.toolchain && (
          <SectionCard title="Toolchain">
            <p className="text-sm text-muted-foreground leading-relaxed">{project.toolchain}</p>
          </SectionCard>
        )}

        {/* Core Conclusion */}
        {project.conclusion && (
          <SectionCard title="Core Conclusion">
            <p className="text-sm text-muted-foreground leading-relaxed">{project.conclusion}</p>
          </SectionCard>
        )}

        {/* Charts */}
        {project.charts && project.charts.length > 0 && (
          <SectionCard title="Key Charts">
            <div className="space-y-4">
              {project.charts.map((chart, i) => (
                <img
                  key={i}
                  src={`/charts/${slug}/${chart}.png`}
                  alt={`Chart ${i + 1}`}
                  className="w-full rounded-lg border border-border/60"
                />
              ))}
            </div>
          </SectionCard>
        )}

        {/* AI Insights */}
        {project.insights && project.insights.length > 0 && (
          <SectionCard title="AI-Generated Business Insights">
            <ul className="space-y-2">
              {project.insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold shrink-0">→</span>
                  {insight}
                </li>
              ))}
            </ul>
          </SectionCard>
        )}

        {/* Body content (from MDX) */}
        {project.body && (
          <SectionCard title="Details">
            <BodyRenderer body={project.body} />
          </SectionCard>
        )}

        {/* Report CTA */}
        {project.demo && (
          <Card className="border-border/60 mt-6 bg-accent/30">
            <CardContent className="p-6 text-center">
              <FileTextIcon className="h-8 w-8 text-primary/60 mx-auto mb-3" />
              <p className="text-sm font-medium">完整分析报告</p>
              <p className="text-xs text-muted-foreground mt-1 mb-4">
                包含完整的数据分析过程、可视化图表与 AI 运营建议
              </p>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "sm" })}
              >
                <ExternalLinkIcon className="h-4 w-4 mr-1" />
                查看完整报告
              </a>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
}

function formatLine(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function BodyRenderer({ body }: { body: string }) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    // ## heading
    if (line.startsWith("## ")) {
      elements.push(<h3 key={i} className="text-base font-semibold text-foreground pt-2">{line.slice(3)}</h3>);
      i++;
      continue;
    }

    // ### sub-heading
    if (line.startsWith("### ")) {
      elements.push(<h4 key={i} className="text-sm font-semibold text-foreground pt-1">{line.slice(4)}</h4>);
      i++;
      continue;
    }

    // ``` code block
    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={i} className="bg-muted/50 rounded-lg p-3 text-xs overflow-x-auto">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // - list items (group consecutive)
    if (line.startsWith("- ")) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(
          <li key={i} className="ml-4 text-sm text-muted-foreground">
            {formatLine(lines[i].slice(2))}
          </li>
        );
        i++;
      }
      elements.push(<ul key={i} className="space-y-1 my-2">{listItems}</ul>);
      continue;
    }

    // ![image
    if (line.startsWith("![")) {
      const srcMatch = line.match(/\(([^)]+)\)/);
      if (srcMatch) {
        elements.push(
          <img key={i} src={srcMatch[1]} alt="" className="w-full rounded-lg border border-border/60 my-2" />
        );
      }
      i++;
      continue;
    }

    // [link
    if (line.startsWith("[")) {
      const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        elements.push(
          <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1 text-sm">
            {linkMatch[1]} <ExternalLinkIcon className="h-3 w-3" />
          </a>
        );
      }
      i++;
      continue;
    }

    // plain paragraph
    elements.push(<p key={i} className="text-sm text-muted-foreground">{formatLine(line)}</p>);
    i++;
  }

  return <div className="space-y-3 text-sm leading-relaxed">{elements}</div>;
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="border-border/60 mb-4">
      <CardHeader>
        <CardTitle className="text-base font-semibold tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
