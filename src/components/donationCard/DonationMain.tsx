'use client'

import { Catcard1, Catcard2, PetFood } from '@/assets/images'
import { CheckIcon } from '@/assets/icons'
import React from 'react'
import DonationCard from './components/DonationCard'
import { useTranslations } from 'next-intl'

const DonationMain = () => {
  const t = useTranslations('donationCard')
  const REWARD_THANKS = [t('donationCard1.reward1')]
  const REWARD_AI_IMAGES = [
    t('donationCard2.reward1'),
    t('donationCard2.reward2'),
    t('donationCard2.reward3'),
  ]
  const REWARD_FOOD = [
    t('donationCard3.reward1'),
    t('donationCard3.reward2'),
    t('donationCard3.reward3'),
  ]

  return (
    <>
      <section className="flex flex-wrap gap-10 justify-around py-8">
        <DonationCard
          minValue={5}
          image={Catcard1}
          icon={CheckIcon}
          reward={REWARD_THANKS}
          title={t('donationCard1.title')}
          description2={t('donationCard1.description2')}
          description={t('donationCard1.description1')}
        />
        <DonationCard
          minValue={15}
          image={Catcard2}
          icon={CheckIcon}
          reward={REWARD_AI_IMAGES}
          title={t('donationCard2.title')}
          description={t('donationCard2.description1')}
          description2={t('donationCard2.description2')}
        />
        <DonationCard
          minValue={30}
          image={PetFood}
          icon={CheckIcon}
          reward={REWARD_FOOD}
          title={t('donationCard3.title')}
          description={t('donationCard3.description1')}
          description2={t('donationCard3.description2')}
        />
      </section>
    </>
  )
}

export default DonationMain
