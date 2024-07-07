'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const JointUp = () => {
  const t = useTranslations('joinUp')
  return (
    <section className="mt-36" id="donate">
      <article className=" w-full flex flex-col text-primary-950 justify-center ">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('joinUpTitle')}
          </h2>
        </div>
      </article>
    </section>
  )
}

export default JointUp
