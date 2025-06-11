import {
  CopyIcon,
  FileUser,
  FolderPen,
  Info,
  NotebookPen,
  Pencil,
  Shield,
  Sword,
  type LucideIcon,
} from "lucide-react";

export const PERMITTED_ICONS = {
  copy: CopyIcon,
  pencil: Pencil,
  info: Info,
  shield: Shield,
  notebookPen: NotebookPen,
  sword: Sword,
  fileUser: FileUser,
  folderPen: FolderPen,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof PERMITTED_ICONS;
