import type { HTMLAttributes } from "react";

type SurfaceElement = "div" | "article" | "section";

interface SurfaceProps extends HTMLAttributes<HTMLElement> {
  as?: SurfaceElement;
  children: React.ReactNode;
  interactive?: boolean;
}

/** A quiet, border-led surface for semantically grouped content. */
export function Surface({
  as = "div",
  children,
  className,
  interactive = false,
  ...props
}: SurfaceProps) {
  const Element = as;

  return (
    <Element
      className={["surface", interactive ? "surface-interactive" : null, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Element>
  );
}
