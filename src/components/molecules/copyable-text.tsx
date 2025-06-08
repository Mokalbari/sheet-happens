"use client";

import { Icon } from "@/components/ui/icon";
import { notify } from "@/components/ui/toaster";
import { Text } from "@/components/ui/typography";
import { tryCatch } from "@/lib/utils";
import { Button } from "../ui/button";

export function CopyableText({ text }: { text: string }) {
  const onClick = async () => {
    const { error } = await tryCatch(navigator.clipboard.writeText(text));

    error
      ? notify("error", "toaster.error.generic-something-went-wrong")
      : notify("success", "toaster.success.generic-all-set");
  };

  return (
    <Button onClick={onClick} variant="copyable">
      <Text as="span" variant="copyable">
        {text}
      </Text>
      <Icon name="copy" size={12} />
    </Button>
  );
}
