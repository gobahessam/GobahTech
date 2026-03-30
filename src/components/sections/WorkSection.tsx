"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    titleEn: "Yemeni Community Portal",
    titleAr: "بوابة الجالية اليمنية - موسكو",
    titleRu: "Йеменская община — Москва",
    descEn: "A comprehensive digital platform for managing community events, consular services, and seamless communication.",
    descAr: "منصة رقمية متكاملة لإدارة فعاليات الجالية، حجز الخدمات القنصلية، وتعزيز التواصل المشترك.",
    descRu: "Комплексная цифровая платформа для управления мероприятиями общины и консульскими услугами.",
    tech: ["Next.js", "Prisma", "TailwindCSS"],
    gradient: "from-blue-600/20 to-violet-500/20",
    url: "https://yemenrussia.com",
  },
  {
    id: 2,
    titleEn: "High-Conversion E-Commerce",
    titleAr: "منصة تجارة إلكترونية تُضاعف الأرباح",
    titleRu: "E-Commerce с высокой конверсией",
    descEn: "Engineered from a basic storefront into a smart sales engine that doubles profits, ensuring a secure and seamless user experience.",
    descAr: "نقطة التحول من المبيعات التقليدية إلى الهيمنة الرقمية. تمت هندسة هذا المتجر ليتحول من واجهة عرض بسيطة إلى ماكينة مبيعات ذكية تُضاعف الأرباح وتجذب الزوار للتحول إلى عملاء ذوي ولاء.",
    descRu: "Разработано из обычного магазина в умный механизм продаж, который удваивает прибыль.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    url: "#",
  },
  {
    id: 3,
    titleEn: "Tourism AI Portal",
    titleAr: "بوابة سياحية بالذكاء الاصطناعي",
    titleRu: "Туристический ИИ портал",
    descEn: "AI-driven local tourism guide with dynamic booking and smart translation.",
    descAr: "دليل سياحي يعتمد بالكامل على نماذج الذكاء الاصطناعي مع حجز ديناميكي وترجمة تلقائية للسياح.",
    descRu: "ИИ гид по туризму с умным бронированием.",
    tech: ["Next.js", "OpenAI", "Prisma"],
    gradient: "from-orange-500/20 to-pink-500/20",
    url: "#",
  },
  {
    id: 4,
    titleEn: "Graduation Project: HealthTech",
    titleAr: "مشروع تخرج: نظام صحي ذكي",
    titleRu: "Дипломный проект: HealthTech",
    descEn: "End-to-end hospital management system ensuring A+ grade for students.",
    descAr: "نظام إدارة مستشفيات متكامل يضمن حصول الطالب المعني على درجة الامتياز عبر كود نظيف وبنية هندسية واضحة.",
    descRu: "Полная система управления больницей для диплома.",
    tech: ["React Native", "Node.js", "MongoDB"],
    gradient: "from-violet-500/20 to-rose-500/20",
    url: "#",
  },
];

function FlatMinimalCard({ project, locale, index }: { project: any, locale: string, index: number }) {
  const title = locale === "ar" ? project.titleAr : locale === "ru" ? project.titleRu : project.titleEn;
  const desc = locale === "ar" ? project.descAr : locale === "ru" ? project.descRu : project.descEn;
  const isRTL = locale === "ar";

  return (
    <motion.a
      href={project.url}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group block relative w-full h-auto min-h-[460px] rounded-[2rem] bg-background border border-border/60 hover:border-brand/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-brand overflow-hidden"
    >
      {/* Visual Placeholder Header (Clean, Flat, Apple-like) */}
      <div className={`relative h-56 w-full bg-gradient-to-br ${project.gradient} border-b border-border/40 overflow-hidden flex items-end justify-center pt-8`}>
        <div className="relative w-[80%] h-full bg-background/90 rounded-t-xl border border-b-0 border-border/80 shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.2)] flex items-center justify-center transition-transform duration-500 group-hover:translate-y-2">
           <Sparkles className="w-8 h-8 text-muted-foreground/30 transition-colors duration-500 group-hover:text-foreground/50" strokeWidth={1.5} />
        </div>
      </div>

      {/* Structured Content Area */}
      <div className="flex flex-col p-8 lg:p-10">
        <div className="flex items-start justify-between mb-4 gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug tracking-tight">
            {title}
          </h3>
          <div className="w-10 h-10 shrink-0 rounded-full bg-surface border border-border text-foreground flex items-center justify-center transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:border-brand">
            <ArrowUpRight className={`w-5 h-5 ${isRTL ? "-scale-x-100" : ""}`} />
          </div>
        </div>
        
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
          {desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1.5 bg-surface rounded-md text-xs font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export function WorkSection() {
  const t = useTranslations("work");
  const locale = useLocale();

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Clear Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-foreground font-semibold text-xs mb-6 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            {t("badge")}
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground rtl:font-bold leading-tight tracking-tight mb-6">
            {t("title")}{" "}
            <span className="text-muted-foreground">{t("titleHighlight")}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground rtl:leading-[1.8] font-medium leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Minimalist Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((project, i) => (
            <FlatMinimalCard key={project.id} project={project} locale={locale} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
