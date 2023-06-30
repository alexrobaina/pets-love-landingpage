import React from 'react'
import {
  AstronautCatShelter,
  AstronautCatAdopt,
  AstronautCatVeterinary,
} from '@/assets/illustrations'
import FeatureComponent from '../featuresSections/FeatureComponent'
import { useTranslations } from 'next-intl'

export const FeatureSections = () => {
  const t = useTranslations('shelter')
  const t1 = useTranslations('adopt')
  const t2 = useTranslations('veterinary')
  return (
    <section className="bg-indigo-950">
      <FeatureComponent
        title={t('title')}
        text1={t('text1')}
        text2={t('text2')}
        text3={t('text3')}
        img={AstronautCatShelter}
        order={false}
      />

      <FeatureComponent
        title={t1('title')}
        text1={t1('text1')}
        text2={t1('text2')}
        img={AstronautCatAdopt}
        order={true}
      />

      <FeatureComponent
        title={t2('title')}
        text1={t2('text1')}
        text2={t2('text2')}
        img={AstronautCatVeterinary}
        order={false}
      />
    </section>
  )
}
