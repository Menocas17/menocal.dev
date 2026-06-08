import type { Metadata } from 'next';
import { Onest } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-onest',
});

export const metadata: Metadata = {
  title: 'Rodolfo Menocal - Software Developer',
  description:
    'Full-stack software developer specializing in building modern, high-performance web applications with React, Next.js, and Tailwind CSS. Explore my projects and technical expertise.',
  openGraph: {
    title: 'Rodolfo Menocal - Software Developer',
    description:
      'Full-stack software developer specializing in building modern, high-performance web applications.',
    url: 'https://menocal.dev/',
    siteName: 'Rodolfo Menocal Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodolfo Menocal - Software Developer',
    description:
      'Full-stack software developer specializing in building modern web applications.',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body
        className={`${onest.variable} font-sans antialiased overflow-x-hidden bg-gray-50 text-gray-900       
          dark:bg-gray-950 dark:text-gray-50`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
        >
          <div className='fixed inset-0 z-[-2] h-full w-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(90,131,99,0.3),rgba(255,255,255,0))]' />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
