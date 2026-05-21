import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon, Code2Icon, FileTextIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "@/components/bar-chart";
import { getProject, getAllProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

const chartData: Record<string, { title: string; insight: string; data: { label: string; value: number }[] }[]> = {
  "ecommerce-analysis": [
    {
      title: "月销售额趋势 (GMV)",
      insight: "Q4 销售额达到峰值，季节性需求特征显著，建议提前备货并加大 Q4 营销预算。",
      data: [
        { label: "Jan", value: 4200 },
        { label: "Feb", value: 3800 },
        { label: "Mar", value: 5100 },
        { label: "Apr", value: 5600 },
        { label: "May", value: 6100 },
        { label: "Jun", value: 5800 },
        { label: "Jul", value: 5300 },
        { label: "Aug", value: 6200 },
        { label: "Sep", value: 7100 },
        { label: "Oct", value: 8500 },
        { label: "Nov", value: 9800 },
        { label: "Dec", value: 9200 },
      ],
    },
    {
      title: "热销品类 GMV 贡献",
      insight: "美容与家居品类贡献最高 GMV，为重点运营方向；可加大该品类广告投放以放大优势。",
      data: [
        { label: "Beauty", value: 18500 },
        { label: "Home", value: 16200 },
        { label: "Electronics", value: 12800 },
        { label: "Fashion", value: 10400 },
        { label: "Sports", value: 8900 },
        { label: "Food", value: 6200 },
        { label: "Books", value: 4100 },
      ],
    },
    {
      title: "用户复购率",
      insight: "复购率整体偏低，表明留存运营存在提升空间；建议针对首次购买用户设计留存活动，提升 LTV。",
      data: [
        { label: "0 次复购", value: 68000 },
        { label: "1 次复购", value: 21000 },
        { label: "2 次复购", value: 7500 },
        { label: "3+ 次复购", value: 3500 },
      ],
    },
  ],
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const metrics = chartData[slug];

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

        {/* 1. Project Background */}
        <SectionCard title="1. Project Background">
          {project.body ? (
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              {project.body.split("\n").filter(Boolean).map((line, i) => {
                if (line.startsWith("## ")) return null;
                if (line.startsWith("- ")) {
                  return <li key={i} className="ml-4">{line.slice(2)}</li>;
                }
                return <p key={i}>{line}</p>;
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Coming soon.</p>
          )}
        </SectionCard>

        {/* 2. Dataset */}
        <SectionCard title="2. Dataset">
          {project.dataset ? (
            <p className="text-sm text-muted-foreground leading-relaxed">{project.dataset}</p>
          ) : (
            <p className="text-sm text-muted-foreground">Dataset details coming soon.</p>
          )}
        </SectionCard>

        {/* 3. Key Metrics Analysis */}
        {metrics && metrics.length > 0 && (
          <>
            {metrics.map((m, i) => (
              <SectionCard key={i} title={`3.${i + 1} ${m.title}`}>
                <div className="space-y-4">
                  <BarChart data={m.data} />
                  <div className="flex items-start gap-2 pt-2 border-t border-border">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider shrink-0 mt-0.5">
                      Key Insight
                    </span>
                    <p className="text-sm text-muted-foreground">{m.insight}</p>
                  </div>
                </div>
              </SectionCard>
            ))}
          </>
        )}

        {/* 4. AI-Generated Business Insights */}
        <SectionCard title="4. AI-Generated Business Insights">
          {project.insights && project.insights.length > 0 ? (
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                AI-Assisted Operational Suggestions
              </p>
              <ul className="space-y-2">
                {project.insights.map((insight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold shrink-0">→</span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">AI insights coming soon.</p>
          )}
        </SectionCard>

        {/* 5. Tools & Skills */}
        <SectionCard title="5. Tools & Skills">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="text-sm font-normal px-3 py-1">{t}</Badge>
            ))}
          </div>
        </SectionCard>

        {/* 6. Report (placeholder) */}
        <Card className="border-dashed border-border/60 mt-6 bg-accent/30">
          <CardContent className="p-8 text-center">
            <FileTextIcon className="h-8 w-8 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-sm font-medium text-muted-foreground">完整分析报告即将上线</p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              PPT 风格商业分析简报，包含完整的数据分析过程与运营建议
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
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
