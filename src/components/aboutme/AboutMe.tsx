import React from 'react'
import Image from 'next/image'
import { Avatar } from '@/assets/illustrations'
import { useTranslations } from 'next-intl'

const AboutMe = () => {
  const t = useTranslations('aboutme')

  return (
    <article className="bg-indigo-950">
      <div className="grid py-8 content-center items-center 4 mx-auto grid-flow-row-dense max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="col-start-2 col-end-5">
          <Image src={Avatar} alt="mockup" />
        </div>
        <div className="place-self-center items-center mr-auto lg: col-start-6 col-end-12">
          <h1 className="mb-20 max-w-2xl text-3xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
            {t('title')}
          </h1>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {t('text1')}
            <br></br>
            <br></br>
            {t('text2')}
            <br></br>
            <br></br>
            {t('text3')}
            <br></br>
          </p>
          <br></br>
        </div>
      </div>
    </article>
  )
}

export default AboutMe
