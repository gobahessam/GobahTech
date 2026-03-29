"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, ShoppingCart, Search, Palette } from "lucide-react";

export function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    { key: "webDev", icon: Code2 },
    { key: "mobile", icon: Smartphone },
    { key: "ai", icon: Cpu },
    { key: "ecommerce", icon: ShoppingCart },
    { key: "seo", icon: Search },
    { key: "uiux", icon: Palette },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground max-w-2xl mx-auto leading-snug rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed">
            {t("title")} <span className="text-brand">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-foreground/60">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-background border border-border/50 hover:border-brand/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-extrabold text-foreground mb-3 text-start">
                {t(`items.${service.key as any}.title`)}
              </h3>
              <p className="text-foreground/70 font-medium text-start text-sm leading-relaxed mb-6">
                {t(`items.${service.key as any}.description`)}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {(t.raw(`items.${service.key as any}.features`) as string[]).map((feat, j) => (
                  <span key={j} className="px-3 py-1 bg-surface rounded-full text-xs font-medium text-muted-foreground">
                    {feat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
