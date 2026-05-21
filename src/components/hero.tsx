"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon, FileTextIcon, MailIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLang } from "@/components/language-provider";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t.hero.status}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {t.hero.name}
          </h1>

          <p className="text-xl sm:text-2xl text-gradient font-semibold">
            {t.hero.tagline}
          </p>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.viewProjects}
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <MailIcon className="mr-2 h-4 w-4" />
              {t.hero.contactMe}
            </Button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              {t.hero.resume}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl blur-2xl" />
            <Card className="relative w-72 sm:w-80 rounded-2xl border-border/60 shadow-lg overflow-hidden">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Amazon Books Analysis
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">500</p>
                    <p className="text-[10px] text-muted-foreground">Books Analyzed</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">$16.83</p>
                    <p className="text-[10px] text-muted-foreground">Avg Price</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-emerald-500">4.41</p>
                    <p className="text-[10px] text-muted-foreground">Avg Rating / 5</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">6.3M</p>
                    <p className="text-[10px] text-muted-foreground">Total Reviews</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>Price Distribution</span>
                    <span className="text-emerald-500">$4.23–$34.09</span>
                  </div>
                  <div className="flex items-end gap-1 h-10">
                    {[25, 60, 90, 100, 85, 70, 50, 35, 20, 15, 10, 5].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/40 rounded-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDownIcon className="h-5 w-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}
