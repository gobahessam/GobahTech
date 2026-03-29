"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    titleEn: "E-Commerce Platform",
    titleAr: "منصة تجارة إلكترونية",
    titleRu: "Платформа электронной коммерции",
    category: "ecommerce",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-violet-500/20 to-purple-500/20",
    year: "2025",
  },
  {
    id: 2,
    titleEn: "SaaS Dashboard",
    titleAr: "لوحة تحكم SaaS",
    titleRu: "SaaS Панель управления",
    category: "web",
    tech: ["React", "TypeScript", "Tailwind"],
    color: "from-blue-500/20 to-cyan-500/20",
    year: "2025",
  },
  {
    id: 3,
    titleEn: "Mobile Banking App",
    titleAr: "تطبيق بنكي للموبايل",
    titleRu: "Мобильное банковское приложение",
    category: "mobile",
    tech: ["React Native", "Node.js", "MongoDB"],
    color: "from-emerald-500/20 to-teal-500/20",
    year: "2024",
  },
  {
    id: 4,
    titleEn: "Community Portal",
    titleAr: "بوابة مجتمعية",
    titleRu: "Общественный портал",
    category: "web",
    tech: ["Next.js", "Prisma", "Auth.js"],
    color: "from-orange-500/20 to-amber-500/20",
    year: "2024",
  },
];

export function WorkSection() {
  const t = useTranslations("work");

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            {t("badge")}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground max-w-2xl mx-auto leading-snug mb-4 rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-foreground/60">{t("description")}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl border border-border bg-surface/50 overflow-hidden hover:border-brand/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Project Color Banner */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-foreground/10">
                    0{project.id}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-foreground opacity-0 group-hover:opacity-60 transition-all duration-300 scale-75 group-hover:scale-100" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground text-start">
                    {project.titleEn}
                  </h3>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md border border-border bg-background/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-border bg-surface hover:bg-surface-hover transition-all duration-300"
          >
            {t("viewAll")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
