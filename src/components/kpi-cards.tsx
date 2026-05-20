"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/components/language-provider";

export function KpiCards() {
  const { t } = useLang();

  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {t.kpi.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
