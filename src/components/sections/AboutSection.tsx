"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Globe2, Zap, Code2, Rocket, GraduationCap, Star, Clock3, MapPin } from "lucide-react";
import Image from "next/image";

// ── Floating Badge — two nested divs: outer=entry spring, inner=float tween ─ //
function FloatingBadge({
  icon: Icon,
  label,
  value,
  top,
  left,
  right,
  bottom,
  delay,
  color,
}: {
  icon: any;
  label: string;
  value: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: "spring", bounce: 0.5 }}
      style={{ top, left, right, bottom, position: "absolute", zIndex: 30 }}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border border-border/60 bg-background/90 backdrop-blur-xl shadow-xl cursor-default"
      >
        <div className={`p-1.5 rounded-lg ${color} shrink-0`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <div className="leading-none">
          <div className="text-[11px] text-foreground/50 font-semibold">{label}</div>
          <div className="text-sm font-black text-foreground mt-0.5">{value}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main Section ─────────────────────────────────────────────── //
export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-background overflow-hidden">

      {/* Section connectors */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* Background grid matching hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-8 w-fit shadow-sm">
              <Code2 className="w-3.5 h-3.5" />
              {t("badge")}
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.15] rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed mb-6">
              {t("title")}{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-cyan-400 dark:to-violet-500 bg-clip-text text-transparent">
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed font-medium mb-10 max-w-lg">
              {t("bento1_desc")}
            </p>

            {/* Mini stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock3, val: "12+", label: t("bento2_title"), color: "text-cyan-500" },
                { icon: Globe2, val: "3+",  label: t("bento3_title"), color: "text-violet-500" },
                { icon: Star,   val: "50+", label: "مشروع منجز",     color: "text-yellow-500" },
                { icon: Zap,    val: "100%",label: t("bento4_title"), color: "text-emerald-500" },
              ].map(({ icon: Icon, val, label, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-md hover:border-cyan-500/20 transition-colors"
                >
                  <Icon className={`w-5 h-5 shrink-0 ${color}`} />
                  <div>
                    <div className="text-xl font-black text-foreground leading-none">{val}</div>
                    <div className="text-xs text-foreground/50 mt-0.5 font-semibold">{label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Visual Sphere (desktop only) ──────── */}
          <div className="hidden lg:flex justify-center items-center relative h-[540px]">

            {/* Spinning rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute w-[430px] h-[430px] rounded-full border border-cyan-500/10 animate-[spin_60s_linear_infinite]"
            />
            <div className="absolute w-[350px] h-[350px] rounded-full border border-violet-500/10 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[270px] h-[270px] rounded-full border border-cyan-500/15 animate-[spin_25s_linear_infinite]" />

            {/* Glow backdrop */}
            <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-br from-cyan-500/10 via-violet-500/5 to-transparent blur-3xl pointer-events-none" />

            {/* Center image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.4 }}
              className="relative z-20 flex flex-col items-center"
            >
              <div className="relative w-44 h-44 rounded-full border-[3px] border-white/10 shadow-[0_0_60px_rgba(6,182,212,0.25),0_0_100px_rgba(139,92,246,0.1)] overflow-hidden">
                <Image
                  src="/me.jpg"
                  alt={t("bento1_title")}
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <div className="text-lg font-black text-foreground">{t("bento1_title")}</div>
                <div className="flex items-center justify-center gap-1.5 mt-1 text-xs text-foreground/50 font-semibold">
                  <MapPin className="w-3 h-3 text-cyan-500" />
                {t("badges.location")}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
              </div>
            </div>
            </motion.div>

            {/* Orbiting badges */}
            <FloatingBadge icon={Clock3}        label={t("badges.exp_label")}  value={t("badges.exp_value")}       top="4%"    left="0%"   delay={0.4}  color="bg-cyan-500/20 text-cyan-500" />
            <FloatingBadge icon={GraduationCap} label={t("badges.edu_label")}  value={t("badges.edu_value")} top="8%"    right="0%"  delay={0.55} color="bg-violet-500/20 text-violet-500" />
            <FloatingBadge icon={Globe2}        label={t("badges.loc_label")}  value={t("badges.loc_value")}      top="48%"   right="-2%" delay={0.7}  color="bg-blue-500/20 text-blue-500" />
            <FloatingBadge icon={Rocket}        label={t("badges.proj_label")} value={t("badges.proj_value")}      bottom="10%" left="2%"  delay={0.85} color="bg-orange-500/20 text-orange-500" />
            <FloatingBadge icon={Zap}           label={t("badges.perf_label")} value={t("badges.perf_value")}        bottom="4%"  right="4%" delay={1.0}  color="bg-emerald-500/20 text-emerald-500" />
          </div>

          {/* ── Mobile: simple profile ── */}
          <div className="flex lg:hidden flex-col items-center gap-4">
            <div className="relative w-28 h-28 rounded-full border-2 border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.2)] overflow-hidden">
              <Image src="/me.jpg" alt={t("bento1_title")} width={112} height={112} className="object-cover w-full h-full" />
            </div>
            <div className="text-center">
              <div className="font-black text-foreground text-lg">{t("bento1_title")}</div>
              <div className="flex items-center justify-center gap-1.5 text-xs text-foreground/50 mt-1">
                <MapPin className="w-3 h-3 text-cyan-500" />
                {t("badges.location")}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
