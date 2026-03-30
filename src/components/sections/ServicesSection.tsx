"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, ShoppingCart, Search, Palette, GraduationCap } from "lucide-react";

export function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    { key: "webDev", icon: Code2, span: "col-span-1 lg:col-span-2", bg: "from-blue-500/10 to-transparent" },
    { key: "mobile", icon: Smartphone, span: "col-span-1 lg:col-span-1", bg: "from-purple-500/10 to-transparent" },
    { key: "ai", icon: Cpu, span: "col-span-1 lg:col-span-1", bg: "from-emerald-500/10 to-transparent" },
    { key: "ecommerce", icon: ShoppingCart, span: "col-span-1 lg:col-span-1", bg: "from-orange-500/10 to-transparent" },
    { key: "seo", icon: Search, span: "col-span-1 lg:col-span-2", bg: "from-rose-500/10 to-transparent" },
    { key: "uiux", icon: Palette, span: "col-span-1 lg:col-span-1", bg: "from-pink-500/10 to-transparent" },
    { key: "graduation", icon: GraduationCap, span: "col-span-1 md:col-span-2 lg:col-span-4", bg: "from-cyan-500/20 via-violet-500/10 to-transparent" },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground max-w-2xl mx-auto leading-snug rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed">
            {t("title")} <span className="text-brand">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-foreground/60">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden p-8 rounded-[2rem] bg-background border border-border/50 hover:border-foreground/30 transition-all duration-500 ${service.span}`}
            >
              {/* Magic Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-surface/80 backdrop-blur-md flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  <service.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-black text-foreground mb-3 text-start tracking-tight">
                  {t(`items.${service.key as any}.title`)}
                </h3>
                <p className="text-foreground/70 font-medium text-start text-sm leading-relaxed mb-8 flex-1">
                  {t(`items.${service.key as any}.description`)}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {(t.raw(`items.${service.key as any}.features`) as string[]).map((feat, j) => (
                    <span key={j} className="px-4 py-1.5 bg-background/50 backdrop-blur-md border border-border shadow-sm rounded-full text-xs font-bold text-foreground/80 group-hover:border-foreground/20 transition-colors">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
