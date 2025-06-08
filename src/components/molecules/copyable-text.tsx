"use client";

import { Icon } from "@/components/ui/icon";
import { notify, Toaster } from "@/components/ui/toaster";
import { Text } from "@/components/ui/typography";
import { Button } from "../ui/button";

export function CopyableText({ text }: { text: string }) {
  const onClick = () => {
    navigator.clipboard.writeText(text);
    notify("success", "toaster.success.generic-all-set");
  };

  return (
    <>
      <Button onClick={onClick} variant="copyable">
        <Text as="span" variant="copyable">
          {text}
        </Text>
        <Icon name="copy" size={12} />
      </Button>
      <Toaster />
    </>
  );
}
