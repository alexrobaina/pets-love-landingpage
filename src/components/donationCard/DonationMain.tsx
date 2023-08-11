'use client'

import { Catcard1 } from '@/assets/images'
import { CheckIcon } from '@/assets/icons'
import React from 'react'
import DonationCard from './DonationCard'
import { useTranslations } from 'next-intl'

const DonationMain = () => {
  const t = useTranslations('donationCard')
  const REWARD_THANKS = [t('donationCard1.reward1'), t('donationCard1.reward2')]

  return (
    <>
      <section className='flex justify-around py-8'>
        <DonationCard
          image={Catcard1}
          title={t('donationCard1.title')}
          description={t('donationCard1.description1')}
          description2={t('description2')}
          reward={REWARD_THANKS}
          icon={CheckIcon}
        />
        {/* <DonationCard
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
        /> */}
      </section>
    </>
  )
}

export default DonationMain
