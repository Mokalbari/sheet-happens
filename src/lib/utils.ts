import { Color, COLOR_CLASSES } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getColorClass = (
  color: Color | null | undefined
): string | null => {
  if (!color) {
    return null;
  }

  return COLOR_CLASSES[color].tailwindClass;
};
