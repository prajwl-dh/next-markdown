import { ThemeProvider } from '@/components/next-theme/theme-provider';
import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';

const onestSans = Onest({
  variable: '--onestSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexteditor.netlify.app'),
  title: 'Next Editor',
  description:
    'An open-source, lightweight editor for writing and previewing blogs or content in rich text or markdown, with easy export options for seamless integration with web applications.',
  openGraph: {
    url: 'https://nexteditor.netlify.app',
    type: 'website',
    title: 'Next Editor',
    description:
      'An open-source, lightweight editor for writing and previewing blogs or content in rich text or markdown, with easy export options for seamless integration with web applications.',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://nexteditor.netlify.app',
    title: 'Next Editor',
    description:
      'An open-source, lightweight editor for writing and previewing blogs or content in rich text or markdown, with easy export options for seamless integration with web applications.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={onestSans.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
