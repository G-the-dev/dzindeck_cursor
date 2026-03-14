import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, disabled, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    // Determine border color based on state (Figma design tokens)
    const getBorderColor = () => {
      if (error) return '#EF4444'; // Tone/Decrease
      if (disabled) return '#1B1C1F'; // Border/Disabled
      if (isFocused) return '#F1F2F4'; // Border/Focused
      if (isHovered) return '#3A3B40'; // Border/Hovered
      return '#242528'; // Border/Default
    };

    return (
      <div className="w-full">
        {label && (
          <label 
            className="block text-[16px] font-medium mb-[8px]"
            style={{ fontFamily: 'Figtree, sans-serif', color: '#F1F2F4' }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={cn(
            "w-full rounded-[16px] px-[16px] py-[12px] text-[16px] transition-all duration-200 outline-none",
            className,
          )}
          style={{
            fontFamily: 'Figtree, sans-serif',
            backgroundColor: '#141416', // Background/App
            border: `1px solid ${getBorderColor()}`,
            color: error ? '#EF4444' : disabled ? '#3A3B40' : '#C9CBD2', // Text/Secondary
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {error && (
          <div className="flex items-center gap-[6px] mt-[12px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#EF4444" strokeWidth="1.5"/>
              <path d="M8 5v3.5M8 11.5V11" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span 
              className="text-[14px]"
              style={{ fontFamily: 'Figtree, sans-serif', color: '#EF4444' }}
            >
              {error}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

