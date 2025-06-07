import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon, type IconName } from "../ui/icon";

interface BaseProps {
  title: string;
  value: string;
  subValue?: string;
}

type CardWithIconProps = BaseProps & { showIcon: true; iconName: IconName };
type CardWithoutIconProps = BaseProps & { showIcon?: false; iconName?: never };

type Props = CardWithIconProps | CardWithoutIconProps;

export function MetricCard({
  title,
  value,
  subValue,
  showIcon,
  iconName,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}

          {showIcon ? (
            <span className="text-foreground/75">
              <Icon name={iconName} size={12} strokeWidth={2} />
            </span>
          ) : null}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-5xl font-bold mt-6">
        {value}
        {subValue ? (
          <span className="font-normal text-4xl ml-2">/{subValue}</span>
        ) : null}
      </CardContent>
    </Card>
  );
}
