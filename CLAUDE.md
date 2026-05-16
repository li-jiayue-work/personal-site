# Personal Site (个人主页)

李佳悦的个人作品集/简历网站。

## 技术栈

- **Next.js 16** (App Router) + TypeScript + Turbopack
- **Tailwind CSS v4** (oklch 颜色系统, `@custom-variant dark`)
- **shadcn/ui v4** (@base-ui/react/button, 无 `asChild` prop)
- **MDX** 管理项目内容 (`@next/mdx` + 手动 frontmatter 解析)
- **framer-motion** 滚动触发动画 (`whileInView`)
- **lucide-react** (图标后缀 `*Icon`, 无 Github/Linkedin 图标)
- **React Context** 中英双语 (`LanguageProvider` + `useLang()`)

## 目录结构

```
active/personal-site/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # 根布局: LanguageProvider + Navbar + Footer
│   │   ├── page.tsx                # 首页: 组合所有 section
│   │   ├── globals.css             # 全局样式 + 自定义蓝色主题
│   │   └── projects/[slug]/page.tsx # 项目详情页 (SSG)
│   ├── components/
│   │   ├── ui/                     # shadcn/ui 组件 (button, badge, card)
│   │   ├── navbar.tsx              # 固定导航 + IntersectionObserver + 手机菜单
│   │   ├── hero.tsx                # 首屏: 头像 + 姓名 + CTA 按钮
│   │   ├── about.tsx               # 关于: 4 张 highlight 卡片
│   │   ├── education.tsx           # 教育背景: 学校 + 课程 + 证书
│   │   ├── projects.tsx            # 项目卡片列表 (精选/非精选)
│   │   ├── experience.tsx          # 学习轨迹时间线
│   │   ├── skills.tsx              # 技能分组卡片
│   │   ├── strengths.tsx           # 个人优势卡片
│   │   ├── contact.tsx             # 联系方式渠道
│   │   ├── footer.tsx              # 页脚
│   │   └── language-provider.tsx   # i18n Context
│   ├── lib/
│   │   ├── i18n.ts                 # 中英文字典 (247行)
│   │   └── projects.ts             # MDX 文件读取 + frontmatter 解析
│   └── mdx-components.tsx          # MDX 组件覆盖 (h2, p, ul)
├── content/projects/               # MDX 项目文件 (6个)
└── public/                         # 静态资源 (resume.pdf, favicon)
```

## 页面板块顺序

1. **Hero** — 姓名、标语、CTA 按钮
2. **About** — 学校、专业、GPA、关注方向
3. **Education** — 详细教育背景、课程成绩、证书
4. **Projects** — 精选项目 + 普通项目网格
5. **Experience** — 学习经历时间线
6. **Skills** — 技能分组: AI工具/低代码/编程/办公
7. **Strengths** — 个人竞争优势
8. **Contact** — 联系渠道卡片

## 关键实现细节

- **i18n**: `src/lib/i18n.ts` 是唯一翻译源, `useLang()` hook 在 client 组件中使用
- **项目 MDX**: 新增项目只需在 `content/projects/` 创建 `.mdx` 文件, frontmatter 字段: title, description, tech, result, github, demo, featured
- **项目详情页**: 每个项目自动生成 `/projects/[slug]` 路由 (SSG)
- **导航高亮**: IntersectionObserver + `rootMargin: "-40% 0px -55% 0px"`
- **字体**: 系统字体栈 (Geist/Inter/JetBrains Mono fallback), Google Fonts 被墙已移除
- **暗色模式**: Tailwind `@custom-variant dark` + `dark:` 类选择器类

## 部署

- 目标: Vercel (git push 自动部署)
- 当前状态: 本地 `localhost:3000` 可访问, 尚未部署到公网

## 已知问题 / 待办

- [ ] 部署到 Vercel (需要先推送到 GitHub 仓库)
- [ ] CSDN 博客文章列表无法获取 (被墙), 需要用户提供代表作链接
- [ ] resume.pdf 需要放入 public/ 目录
