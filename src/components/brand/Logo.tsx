"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: number;
  variant?: "full" | "icon";
}

export function Logo({ className = "", size = 40, variant = "full" }: LogoProps) {
  if (variant === "icon") {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        {/* Hexagonal G shape */}
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <motion.g style={{ originX: "24px", originY: "24px" }} whileHover={{ scale: 1.05 }}>
          {/* Main G Path */}
          <motion.path
            d="M 33.9 14.1 A 14 14 0 1 0 38 24 H 24"
            stroke="url(#logoGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1, 
                transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
              }
            }}
            className="hover:stroke-[4px] transition-all duration-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          />
          
          {/* Tech Connection Dot */}
          <motion.circle
            cx="24"
            cy="24"
            r="3.5"
            fill="#ffffff"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { 
                scale: 1, 
                opacity: 1, 
                transition: { delay: 1.2, duration: 0.5, type: "spring" } 
              }
            }}
            className="shadow-[0_0_10px_#ffffff]"
          />
        </motion.g>
      </motion.svg>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="logoGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="glowFull">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <motion.g style={{ originX: "24px", originY: "24px" }} whileHover={{ scale: 1.05 }}>
          {/* Main G Path - CCW from top-right to center */}
          <motion.path
            d="M 33.9 14.1 A 14 14 0 1 0 38 24 H 24"
            stroke="url(#logoGradFull)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1, 
                transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
              }
            }}
            className="group-hover:stroke-[4px] transition-all duration-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          />
          
          {/* Tech Connection Dot */}
          <motion.circle
            cx="24"
            cy="24"
            r="3.5"
            fill="#ffffff"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { 
                scale: 1, 
                opacity: 1, 
                transition: { delay: 1.2, duration: 0.5, type: "spring" } 
              }
            }}
            className="shadow-[0_0_10px_#ffffff]"
          />
        </motion.g>
      </motion.svg>
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-xl font-bold tracking-tight"
      >
        <span className="text-foreground transition-colors group-hover:text-primary">Gobah</span>
        <span className="text-muted-foreground transition-colors group-hover:text-foreground">Tech</span>
      </motion.span>
    </div>
  );
}
