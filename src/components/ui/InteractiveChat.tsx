"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function InteractiveChat({ onComplete }: { onComplete?: () => void }) {
  const t = useTranslations("heroChat");
  const [step, setStep] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setStep(1); // Msg 1
      await new Promise((r) => setTimeout(r, 1600));
      setStep(2); // Msg 2
      await new Promise((r) => setTimeout(r, 2200));
      setStep(3); // Msg 3
      await new Promise((r) => setTimeout(r, 2600));
      setStep(4); // Msg 4
      
      // Post chat action trigger
      setTimeout(() => {
        onComplete?.();
      }, 1000);
    };
    
    sequence();
  }, [onComplete]);

  // Spring animation for authentic chat bubble feel
  const springAnim = {
    initial: { opacity: 0, y: 20, scale: 0.8, originY: 1, originX: 0 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: "spring" as const, stiffness: 450, damping: 25 }
  };

  return (
    <div className="w-full max-w-[360px] sm:max-w-md mx-auto relative z-10 flex flex-col scale-[1.02] sm:scale-105 transform-origin-top my-4">
      
      {/* Background Glow under Phone */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-violet-600/20 dark:from-cyan-600/30 dark:to-violet-600/30 blur-[100px] z-0 rounded-full" />
      
      {/* Phone Glass Frame - Sleek Minimalist Design */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="relative z-10 flex flex-col w-full rounded-[2.5rem] border border-border/40 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(6,182,212,0.15)] dark:shadow-[0_30px_60px_-15px_rgba(6,182,212,0.3)] bg-surface/70 dark:bg-black/40 backdrop-blur-3xl overflow-hidden min-h-[480px]"
      >
        {/* Messages Header (iOS Style) */}
        <div className="flex items-center justify-center px-4 py-4 border-b border-border/50 dark:border-white/10 bg-surface/50 dark:bg-white/5 backdrop-blur-md z-20 relative">
          <div className="flex flex-col items-center">
            {/* Small Avatar Instead of Huge Cover */}
            <div className="w-14 h-14 rounded-full mb-1 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)] ring-[3px] ring-background overflow-hidden relative">
              <Image 
                src="/me.jpg" 
                alt="Essam Gobah" 
                width={56}
                height={56}
                className="object-cover" 
              />
            </div>
            <p className="text-sm font-bold text-foreground mt-1">{t("sender")}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]" />
              <p className="text-[11px] text-green-500 font-bold uppercase tracking-widest">Online</p>
            </div>
          </div>
        </div>

        {/* Chat Body - Ultra Clean Background */}
        <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden relative bg-gradient-to-b from-surface/20 to-background/40">
          
          {/* Typying Indicator Area */}
          <div className="absolute bottom-5 left-5">
            {step < 4 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="bg-surface/80 border border-border/50 px-5 py-3 rounded-full w-fit flex gap-1.5 shadow-sm backdrop-blur-md"
              >
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-2 h-2 bg-blue-500 rounded-full" />
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-blue-500 rounded-full" />
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-blue-500 rounded-full" />
              </motion.div>
            )}
          </div>

          <div className="flex flex-col gap-3.5 pb-10 mt-2">
            {step >= 1 && (
              <motion.div {...springAnim} className="self-start max-w-[85%] bg-blue-600/90 backdrop-blur-md text-white px-5 py-3.5 rounded-[1.2rem] rounded-tl-sm shadow-md text-[15px] font-medium leading-relaxed">
                {t("msg1")}
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div {...springAnim} className="self-start max-w-[85%] bg-blue-600/90 backdrop-blur-md text-white px-5 py-3.5 rounded-[1.2rem] rounded-tl-sm shadow-md text-[15px] font-medium leading-relaxed">
                {t("msg2")}
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div {...springAnim} className="self-start max-w-[90%] bg-blue-600/90 backdrop-blur-md text-white px-5 py-3.5 rounded-[1.2rem] rounded-tl-sm shadow-md text-[15px] font-medium leading-relaxed border border-blue-400/20">
                {t("msg3")}
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div {...springAnim} className="self-start max-w-[95%] bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3.5 rounded-[1.2rem] rounded-tl-sm shadow-[0_10px_20px_-5px_rgba(147,51,234,0.3)] text-[15px] font-bold leading-relaxed border border-purple-400/30">
                {t("msg4")}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
