"use client";

import { motion } from "framer-motion";
import { GraduationCapIcon, AwardIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/components/language-provider";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-6 bg-secondary/50">
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
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.about.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <Card className="border-border/60">
            <CardHeader>
              <div className="flex items-start gap-4 flex-wrap">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCapIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg">{t.education.school}</CardTitle>
                  <p className="text-sm text-muted-foreground">{t.education.degree}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="font-normal">
                    {t.education.period}
                  </Badge>
                  <Badge variant="secondary" className="font-normal bg-primary/10 text-primary">
                    {t.education.gpa}
                  </Badge>
                  <Badge variant="secondary" className="font-normal">
                    {t.education.cet4}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Core Courses */}
              <div>
                <p className="text-sm font-semibold mb-3">{t.education.coreCourses}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
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
              </div>

              {/* Certification */}
              {t.education.certification && (
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <AwardIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{t.education.certification.label}:</span>
                  <span className="text-sm font-medium">{t.education.certification.value}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
