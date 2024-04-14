import './globals.css'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { keywords } from '../../constants/keywords'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Pets love',
    template: '%s - Pets love',
  },
  description:
    'At Pets love, we unite hearts and homes. Join our community in making a difference in the lives of pets in need. Together, we create homes full of love!️',

  keywords: keywords,
  applicationName: 'PetsloveApp',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale()

  let messages
  try {
    messages = (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    https: notFound()
  }

  return (
    <html className="bg-primary-100" lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar>{children}</Navbar>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
