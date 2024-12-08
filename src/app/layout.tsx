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
  title: 'Next Editor',
  description:
    'A modern, lightweight rich text editor, previewer, and markdown converter',
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
