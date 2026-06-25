import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "李佳悦 | 数据分析与跨境电商运营",
  description:
    "李佳悦的个人主页 — 商业数据分析、跨境电商运营与 AI 工作流实践。",
  keywords: ["portfolio", "数据分析", "跨境电商", "运营", "AI"],
  openGraph: {
    title: "李佳悦 | 数据分析与跨境电商运营",
    description: "商业数据分析、跨境电商运营与 AI 工作流实践。",
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
