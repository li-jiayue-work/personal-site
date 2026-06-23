import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon, BarChart3Icon, FileTextIcon } from "lucide-react";

const KPIS = [
  { value: "500", label: "Books Analyzed" },
  { value: "15", label: "Data Fields" },
  { value: "7", label: "Visualizations" },
  { value: "5", label: "Strategic Insights" },
];

const FINDINGS = [
  {
    title: "格式是定价的第一驱动力",
    body: "Audiobook 均价 $25.06 为 Kindle $8.65 的 2.9 倍。格式间价格差异远大于品类间差异——Fiction 与 Non-Fiction 均价仅差 3.8%。",
  },
  {
    title: "评分已丧失信号区分度",
    body: "85%+ 图书评分集中在 4.0–4.8 区间（σ = 0.26）。在「人人四星+」的环境下，评论数量而非星级才是区分畅销书与普通书的核心指标。",
  },
  {
    title: "评论量是更可靠的信任代理",
    body: "仅 8.2% 图书在榜超 50 周。头部 1% 图书贡献不成比例的评论声量。评论数中位数 3,893，评论量比评分更能反映真实市场热度。",
  },
];

const CHARTS = [
  {
    title: "价格与格式关系",
    key: "Audiobook 均价 $25.06 是 Kindle $8.65 的 2.9 倍。格式才是定价的核心变量，品类对价格解释力远弱于格式。",
    images: ["c08_price_by_format", "c05_price_vs_rating"],
    layout: "2col" as const,
  },
  {
    title: "市场结构与竞争格局",
    key: "品类 CR5 仅 18.6%，出版商 CR3 仅 10%。市场高度碎片化，无寡头垄断——长尾品类是新进入者的蓝海。",
    images: ["c07_subgenres", "c01_category_pie"],
    layout: "2col" as const,
  },
];

const RECOMMENDATIONS = [
  {
    title: "多格式分发策略",
    body: "Kindle 低价引流 + Paperback 主流走量 + Audiobook 高溢价利润。同一内容以格式组合覆盖 $8–$25 全价格带消费者。",
  },
  {
    title: "评论激励优先于评分维护",
    body: "新书发布 30 天内集中获取 50+ 真实评论。在评分通胀的环境下，评论数量的社会证明效应远强于 0.1 分的星级差异。",
  },
  {
    title: "差异化品类定位",
    body: "避开 Sci-Fi、Romantasy 红海。Cooking、Art、Activity 等长尾品类竞争强度低，中小出版商以差异化选题建立品类优势。",
  },
];

export default function AmazonBooksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Back link ──────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          Back to Projects
        </Link>
      </div>

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="pt-16 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Business Data Analysis Project
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            亚马逊畅销书市场分析
          </h1>

          {/* KPI row */}
          <div className="flex justify-center gap-6 sm:gap-10 flex-wrap mb-8">
            {KPIS.map((kpi) => (
              <div key={kpi.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                  {kpi.value}
                </p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mt-1">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            基于 Amazon Best Seller 真实数据，分析畅销书市场的定价规律、评分机制与品类特征，输出数据驱动运营建议。
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXECUTIVE SUMMARY
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 bg-accent/5 border-y border-border/60">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Executive Summary
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">核心发现</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {FINDINGS.map((f, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-6 border border-border/60 shadow-sm"
              >
                <p className="text-4xl font-extrabold text-primary/20 mb-3 leading-none">
                  0{i + 1}
                </p>
                <h3 className="text-base font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SELECTED CHARTS
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Key Evidence
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">关键数据证据</h2>

          <div className="space-y-14">
            {CHARTS.map((group, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-1">{group.title}</h3>

                <div
                  className={
                    group.layout === "2col"
                      ? "grid sm:grid-cols-2 gap-4 mt-4"
                      : "mt-4"
                  }
                >
                  {group.images.map((img) => (
                    <div
                      key={img}
                      className="bg-background rounded-xl border border-border/60 shadow-sm overflow-hidden"
                    >
                      <img
                        src={`/charts/amazon-books-analysis/${img}.png`}
                        alt={img}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-accent/10 border-l-[3px] border-primary rounded-r-lg px-4 py-3">
                  <p className="text-sm font-semibold text-primary mb-0.5">Key Insight</p>
                  <p className="text-sm text-muted-foreground">{group.key}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RECOMMENDATIONS
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 bg-accent/5 border-y border-border/60">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Recommendations
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">运营建议</h2>

          <div className="grid sm:grid-cols-3 gap-5">
            {RECOMMENDATIONS.map((r, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1.5">{r.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FULL REPORT CTA
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Deep Dive
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-4">查看完整报告</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            包含 7 张完整图表、详细 EDA 过程、Python 分析代码与完整业务分析报告
          </p>

          <a
            href="/reports/amazon-books-analysis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            <FileTextIcon className="h-4 w-4" />
            阅读全文
            <ExternalLinkIcon className="h-3 w-3 opacity-60" />
          </a>

          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            {["Python", "pandas", "matplotlib", "seaborn", "scikit-learn", "EDA", "K-Means"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-3 py-1 rounded-full bg-accent/10 text-muted-foreground border border-border/40"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
