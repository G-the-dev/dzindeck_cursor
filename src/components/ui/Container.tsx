import * as React from "react";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-phone md:max-w-tablet lg:max-w-macbook xl:max-w-desktop mx-auto",
        "px-[16px] md:px-[32px] lg:px-[64px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

