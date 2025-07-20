import { cn } from "@/lib/utils";
import type { SemanticHeading, SemanticList, SemanticParagraph } from "@/types";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

// ------------------------------------------------------------
// Heading
// -------------------------------------------------------------

export const headingVariants = cva("scroll-m-20 font-bold text-balance", {
  variants: {
    size: {
      large: "text-3xl leading-8 underline underline-offset-[16px]",
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

export const textVariants = cva("text-pretty", {
  variants: {
    variant: {
      subheading: "text-sm text-muted-foreground leading-5 font-medium",
      copyable: "text-xs text-muted-foreground font-mono",
      extraSmall: "text-xs text-muted-foreground",
      small: "text-sm text-muted-foreground",
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

// ------------------------------------------------------------
// List
// -------------------------------------------------------------

export const listVariants = cva("list-inside", {
  variants: {
    variant: {
      unordered: "list-disc",
      ordered: "list-decimal",
      none: "list-none",
    },
    spacing: {
      default: "space-y-1",
      compact: "space-y-0.5",
      loose: "space-y-2",
    },
  },
  defaultVariants: {
    variant: "unordered",
    spacing: "default",
  },
});

interface ListProps
  extends HTMLAttributes<HTMLUListElement | HTMLOListElement | HTMLMenuElement>,
    VariantProps<typeof listVariants> {
  as?: SemanticList;
}

export function List({
  children,
  className,
  variant,
  spacing,
  as = "ul",
  ...props
}: ListProps) {
  const Component = as;

  return (
    <Component
      className={cn(listVariants({ variant, spacing }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
