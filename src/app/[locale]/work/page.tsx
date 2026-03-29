import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    titleKey: "ecommerce",
    category: "ecommerce",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    color: "from-violet-500/20 to-purple-500/20",
    year: "2025",
    descEn: "A full-featured e-commerce platform with real-time inventory, multi-currency support, and an analytics dashboard.",
    descAr: "منصة تجارة إلكترونية متكاملة مع مخزون فوري ودعم عملات متعددة ولوحة تحليلات.",
    descRu: "Полнофункциональная платформа электронной коммерции с инвентарём в реальном времени.",
  },
  {
    id: 2,
    titleKey: "saas",
    category: "web",
    tech: ["React", "TypeScript", "Tailwind", "Supabase"],
    color: "from-blue-500/20 to-cyan-500/20",
    year: "2025",
    descEn: "A SaaS analytics dashboard with real-time data visualization, team collaboration, and automated reporting.",
    descAr: "لوحة تحكم SaaS للتحليلات مع تصور بيانات فوري وتعاون الفرق وتقارير تلقائية.",
    descRu: "SaaS-панель аналитики с визуализацией данных в реальном времени.",
  },
  {
    id: 3,
    titleKey: "banking",
    category: "mobile",
    tech: ["React Native", "Node.js", "MongoDB", "Plaid"],
    color: "from-emerald-500/20 to-teal-500/20",
    year: "2024",
    descEn: "A mobile banking application with secure transactions, budget tracking, and biometric authentication.",
    descAr: "تطبيق بنكي للموبايل مع معاملات آمنة وتتبع الميزانية ومصادقة بيومترية.",
    descRu: "Мобильное банковское приложение с безопасными транзакциями.",
  },
  {
    id: 4,
    titleKey: "community",
    category: "web",
    tech: ["Next.js", "Prisma", "Auth.js", "PostgreSQL"],
    color: "from-orange-500/20 to-amber-500/20",
    year: "2024",
    descEn: "A community management portal with event scheduling, multilingual support, and member dashboards.",
    descAr: "بوابة إدارة مجتمعية مع جدولة الفعاليات ودعم متعدد اللغات ولوحات الأعضاء.",
    descRu: "Портал управления сообществом с расписанием мероприятий.",
  },
  {
    id: 5,
    titleKey: "fitness",
    category: "mobile",
    tech: ["React Native", "Firebase", "Stripe"],
    color: "from-pink-500/20 to-rose-500/20",
    year: "2024",
    descEn: "A fitness tracking app with workout plans, progress charts, and social challenges.",
    descAr: "تطبيق تتبع اللياقة مع خطط التمارين ومخططات التقدم وتحديات اجتماعية.",
    descRu: "Приложение для фитнеса с планами тренировок и графиками прогресса.",
  },
  {
    id: 6,
    titleKey: "restaurant",
    category: "ecommerce",
    tech: ["Next.js", "Sanity CMS", "Stripe"],
    color: "from-amber-500/20 to-yellow-500/20",
    year: "2023",
    descEn: "A restaurant ordering platform with real-time order tracking, menu management, and delivery integration.",
    descAr: "منصة طلبات مطاعم مع تتبع فوري للطلبات وإدارة القوائم وتكامل التوصيل.",
    descRu: "Платформа заказов для ресторанов с отслеживанием в реальном времени.",
  },
];

const projectTitles: Record<string, { en: string; ar: string; ru: string }> = {
  ecommerce: { en: "E-Commerce Platform", ar: "منصة تجارة إلكترونية", ru: "Платформа электронной коммерции" },
  saas: { en: "SaaS Dashboard", ar: "لوحة تحكم SaaS", ru: "SaaS Панель управления" },
  banking: { en: "Mobile Banking App", ar: "تطبيق بنكي للموبايل", ru: "Мобильное банковское приложение" },
  community: { en: "Community Portal", ar: "بوابة مجتمعية", ru: "Общественный портал" },
  fitness: { en: "Fitness Tracker", ar: "تطبيق تتبع اللياقة", ru: "Фитнес-трекер" },
  restaurant: { en: "Restaurant Platform", ar: "منصة مطاعم", ru: "Платформа ресторанов" },
};

function WorkContent() {
  const t = useTranslations("work");

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-border bg-surface/50 overflow-hidden hover:border-brand/30 transition-all duration-500"
            >
              {/* Color Banner */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-foreground/10">
                    0{project.id}
                  </span>
                </div>
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-foreground opacity-0 group-hover:opacity-60 transition-all duration-300 scale-75 group-hover:scale-100" />
                </div>
                <div className="absolute top-4 end-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-foreground">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {projectTitles[project.titleKey]?.en}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.descEn}
                </p>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WorkContent />;
}
