"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/components/language-provider";

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <Badge variant="secondary" className="mb-2">{t.skills.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {t.skills.groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="border-border/60 h-full">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">
                    {group.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
