"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/components/language-provider";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-3 mb-8"
        >
          <Badge variant="secondary" className="mb-2">{t.experience.badge}</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {t.experience.items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 py-4 border-b border-border/50 last:border-0">
                <div className="sm:w-40 shrink-0 mb-2 sm:mb-0">
                  <Badge variant="outline" className="font-normal text-xs">
                    {exp.period}
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold">{exp.role}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.results.map((r) => (
                      <Badge key={r} className="bg-primary/10 text-primary text-xs font-medium">
                        {r}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
