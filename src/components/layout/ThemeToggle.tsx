"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full border border-border" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-8 h-8 flex items-center justify-center rounded-full border border-border bg-surface hover:bg-muted transition-colors"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 0 : 1, 
          opacity: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-foreground" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 1 : 0, 
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-foreground" />
      </motion.div>
    </button>
  );
}
