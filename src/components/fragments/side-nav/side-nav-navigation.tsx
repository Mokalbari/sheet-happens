import { Icon } from "@/components/ui/icon";
import { List, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { IconName } from "@/types";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Link from "next/link";

type ListItem = {
  key: string;
  href: string;
  icon: IconName;
};

const NAV_ITEMS: ListItem[] = [
  { key: "main-sheet", href: "/", icon: "notebookPen" },
  { key: "combat", href: "/combat", icon: "sword" },
  { key: "inventory", href: "/inventory", icon: "fileUser" },
  { key: "notes", href: "/notes", icon: "folderPen" },
] as const;

export async function SideNavNavigation() {
  const t = await getTranslations("SideNav");
  const pathname = (await headers()).get("x-invoke-path") ?? "/";

  return (
    <nav className="flex flex-col gap-2">
      <Text variant="small" className="px-2 text-neutral-400">
        {t("your-spaces")}
      </Text>
      <List variant="none" as="menu" className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ key, href, icon }) => {
          const isCurrent = pathname === href;

          return (
            <li key={key} aria-current={isCurrent ? "page" : undefined}>
              <Link
                href={href}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white",
                  isCurrent && "bg-neutral-700 font-semibold text-white"
                )}
              >
                <Icon name={icon} className="h-5 w-5" />
                <span className="text-sm">{t(key)}</span>
              </Link>
            </li>
          );
        })}
      </List>
    </nav>
  );
}
