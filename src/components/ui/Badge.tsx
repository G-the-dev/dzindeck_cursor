import * as React from "react";

type BadgeVariant = "default" | "increase" | "neutral" | "decrease";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "badge",
  increase: "badge badge-increase",
  neutral: "badge badge-neutral",
  decrease: "badge badge-warning",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        variantClasses[variant],
        "tag-blur",
        className,
      )}
      {...props}
    />
  );
};

