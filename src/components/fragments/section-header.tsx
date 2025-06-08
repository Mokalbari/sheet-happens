import { cn } from "@/lib/utils";
import { SemanticHeading, SemanticParagraph } from "@/types";
import { VariantProps } from "class-variance-authority";
import { Heading, headingVariants, Text } from "../ui/typography";

interface BaseProps {
  title: string;
  className?: string;
  sectionHeaderAs?: "header" | "div";
  titleAs?: SemanticHeading;
  titleSize?: VariantProps<typeof headingVariants>["size"];
}

type WithSubheading = BaseProps & {
  subheading: string;
  subheadingAs: SemanticParagraph;
};

type WithoutSubheading = BaseProps & {
  subheading?: never;
  subheadingAs?: never;
};

type Props = WithSubheading | WithoutSubheading;

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
