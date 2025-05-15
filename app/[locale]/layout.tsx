import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/theme-provider';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Nova - Web Design & Development',
  description: 'Creating beautiful, functional websites that help businesses succeed online.',
  generator: 'v0.dev',
};

// Define the locales we support
const locales = ['en', 'es'];

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

type LocaleLayoutProps = PropsWithChildren<{
  params: { locale: string };
}>;

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Load the messages for the locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className="suppress-hydration-warning">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem 
            disableTransitionOnChange
            suppressHydrationWarning
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
