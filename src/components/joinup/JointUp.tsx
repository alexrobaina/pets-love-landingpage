import React from 'react'
import { useTranslations } from 'next-intl'

const JointUp = () => {
  const t = useTranslations('joinUp')
  return (
    <section className='' id='donate'>
      <article className=' w-full flex flex-col text-primary-950 justify-center '>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {t('joinUpTitle')}
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            {t('joinUpDescription1')}
          </p>
        </div>
      </article>
    </section>
  )
}

export default JointUp
