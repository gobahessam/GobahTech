"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { XCircle, CheckCircle, Bot, Code2, ShieldAlert, Rocket, SearchX, Globe2, Layers, Cpu } from "lucide-react";
import { useRef } from "react";

export function ComparisonSection() {
  const t = useTranslations("comparison");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const aiIcons = [ShieldAlert, Bot, SearchX, Layers];
  const customIcons = [Rocket, Code2, Globe2, Cpu];

  return (
    <section id="truth" ref={containerRef} className="py-32 relative overflow-hidden bg-background">
      {/* Background Separator Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">
            {t("badge")}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground leading-snug max-w-2xl mx-auto rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed">
            {t("title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-cyan-400 dark:to-violet-500">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Card 1: AI / Templates (The Problem) */}
          <motion.div style={{ y: y1 }} className="relative group perspective-1000">
            <div className="absolute -inset-1 rounded-3xl bg-red-500/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative h-full rounded-3xl border border-red-500/20 bg-surface/50 backdrop-blur-xl p-8 sm:p-12 overflow-hidden overflow-hidden">
              {/* Glitch Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none mix-blend-overlay" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <Bot className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground opacity-80 decoration-red-500/50 decoration-wavy underline-offset-8">
                  {t("ai.title")}
                </h3>
              </div>

              <ul className="space-y-6">
                {(t.raw("ai.points") as string[]).map((point, i) => {
                  const Icon = aiIcons[i];
                  return (
                    <li key={i} className="flex gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                      <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-lg text-foreground font-medium">{point}</p>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">Generic, bloated, and slow.</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Custom Engineering (The Solution) */}
          <motion.div style={{ y: y2 }} className="relative group perspective-1000 mt-12 lg:mt-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand via-accent to-brand blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
            <div className="relative h-full rounded-3xl border border-brand/50 bg-background p-8 sm:p-12 overflow-hidden shadow-[inset_0_0_80px_rgba(var(--brand),0.1)]">
              {/* Inner Glow line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center shadow-[0_0_30px_hsl(var(--brand)/0.5)]">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-brand to-accent">
                  {t("custom.title")}
                </h3>
              </div>

              <ul className="space-y-6">
                {(t.raw("custom.points") as string[]).map((point, i) => {
                  const Icon = customIcons[i];
                  return (
                    <li key={i} className="flex gap-4 group/item">
                      <div className="relative">
                        <div className="absolute inset-0 bg-brand blur-md opacity-0 group-hover/item:opacity-50 transition-opacity" />
                        <CheckCircle className="relative w-6 h-6 text-brand shrink-0 mt-0.5 z-10" />
                      </div>
                      <div>
                        <p className="text-lg text-foreground font-bold tracking-wide">{point}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Icon className="w-4 h-4 text-accent" />
                          <p className="text-xs text-brand font-mono uppercase tracking-wider">Engineered for Performance</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
