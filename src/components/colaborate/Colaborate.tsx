import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Indiegogo } from '@/assets/illustrations'

const Colaborate = () => {
  const t = useTranslations('colaborate')

  return (
    <article className="bg-indigo-950">
      <div className="  w-full  py-8 4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className=" place-self-center mr-auto lg:">
          <h1 className="mb-20 marker: text-3xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
            {t('title')}
          </h1>
          <p className="mb-4 max-w-screen-lg font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {t('text1')}
            <br></br>
            <br></br>
            {t('text2')}
          </p>
          <br></br>
        </div>
        <div className=" flex  gap-8	">
          <Image src={Indiegogo} alt="Indiegogo" />
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base  font-medium text-center rounded-lg border border-gray-300 focus:ring-4 0  text-white hover:bg-gray-700 focus:ring-indigo-950"
          >
            {t('buttonName')}
          </a>
        </div>
      </div>
    </article>
  )
}

export default Colaborate
