"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/components/language-provider";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <Badge variant="secondary" className="mb-2">{t.about.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {t.about.highlights.map((item) => (
            <Card key={item.label} className="border-border/60 hover:border-border transition-colors">
              <CardContent className="p-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <p className="text-sm font-medium">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
