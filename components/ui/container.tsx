import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/** Shared content width and responsive gutters for portfolio sections. */
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={[
        "site-container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
