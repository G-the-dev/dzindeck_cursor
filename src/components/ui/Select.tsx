"use client";

import * as React from "react";

type Option = {
  label: string;
  value: string;
};

export interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select",
  disabled,
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const selected = options.find((o) => o.value === value);

  const handleSelect = (val: string) => {
    onChange?.(val);
    setOpen(false);
  };

  React.useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className={cn("relative inline-block w-full", className)}>
      <button
        ref={buttonRef}
        type="button"
        disabled={disabled}
        className={cn(
          "w-full flex items-center justify-between gap-4 px-4 py-[10px] rounded-lg",
          "bg-surface border border-border-default text-small text-primary",
          "hover:border-border-hovered",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focused focus-visible:border-border-focused",
          "disabled:bg-state-disabled disabled:border-border-disabled disabled:text-disabled disabled:cursor-not-allowed",
        )}
        onClick={() => {
          if (!disabled) setOpen((prev) => !prev);
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span
          className={cn(
            "truncate text-left",
            !selected && "text-muted",
          )}
        >
          {selected ? selected.label : placeholder}
        </span>
        {/* Chevron icon (can be swapped with provided SVG) */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={cn(
            "shrink-0 text-primary transition-transform",
            open && "rotate-180",
          )}
          aria-hidden="true"
        >
          <path d="M5 7.5l5 5 5-5H5z" />
        </svg>
      </button>

      {open && !disabled && (
        <div className="absolute left-0 right-0 mt-2 rounded-lg bg-elevated border border-border-default shadow-primary-btn z-50 max-h-64 overflow-auto">
          <ul role="listbox" className="py-1">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    "px-4 py-2 text-small cursor-pointer",
                    "text-primary hover:bg-state-hovered",
                    isSelected && "bg-state-active",
                  )}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

