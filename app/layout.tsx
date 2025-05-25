import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

import localFont from 'next/font/local';

const Comic = localFont({
  src: '../public/fonts/ComicRelief-Bold.woff2',
  variable: '--font-comic',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Studio Play Stuodic',
  description: 'Your creative digital studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${Comic.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}