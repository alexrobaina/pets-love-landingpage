'use client'

import Button from '@/components/Button'
import FadeIn from '@/components/FadeIn'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

const PayFailed = () => {
  const t = useTranslations('errorDonation')
  const router = useRouter()

  const backToHome = () => {
    router.push('/')
  }

  return (
    <FadeIn>
      <main className="relative isolate px-6 pt-14 lg:px-8">
        <section className="mx-auto max-w-2xl py-22 sm:py-32 lg:py-44">
          <article className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{t('description')}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button onClick={backToHome} type="primary" text={t('backToHome')} />
            </div>
          </article>
        </section>
      </main>
    </FadeIn>
  )
}

export default PayFailed
