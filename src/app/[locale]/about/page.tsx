import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { CheckCircle2, Code2, Lightbulb, Users, Zap } from "lucide-react";

const skills = [
  "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "Prisma", "MongoDB", "Docker", "Git",
  "Figma", "React Native", "GraphQL", "Redis", "Vercel",
  "AWS", "Firebase", "Supabase", "REST APIs", "CI/CD",
];

const values = [
  { icon: Code2, titleEn: "Clean Code", titleAr: "كود نظيف", titleRu: "Чистый код", descEn: "We write maintainable, well-documented code that scales." },
  { icon: Lightbulb, titleEn: "Innovation", titleAr: "الابتكار", titleRu: "Инновации", descEn: "We stay on the cutting edge of web technologies." },
  { icon: Users, titleEn: "Client-First", titleAr: "العميل أولاً", titleRu: "Клиент прежде всего", descEn: "Your success is our success. We listen and deliver." },
  { icon: Zap, titleEn: "Performance", titleAr: "الأداء", titleRu: "Производительность", descEn: "Speed matters. We optimize every millisecond." },
];

function AboutContent() {
  const t = useTranslations("about");

  const statsData = [
    { count: t("stats.projectsCount"), label: t("stats.projectsLabel") },
    { count: t("stats.clientsCount"), label: t("stats.clientsLabel") },
    { count: t("stats.experienceCount"), label: t("stats.experienceLabel") },
    { count: t("stats.techCount"), label: t("stats.techLabel") },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {statsData.map(({ count, label }, i) => (
            <div key={i} className="text-center p-6 rounded-2xl border border-border bg-surface/50">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{count}</div>
              <div className="mt-2 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t("philosophy")}</p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, titleEn, descEn }, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-surface/50 hover:border-brand/20 transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand/10 text-brand mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{titleEn}</h3>
                <p className="text-xs text-muted-foreground">{descEn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="rounded-3xl border border-border bg-surface/30 p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand" />
            Technologies We Master
          </h2>
          <p className="text-muted-foreground mb-8">The tools and frameworks we use to build exceptional products.</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 text-sm font-medium rounded-xl border border-border bg-background/50 text-foreground hover:border-brand/30 hover:bg-brand/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}
