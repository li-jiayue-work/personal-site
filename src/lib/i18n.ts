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
      tagline: "商科 × AI × 数据",
      description: "工商管理专业在读，正在自主学习编程与 AI 技术。关注 AI 如何重塑商业运营与个体生产力。",
      viewProjects: "查看项目",
      contactMe: "联系我",
      resume: "简历",
    },
    about: {
      badge: "关于",
      title: "商科 + AI 复合背景",
      description: "湖南工商大学工商管理本科在读，正在自学编程，一步步向技术方向靠拢。对 AI 如何改变商业运营和个体生产力充满好奇，相信最有价值的问题藏在商业与技术的交叉点上。",
      highlights: [
        { label: "学校", value: "湖南工商大学" },
        { label: "专业", value: "工商管理 本科" },
        { label: "GPA", value: "3.4 / 4.0" },
        { label: "关注方向", value: "AI + 商业运营" },
      ],
    },
    education: {
      badge: "教育背景",
      title: "学术基础",
      description: "工商管理专业系统学习，同时自学编程与 AI 技术。",
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
      title: "我做了什么",
      description: "每个项目都是向更深技术能力迈出的一步。看重量化成果，而非仅仅参与。",
      featured: "精选",
      comingSoon: "项目即将上线，敬请期待。",
    },
    experience: {
      badge: "经历",
      title: "学习轨迹",
      description: "从商科出发，一步步自学编程、数据结构和 AI 工具链。",
      items: [
        {
          role: "AI 协作开发",
          company: "自主学习",
          period: "2025.05 — 至今",
          description: "使用 Claude Code、Cursor 等 AI 编程工具进行项目开发。搭建个人工作区（cursor-cc），完成个人主页网站（Next.js + Tailwind + shadcn/ui），实践 Agent 工作流。",
          results: ["Claude Code 工作流", "Next.js 全栈开发", "AI Agent 实践"],
        },
        {
          role: "数据结构",
          company: "课程学习",
          period: "2025.03 — 2025.06",
          description: "学习常用数据结构（链表、栈、队列、树、图）及其 C 语言实现，完成课程编程作业。",
          results: ["C 语言", "数据结构", "算法基础"],
        },
        {
          role: "C / C++ 编程基础",
          company: "课程学习",
          period: "2025.02 — 2025.06",
          description: "系统学习 C 语言和 C++ 基础语法，完成课后测试代码并通过 GitHub 进行版本管理。",
          results: ["C 语言", "C++", "Git 版本管理"],
        },
        {
          role: "工商管理本科",
          company: "在读",
          period: "2023.09 — 至今",
          description: "主修工商管理，同时自学编程、数据分析与 AI 工具，探索商业与技术的交叉领域。",
          results: ["商业分析", "数据驱动思维", "跨领域学习"],
        },
      ],
    },
    skills: {
      badge: "技能",
      title: "技术栈",
      description: "从 AI 工具到编程语言，持续扩展技术能力边界。",
      groups: [
        {
          category: "AI 工具",
          skills: ["ChatGPT", "Claude Code", "GitHub Copilot", "Perplexity"],
        },
        {
          category: "低代码 & 自动化",
          skills: ["飞书", "Notion AI", "Make.com"],
        },
        {
          category: "编程",
          skills: ["C", "Python"],
        },
        {
          category: "办公 & 工具",
          skills: ["VS Code", "Cursor", "Visual Studio 2022", "Git", "Excel", "Word", "PPT"],
        },
      ],
    },
    strengths: {
      badge: "个人优势",
      title: "为什么是我",
      description: "商科背景 + 技术自学 + AI 工具能力，在商业与技术的交叉点上创造价值。",
      items: [
        {
          title: "商科 + AI 复合背景",
          description: "工商管理专业训练带来商业思维和业务理解能力，同时自学编程和 AI 工具链，能在业务需求和技术实现之间架起桥梁。",
        },
        {
          title: "主动学习能力",
          description: "课业之外自主探索 AI 工具、编程语言和项目开发，从数据结构到全栈网站，每一步都是自驱学习的结果。",
        },
        {
          title: "业务需求拆解",
          description: "能快速理解业务场景，将模糊需求转化为可执行的技术方案，善于用 AI 工具提升分析和执行效率。",
        },
        {
          title: "持续输出能力",
          description: "CSDN 累计发布 40+ 篇技术文章，阅读量突破 6 万；Gitee 保持活跃的代码提交习惯，已累计 300+ 次 commit。",
        },
        {
          title: "抗压与自驱",
          description: "课业与自学并行推进，在高强度多任务环境下保持节奏，独立完成从调研到落地的完整闭环。",
        },
      ],
    },
    contact: {
      badge: "联系方式",
      title: "欢迎联系",
      description: "坐标长沙，对全国机会持开放态度。无论招聘、合作还是交流，欢迎来信。",
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
      tagline: "Business × AI × Data",
      description:
        "Business administration background, transitioning toward data analytics, AI, and agent-driven automation. Interested in how AI reshapes business operations and individual productivity.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      resume: "Resume",
    },
    about: {
      badge: "About",
      title: "Business + AI Hybrid Background",
      description:
        "BBA student at Hunan University of Technology and Business, self-learning programming and moving toward tech step by step. Curious about how AI reshapes business operations and individual productivity. The most interesting problems sit at the intersection of business and technology.",
      highlights: [
        { label: "School", value: "HUTB" },
        { label: "Major", value: "Business Administration" },
        { label: "GPA", value: "3.4 / 4.0" },
        { label: "Focus", value: "AI + Business Ops" },
      ],
    },
    education: {
      badge: "Education",
      title: "Academic Foundation",
      description:
        "Systematic business administration studies combined with self-directed learning in programming and AI technologies.",
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
        "Each project is a step toward deeper technical capability. Quantified results, not just participation.",
      featured: "Featured",
      comingSoon: "Projects coming soon. Check back later.",
    },
    experience: {
      badge: "Experience",
      title: "Learning journey",
      description:
        "Starting from business administration, self-learning programming, data structures, and the AI toolchain step by step.",
      items: [
        {
          role: "AI-Assisted Development",
          company: "Self-directed",
          period: "2025.05 — Present",
          description:
            "Building projects with Claude Code, Cursor, and other AI coding tools. Set up personal workspace (cursor-cc), built personal site (Next.js + Tailwind + shadcn/ui), practicing Agent workflows.",
          results: ["Claude Code Workflow", "Next.js Full-Stack", "AI Agent Practice"],
        },
        {
          role: "Data Structures",
          company: "Coursework",
          period: "2025.03 — 2025.06",
          description:
            "Studied common data structures (linked lists, stacks, queues, trees, graphs) with C implementation, completed course assignments.",
          results: ["C Language", "Data Structures", "Algorithm Basics"],
        },
        {
          role: "C / C++ Programming",
          company: "Coursework",
          period: "2025.02 — 2025.06",
          description:
            "Systematic study of C and C++ fundamentals, completed exercises and managed code via Git on GitHub.",
          results: ["C Language", "C++", "Git Version Control"],
        },
        {
          role: "BBA Student",
          company: "Enrolled",
          period: "2023.09 — Present",
          description:
            "Majoring in Business Administration while self-learning programming, data analysis, and AI tools. Exploring the intersection of business and technology.",
          results: ["Business Analytics", "Data-Driven Thinking", "Cross-Disciplinary"],
        },
      ],
    },
    skills: {
      badge: "Skills",
      title: "Tech stack",
      description:
        "From AI tools to programming languages — constantly expanding technical capabilities.",
      groups: [
        {
          category: "AI Tools",
          skills: ["ChatGPT", "Claude Code", "GitHub Copilot", "Perplexity"],
        },
        {
          category: "Low-Code & Automation",
          skills: ["Feishu", "Notion AI", "Make.com"],
        },
        {
          category: "Programming",
          skills: ["C", "Python"],
        },
        {
          category: "Office & Tools",
          skills: ["VS Code", "Cursor", "Visual Studio 2022", "Git", "Excel", "Word", "PPT"],
        },
      ],
    },
    strengths: {
      badge: "Strengths",
      title: "Why me",
      description:
        "Business acumen + self-taught tech skills + AI tool proficiency — creating value at the intersection of business and technology.",
      items: [
        {
          title: "Business + AI Hybrid",
          description:
            "Business administration training provides commercial thinking and domain understanding, while self-taught programming and AI toolchain skills bridge the gap between business needs and technical implementation.",
        },
        {
          title: "Self-Directed Learner",
          description:
            "Beyond coursework, independently exploring AI tools, programming languages, and project development — from data structures to full-stack websites, every step is self-driven.",
        },
        {
          title: "Requirements Analysis",
          description:
            "Able to quickly understand business scenarios, translate vague requirements into actionable technical plans, and leverage AI tools to boost analysis and execution efficiency.",
        },
        {
          title: "Consistent Output",
          description:
            "Published 40+ technical articles on CSDN with 60K+ total reads; maintained active code contribution habits on Gitee with 300+ commits.",
        },
        {
          title: "Resilience & Self-Motivation",
          description:
            "Juggling coursework and self-study in parallel, maintaining momentum in high-intensity multi-tasking environments, independently delivering complete research-to-execution loops.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Let's connect",
      description:
        "Based in Changsha, China — open to opportunities nationwide. Whether you're hiring, collaborating, or just want to chat, reach out.",
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
