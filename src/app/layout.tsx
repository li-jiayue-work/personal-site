import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "李佳悦 | 商业分析与 AI 工作流",
  description:
    "李佳悦的个人主页 — 专注于数据分析、AI 辅助工作流与增长策略。",
  keywords: ["portfolio", "AI", "data analytics", "business", "developer"],
  openGraph: {
    title: "李佳悦 | 商业分析与 AI 工作流",
    description: "专注于数据分析、AI 辅助工作流与增长策略。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
