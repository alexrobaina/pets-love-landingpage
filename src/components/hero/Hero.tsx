import React from 'react'
import Image from 'next/image'
import { Home } from '@/assets/illustrations'
import { TelegramIcon, WhatsappIcon } from '@/assets/illustrations'
import { useTranslations } from 'next-intl'
import Button from '../button/Button'

const Hero = () => {
  const t = useTranslations('hero')

  return (
    <section className="mt-20" id="hero">
      <div className="lg: grid py-8  mx-auto lg:max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto pb-10 lg:col-span-7 sm:col-span-3 ">
          <h1 className="mb-4 lg:max-w-2xl text-4xl font-semibold md:text-5xl xl:text-6xl text-primary-950 sm:max-w-screen-sm sm:text-sm">
            {t('heroTitle')}
          </h1>
          <p className="mb-6 lg:max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl text-primary-950 sm: text-sm sm:max-w-sm">
            {t('heroDescription')}
          </p>
          <p className="mb-6 lg:max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl sm: text-sm sm:max-w-sm">
            {t('heroSlogan')}
          </p>
          <div className="pb-5">
            <Button ButtonName={t('heroButtonName')} />
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex sm:col-span-1">
          <Image src={Home} alt="mockup" />
        </div>
      </div>
    </section>
  )
}

export default Hero

{
  /* <div className="absolute lg:right-20 lg:top-60 lg:mr-0">
            <div className="flex lg:flex-col gap-8">
              <a className="cursor-pointer lg:w-full sm:w-20">
                <Image className="invisible lg:visible" src={TelegramIcon} alt="mockup" />
              </a>
              <a className="cursor-pointer lg:w-full sm:w-20">
                <Image className="invisible lg:visible" src={WhatsappIcon} alt="mockup" />
              </a>
            </div>
          </div> */
}

{
  /* absolute lg:right-20 lg:top-60 visible sm:invisible */
}
