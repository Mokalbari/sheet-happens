import { type GlowColor, type GlowRule } from "@/components/contants/colors";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icon";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import type React from "react";

type MetricType = "Level" | "Hit points" | "CA" | "Initiative";
interface Props {
  title: MetricType;
  value: string | number;
  subValue?: string;
  showFooter?: boolean;
  showIcon?: boolean;
  iconName?: IconName;
}

// --- METRIC CARD ---
export async function MetricCard({
  title,
  value,
  subValue,
  showFooter,
  showIcon,
  iconName,
}: Props) {
  const t = await getTranslations("Atoms");

  const isShield = showIcon && iconName === "shield";
  const isDead = title === "Hit points" && Number(value) === 0;

  const glowRules: GlowRule[] = [
    { condition: isShield, color: "blue" },
    { condition: isDead, color: "pink" },
  ];

  const glowColor = glowRules.find((rule) => rule.condition)?.color ?? null;

  const card = (
    <Card className={cn("bg-background", glowColor && "border-none")}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
          {showIcon && iconName ? (
            <span className="text-foreground/75">
              <Icon name={iconName} size={12} strokeWidth={2} />
            </span>
          ) : null}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-5xl font-bold mt-6">
        {value}
        {subValue ? (
          <span className="font-normal text-4xl ml-2">/{subValue}</span>
        ) : null}
      </CardContent>

      {showFooter ? (
        <CardFooter className="mt-4">
          <CardAction>
            <div className="flex items-center gap-2">
              <span className="text-sm">{t("shield")}</span>
              <Switch color={glowColor ?? undefined} />
            </div>
          </CardAction>
        </CardFooter>
      ) : null}
    </Card>
  );

  if (glowColor) {
    return (
      <MetricWithCustomBorder color={glowColor}>{card}</MetricWithCustomBorder>
    );
  }

  return card;
}

// --- CUSTOM BORDER WRAPPER & STYLES ---
const COLOR_CLASSES: Record<GlowColor, { gradient: string; glow: string }> = {
  blue: {
    gradient: "from-blue-400 via-sky-400 to-indigo-500",
    glow: "shadow-[0_0_16px_4px_rgba(56,189,248,0.6)]",
  },
  pink: {
    gradient: "from-pink-400 via-fuchsia-500 to-rose-500",
    glow: "shadow-[0_0_16px_4px_rgba(244,114,182,0.6)]",
  },
  green: {
    gradient: "from-emerald-400 via-green-400 to-lime-400",
    glow: "shadow-[0_0_16px_4px_rgba(52,211,153,0.6)]",
  },
  orange: {
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
    glow: "shadow-[0_0_16px_4px_rgba(251,146,60,0.6)]",
  },
};

function MetricWithCustomBorder({
  children,
  color,
}: {
  children: React.ReactNode;
  color: GlowColor;
}) {
  const { gradient, glow } = COLOR_CLASSES[color];

  return (
    <div
      className={cn(
        "p-[2px] rounded-xl",
        "transition-shadow duration-500 ease-in-out",
        `bg-gradient-to-r ${gradient}`,
        `hover:${glow}`
      )}
    >
      <div className="rounded-lg bg-background h-full">{children}</div>
    </div>
  );
}
