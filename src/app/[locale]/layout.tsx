import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`bg-background text-foreground antialiased ${roboto.variable}`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
