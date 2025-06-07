import { cn } from "@/lib/utils";
import { Info, Shield, type LucideIcon } from "lucide-react";

const PERMITTED_ICONS = {
  info: Info,
  shield: Shield,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof PERMITTED_ICONS;

interface Props {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Icon({ name, className, size = 20, strokeWidth = 1.5 }: Props) {
  const IconComponent = PERMITTED_ICONS[name];

  return (
    <IconComponent
      className={cn("shrink-0", className)}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
