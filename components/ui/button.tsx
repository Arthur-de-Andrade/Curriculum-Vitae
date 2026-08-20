import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "default" | "large" | "icon";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

function getButtonClassName({
  variant = "primary",
  size = "default",
  className,
}: Pick<ButtonStyleProps, "variant" | "size" | "className">) {
  return [
    "btn",
    `btn-${variant}`,
    size === "default" ? null : `btn-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
  ButtonStyleProps & {
    children: ReactNode;
  };

export function Button({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={getButtonClassName({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> &
  ButtonStyleProps & {
  href: string;
  children: ReactNode;
};

export function ButtonLink({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={getButtonClassName({ variant, size, className })} {...props}>
      {children}
    </a>
  );
}
