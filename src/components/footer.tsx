"use client";

import { useLang } from "@/components/language-provider";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} 李佳悦. All rights reserved.</p>
        <p>
          {t.footer.builtWith}{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            Next.js
          </a>
          {" "}&middot;{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            Tailwind
          </a>
          {" "}&middot;{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            shadcn/ui
          </a>
        </p>
      </div>
    </footer>
  );
}
