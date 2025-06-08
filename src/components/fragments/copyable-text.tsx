"use client";

import { Icon } from "@/components/ui/icon";
import { notify } from "@/components/ui/toaster";
import { Text } from "@/components/ui/typography";
import { tryCatch } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

interface Props {
  text: string;
  className?: string;
}

export function CopyableText({ text, className }: Props) {
  const t = useTranslations("Toaster");

  const onClick = async () => {
    const { error } = await tryCatch(navigator.clipboard.writeText(text));

    error
      ? notify("error", "error.generic-oops-failed-to", t)
      : notify("success", "success.generic-good-to-go", t);
  };

  return (
    <Button onClick={onClick} variant="copyable" className={className}>
      <Text as="span" variant="copyable">
        {text}
      </Text>
      <Icon name="copy" />
    </Button>
  );
}
