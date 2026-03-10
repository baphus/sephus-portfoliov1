import type {Metadata} from 'next';
import './globals.css';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <Providers attribute="class" defaultTheme="light" enableSystem>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Navbar />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
