import React from 'react'
import Feature from './components/Feature'
import { useTranslations } from 'next-intl'
import View from '@/hook/useView'
import { ManAdopter, Refugy, Vet } from '@/assets/images'

export const FeaturesSections = () => {
  const t = useTranslations('shelter')
  const t1 = useTranslations('adopt')
  const t2 = useTranslations('veterinary')
  const t3 = useTranslations('voluntaries')
  return (
    <section id="features">
      {/* SHELTER */}
      <Feature
        flip
        img={Refugy}
        order={false}
        content={
          <article className="text-primary-950">
            <View>
              <h1 className="mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl ">
                {t('shelterTitle')}
              </h1>
              <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
                {t('shelterSubtitle1')}
              </h3>
            </View>
            <View>
              <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
                {t('shelterDescription1')}
              </p>
            </View>
            <View>
              <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
                {t('shelterSubtitle2')}
              </h3>
            </View>
            <View>
              <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
                {t('shelterDescription2')}
              </p>
            </View>
          </article>
        }
      />

      <Feature
        content={
          <article className="text-primary-950">
            <View direction={true}>
              <h1 className="mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl ">
                {t1('adoptTitle')}
              </h1>
            </View>
            <View direction={true}>
              <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
                {t1('adoptDescription1')}
              </p>
            </View>
            <View direction={true}>
              <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
                {t1('adoptDescription2')}
              </p>
            </View>
          </article>
        }
        img={ManAdopter}
        order={true}
      />
      {/* VETERINARIAN */}
      <Feature
        content={
          <article className="text-primary-950">
            <View>
              <h1 className="mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl ">
                {t2('veterinaryTitle')}
              </h1>
            </View>
            <View>
              <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
                {t2('veterinarySubtitle1')}
              </h3>
            </View>
            <View>
              <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
                {t2('veterinaryDescription1')}
              </p>
            </View>
            <View>
              <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
                {t2('veterinarySubtitle2')}
              </h3>
            </View>
            <View>
              <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
                {t2('veterinaryDescription2')}
              </p>
            </View>
          </article>
        }
        img={Vet}
        order={false}
      />

      {/* Volunteers are disable now */}

      {/* <Feature
        content={
          <article className="text-primary-950">
            <View direction={true}>
              <h1 className="mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl ">
                {t3('voluntariesTitle')}
              </h1>
            </View>
            <View direction={true}>
              <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
                {t3('voluntariesSubtitle1')}
              </h3>
            </View>
            <View direction={true}>
              <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
                {t3('voluntariesDescription1')}
              </p>
            </View>
            <View direction={true}>
              <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
                {t3('voluntariesSubtitle2')}
              </h3>
            </View>
            <View direction={true}>
              <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
                {t3('voluntariesDescription2')}
              </p>
            </View>
          </article>
        }
        img={Voluntarios}
        order={true}
      /> */}
    </section>
  )
}
