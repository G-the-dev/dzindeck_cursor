import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full bg-surface border border-border-default rounded-lg px-4 py-[10px] text-small text-primary placeholder:text-muted transition-colors",
          "hover:border-border-hovered",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focused focus-visible:border-border-focused",
          "disabled:bg-state-disabled disabled:border-border-disabled disabled:text-disabled disabled:placeholder:text-disabled disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

