'use client'
import FadeIn from '@/components/FadeIn'
import Button from '../../../components/Button'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const PaySuccess = () => {
  const t = useTranslations('succesDonation')
  const router = useRouter()
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')
  const title = searchParams.get('title')
  const price = searchParams.get('price')
  const payType = searchParams.get('payType')
  const email = searchParams.get('email')
  const order = searchParams.get('order')

  const paymentId = searchParams.get('payment_id')

  const updateDonation = async () => {
    const data = {
      productId,
      title,
      price,
      order,
      payType,
      email,
      paymentId,
    }

    await axios.put('/api/updateDonation', data)
  }

  useEffect(() => {
    updateDonation()
  })

  const backToHome = () => {
    router.push('/')
  }

  return (
    <FadeIn>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-22 sm:py-32 lg:py-44">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{t('description')}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button onClick={backToHome} type="primary" text={t('backToHome')} />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default PaySuccess
