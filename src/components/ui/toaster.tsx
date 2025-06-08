import { Flatten } from "@/types/constants/utils";
import toast, { Toaster as HotToaster, ToastType } from "react-hot-toast";

const TOAST_DURATION = 3000;

const TOAST_POSITION = "bottom-right";

const TOAST_ICON: Record<Exclude<ToastType, "blank" | "custom">, string> = {
  success: "✅",
  error: "❌",
  loading: "🔄",
};

export const TOAST_MESSAGE_KEYS = {
  success: {
    allSet: "toaster.success.generic-all-set",
    goodToGo: "toaster.success.generic-good-to-go",
  },
  error: {
    somethingWrong: "toaster.error.generic-something-went-wrong",
    failedTo: "toaster.error.generic-oops-failed-to",
  },
} as const;

export type ToastMessageKeys = Flatten<typeof TOAST_MESSAGE_KEYS>;

export function Toaster() {
  return <HotToaster position={TOAST_POSITION} />;
}

export function notify(type: ToastType, message: ToastMessageKeys) {
  toast(message, {
    duration: TOAST_DURATION,
    position: TOAST_POSITION,
    icon: TOAST_ICON[type as Exclude<ToastType, "blank" | "custom">],
  });
}
