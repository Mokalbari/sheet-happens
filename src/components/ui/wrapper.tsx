import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className, ...props }: Props) {
  return (
    <main
      className={cn(
        "min-h-screen w-full max-w-4xl mx-auto px-4 relative",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
