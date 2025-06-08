import { Flatten } from "@/types/constants/utils";
import toast, { Toaster as HotToaster, ToastType } from "react-hot-toast";

const TOAST_DURATION = 3000;

const TOAST_POSITION = "bottom-right";

const TOAST_STYLES = {
  background: "#323232",
  color: "white",
};

const TOAST_ICON: Record<Exclude<ToastType, "blank" | "custom">, string> = {
  success: "✅",
  error: "❌",
  loading: "🔄",
};

export const TOAST_MESSAGE_KEYS = {
  success: {
    allSet: "success.generic-all-set",
    goodToGo: "success.generic-good-to-go",
  },
  error: {
    somethingWrong: "error.generic-something-went-wrong",
    failedTo: "error.generic-oops-failed-to",
  },
} as const;

export type ToastMessageKeys = Flatten<typeof TOAST_MESSAGE_KEYS>;

export function Toaster() {
  return <HotToaster position={TOAST_POSITION} />;
}

export function notify(
  type: ToastType,
  message: ToastMessageKeys,
  t: (key: string) => string
) {
  toast(t(message), {
    duration: TOAST_DURATION,
    position: TOAST_POSITION,
    style: TOAST_STYLES,
    icon: type !== "blank" && type !== "custom" ? TOAST_ICON[type] : undefined,
  });
}
