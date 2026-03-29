"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  ru: "Русский",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select Language"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-muted transition-colors text-sm font-semibold tracking-wide text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
      >
        <span>{locale.toUpperCase()}</span>
        <svg 
           width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 min-w-[150px] rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-xl shadow-black/5 overflow-hidden z-50 p-2"
          >
            {routing.locales.map((loc) => {
              const isActive = loc === locale;
              return (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-foreground text-background font-bold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground font-semibold"
                  }`}
                >
                  {localeLabels[loc]}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-background block" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
