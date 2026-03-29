"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";

export function InteractiveTerminal() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setStep(1); // Typying first command
      await new Promise((r) => setTimeout(r, 1500));
      setStep(2); // Command 1 success
      await new Promise((r) => setTimeout(r, 1000));
      setStep(3); // Typing second command
      await new Promise((r) => setTimeout(r, 1500));
      setStep(4); // Command 2 success
      await new Promise((r) => setTimeout(r, 1200));
      setStep(5); // Launching
    };
    sequence();
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto md:mx-0 relative z-10">
      
      {/* Background Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl z-0" />
      
      {/* Terminal Window */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col w-full rounded-2xl border border-border bg-background/80 backdrop-blur-2xl shadow-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-border bg-surface/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="flex-1 text-center text-xs font-semibold text-muted-foreground mr-8">
            bash — root@gobahtech
          </p>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 font-mono text-sm sm:text-base text-foreground min-h-[250px] flex flex-col gap-3">
          
          {/* Step 1: Init App */}
          <div className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
            {step >= 1 ? (
              <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="font-semibold"
              >
                npx initialize-project @gobahtech/vision
              </motion.span>
            ) : (
              <span className="w-2 h-5 bg-foreground animate-pulse" />
            )}
          </div>

          {/* Step 2: Init App Success */}
          {step >= 2 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} 
              className="flex items-center gap-2 text-green-500 ml-6"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-foreground/80 font-medium">Architecture deployed successfully.</span>
            </motion.div>
          )}

          {/* Step 3: AI Modules */}
          {step >= 3 && (
            <div className="flex items-start gap-2 mt-2">
              <ChevronRight className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="font-semibold"
              >
                import {`{ SystemAI }`} from "future-tech"
              </motion.span>
              {step === 3 && <span className="w-2 h-5 bg-foreground animate-pulse ml-1" />}
            </div>
          )}

          {/* Step 4: AI modules loaded */}
          {step >= 4 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} 
              className="flex items-center gap-2 text-green-500 ml-6"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-foreground/80 font-medium">AI models and APIs stabilized.</span>
            </motion.div>
          )}

          {/* Step 5: Final output and Pulse */}
          {step >= 5 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold"
            >
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Launching Application Protocol...</span>
              </div>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 2, ease: "anticipate" }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full origin-left"
              />
            </motion.div>
          )}

          {/* Persistent Cursor when done typing */}
          {step === 4 && (
            <div className="flex items-start gap-2 mt-2">
              <ChevronRight className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
              <span className="w-2 h-5 bg-foreground animate-pulse" />
            </div>
          )}

        </div>
      </motion.div>

      {/* Floating Elements / Decoration */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 -bottom-6 w-24 h-24 bg-surface border border-border rounded-xl shadow-xl flex items-center justify-center -rotate-6 z-20"
      >
        <span className="text-3xl font-black bg-gradient-to-tr from-blue-500 to-purple-500 text-transparent bg-clip-text">10x</span>
      </motion.div>
    </div>
  );
}
