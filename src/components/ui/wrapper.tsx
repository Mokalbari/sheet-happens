import { cn } from "@/lib/utils";
import { SemanticWrapper } from "@/types";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "min-h-screen w-full max-w-6xl mx-auto px-4 relative",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ContentWrapper({
  as = "div",
  children,
  className,
  ...props
}: Props & {
  as?: SemanticWrapper;
}) {
  const Component = as;

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}
