import { CopyableText } from "@/components/fragments/copyable-text";
import { Text } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";

interface SideNavShareProps {
  slug: string;
}

export async function SideNavShare({ slug }: SideNavShareProps) {
  const t = await getTranslations("SideNav");

  return (
    <div className="flex flex-col items-center">
      <CopyableText text={slug} />
      <Text variant="extraSmall" className="mt-1 text-neutral-400">
        {t("copy-link")}
      </Text>
    </div>
  );
}
