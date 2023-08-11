import React from 'react'
import { useTranslations } from 'next-intl'
import {
  IconCodeBranch,
  IconFood,
  IconPeople,
  IconPetBox,
  IconPetChecklist,
  IconQrScan,
} from '@/assets/icons'
import Image from 'next/image'

export const Features = () => {
  const t = useTranslations('features')

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight text-center lg:mb-16 text-primary-950 md:text-4xl">
          {t('featuresMainTitle')}
        </h2>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-primary-950">
          <div>
            <Image className="mb-8" src={IconCodeBranch} alt="IconCodeBranch" />

            <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle1')}</h3>
            <p>{t('featuresDescription1')}</p>
          </div>
          <div>
            <Image className="mb-8" src={IconQrScan} alt="IconQrScan" />

            <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle2')}</h3>
            <p>{t('featuresDescription2')}</p>
          </div>
          <div>
            <Image className="mb-8" src={IconPetBox} alt="IconPetBox" />

            <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle3')}</h3>
            <p>{t('featuresDescription3')}</p>
          </div>
          <div>
            <Image className="mb-8" src={IconPetChecklist} alt="IconPetChecklist" />

            <h3 className="mb-2 text-xl font-bold"> {t('featuresTitle4')}</h3>
            <p>{t('featuresDescription4')}</p>
          </div>
          <div>
            <Image className="mb-8" src={IconPeople} alt="IconPeople" />

            <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle5')}</h3>
            <p>{t('featuresDescription5')}</p>
          </div>
          <div>
            <Image className="mb-1" src={IconFood} alt="IconFood" />

            <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle6')}</h3>
            <p>{t('featuresDescription6')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
