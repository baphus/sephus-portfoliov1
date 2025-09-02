import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/cursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Kim's Portfolio",
  description: 'Dynamic and versatile digital professional with expertise spanning video editing, social media management, web development, and data analytics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <Providers attribute="class" defaultTheme="light" enableSystem>
          <CustomCursor />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
