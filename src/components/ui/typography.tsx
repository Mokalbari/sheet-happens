import { cn } from "@/lib/utils";
import type { SemanticHeading, SemanticParagraph } from "@/types";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

// ------------------------------------------------------------
// Heading
// -------------------------------------------------------------

export const headingVariants = cva("scroll-m-20 font-bold", {
  variants: {
    size: {
      default: "text-xl leading-7",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: SemanticHeading;
}

export function Heading({
  children,
  className,
  as = "h2",
  size,
  ...props
}: HeadingProps) {
  const Component = as;

  return (
    <Component className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Component>
  );
}

// ------------------------------------------------------------
// Text
// -------------------------------------------------------------

export const textVariants = cva("", {
  variants: {
    variant: {
      subheading: "text-sm text-muted-foreground leading-5 font-medium",
      copyable: "text-xs text-muted-foreground font-mono",
      default: "text-base",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLDivElement>,
    VariantProps<typeof textVariants> {
  as?: SemanticParagraph;
}

export function Text({
  children,
  className,
  variant,
  as = "p",
  ...props
}: TextProps) {
  const Component = as;

  return (
    <Component className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  );
}
