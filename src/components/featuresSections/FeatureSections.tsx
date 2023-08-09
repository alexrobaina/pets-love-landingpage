import React from 'react'
import { Refugios, Veterinarios, Adopcion, Voluntarios } from '@/assets/illustrations'
import FeatureComponent from '../featuresSections/FeatureComponent'
import { useTranslations } from 'next-intl'

export const FeatureSections = () => {
  const t = useTranslations('shelter')
  const t1 = useTranslations('adopt')
  const t2 = useTranslations('veterinary')
  const t3 = useTranslations('voluntaries')
  return (
    <section id="features">
      <FeatureComponent
        title={t('title')}
        subtitle1={t('subtitle1')}
        text1={t('text1')}
        subtitle2={t('subtitle2')}
        text2={t('text2')}
        img={Refugios}
        order={false}
      />

      <FeatureComponent
        title={t1('title')}
        text1={t1('text1')}
        subtitle2={t('subtitle2')}
        text2={t1('text2')}
        subtitle3={t1('subtitle3')}
        text3={t1('text3')}
        img={Adopcion}
        order={true}
      />

      <FeatureComponent
        title={t2('title')}
        subtitle1={t2('subtitle1')}
        text1={t2('text1')}
        subtitle2={t2('subtitle2')}
        text2={t2('text2')}
        subtitle3={t2('subtitle3')}
        text3={t2('text3')}
        img={Veterinarios}
        order={false}
      />
      <FeatureComponent
        title={t3('title')}
        subtitle1={t3('subtitle1')}
        text1={t3('text1')}
        subtitle2={t3('subtitle2')}
        text2={t3('text2')}
        img={Voluntarios}
        order={true}
      />
    </section>
  )
}
