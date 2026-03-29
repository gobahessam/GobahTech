"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, Sparkles, Globe2, Send } from "lucide-react";
import { useState } from "react";

const COUNTRIES = [
  {
    id: "ru",
    flag: "🇷🇺",
    phone: "+7 928 467 79 51",
    phoneRaw: "79284677951",
    agentName: "عصام",
    color: "from-red-500 to-rose-600",
    glow: "shadow-[0_0_60px_rgba(239,68,68,0.25)]",
    border: "border-red-500/30",
    bg: "bg-red-500/10",
    ring: "ring-red-500/20",
  },
  {
    id: "ye",
    flag: "🇾🇪",
    phone: "+967 771 607 080",
    phoneRaw: "967771607080",
    agentName: "عبدالجبار العمري",
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-[0_0_60px_rgba(16,185,129,0.25)]",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
  },
  {
    id: "sa",
    flag: "🇸🇦",
    phone: "+966 50 216 1746",
    phoneRaw: "966502161746",
    agentName: "محمد الاديب",
    color: "from-green-600 to-emerald-700",
    glow: "shadow-[0_0_60px_rgba(22,163,74,0.25)]",
    border: "border-green-600/30",
    bg: "bg-green-600/10",
    ring: "ring-green-600/20",
  },
  {
    id: "tr",
    flag: "🇹🇷",
    phone: "+90 539 624 41 84",
    phoneRaw: "905396244184",
    agentName: "عبدالرحمن الحبيشي",
    color: "from-red-600 to-orange-500",
    glow: "shadow-[0_0_60px_rgba(220,38,38,0.25)]",
    border: "border-red-600/30",
    bg: "bg-red-600/10",
    ring: "ring-red-600/20",
  },
  {
    id: "eg",
    flag: "🇪🇬",
    phone: "+20 15 5825 5098",
    phoneRaw: "201558255098",
    agentName: "ضياء جوبح",
    color: "from-amber-500 to-yellow-600",
    glow: "shadow-[0_0_60px_rgba(245,158,11,0.25)]",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/20",
  },
  {
    id: "us",
    flag: "🇺🇸",
    phone: "+1 (313) 391-6362",
    phoneRaw: "13133916362",
    agentName: "عبد الناصر",
    color: "from-blue-500 to-indigo-600",
    glow: "shadow-[0_0_60px_rgba(59,130,246,0.25)]",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/20",
  },
];

function buildWhatsAppMsg(agentName: string): string {
  return encodeURIComponent(
    `السلام عليكم ${agentName}،\n` +
    `تواصلت معك من موقع https://gobah-tech.ru\n` +
    `أود الاستفسار عن خدماتكم ومعرفة تفاصيل التكلفة والمدة الزمنية لمشروعي.\n` +
    `شكراً لكم.`
  );
}

export function ContactCTA() {
  const t = useTranslations("contact");
  const [activeCountry, setActiveCountry] = useState(COUNTRIES[0]);

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      {/* Dynamic ambient glow that shifts color based on selected country */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCountry.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className={`absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br ${activeCountry.color} opacity-[0.04] rounded-full blur-[150px]`} />
        </motion.div>
      </AnimatePresence>

      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_10%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-surface text-sm font-medium mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-foreground/80">{t("badge")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground max-w-2xl mx-auto leading-snug rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed mb-4"
          >
            {t("title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent pb-2 inline-block">
              {t("titleHighlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-foreground/60 leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* ── Main Contact Hub ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Outer glow border */}
          <div className={`relative rounded-[2.5rem] transition-shadow duration-700 ${activeCountry.glow}`}>
            <div className={`absolute -inset-px rounded-[2.5rem] bg-gradient-to-br ${activeCountry.color} opacity-30 blur-sm transition-all duration-700`} />

            <div className="relative rounded-[2.5rem] bg-surface/60 backdrop-blur-2xl border border-border/50 overflow-hidden">
              
              {/* ── Top: Country Selector Bar ── */}
              <div className="border-b border-border/40 px-6 sm:px-10 py-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Globe2 className="w-4 h-4 text-brand" />
                  <span className="text-sm font-bold text-foreground/70">{t("locations.title")}</span>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {COUNTRIES.map((country) => (
                    <motion.button
                      key={country.id}
                      onClick={() => setActiveCountry(country)}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                      className={`relative flex items-center gap-2.5 px-5 py-3 rounded-2xl border text-sm font-bold transition-all duration-300 cursor-pointer ${
                        activeCountry.id === country.id
                          ? `${country.bg} ${country.border} ring-2 ${country.ring} shadow-lg`
                          : "border-border/40 bg-surface/50 hover:bg-surface text-foreground/80"
                      }`}
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span>{t(`locations.${country.id}` as any)}</span>

                      {/* Active indicator dot */}
                      {activeCountry.id === country.id && (
                        <motion.div
                          layoutId="country-active-dot"
                          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br ${country.color} ring-2 ring-background shadow-md`}
                          transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* ── Center: Dynamic Phone & WhatsApp Display ── */}
              <div className="px-6 sm:px-10 py-10 sm:py-14 flex flex-col items-center">
                
                {/* Animated Flag + Phone */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCountry.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="flex flex-col items-center text-center mb-10"
                  >
                    <span className="text-6xl sm:text-7xl mb-4 drop-shadow-lg">{activeCountry.flag}</span>
                    <a
                      href={`tel:+${activeCountry.phoneRaw}`}
                      dir="ltr"
                      className={`text-3xl sm:text-4xl font-black text-foreground tracking-wide hover:opacity-80 transition-opacity`}
                    >
                      {activeCountry.phone}
                    </a>
                    <div className="flex items-center gap-2 mt-3">
                      <Phone className="w-4 h-4 text-brand" />
                      <span className="text-sm text-foreground/60 font-medium">{t(`locations.${activeCountry.id}` as any)}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Dual CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                  
                  {/* WhatsApp Button (Primary) */}
                  <a
                    href={`https://wa.me/${activeCountry.phoneRaw}?text=${buildWhatsAppMsg(activeCountry.agentName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-lg transition-all duration-300 shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-6 h-6 fill-white/20" />
                    <span>{t("whatsappCta")}</span>
                  </a>

                  {/* Call Button (Secondary) */}
                  <a
                    href={`tel:+${activeCountry.phoneRaw}`}
                    className="group flex-1 flex items-center justify-center gap-3 px-7 py-4 rounded-2xl border-2 border-foreground/15 bg-surface/80 hover:bg-surface text-foreground font-bold text-lg transition-all duration-300 hover:border-brand/40 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{t("callCta")}</span>
                  </a>
                </div>
              </div>



              {/* ── Bottom: Email + Availability ── */}
              <div className="border-t border-border/40 px-6 sm:px-10 py-6 flex flex-wrap gap-6 sm:gap-0 justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-foreground/50 font-medium">{t("info.emailLabel")}</span>
                    <a href="mailto:hello@gobahtech.com" className="text-sm font-bold text-foreground hover:text-brand transition-colors">
                      hello@gobahtech.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-foreground/50 font-medium">{t("info.locationLabel")}</span>
                    <span className="text-sm font-bold text-foreground">{t("info.location")}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-violet-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-foreground/50 font-medium">{t("info.availabilityLabel")}</span>
                    <span className="text-sm font-bold text-foreground">{t("info.availability")}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
