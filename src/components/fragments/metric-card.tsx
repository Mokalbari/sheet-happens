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
import {
  COLOR_CLASSES,
  GLOW_COLOR_MAP,
  type Color,
  type DD5ECommonMetrics,
  type GlowRule,
} from "@/types";
import { getTranslations } from "next-intl/server";
import type React from "react";
import { ReactNode } from "react";

interface BaseProps {
  title: DD5ECommonMetrics;
  children: ReactNode;
  showFooter?: boolean;
}

type BasePropsWithIcon = BaseProps & {
  showIcon: true;
  iconName: IconName;
};

type BasePropsWithoutIcon = BaseProps & {
  showIcon?: false;
  iconName?: never;
};

type Props = BasePropsWithIcon | BasePropsWithoutIcon;

// --- METRIC CARD ---
export async function MetricCard({
  title,
  children,
  showFooter,
  showIcon,
  iconName,
}: Props) {
  const t = await getTranslations("Atoms");

  const isShield = showIcon && iconName === "shield";
  const isDead = title === "Hit points" && Number(children) === 0;

  const glowRules: GlowRule[] = [
    {
      condition: isShield,
      color: GLOW_COLOR_MAP.CA,
    },
    { condition: isDead, color: GLOW_COLOR_MAP["Hit points"] },
  ];

  const glowColor = glowRules.find((rule) => rule.condition)?.color;

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

      <CardContent className="text-5xl font-bold mt-6"></CardContent>

      {showFooter ? (
        <CardFooter className="mt-4">
          <CardAction>
            <div className="flex items-center gap-2">
              <span className="text-sm">{t("shield")}</span>
              <Switch color={glowColor} />
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
function MetricWithCustomBorder({
  children,
  color,
}: {
  children: React.ReactNode;
  color: Color;
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
