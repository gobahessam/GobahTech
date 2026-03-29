import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Cairo } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    metadataBase: new URL("https://gobah-tech.ru"),
    icons: {
      icon: "/me.jpg",
      apple: "/me.jpg",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en-US": "/en",
        "ar-SA": "/ar",
        "ru-RU": "/ru",
      },
    },
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      siteName: "GobahTech",
      type: "website",
      url: `https://gobah-tech.ru/${locale}`,
      images: [
        {
          url: "https://gobah-tech.ru/me.jpg",
          width: 800,
          height: 800,
          alt: "GobahTech - Essam Gobah",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: ["https://gobah-tech.ru/me.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="scroll-smooth overflow-x-hidden" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${cairo.variable} ${
          locale === "ar" ? "font-cairo" : "font-inter"
        } antialiased`}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <CursorGlow />
            <div className="flex min-h-screen flex-col overflow-x-hidden">
              <Navbar />
              <main className="flex-1 overflow-x-hidden">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
