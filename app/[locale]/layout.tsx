import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Context from "./(context)/globalcontext";

export const metadata = {
  title: "• PAWsitive Touch •",
  description: "ClickerGame APP",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Context>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Context>
      </body>
    </html>
  );
}
