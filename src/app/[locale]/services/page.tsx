import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { type LucideIcon, Code2, Palette, ShoppingCart, Smartphone, Search, MessageSquare, CheckCircle2, ArrowRight, Cpu } from "lucide-react";

const serviceKeys = ["webDev", "uiux", "ecommerce", "mobile", "seo", "ai"] as const;

const serviceIcons: Record<string, LucideIcon> = {
  webDev: Code2,
  uiux: Palette,
  ecommerce: ShoppingCart,
  mobile: Smartphone,
  seo: Search,
  ai: Cpu,
};

const serviceGradients: Record<string, string> = {
  webDev: "from-violet-500/20 to-indigo-500/20",
  uiux: "from-pink-500/20 to-rose-500/20",
  ecommerce: "from-emerald-500/20 to-teal-500/20",
  mobile: "from-blue-500/20 to-cyan-500/20",
  seo: "from-amber-500/20 to-orange-500/20",
  ai: "from-purple-500/20 to-fuchsia-500/20",
};

function ServicesContent() {
  const t = useTranslations("services");

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

        {/* Services Detailed */}
        <div className="space-y-8">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[key];
            const gradient = serviceGradients[key];
            const isEven = i % 2 === 0;

            return (
              <div
                key={key}
                className="group rounded-3xl border border-border bg-surface/30 overflow-hidden hover:border-brand/20 transition-all duration-500"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                  {/* Gradient Visual */}
                  <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${gradient} ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-20 h-20 text-foreground/10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand/10 text-brand mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {t(`items.${key}.title`)}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t(`items.${key}.description`)}
                    </p>
                    <div className="space-y-3">
                      {(t.raw(`items.${key}.features`) as string[]).map((feat: string) => (
                        <div key={feat} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                          <span className="text-sm text-foreground">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-brand text-brand-foreground hover:bg-brand-hover transition-all duration-300 glow-brand-hover"
                      >
                        {t("learnMore")}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesContent />;
}
