import { CopyIcon, Info, Pencil, Shield, type LucideIcon } from "lucide-react";

export const PERMITTED_ICONS = {
  copy: CopyIcon,
  pencil: Pencil,
  info: Info,
  shield: Shield,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof PERMITTED_ICONS;
