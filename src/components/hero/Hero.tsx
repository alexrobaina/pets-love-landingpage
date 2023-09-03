'use client'
import React from 'react'
import Image from 'next/image'
import { Home } from '@/assets/illustrations'
import { useTranslations } from 'next-intl'
import Button from '../button/Button'

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
    <section className='mt-20' id='hero'>
      <div className='lg:grid py-8 mx-auto lg:max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='place-self-center mr-auto pb-10 lg:col-span-7 sm:col-span-3 '>
          <h1 className='mb-4 lg:max-w-2xl text-4xl font-semibold md:text-4xl xl:text-5xl text-primary-950 sm:max-w-screen-sm'>
            {t('heroTitle')}
          </h1>
          <p className='mb-6 lg:max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl text-primary-950 sm: text-sm sm:max-w-sm'>
            {t('heroDescription')}
          </p>
          <p className='mb-6 text-primary-900 lg:max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl sm: text-sm sm:max-w-sm'>
            {t('heroSlogan')}
          </p>
          <div className='pb-5'>
            <Button
              type='primary'
              text={t('heroButtonName')}
              onClick={e => scrollToSection(e, '#donate')}
            />
          </div>
        </div>
        <div className='lg:mt-0 lg:col-span-5 lg:flex sm:col-span-1'>
          <Image src={Home} alt='mockup' />
        </div>
      </div>
    </section>
  )
}

export default Hero
