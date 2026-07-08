"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/language-provider";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-3xl w-full text-center">
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

          <p className="text-xl sm:text-2xl text-secondary-foreground font-semibold">
            {t.hero.tagline}
          </p>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
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
