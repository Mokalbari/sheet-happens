import { CopyIcon, Info, Shield, type LucideIcon } from "lucide-react";

export const PERMITTED_ICONS = {
  info: Info,
  shield: Shield,
  copy: CopyIcon,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof PERMITTED_ICONS;
