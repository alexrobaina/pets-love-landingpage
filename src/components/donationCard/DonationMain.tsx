'use client'

import { Catcard1, Catcard2, CupCard, FoodCard } from '@/assets/images'
import { CheckIcon } from '@/assets/icons'
import React from 'react'
import DonationCard from './DonationCard'
import { useTranslations } from 'next-intl'

const REWARDS = [
  'Recibiras un boletín mensual exclusivo donde te mantendremos al tanto de los avances, novedades y logros de nuestra aplicación.',
]

const DonationMain = () => {
  const t = useTranslations('donationCard1')
  const t1 = useTranslations('donationCard2')
  const t2 = useTranslations('donationCard3')
  return (
    <>
      <section className="flex justify-around py-8">
        <DonationCard
          image={Catcard1}
          title={t('title')}
          description={t('description')}
          description2={t('description2')}
          reward={REWARDS}
          icon={CheckIcon}
        />
        <DonationCard
          image={Catcard2}
          title={t1('title')}
          description={t1('description')}
          description2={t1('description2')}
          reward={REWARDS}
          icon={CheckIcon}
        />
        <DonationCard
          image={CupCard}
          title={t2('title')}
          description={t2('description')}
          description2={t2('description2')}
          reward={REWARDS}
          icon={CheckIcon}
        />
      </section>
    </>
  )
}

export default DonationMain
