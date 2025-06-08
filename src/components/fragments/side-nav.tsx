import { Text } from "@/components/ui/typography";
import { Separator } from "@radix-ui/react-separator";
import { getTranslations } from "next-intl/server";
import { CopyableText } from "./copyable-text";
import { SectionHeader } from "./section-header";

const fakeData = {
  name: "John Doe",
  id: "1234567890",
  level: 1,
  class: "Fighter",
  subClass: "Battlemaster",
  race: "Human",
  background: "Bard",
  characterAlignment: "Lawful Good",
  slug: "sheet-happens/john-doe",
};

export async function SideNav() {
  const t = await getTranslations("SideNav");
  const { name, class: characterClass, subClass, slug } = fakeData;

  return (
    <aside className="max-w-80 bg-zinc-800 px-4 py-6 rounded-sm">
      <div className="place-items-center">
        <SectionHeader
          title={name}
          subheading={[characterClass, subClass].filter(Boolean).join(", ")}
          subheadingAs="div"
          className="text-center"
        />
        <CopyableText text={slug} className="mt-2" />
        <Text variant="extraSmall" className="mt-4">
          {t("copy-link")}
        </Text>
      </div>
      <Separator className="mt-4" />
    </aside>
  );
}
