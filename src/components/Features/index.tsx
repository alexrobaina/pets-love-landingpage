'use client'
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
import View from '@/hook/useView'

export const Features = () => {
  const t = useTranslations('features')

  return (
    <section>
      <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
        <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight text-center lg:mb-16 text-primary-950 md:text-4xl">
          {t('featuresMainTitle')}
        </h2>
        <View>
          <article className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-primary-950">
            <div>
              <View>
                <Image className="mb-8" src={IconCodeBranch} alt="IconCodeBranch" />
              </View>
              <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle1')}</h3>
              <p>{t('featuresDescription1')}</p>
            </div>

            <div>
              <View>
                <Image className="mb-8" src={IconQrScan} alt="IconQrScan" />
              </View>
              <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle2')}</h3>
              <p>{t('featuresDescription2')}</p>
            </div>

            <div>
              <View>
                <Image className="mb-8" src={IconPetBox} alt="IconPetBox" />
              </View>
              <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle3')}</h3>
              <p>{t('featuresDescription3')}</p>
            </div>
            <div>
              <View>
                <Image className="mb-8" src={IconPetChecklist} alt="IconPetChecklist" />
              </View>
              <h3 className="mb-2 text-xl font-bold"> {t('featuresTitle4')}</h3>
              <p>{t('featuresDescription4')}</p>
            </div>
            {/* <div>
              <View>
                <Image className="mb-8" src={IconPeople} alt="IconPeople" />
              </View>
              <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle5')}</h3>
              <p>{t('featuresDescription5')}</p>
            </div> */}
            <div>
              <View>
                <Image className="mb-1" src={IconFood} alt="IconFood" />
              </View>
              <h3 className="mb-2 text-xl font-bold "> {t('featuresTitle6')}</h3>
              <p>{t('featuresDescription6')}</p>
            </div>
          </article>
        </View>
      </div>
    </section>
  )
}
