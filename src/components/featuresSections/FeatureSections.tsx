import React from 'react'
import { Refugios, Veterinarios, Adopcion, Voluntarios } from '@/assets/illustrations'
import FeatureComponent from './FeatureComponent'
import { useTranslations } from 'next-intl'

export const FeatureSections = () => {
  const t = useTranslations('shelter')
  const t1 = useTranslations('adopt')
  const t2 = useTranslations('veterinary')
  const t3 = useTranslations('voluntaries')
  return (
    <section id='features'>
      <FeatureComponent
        flip
        content={
          <article className='text-primary-950'>
            <h1 className='mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl '>
              {t('shelterTitle')}
            </h1>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t('shelterSubtitle1')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t('shelterDescription1')}
            </p>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t('shelterSubtitle2')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t('shelterDescription2')}
            </p>
          </article>
        }
        img={Refugios}
        order={false}
      />

      <FeatureComponent
        content={
          <article className='text-primary-950'>
            <h1 className='mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl '>
              {t1('adoptTitle')}
            </h1>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t1('adoptDescription1')}
            </p>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t1('adoptSubtitle2')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t1('adoptDescription2')}
            </p>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t1('adoptSubtitle3')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t1('adoptDescription3')}
            </p>
          </article>
        }
        img={Adopcion}
        order={true}
      />

      <FeatureComponent
        content={
          <article className='text-primary-950'>
            <h1 className='mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl '>
              {t2('veterinaryTitle')}
            </h1>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t2('veterinarySubtitle1')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t2('veterinaryDescription1')}
            </p>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t2('veterinarySubtitle2')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t2('veterinaryDescription2')}
            </p>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t2('veterinarySubtitle3')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t2('veterinaryDescription3')}
            </p>
          </article>
        }
        img={Veterinarios}
        order={false}
      />

      <FeatureComponent
        content={
          <article className='text-primary-950'>
            <h1 className='mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl '>
              {t3('voluntariesTitle')}
            </h1>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t3('voluntariesSubtitle1')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t3('voluntariesDescription1')}
            </p>
            <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
              {t3('voluntariesSubtitle2')}
            </h3>
            <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
              {t3('voluntariesDescription2')}
            </p>
          </article>
        }
        img={Voluntarios}
        order={true}
      />
    </section>
  )
}
