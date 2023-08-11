import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { IconGithub } from '@/assets/icons'
import Button from '../button/Button'
import Countributors from '../countributors/Countributors'
import { Avatar } from '@/assets/illustrations'

const Collaborate = () => {
  const t = useTranslations('collaborate')

  return (
    <section id='collaborators'>
      <article>
        <div className='w-full py-8 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className=' place-self-center mr-auto text-primary-950'>
            <h1 className='lg:mb-20 sm: mb-10 marker: text-3xl font-extrabold leading-none md:text-5xl xl:text-6x'>
              {t('collaborateTitle')}
            </h1>
            <p className='mb-4 max-w-screen-lg font-light  lg:mb-8 md:text-lg lg:text-xl'>
              {t('collaborateDescription1')}
            </p>
            <p className='mb-4 max-w-screen-lg font-light  lg:mb-8 md:text-lg lg:text-xl'>
              {t('collaborateDescription2')}
            </p>
          </div>
          <div className='flex flex-col w-40 md:w-full lg:w-full lg:flex-row gap-12'>
            <Button text={t('collaboratebuttonName')} />
            <a>
              <Image src={IconGithub} alt='IconGithub' />
            </a>
          </div>
        </div>

        <article className=' max-w-screen-xl py-8 mx-auto'>
          <h1 className='mb-10 marker: text-3xl mx-auto font-extrabold leading-none md:text-5xl xl:text-6xl text-primary-950'>
            {t('Countributors')}
          </h1>
        </article>
        <div className='flex flex-row flex-wrap w-full gap-12 justify-center py-8 4 mx-auto '>
          <Countributors name={'Jhon White'} title={'software engineer'} img={Avatar} />
          <Countributors name={'Maria Flow'} title={'Devs Ops'} img={Avatar} />
          <Countributors
            name={'Totoro Garcia'}
            title={'software arquitect'}
            img={Avatar}
          />
          <Countributors name={'Jessica Weed'} title={'software engineer'} img={Avatar} />
        </div>
      </article>
    </section>
  )
}

export default Collaborate
