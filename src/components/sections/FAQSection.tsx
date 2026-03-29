"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQ_COUNT = 5;

export function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-background">
      {/* Background Separator & Glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-surface text-sm font-medium mb-6 shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-brand" />
            <span className="text-foreground/80">{t("badge")}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground max-w-2xl mx-auto leading-snug rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed mb-4"
          >
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-foreground/60 leading-relaxed max-w-2xl mx-auto"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {Array.from({ length: FAQ_COUNT }).map((_, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-brand/40 bg-surface/80 shadow-[0_10px_40px_-15px_rgba(var(--brand),0.15)] ring-1 ring-brand/10" 
                    : "border-border/50 bg-surface/30 hover:bg-surface/50 hover:border-brand/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-start focus:outline-none focus-visible:bg-surface"
                >
                  <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-brand" : "text-foreground"}`}>
                    {t(`items.${i}.question`)}
                  </span>
                  
                  <div className={`shrink-0 ml-4 rtl:ml-0 rtl:mr-4 flex flex-col items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${isOpen ? "bg-gradient-to-br from-brand to-accent/80 rotate-180 shadow-md" : "bg-surface border border-border/50"}`}>
                    {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-foreground/70" />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }} // smooth spring-like easing
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-foreground/70 text-sm sm:text-base leading-relaxed font-medium">
                        {t(`items.${i}.answer`)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
