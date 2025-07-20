import { routing } from "@/i18n/routing";
import { roboto, robotoMono } from "@/styles/fonts";
import "@/styles/globals.css";

import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

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

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`bg-background text-foreground antialiased ${roboto.variable} ${robotoMono.variable}`}
      >
        <div className="font-sans">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
