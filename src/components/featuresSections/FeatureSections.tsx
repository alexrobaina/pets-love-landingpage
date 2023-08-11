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
    <section id='features'>
      <FeatureComponent
        content={
          <div>
            <div>{t('shelterTitle')}</div>
            <div>{t('shelterSubtitle1')}</div>
          </div>
        }
        // title={t('shelterTitle')}
        // subtitle1={t('shelterSubtitle1')}
        // description1={t('shelterDescription1')}
        // subtitle2={t('shelterSubtitle2')}
        // description2={t('shelterDescription2')}
        img={Refugios}
        order={false}
      />

      {/* <FeatureComponent
        title={t1('adoptTitle')}
        description1={t1('adoptDescription1')}
        subtitle2={t1('adoptSubtitle2')}
        description2={t1('adoptDescription2')}
        subtitle3={t1('adoptSubtitle3')}
        description3={t1('adoptDescription3')}
        img={Adopcion}
        order={true}
      />

      <FeatureComponent
        title={t2('veterinaryTitle')}
        subtitle1={t2('veterinarySubtitle1')}
        description1={t2('veterinaryDescription1')}
        subtitle2={t2('veterinarySubtitle2')}
        description2={t2('veterinaryDescription2')}
        subtitle3={t2('veterinarySubtitle3')}
        description3={t2('veterinaryDescription3')}
        img={Veterinarios}
        order={false}
      />
      <FeatureComponent
        title={t3('voluntariesTitle')}
        subtitle1={t3('voluntariesSubtitle1')}
        description1={t3('voluntariesDescription1')}
        subtitle2={t3('voluntariesSubtitle2')}
        description2={t3('voluntariesDescription2')}
        img={Voluntarios}
        order={true}
      /> */}
    </section>
  )
}
