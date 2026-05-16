import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "李佳悦 | 商科 × AI × 数据",
  description:
    "李佳悦的个人主页 — 工商管理背景，正在向数据分析、AI、Agent 自动化方向转型。",
  keywords: ["portfolio", "AI", "data analytics", "business", "developer"],
  openGraph: {
    title: "李佳悦 | 商科 × AI × 数据",
    description: "商科 × AI × 数据 — 个人主页与项目展示。",
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
