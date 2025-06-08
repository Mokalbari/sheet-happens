import { cn } from "@/lib/utils";
import { IconName, PERMITTED_ICONS } from "@/types";

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
