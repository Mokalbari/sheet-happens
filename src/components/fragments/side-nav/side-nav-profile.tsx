import { SectionHeader } from "@/components/fragments/section-header";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";

interface BaseProfile {
  name: string;
  class: string;
  subClass?: string;
  alignment: string;
  specie: string;
  background: string;
  level: number;
  playerName: string;
}

interface Props {
  profile: BaseProfile;
}

export async function SideNavProfile({ profile }: Props) {
  const t = await getTranslations("SideNav");
  const {
    name,
    class: characterClass,
    subClass,
    level,
    specie,
    background,
    playerName,
    alignment,
  } = profile;

  const fullClass = [characterClass, subClass].filter(Boolean).join(" | ");

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <SectionHeader title={name} subheading={fullClass} subheadingAs="div" />

      <div className="text-neutral-300 text-left">
        <Text variant="small">
          {t.rich("character-info-1", {
            level,
            specie,
            alignment,
            background,
            strong: (chunks) => (
              <span className="font-medium text-white/90">{chunks}</span>
            ),
          })}
        </Text>
        <Text variant="small">
          {t.rich("character-info-2", {
            playerName,
            strong: (chunks) => (
              <span className="font-medium text-white/90">{chunks}</span>
            ),
          })}
        </Text>
      </div>

      <Button variant="outline" className="w-full">
        <Icon name="pencil" className="mr-2 h-4 w-4" />
        {t("edit-infos")}
      </Button>
    </div>
  );
}
