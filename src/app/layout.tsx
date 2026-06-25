import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "李佳悦 | 个人主页",
  description:
    "李佳悦的个人主页 — 商科背景，擅长数据分析与 AI 工具应用，关注商业与增长。",
  keywords: ["portfolio", "数据分析", "AI", "商业分析", "跨境电商"],
  openGraph: {
    title: "李佳悦 | 个人主页",
    description: "商科背景，擅长数据分析与 AI 工具应用，关注商业与增长。",
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
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
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
