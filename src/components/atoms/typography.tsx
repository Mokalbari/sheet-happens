import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

// ------------------------------------------------------------
// Heading
// -------------------------------------------------------------

const headingVariants = cva("scroll-m-20 font-bold", {
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
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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

const textVariants = cva("", {
  variants: {
    variant: {
      subheading: "text-sm text-muted-foreground",
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
  as?: "p" | "div";
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
