"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

/** A short, low-noise entrance used only for above-the-fold content. */
export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.56,
  yOffset = 14,
}: BlurFadeProps) {
  const shouldReduceMotion = useReducedMotion();
  const isReduced = shouldReduceMotion === true;
  const animationStyle = {
    "--blur-fade-delay": `${delay}s`,
    "--blur-fade-y": `${yOffset}px`,
  } as CSSProperties;

  return (
    <motion.div
      className={["blur-fade", className].filter(Boolean).join(" ")}
      style={animationStyle}
      initial={{ opacity: 0, filter: "blur(12px)", y: yOffset }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: isReduced ? 0 : duration,
        delay: isReduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
