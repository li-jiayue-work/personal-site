import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon, FileTextIcon, BarChart3Icon } from "lucide-react";
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

const reportData: Record<string, { label: string; url: string; desc: string }[]> = {
  "ecommerce-analysis": [
    {
      label: "Amazon Product Landscape — Market Intelligence Report 2026",
      url: "/reports/amazon-analysis/",
      desc: "基于 Amazon India 平台 2,928 条商品数据，覆盖 9 大品类，从价格、折扣、评分、评论量四维交叉分析，AI 驱动选品与定价策略洞察。",
    },
    {
      label: "Amazon Books Market Intelligence Report 2026",
      url: "/reports/amazon-books-analysis/",
      desc: "基于 Amazon 500 本畅销书数据（1965-2026），覆盖 48 个子品类、56 家出版商，分析价格策略、读者偏好与出版格局，输出图书行业运营建议。",
    },
  ],
};

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
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              {project.description}
            </p>
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

        {/* Embedded Report (iframe) */}
        {project.demo && project.demo.endsWith(".html") && (
          <SectionCard title="Interactive Report">
            <iframe
              src={project.demo}
              className="w-full rounded-lg border border-border/60"
              style={{ height: "80vh", minHeight: "600px" }}
              title="Interactive Report"
            />
            <div className="mt-3 text-center">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                在新窗口查看完整报告 <ExternalLinkIcon className="h-3 w-3" />
              </a>
            </div>
          </SectionCard>
        )}

        {/* 6. Complete Reports */}
        {reportData[slug] && reportData[slug].length > 0 && (
          <SectionCard title="6. 完整分析报告">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                点击下方链接查看 PPT 风格商业分析简报，包含完整的数据分析过程与运营建议
              </p>
              {reportData[slug].map((report, i) => (
                <a
                  key={i}
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-accent/30 hover:bg-accent/50 transition-colors group no-underline"
                >
                  <BarChart3Icon className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
                      {report.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {report.desc}
                    </p>
                  </div>
                  <ExternalLinkIcon className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </SectionCard>
        )}

        {/* No report fallback */}
        {!reportData[slug] && (
          <Card className="border-dashed border-border/60 mt-6 bg-accent/30">
            <CardContent className="p-8 text-center">
              <FileTextIcon className="h-8 w-8 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-sm font-medium text-muted-foreground">完整分析报告即将上线</p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                PPT 风格商业分析简报，包含完整的数据分析过程与运营建议
              </p>
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
      i++;
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

    // [link — external links open in new tab
    if (line.startsWith("[")) {
      const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const href = linkMatch[2];
        const isExternal = href.startsWith("http");
        elements.push(
          <a
            key={i}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
          >
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
