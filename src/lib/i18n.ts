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
      tagline: "数据分析 · 内容运营",
      description: "使用 Claude Code 辅助，独立完成全流程数据分析项目与垂直内容博客运营。",
      viewProjects: "查看项目",
      contactMe: "联系我",
      resume: "简历",
    },
    kpi: {
      badge: "关键数据",
      items: [
        { value: "500", label: "Amazon 畅销书已分析" },
        { value: "7", label: "可视化图表产出" },
        { value: "48", label: "子品类覆盖分析" },
        { value: "6w+", label: "CSDN 技术内容阅读量" },
      ],
    },
    about: {
      badge: "关于",
      title: "数据驱动运营增长",
      description:
        "关注用户、内容与商业增长之间的关系，尝试通过数据分析与AI工具发现问题、验证假设并支持运营决策。",
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
      coreInsights: "Core Insights",
      comingSoon: "项目即将上线，敬请期待。",
    },
    experience: {
      badge: "经历",
      title: "关键经历",
      description: "",
      items: [
        {
          role: "Amazon 图书市场数据分析",
          company: "个人项目",
          period: "2026.05",
          description:
            "基于 Amazon 500 本畅销书真实数据，用 Python 完成全流程数据可视化（7 张专业图表），并输出一份交互式 HTML 分析报告，含 AI 驱动的运营策略建议。",
          results: ["Python 数据分析", "数据可视化", "AI 辅助洞察", "市场分析报告"],
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
          skills: ["SQL", "Python（基础）", "Excel"],
        },
        {
          category: "AI 辅助分析",
          skills: ["AI 工作流", "Claude Code"],
        },
        {
          category: "业务理解",
          skills: [],
        },
        {
          category: "工具链",
          skills: ["Git", "VS Code", "Cursor", "ChatGPT", "DBeaver", "Claude"],
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
    projectDetail: {
      back: "返回项目列表",
      reportsTitle: "完整分析报告",
      reportsHint: "点击下方链接查看 PPT 风格商业分析简报，包含完整的数据分析过程与运营建议",
      reportsComingTitle: "完整分析报告即将上线",
      reportsComingHint: "PPT 风格商业分析简报，包含完整的数据分析过程与运营建议",
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
      tagline: "Data Analytics · Content Operations",
      description:
        "Independently delivered full-cycle data analysis projects and a vertical content blog, assisted by Claude Code.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      resume: "Resume",
    },
    kpi: {
      badge: "Key Metrics",
      items: [
        { value: "500", label: "Amazon Books Analyzed" },
        { value: "7", label: "Charts Generated" },
        { value: "48", label: "Sub-Genres Covered" },
        { value: "60K+", label: "CSDN Content Reads" },
      ],
    },
    about: {
      badge: "About",
      title: "Data-Driven Growth Operations",
      description:
        "Exploring the intersection of users, content, and business growth — leveraging data analysis and AI tools to identify problems, validate hypotheses, and support operational decisions.",
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
      coreInsights: "Core Insights",
      comingSoon: "Projects coming soon. Check back later.",
    },
    experience: {
      badge: "Experience",
      title: "Key Experience",
      description: "",
      items: [
        {
          role: "Amazon Books Market Analysis",
          company: "Personal Project",
          period: "2026.05",
          description:
            "Analyzed 500 real Amazon bestseller records using Python — produced 7 professional charts and an interactive HTML report with AI-generated strategic recommendations.",
          results: ["Python Analytics", "Data Visualization", "AI-Assisted Insights", "Market Report"],
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
          skills: ["SQL", "Python (Basic)", "Excel"],
        },
        {
          category: "AI-Assisted Analysis",
          skills: ["AI Workflow", "Claude Code"],
        },
        {
          category: "Business Acumen",
          skills: [],
        },
        {
          category: "Toolchain",
          skills: ["Git", "VS Code", "Cursor", "ChatGPT", "DBeaver", "Claude"],
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
    projectDetail: {
      back: "Back to Projects",
      reportsTitle: "Complete Analysis Reports",
      reportsHint: "Click below to view PPT-style business analysis briefs with complete data analysis and operational recommendations",
      reportsComingTitle: "Complete Analysis Reports Coming Soon",
      reportsComingHint: "PPT-style business analysis briefs with full data analysis process and operational recommendations",
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
