"use client";

import { motion } from "framer-motion";
import { MailIcon, MapPinIcon, Code2Icon, Link2Icon, GlobeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/components/language-provider";

export function Contact() {
  const { t } = useLang();

  const channels = [
    {
      icon: MailIcon,
      label: t.contact.email,
      value: "li.jiayue.work@outlook.com",
      href: "mailto:li.jiayue.work@outlook.com",
    },
    {
      icon: Code2Icon,
      label: t.contact.github,
      value: "github.com/li-jiayue-work",
      href: "https://github.com/li-jiayue-work",
    },
    {
      icon: Link2Icon,
      label: t.contact.gitee,
      value: "gitee.com/llljy1111",
      href: "https://gitee.com/llljy1111",
    },
    {
      icon: GlobeIcon,
      label: t.contact.csdn,
      value: "blog.csdn.net/2302_80868583",
      href: "https://blog.csdn.net/2302_80868583?spm=1000.2115.3001.5343",
    },
  ];

  return (
    <section id="contact" className="py-14 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <Badge variant="secondary" className="mb-2">{t.contact.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="border-border/60 hover:border-accent/30 hover:shadow-sm transition-all duration-200 h-full">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0 transition-colors">
                      <channel.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          {channel.label}
                        </p>
                        {"note" in channel && (
                          <span className="text-[10px] text-muted-foreground/60 border border-border rounded px-1">
                            {t.contact.backupNote}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors truncate">
                        {channel.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-2 text-sm text-muted-foreground justify-center"
        >
          <MapPinIcon className="h-4 w-4" />
          <span>{t.contact.location}</span>
          <span className="text-border">|</span>
          <span>{t.contact.remote}</span>
        </motion.div>
      </div>
    </section>
  );
}
