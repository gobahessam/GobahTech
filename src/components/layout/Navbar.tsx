"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { routing, type Locale } from "@/i18n/routing";

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "work", href: "/work" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    if (document.body) document.body.style.overflow = "unset";
  }, [pathname]);

  const toggleMobile = () => {
    const nextState = !mobileOpen;
    setMobileOpen(nextState);
    if (document.body) document.body.style.overflow = nextState ? "hidden" : "unset";
  };

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border py-3 shadow-md" : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          <Link href="/" className="relative z-[60] group flex items-center">
            <Logo size={28} className="transform transition-transform group-hover:scale-105" />
          </Link>

          <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
            {navItems.map(({ key, href }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={key}
                  href={href}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-semibold tracking-wide transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  }`}>
                    {t(key)}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav_indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-6 py-2 text-sm font-bold tracking-wide rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              {t("getInTouch")}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-3 relative z-[60]">
             <ThemeToggle />
             <button
               onClick={toggleMobile}
               aria-label={mobileOpen ? "Close menu" : "Open menu"}
               className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-surface text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
             >
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <motion.path stroke="currentColor" strokeWidth="2" strokeLinecap="round" animate={mobileOpen ? { d: "M6 18L18 6" } : { d: "M4 8H20", y: 0 }} transition={{ duration: 0.3 }} />
                 <motion.path stroke="currentColor" strokeWidth="2" strokeLinecap="round" animate={mobileOpen ? { opacity: 0 } : { d: "M4 16H20", opacity: 1 }} transition={{ duration: 0.3 }} />
               </svg>
             </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[49] bg-black/40 backdrop-blur-sm"
            onClick={toggleMobile}
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-background/95 backdrop-blur-3xl border-l border-border flex flex-col pt-32 px-8 pb-8 shadow-2xl overflow-y-auto"
            >
              <nav className="flex flex-col gap-8 flex-1">
                {navItems.map(({ key, href }, i) => {
                  const isActive = pathname === href;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={href}
                        onClick={toggleMobile}
                        className={`text-4xl font-black tracking-tight block ${
                          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t(key)}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 flex flex-col gap-6"
              >
                {/* Very smooth, large language selector explicitly requested by user */}
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Language</span>
                  <div className="flex gap-2">
                    {routing.locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          router.replace(pathname, { locale: loc });
                          toggleMobile();
                        }}
                        className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                          pathname.startsWith(`/${loc}`) || (loc === 'en' && pathname === '/') 
                            ? "bg-foreground text-background shadow-md" 
                            : "bg-surface border border-border text-foreground hover:bg-muted"
                        }`}
                      >
                        {loc.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={toggleMobile}
                  className="w-full py-4 text-center text-lg font-bold rounded-xl bg-foreground text-background hover:opacity-90 mt-2 shadow-lg"
                >
                  {t("getInTouch")}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
