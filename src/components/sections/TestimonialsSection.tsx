"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, TechVenture",
    content: "GobahTech transformed our digital presence completely. The website they built for us increased our conversion rate by 300%. Highly recommended!",
    rating: 5,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    name: "Dmitry Volkov",
    role: "CTO, StartupHub",
    content: "Professional, fast, and incredibly talented. They delivered our SaaS platform ahead of schedule with outstanding quality.",
    rating: 5,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Sarah Chen",
    role: "Founder, GreenLeaf",
    content: "Working with GobahTech was a game-changer. Their attention to detail and technical expertise is unmatched in the industry.",
    rating: 5,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            {t("badge")}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-foreground max-w-2xl mx-auto leading-snug mb-4 rtl:text-3xl rtl:sm:text-4xl rtl:lg:text-4xl rtl:font-extrabold rtl:leading-relaxed">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-foreground/60">{t("description")}</p>
        </motion.div>

        {/* Cards with gradient borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />

              <div className="relative rounded-2xl border border-border bg-surface/50 backdrop-blur-sm p-8 h-full flex flex-col hover:border-border/80 transition-all duration-500">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-brand/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-sm text-foreground/70 font-medium leading-relaxed mb-8 flex-1 text-start">
                  &ldquo;{item.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar with gradient */}
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground text-start">{item.name}</div>
                    <div className="text-xs text-foreground/60 font-medium text-start">{item.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
