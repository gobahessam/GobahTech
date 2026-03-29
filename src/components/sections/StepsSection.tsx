"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MonitorSmartphone, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    id: "1",
    icon: Code2,
    gradient: "from-cyan-500 to-sky-600",
    glow: "shadow-[0_0_40px_rgba(6,182,212,0.35)]",
    bgAccent: "bg-cyan-500/10",
    borderAccent: "border-cyan-500/20",
    iconBg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    numColor: "text-cyan-500/20",
  },
  {
    id: "2",
    icon: MonitorSmartphone,
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.35)]",
    bgAccent: "bg-violet-500/10",
    borderAccent: "border-violet-500/20",
    iconBg: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    numColor: "text-violet-500/20",
  },
  {
    id: "3",
    icon: Rocket,
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.35)]",
    bgAccent: "bg-emerald-500/10",
    borderAccent: "border-emerald-500/20",
    iconBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    numColor: "text-emerald-500/20",
  },
];

export function StepsSection() {
  const t = useTranslations("steps");

  return (
    <section id="steps" className="relative py-24 sm:py-32 bg-background overflow-hidden relative">

      {/* ── Background Connectors (Unified aesthetic with Above sections) ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-bold mb-6 shadow-sm"
          >
            {t("badge")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground max-w-2xl mb-4 leading-snug rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed"
          >
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-xl font-medium"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* ── Pure CSS Grid Timeline ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Universal Horizontal Connector Line (Only on Desktop, sits beautifully behind cards) */}
          <div className="hidden md:block absolute top-[5.2rem] left-10 right-10 h-0.5 bg-gradient-to-r from-cyan-500/20 via-violet-500/40 to-emerald-500/20 z-0 pointer-events-none" />

          {STEPS.map((step, i) => {
            const indexStr = step.id as "1" | "2" | "3";
            const StepIcon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15, type: "spring", bounce: 0.3 }}
                className={`relative z-10 w-full flex flex-col items-start text-start p-8 rounded-3xl border ${step.borderAccent} bg-surface/50 backdrop-blur-2xl hover:scale-[1.02] transition-transform duration-300 shadow-xl overflow-hidden`}
              >
                {/* Large watermark number shifted to the bottom opposite corner */}
                <span className={`absolute -bottom-6 ltr:-right-4 rtl:-left-4 text-9xl font-black font-mono ${step.numColor} select-none pointer-events-none opacity-20`}>
                  {step.id}
                </span>

                {/* Glowing Icon (Top start) */}
                <div className={`w-14 h-14 rounded-2xl border ${step.iconBg} bg-surface flex items-center justify-center mb-6 ${step.glow} shrink-0 relative z-20 shadow-lg`}>
                  <StepIcon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-foreground mb-3 relative z-10">
                  {t(`list.${indexStr}.title`)}
                </h3>
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed font-medium relative z-10">
                  {t(`list.${indexStr}.description`)}
                </p>

                {/* Bottom subtle edge glow */}
                <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${step.gradient} opacity-50`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
