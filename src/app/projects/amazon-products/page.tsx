import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon, FileTextIcon } from "lucide-react";

const KPIS = [
  { value: "1,465", label: "Products Analyzed" },
  { value: "16", label: "Data Fields" },
  { value: "13", label: "Visualizations" },
  { value: "3", label: "ML Models" },
];

const FINDINGS = [
  {
    title: "折扣与评分几乎零相关",
    body: "皮尔逊 r = −0.16，随机森林 R² = 0.082。双重验证：降价不能有效提升用户满意度。产品品质和品牌口碑才是真正的竞争壁垒。",
  },
  {
    title: "产品可明确分为三类运营群",
    body: "K-Means（K=3）将产品分为低价冲量型（63.9% 折扣）、中价低折型（28.9% 折扣）、高价保利型（30.9% 折扣），为差异化运营提供量化依据。",
  },
  {
    title: "价格仅能解释 8% 的评分方差",
    body: "随机森林回归用 5 个可观测特征预测评分，R² 仅 0.082。评分 92% 由产品品质、品牌口碑等不可观测因素决定——不要在定价上内卷。",
  },
];

const CHARTS = [
  {
    title: "价格、折扣与品类结构",
    key: "三品类三足鼎立（Electronics 35.9%、Computers 30.9%、Home & Kitchen 30.5%），折扣率呈双峰分布（40–50% 和 60–70%），反映平台差异化定价策略。",
    images: ["chart_01_category_dist", "chart_04_price_scatter"],
    layout: "2col" as const,
  },
  {
    title: "K-Means 聚类：Elbow Method + 聚类结果",
    key: "Elbow Method 确定 K=3。聚类将产品分为三类：低价冲量（795件,₹1,007,63.9%）、中价低折（564件,₹3,131,28.9%）、高价保利（68件,₹29,367,30.9%）。",
    images: ["chart_09a_elbow", "chart_09b_clusters"],
    layout: "2col" as const,
  },
];

const RECOMMENDATIONS = [
  {
    title: "产品分群运营",
    body: "低价群冲量引流，中价群稳利润，高价群树品牌。三类产品的营销预算、促销节奏、库存深度应完全不同。",
  },
  {
    title: "Home & Kitchen 是安全赛道",
    body: "评分中位数最高且方差最小，消费者预期匹配度好。新品首发优选该品类，避开 Cables & Accessories 红海。",
  },
  {
    title: "投资产品力而非折扣战",
    body: "价格仅解释 8% 的评分方差。与其在折扣上竞争，不如投资产品品质和品牌建设。",
  },
];

export default function AmazonProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          Back to Projects
        </Link>
      </div>

      {/* HERO */}
      <section className="pt-16 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Data Mining Course Project
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            亚马逊产品市场全景分析
          </h1>

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
            遵循 CRISP-DM 数据挖掘标准流程，对 Amazon India 产品数据实施从清洗、EDA 到 K-Means 聚类与随机森林回归的全流程分析，揭示电商定价与用户反馈的真实关系。
          </p>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="py-16 px-6 bg-accent/5 border-y border-border/60">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Executive Summary
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">核心发现</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {FINDINGS.map((f, i) => (
              <div key={i} className="bg-background rounded-xl p-6 border border-border/60 shadow-sm">
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

      {/* KEY EVIDENCE */}
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

                <div className={group.layout==="2col"?"grid sm:grid-cols-2 gap-4 mt-4":"mt-4"}>
                  {group.images.map((img) => (
                    <div key={img} className="bg-background rounded-xl border border-border/60 shadow-sm overflow-hidden">
                      <img src={`/charts/amazon-products/${img}.png`} alt={img} className="w-full h-auto" />
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

      {/* RECOMMENDATIONS */}
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

      {/* FULL REPORT CTA */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Deep Dive</p>
          <h2 className="text-2xl font-bold tracking-tight mb-4">查看完整报告</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            包含 13 张独立图表、完整 EDA 过程、K-Means 聚类与随机森林回归建模细节
          </p>

          <a href="/reports/amazon-analysis/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-md">
            <FileTextIcon className="h-4 w-4" />
            阅读全文
            <ExternalLinkIcon className="h-3 w-3 opacity-60" />
          </a>

          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            {["Python","pandas","scikit-learn","matplotlib","seaborn","K-Means","Random Forest","CRISP-DM"].map((tag)=>(
              <span key={tag} className="text-[11px] font-medium px-3 py-1 rounded-full bg-accent/10 text-muted-foreground border border-border/40">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
