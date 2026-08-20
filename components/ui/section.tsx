import type { HTMLAttributes } from "react";

import { Container } from "@/components/ui/container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

/** Keeps section padding, anchors and content width consistent across the home page. */
export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={["section", className].filter(Boolean).join(" ")} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
