import React from 'react'
import { useTranslations } from 'next-intl'

const JointUp = () => {
  const t = useTranslations('joinUp')
  return (
    <section>
      <article className="flex flex-col text-primary-950 justify-center items-center item-center">
        <h1 className="mb-10 lg:mb-10 lg:max-w-full max-w-2xl text-md font-bold leading-none md:text-md xl:text-2xl">
          {t('title1')}
        </h1>
        <p className="mb-4  font-light lg:mb-8 md:text-lg lg:text-xl lg:w-11/12">
          {t('text1')}
        </p>
        <ul className="mb-4 max-w-full font-light lg:mb-8 md:text-lg lg:text-xl lg:w-11/12">
          <li className="">{t('text2')}</li>
          <li>{t('text3')}</li>
        </ul>
      </article>
    </section>
  )
}

export default JointUp
