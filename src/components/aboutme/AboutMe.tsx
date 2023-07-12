import React from 'react'
import Image from 'next/image'
import { Avatar } from '@/assets/illustrations'
import { useTranslations } from 'next-intl'

const AboutMe = () => {
  const t = useTranslations('aboutme')

  return (
    <article id="aboutme-section">
      <div className="flex flex-col-2 flex-wrap justify-center items-center w-full mx-auto max-w-screen-xl sm: gap-15 lg:gap-20 xl:gap-20 lg:py-16">
        <div className="w-60 sm:mb-10">
          <Image src={Avatar} alt="mockup" />
        </div>
        <div className="flex flex-col justify-center justify-items-center ">
          <h1 className="lg:mb-20  py-8 marker: text-3xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
            {t('title')}
          </h1>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {t('text1')}
          </p>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {t('text2')}
          </p>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {t('text3')}
          </p>
        </div>
      </div>
    </article>
  )
}

export default AboutMe
