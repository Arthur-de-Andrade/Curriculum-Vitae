import type { HTMLAttributes } from "react";

export type BadgeTone = "neutral" | "success" | "accent";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  tone?: BadgeTone;
}

export function Badge({ children, tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={["badge", `badge-${tone}`, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
