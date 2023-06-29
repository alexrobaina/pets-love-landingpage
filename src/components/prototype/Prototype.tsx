import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { PrototypeImg } from '@/assets/illustrations'

const Prototype = () => {
  const t = useTranslations('prototype')

  return (
    <section className="bg-indigo-950">
      <div className="gap-20  center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light  sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl font-extrabold text-white ">{t('title')}</h2>
          <p className="mb-4 ">{t('text')}</p>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base  font-medium text-center rounded-lg border border-gray-300 focus:ring-4 0  text-white hover:bg-gray-700 focus:ring-indigo-950"
          >
            {t('buttonName')}
          </a>
        </div>
        <div className="ml-12 inline-flex justify-end">
          <Image src={PrototypeImg} alt="mockup" />
        </div>
      </div>
    </section>
  )
}

export default Prototype
