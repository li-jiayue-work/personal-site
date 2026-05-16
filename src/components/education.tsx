"use client";

import { motion } from "framer-motion";
import { GraduationCapIcon, AwardIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/components/language-provider";

export function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="py-24 px-6 bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <Badge variant="secondary" className="mb-2">{t.education.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.education.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.education.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-border/60 h-full">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <GraduationCapIcon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{t.education.school}</CardTitle>
                <p className="text-sm text-muted-foreground">{t.education.degree}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-normal">
                    {t.education.period}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-normal bg-primary/10 text-primary">
                    {t.education.gpa}
                  </Badge>
                  <Badge variant="secondary" className="font-normal">
                    {t.education.cet4}
                  </Badge>
                </div>
                {t.education.certification && (
                  <div className="flex items-center gap-2 pt-2 border-t border-border">
                    <AwardIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{t.education.certification.label}:</span>
                    <span className="text-sm font-medium">{t.education.certification.value}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="border-border/60 h-full">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {t.education.coreCourses}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {t.education.courses.map((course) => (
                    <div
                      key={course.name}
                      className="flex items-center justify-between p-2 rounded-lg bg-accent/50"
                    >
                      <span className="text-sm">{course.name}</span>
                      {"score" in course && course.score && (
                        <span className="text-xs font-mono font-medium text-primary ml-1">
                          {course.score}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
