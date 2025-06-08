import { Icon } from "@/components/ui/icon";

export function CopyableText({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-black w-fit py-1.5 px-2 rounded-md cursor-pointer text-muted-foreground font-mono">
      <span className="text-sm">{text}</span>
      <Icon name="copy" size={12} />
    </div>
  );
}
