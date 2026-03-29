"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight, Zap } from "lucide-react";

export function OfferSection() {
  const t = useTranslations("offer");

  return (
    <section id="offer" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Background glow behind the ticket */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-sm font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <ShieldCheck className="w-4 h-4" />
            {t("badge")}
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground max-w-3xl mx-auto leading-snug rtl:text-3xl rtl:md:text-4xl rtl:lg:text-5xl rtl:font-extrabold rtl:leading-relaxed">
            {t("title")}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-cyan-400 dark:to-violet-500 drop-shadow-sm">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="mt-8 text-lg font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* The Platinum Ticket (The Offer) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Animated colorful border */}
          <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r from-brand via-accent to-brand opacity-70 blur-md animate-pulse-glow" />
          
          <div className="relative flex flex-col md:flex-row rounded-[2rem] bg-surface/80 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            
            {/* Left side: The Value */}
            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-border/50 relative">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--brand)/0.1),transparent_50%)]" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand to-accent flex items-center justify-center shadow-[0_0_30px_hsl(var(--brand)/0.4)] mb-8">
                  <Zap className="w-8 h-8 text-white fill-white/20" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-foreground mb-2">
                  {t("card.title")}
                </h3>
                <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 mb-8 inline-block drop-shadow-sm">
                  {t("card.price")}
                </div>

                <ul className="space-y-5">
                  {(t.raw("card.features") as string[]).map((feat, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                      <span className="text-base text-foreground/80 font-medium text-start">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side: The Guarantee & Action */}
            <div className="md:w-1/3 bg-background/50 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <div className="mb-8 p-6 rounded-2xl bg-surface border border-border/50 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-foreground leading-relaxed text-start">
                    {t("card.guarantee")}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-foreground px-6 py-5 text-lg font-bold text-background transition-transform hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--foreground)/0.2)]"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    {t("card.cta")}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                <p className="text-center text-xs text-muted-foreground mt-4 uppercase tracking-widest">
                  Limited slots available per month
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
