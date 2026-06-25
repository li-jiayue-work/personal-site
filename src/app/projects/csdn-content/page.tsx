import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "CSDN 垂直科普博客 | 李佳悦",
  description: "独立负责内容定位、专栏规划与稳定更新，覆盖编程科普与产业观察两大方向，累计近 7 万总访问量。",
  openGraph: {
    title: "CSDN 垂直科普博客 | 李佳悦",
    description: "内容运营实践，累计近 7 万总访问量。",
    type: "website",
  },
};

const KPIS = [
  { value: "44", label: "原创文章" },
  { value: "6.9万+", label: "总访问量" },
  { value: "570+", label: "收藏" },
  { value: "7.8万", label: "全站排名" },
];

const PILLARS = [
  {
    title: "编程科普板块",
    body: "覆盖 C/C++ 语法、数据结构、计算机底层原理，从入门到进阶拆解知识点，降低新手学习门槛。",
  },
  {
    title: "产业观察板块",
    body: "输出企业商业模式、行业发展、经济常识类科普内容，拓展内容受众与内容广度。",
  },
  {
    title: "专栏体系搭建",
    body: "规划 10 个细分内容专栏，实现内容分类沉淀，提升内容可读性与检索效率。",
  },
];

const HIGHLIGHTS = [
  { label: "最高单篇阅读", value: "近 2,000" },
  { label: "累计点赞", value: "690+" },
  { label: "内容专栏", value: "10 个" },
];

export default function CsdnContentPage() {
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
            Content Operations Project
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            CSDN 垂直科普博客
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
            独立负责内容定位、专栏规划与稳定更新，覆盖编程科普与产业观察两大方向，累计产出 44 篇原创内容，近 7 万总访问量。
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CORE PILLARS
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 bg-accent/5 border-y border-border/60">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Content Strategy
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">内容方向</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-6 border border-border/60 shadow-sm"
              >
                <p className="text-4xl font-extrabold text-primary/20 mb-3 leading-none">
                  0{i + 1}
                </p>
                <h3 className="text-base font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HIGHLIGHTS
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Key Metrics
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">运营数据亮点</h2>

          <div className="flex justify-center gap-10 sm:gap-16 flex-wrap mb-10">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="text-center">
                <p className="text-3xl font-extrabold text-primary">{h.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {h.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            44 篇原创、6.9 万+ 阅读、690+ 点赞、570+ 收藏——验证了持续输出和独立完成完整内容闭环的能力。
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VISIT CTA
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 bg-accent/5 border-y border-border/60">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Visit
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-4">访问我的 CSDN 博客</h2>

          <a
            href="https://blog.csdn.net/2302_80868583?spm=1000.2115.3001.5343"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            查看全部 44 篇文章
            <ExternalLinkIcon className="h-3 w-3 opacity-60" />
          </a>

          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            {["内容运营", "专栏策划", "垂直科普", "持续创作", "用户视角"].map(
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
