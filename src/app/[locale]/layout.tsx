import './globals.css'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pets love',
  description:
    'At Pets Love, we unite hearts and homes. Join our community in making a difference in the lives of pets in need. Together, we create homes full of love!️',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale()

  let messages
  try {
    messages = (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html className="bg-[#D6F1E9] px-8" lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar>{children}</Navbar>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
