\"use client\";

import * as React from \"react\";

type ButtonVariant = \"hero\" | \"primary\" | \"secondary\" | \"tertiary\";
type ButtonSize = \"sm\" | \"md\" | \"lg\";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(\" \");
}

const baseStyles =
  \"inline-flex items-center justify-center gap-2 rounded-lg font-medium text-regular transition-colors transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focused disabled:cursor-not-allowed disabled:bg-state-disabled disabled:text-disabled disabled:shadow-none\";

const sizeStyles: Record<ButtonSize, string> = {
  sm: \"px-4 py-[10px] text-small\",
  md: \"px-5 py-4 text-regular\",
  lg: \"px-6 py-[12px] text-medium\",
};

const variantStyles: Record<ButtonVariant, string> = {
  hero:
    // Figma: Hero-btn effect, bg-primary text-tertiary, subtle state tokens
    \"bg-primary text-tertiary shadow-hero-btn backdrop-blur-[4px] hover:bg-state-hovered active:bg-state-pressed aria-pressed:bg-state-active disabled:bg-state-disabled disabled:text-disabled\",
  primary:
    // Figma: Primary-btn effect
    \"bg-primary text-tertiary shadow-primary-btn hover:bg-state-hovered active:bg-state-pressed aria-pressed:bg-state-active disabled:bg-state-disabled disabled:text-disabled\",
  secondary:
    // Transparent, bordered button
    \"bg-transparent text-primary border border-border-default hover:bg-state-hovered active:bg-state-pressed aria-pressed:bg-state-active disabled:border-border-disabled\",
  tertiary:
    // Text-only action
    \"bg-transparent text-muted hover:text-primary active:text-primary aria-pressed:text-primary disabled:text-disabled\",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = \"primary\",
      size = \"md\",
      className,
      type = \"button\",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = \"Button\";

