export type Lang = "zh" | "en";

export const defaultLang: Lang = "zh";

export const labels: Record<Lang, string> = { zh: "中文", en: "EN" };

const dict = {
  zh: {
    nav: {
      index: "首页",
      about: "关于",
      education: "教育",
      projects: "项目",
      experience: "经历",
      skills: "技能",
      contact: "联系方式",
    },
    hero: {
      status: "求职中",
      name: "李佳悦",
      tagline: "商业分析与 AI 工作流",
      description: "专注于数据分析、AI 辅助工作流与增长策略。",
      viewProjects: "查看项目",
      contactMe: "联系我",
      resume: "简历",
    },
    kpi: {
      badge: "核心指标",
      items: [
        { value: "10w+", label: "订单数据已分析" },
        { value: "12", label: "SQL 分析查询" },
        { value: "4", label: "业务 Dashboard" },
        { value: "6w+", label: "技术内容阅读量" },
      ],
    },
    about: {
      badge: "关于",
      title: "商业分析 + AI 复合背景",
      description:
        "湖南工商大学工商管理本科，同时系统学习数据分析与 AI 工具链。关注如何用数据驱动商业决策，用 AI 提升分析效率。",
      highlights: [
        { label: "学校", value: "湖南工商大学" },
        { label: "专业", value: "工商管理 本科" },
        { label: "GPA", value: "3.4 / 4.0" },
        { label: "关注方向", value: "数据分析 + 商业增长" },
      ],
    },
    education: {
      badge: "教育背景",
      title: "学术基础",
      description: "工商管理专业训练 + 数据分析与编程自学。",
      school: "湖南工商大学",
      degree: "工商管理 本科",
      period: "2023.09 — 至今",
      gpa: "GPA 3.4 / 4.0",
      cet4: "CET-4 已通过",
      coreCourses: "核心课程",
      courses: [
        { name: "微观经济学", score: "96" },
        { name: "宏观经济学", score: "91" },
        { name: "计算机基础与大数据分析", score: "85" },
        { name: "统计学B", score: "83" },
        { name: "市场营销学B" },
        { name: "管理学原理" },
      ],
      certification: { label: "证书", value: "全国计算机二级 C 语言" },
    },
    projects: {
      badge: "项目",
      title: "项目产出",
      description: "数据分析与 AI 工作流方向的实战项目，重结果、可复现。",
      featured: "精选",
      comingSoon: "项目即将上线，敬请期待。",
    },
    experience: {
      badge: "经历",
      title: "关键经历",
      description: "",
      items: [
        {
          role: "数据分析与 AI 工具实践",
          company: "自主学习",
          period: "2025.05 — 至今",
          description:
            "搭建电商用户行为分析系统（10w+ 订单数据），构建 SQL 分析查询体系，实践 AI 辅助数据分析与洞察生成。",
          results: ["SQL 数据分析", "用户行为分析", "AI 工作流", "Dashboard 搭建"],
        },
        {
          role: "工商管理本科 + 编程基础",
          company: "在读",
          period: "2023.09 — 至今",
          description:
            "主修工商管理，系统自学 C/Python 编程、数据结构、AI 工具链，持续通过 CSDN 输出技术内容（40+ 篇，6 万+ 阅读）。",
          results: ["商业分析", "编程基础", "技术写作", "跨领域学习"],
        },
      ],
    },
    skills: {
      badge: "技能",
      title: "能力维度",
      description: "",
      groups: [
        {
          category: "数据分析",
          skills: ["SQL", "Python", "Excel", "Tableau", "数据可视化"],
        },
        {
          category: "AI 辅助分析",
          skills: ["提示词工程", "AI 工作流", "自动报告生成", "Claude Code"],
        },
        {
          category: "业务理解",
          skills: ["用户分群", "漏斗分析", "留存分析", "RFM 模型", "增长策略"],
        },
        {
          category: "工具链",
          skills: ["Git", "VS Code", "Cursor", "ChatGPT"],
        },
      ],
    },
    strengths: {
      badge: "竞争力",
      title: "为什么是我",
      description: "",
      items: [
        {
          title: "数据驱动商业洞察",
          description:
            "能独立完成从数据采集、清洗、分析到可视化报告的全流程，基于分析结果输出可执行的业务建议。",
        },
        {
          title: "AI 赋能分析效率",
          description:
            "熟练运用 AI 工具加速数据分析全流程——从 SQL 生成到洞察提炼，将数小时的分析压缩至分钟级。",
        },
        {
          title: "跨领域问题拆解",
          description:
            "商科训练带来业务视角，技术自学带来实现能力，能在商业需求和技术方案之间找到最优路径。",
        },
        {
          title: "持续交付结果",
          description:
            "CSDN 40+ 篇文章、6 万+ 阅读、Gitee 300+ commits——验证了持续输出和独立完成完整闭环的能力。",
        },
      ],
    },
    contact: {
      badge: "联系方式",
      title: "欢迎联系",
      description: "坐标长沙，对全国机会持开放态度。",
      email: "邮箱",
      github: "GitHub",
      gitee: "Gitee（国内备用）",
      csdn: "CSDN 博客",
      backupNote: "备用",
      location: "长沙",
      remote: "接受远程 & 线下",
    },
    footer: {
      builtWith: "使用",
    },
    langToggle: "EN",
  },

  en: {
    nav: {
      index: "Index",
      about: "About",
      education: "Education",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      status: "Open to opportunities",
      name: "Jiayue Li",
      tagline: "Business Analytics & AI Workflow",
      description:
        "Focused on data analysis, AI-assisted workflows, and growth strategy.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      resume: "Resume",
    },
    kpi: {
      badge: "Key Metrics",
      items: [
        { value: "100K+", label: "Orders Analyzed" },
        { value: "12", label: "SQL Queries" },
        { value: "4", label: "Dashboards" },
        { value: "60K+", label: "Content Reads" },
      ],
    },
    about: {
      badge: "About",
      title: "Business Analytics + AI Background",
      description:
        "BBA candidate at Hunan University of Technology and Business, with systematic self-training in data analysis and AI toolchains. Focused on data-driven business decisions and AI-augmented analysis efficiency.",
      highlights: [
        { label: "School", value: "HUTB" },
        { label: "Major", value: "Business Administration" },
        { label: "GPA", value: "3.4 / 4.0" },
        { label: "Focus", value: "Data Analytics + Growth" },
      ],
    },
    education: {
      badge: "Education",
      title: "Academic Foundation",
      description:
        "Business administration training combined with self-directed data analysis and programming.",
      school: "Hunan University of Technology and Business",
      degree: "BBA, Business Administration",
      period: "2023.09 — Present",
      gpa: "GPA 3.4 / 4.0",
      cet4: "CET-4 Passed",
      coreCourses: "Core Courses",
      courses: [
        { name: "Microeconomics", score: "96" },
        { name: "Macroeconomics", score: "91" },
        { name: "CS Fundamentals & Big Data", score: "85" },
        { name: "Statistics B", score: "83" },
        { name: "Marketing B" },
        { name: "Principles of Management" },
      ],
      certification: { label: "Certification", value: "National Computer Rank Exam Level 2 (C)" },
    },
    projects: {
      badge: "Projects",
      title: "What I've built",
      description:
        "Hands-on projects in data analysis and AI workflows — results-driven and reproducible.",
      featured: "Featured",
      comingSoon: "Projects coming soon. Check back later.",
    },
    experience: {
      badge: "Experience",
      title: "Key Experience",
      description: "",
      items: [
        {
          role: "Data Analytics & AI Practice",
          company: "Self-directed",
          period: "2025.05 — Present",
          description:
            "Built e-commerce user behavior analysis system (100K+ orders), developed SQL analysis query framework, practiced AI-assisted data analysis and insight generation.",
          results: ["SQL Analytics", "User Behavior Analysis", "AI Workflow", "Dashboards"],
        },
        {
          role: "BBA + Programming Foundation",
          company: "Enrolled",
          period: "2023.09 — Present",
          description:
            "Majoring in Business Administration while self-learning C/Python programming, data structures, and AI toolchains. Published 40+ tech articles on CSDN (60K+ reads).",
          results: ["Business Analytics", "Programming", "Tech Writing", "Cross-Disciplinary"],
        },
      ],
    },
    skills: {
      badge: "Skills",
      title: "Capabilities",
      description: "",
      groups: [
        {
          category: "Data Analytics",
          skills: ["SQL", "Python", "Excel", "Tableau", "Data Visualization"],
        },
        {
          category: "AI-Assisted Analysis",
          skills: ["Prompt Engineering", "AI Workflow", "Auto Reporting", "Claude Code"],
        },
        {
          category: "Business Acumen",
          skills: ["User Segmentation", "Funnel Analysis", "Retention Analysis", "RFM Model", "Growth Strategy"],
        },
        {
          category: "Toolchain",
          skills: ["Git", "VS Code", "Cursor", "ChatGPT"],
        },
      ],
    },
    strengths: {
      badge: "Strengths",
      title: "Why me",
      description: "",
      items: [
        {
          title: "Data-Driven Business Insights",
          description:
            "Able to independently complete the full pipeline from data collection, cleaning, and analysis to visualization reports, delivering actionable business recommendations.",
        },
        {
          title: "AI-Powered Analysis Efficiency",
          description:
            "Proficient in leveraging AI tools to accelerate the full data analysis workflow — from SQL generation to insight extraction, compressing hours of work into minutes.",
        },
        {
          title: "Cross-Domain Problem Solving",
          description:
            "Business training provides domain perspective; self-taught tech skills provide implementation capability — finding the optimal path between business needs and technical solutions.",
        },
        {
          title: "Consistent Delivery",
          description:
            "40+ CSDN articles, 60K+ reads, 300+ Gitee commits — proven track record of sustained output and independently delivering complete end-to-end results.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Let's connect",
      description:
        "Based in Changsha, China — open to opportunities nationwide.",
      email: "Email",
      github: "GitHub",
      gitee: "Gitee (mirror for China)",
      csdn: "CSDN Blog",
      backupNote: "mirror",
      location: "Changsha",
      remote: "Open to remote & on-site",
    },
    footer: {
      builtWith: "Built with",
    },
    langToggle: "中文",
  },
} as const;

type UnionDict = typeof dict.zh | typeof dict.en;
export type Dict = UnionDict;

export function getDict(lang: Lang): UnionDict {
  return dict[lang];
}
