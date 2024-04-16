import './globals.css'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { keywords } from '../../constants/keywords'
import { siteMetadata } from '@/constants/siteMetadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.openGraphImage],
    locale: 'en_US',
    type: 'website',
  },
  keywords: keywords,
  robots: 'index, follow',
  applicationName: siteMetadata.title,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.twitterImage],
  },
  verification: {
    google: 'TrP8LpnnPMQ362nwzfUf5LwuvTv6qJIJE2Bqu0U23VE',
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
