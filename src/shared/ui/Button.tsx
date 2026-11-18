import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants = {
  primary: "bg-[#70452e] text-white hover:bg-[#583521]",
  secondary: "border border-[#70452e] text-[#70452e] hover:bg-[#f0e7df]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full font-semibold transition duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
