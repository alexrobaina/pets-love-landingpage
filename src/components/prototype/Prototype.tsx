import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { PrototypeDemo } from '@/assets/images'
import Button from '../button/Button'

const Prototype = () => {
  const t = useTranslations('prototype')

  return (
    <section id="prototype">
      <div className="gap-20 grid-cols-1 center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6  sm:grid-cols-1">
        <div className="font-light  sm:text-lg text-primary-950">
          <h2 className="mb-4 text-4xl font-extrabold ">{t('prototypeTitle')}</h2>
          <p className="mb-4 ">{t('prototypeDescription')}</p>
          <div className="mb-4 ">
            <Button ButtonName={t('prototypeButtonName')} />
          </div>
        </div>
        <div className="inline-flex lg:py-0 lg:justify-center pt-8">
          <Image src={PrototypeDemo} alt="mockup" />
        </div>
      </div>
    </section>
  )
}

export default Prototype
