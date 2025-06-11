import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { List, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { IconName } from "@/types";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "../ui/button";
import { CopyableText } from "./copyable-text";
import { SectionHeader } from "./section-header";

const fakeData = {
  name: "John Doe",
  id: "1234567890",
  level: 1,
  class: "Fighter",
  subClass: "Battlemaster",
  specie: "Human",
  background: "Criminal",
  characterAlignment: "Lawful good",
  slug: "sheet-happens/john-doe",
  playerName: "Dim",
};

export async function SideNav() {
  const t = await getTranslations("SideNav");
  const {
    name,
    class: characterClass,
    subClass,
    slug,
    level,
    specie,
    background,
    playerName,
    characterAlignment: alignment,
  } = fakeData;

  return (
    <aside className="max-w-80 bg-zinc-800 px-4 py-6 rounded-sm">
      <div className="flex flex-col gap-2 items-center">
        <SectionHeader
          title={name}
          subheading={[characterClass, subClass].filter(Boolean).join(", ")}
          subheadingAs="div"
          className="text-center"
        />

        <div className="self-stretch">
          <Text variant="small">
            {t.rich("character-info-1", {
              alignment,
              specie,
              background,
              level,
              strong: (chunks) => (
                <span className="text-white/80">{chunks}</span>
              ),
            })}
          </Text>
          <Text variant="small">
            {t.rich("character-info-2", {
              playerName,
              strong: (chunks) => (
                <span className="text-white/80">{chunks}</span>
              ),
            })}
          </Text>

          <Button variant="outline" className="mt-4 w-full">
            <Icon name="pencil" />
            {t("edit-infos")}
          </Button>
        </div>

        <Separator className="mt-4 border-neutral-700 border-[0.5px] border-solid" />

        <div className="self-stretch mt-4">
          <Text variant="small" className="text-white/80">
            {t("your-spaces")}
          </Text>

          <ListItems className="mt-2" />
        </div>

        <CopyableText text={slug} className="mt-4" />
        <Text variant="extraSmall" className="mt-1">
          {t("copy-link")}
        </Text>
      </div>
    </aside>
  );
}

async function ListItems({ className }: { className?: string }) {
  const t = await getTranslations("SideNav");

  const pathname = (await headers()).get("x-invoke-path") ?? "/";

  type ListItem = {
    key: string;
    href: string;
    icon: IconName;
  };

  const listItems: ListItem[] = [
    { key: "main-sheet", href: "/", icon: "notebookPen" },
    { key: "combat", href: "/combat", icon: "sword" },
    { key: "inventory", href: "/inventory", icon: "fileUser" },
    { key: "notes", href: "/notes", icon: "folderPen" },
  ];

  return (
    <List
      variant="none"
      spacing="compact"
      as="menu"
      className={cn("flex flex-col gap-2 text-white/80", className)}
    >
      {listItems.map(({ key, href, icon }) => {
        const isCurrent = href === pathname;

        return (
          <li
            key={key}
            aria-current={isCurrent ? "page" : undefined}
            className={cn(
              "flex items-center gap-2 hover:text-white",
              isCurrent && "font-bold text-white bg-neutral-700 p-2 rounded-sm"
            )}
          >
            <Link href={href} className="flex items-center gap-2 w-full">
              <Icon name={icon} />
              {t(key)}
            </Link>
          </li>
        );
      })}
    </List>
  );
}
