'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Button from '../Button'
import View from '@/components/useView/useInView'
import { HeroImage } from '@/assets/images'

const Hero = () => {
  const t = useTranslations('hero')

  const scrollToSection = (e: any, sectionId: string) => {
    e.preventDefault()

    const target: any = document.querySelector(sectionId)
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="mt-20" id="hero">
      <div className="lg:grid py-8 mx-auto lg:max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto pb-10 lg:col-span-7 sm:col-span-3 ">
          <View direction={true}>
            <h1 className="mb-4 lg:max-w-2xl text-xl font-semibold md:text-4xl xl:text-5xl text-primary-950 sm:max-w-screen-sm">
              {t('title')}
            </h1>
          </View>
          <View direction={true}>
            <p className="mb-6 lg:max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl text-primary-950 sm: text-sm sm:max-w-sm">
              {t('description')}
            </p>
          </View>
          <View direction={true}>
            <div className="pb-5">
              <Button
                type="primary"
                text={t('donationButton')}
                onClick={(e) => scrollToSection(e, '#donate')}
              />
            </div>
          </View>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex sm:col-span-1">
          <View>
            <Image className="rounded-lg" src={HeroImage} alt="mockup" />
          </View>
        </div>
      </div>
    </section>
  )
}

export default Hero
