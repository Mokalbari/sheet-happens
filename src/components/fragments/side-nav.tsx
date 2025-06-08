import { Icon } from "@/components/ui/icon";
import { List, Text } from "@/components/ui/typography";
import { Separator } from "@radix-ui/react-separator";
import { Link } from "lucide-react";
import { getTranslations } from "next-intl/server";
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

        <Separator className="mt-4 border-zinc-700 border-[0.5px]" decorative />

        <div>
          <Text variant="small" className="text-white/80">
            {t("your-spaces")}
          </Text>

          <List>
            <li>
              <Link href="/spaces/1">Space 1</Link>
            </li>
            <li>
              <Link href="/spaces/2">Space 2</Link>
            </li>
          </List>
        </div>

        <CopyableText text={slug} className="mt-1" />
        <Text variant="extraSmall" className="mt-2">
          {t("copy-link")}
        </Text>
      </div>

      <Separator className="mt-4 border-zinc-700 border-[0.5px]" decorative />
    </aside>
  );
}
