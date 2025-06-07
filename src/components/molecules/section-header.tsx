import type { SemanticHeading, SemanticParagraph } from "@/components/ui/types";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { Heading, headingVariants, Text } from "../ui/typography";

interface Props {
  title: string;
  sectionHeaderAs?: "header" | "div";
  titleAs?: SemanticHeading;
  titleSize?: VariantProps<typeof headingVariants>["size"];
  subheadingAs?: SemanticParagraph;
  subheading?: string;
  className?: string;
}

export function SectionHeader({
  className,
  title,
  subheading,
  sectionHeaderAs = "header",
  titleAs = "h2",
  titleSize = "default",
  subheadingAs = "p",
  ...props
}: Props) {
  const Component = sectionHeaderAs;

  return (
    <Component className={cn(className)} {...props}>
      <Heading as={titleAs} size={titleSize}>
        {title}
      </Heading>
      {subheading ? <Text variant="subheading">{subheading}</Text> : null}
    </Component>
  );
}
