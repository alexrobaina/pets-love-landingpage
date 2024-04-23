import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { PrototypeDemo } from '@/assets/images'
import Button from '../Button'
import View from '@/hook/useView'

const Prototype = () => {
  const t = useTranslations('prototype')

  return (
    <View direction={true}>
      <section
        id="prototype"
        className="gap-20 grid-cols-1 center py-8 mt-24 mb-24 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16  sm:grid-cols-1"
      >
        <div className="font-light  sm:text-lg text-primary-950">
          <div className="font-light sm:text-lg text-primary-950">
            <h2 className="mb-4 text-4xl font-extrabold ">{t('title')}</h2>
            <p className="mb-4 ">{t('description')}</p>
            <div className="flex gap-3 justify-between">
              <div className="mb-4 ">
                <a target="_blank" href="https://petslove.app">
                  <Button text={t('tutorials')} type="primary" />
                </a>
              </div>
              <div className="mb-4">
                <a target="_blank" href="https://petslove.app">
                  <Button text={t('goToApp')} type="primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex lg:py-0 lg:justify-center pt-8">
          <Image src={PrototypeDemo} alt="mockup" />
        </div>
      </section>
    </View>
  )
}

export default Prototype
