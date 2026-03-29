"use client";

import { useTranslations } from "next-intl";
import { Send, Mail, MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/constants";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {t("title")} <span className="gradient-text">{t("titleHighlight")}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-surface/30 p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("form.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder={t("form.name")}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder={t("form.email")}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder={t("form.message")}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all duration-300 resize-none"
                  />
                </div>

                {sent && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                    ✓ {t("form.success")}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-brand text-brand-foreground hover:bg-brand-hover disabled:opacity-50 transition-all duration-300 glow-brand-hover"
                >
                  {sending ? t("form.sending") : t("form.send")}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: t("info.email"), href: `mailto:${siteConfig.email}` },
              { icon: MapPin, label: t("info.location"), href: undefined },
              { icon: Clock, label: t("info.availability"), href: undefined },
            ].map(({ icon: Icon, label, href }, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-surface/50 hover:border-brand/20 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand/10 text-brand shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                {href ? (
                  <a href={href} className="text-sm text-foreground hover:text-brand transition-colors">{label}</a>
                ) : (
                  <span className="text-sm text-foreground">{label}</span>
                )}
              </div>
            ))}

            {/* WhatsApp */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 font-semibold"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>

            {/* Social Links */}
            <div className="p-6 rounded-2xl border border-border bg-surface/50">
              <h3 className="text-sm font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {Object.entries(siteConfig.socials).map(([key, href]) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground hover:text-foreground hover:border-brand/30 transition-all duration-300 text-xs font-bold uppercase"
                  >
                    {key.charAt(0).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
