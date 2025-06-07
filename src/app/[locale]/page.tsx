import { Heading, Text } from "@/components/atoms/typography";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Heading>{t("title")}</Heading>
      <Text variant="subheading">{t("description")}</Text>
    </div>
  );
}
