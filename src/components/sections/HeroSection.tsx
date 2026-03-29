"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, User, Terminal } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { InteractiveChat } from "@/components/ui/InteractiveChat";
import { useState } from "react";

// Clean, aesthetic Developer Background
function DeveloperBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* ── High-End Architectural Grid ── */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"
        style={{ maskImage: "radial-gradient(ellipse 60% 80% at 50% 0%, #000 30%, transparent 100%)" }}
      />
      
      {/* ── Glowing Data Nodes (Background Beams) ── */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vh] bg-violet-600/10 dark:bg-violet-600/20 rounded-full blur-[100px] mix-blend-screen" />
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations("heroV2");
  const tStory = useTranslations("heroStory");
  const [chatFinished, setChatFinished] = useState(false);

  // Clean, DRY Button components
  const CTAs = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <Link 
        href="/contact" 
        className={`group relative inline-flex items-center justify-center gap-2 ${mobile ? "w-full" : ""} px-9 py-4 rounded-full bg-foreground text-background font-black text-sm hover:scale-[1.04] active:scale-[0.97] transition-all shadow-xl overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10">{tStory("cta1")}</span>
        <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
      
      <Link 
        href="#about" 
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`inline-flex items-center justify-center gap-2 ${mobile ? "w-full" : ""} px-9 py-4 rounded-full border border-border/50 bg-surface/40 backdrop-blur-xl text-foreground font-bold text-sm hover:bg-surface/80 transition-all hover:scale-[1.02]`}
      >
        <Terminal className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
        {tStory("cta2")}
      </Link>
    </>
  );

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-background pt-24 pb-20">

      {/* ── The Clean Developer Background ── */}
      <DeveloperBackground />

      {/* ── Responsive Split Layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left Side (Text & Typography) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-start"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-xl text-[12px] font-bold text-foreground mb-6 sm:mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            {t("badge")}
          </div>
          
          {/* Headline - Stripped of messy gradients for maximum professional impact */}
          <h1 className="text-[2.75rem] sm:text-5xl lg:text-7xl font-black text-foreground leading-[1.2] rtl:text-4xl rtl:sm:text-5xl rtl:lg:text-[3.5rem] rtl:font-extrabold rtl:leading-snug mb-6 drop-shadow-sm">
            {t("line1")} <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-500 bg-clip-text text-transparent">
              {t("line2")}
            </span>
          </h1>

          <p className="hidden lg:block text-lg text-foreground/70 leading-relaxed font-medium max-w-md mb-10">
            {t("sub")}
          </p>

          <div className="hidden lg:flex w-full items-center justify-start gap-4">
            <CTAs />
          </div>
        </motion.div>

        {/* ── Right Side (Interactive Glass Chat) ── */}
        <div className="w-full relative flex flex-col items-center lg:items-end z-30 pt-4 lg:pt-0">
          <div className="w-full max-w-[420px] flex justify-center lg:justify-end">
            <InteractiveChat onComplete={() => setChatFinished(true)} />
          </div>

          <div className="lg:hidden w-full h-[140px] flex items-start justify-center mt-6">
            <AnimatePresence>
              {chatFinished && (
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 w-full"
                >
                  <CTAs mobile />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

    </section>
  );
}
