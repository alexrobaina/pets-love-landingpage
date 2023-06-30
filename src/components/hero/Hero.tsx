import React from 'react'
import Image from 'next/image'
import { AstronautCatSitting } from '@/assets/illustrations'
import { TelegramIcon, WhatsappIcon } from '@/assets/illustrations'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('hero')

  return (
    <section className="bg-indigo-950">
      <div className="grid py-8 4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
            {t('title')}
          </h1>
          <p className="mb-6 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {t('text')}
          </p>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-300 focus:ring-4 0 text-white hover:bg-gray-700 focus:ring-indigo-950"
          >
            {t('buttonName')}
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={AstronautCatSitting} alt="mockup" />
        </div>
      </div>
      <div className=" flex flex-col gap-8 px-5  absolute bottom-0  right-10 ">
        <a className="cursor-pointer">
          <Image src={TelegramIcon} alt="mockup" />
        </a>
        <a className="cursor-pointer">
          <Image src={WhatsappIcon} alt="mockup" />
        </a>
      </div>
    </section>
  )
}

export default Hero
