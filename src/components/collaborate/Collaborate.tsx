'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { IconGithub } from '@/assets/icons'
import Button from '../Button/Button'
import GitHubCollaborators from '../GitHubContributors/GitHubContributors'
import View from '@/components/useView/useInView'

const Collaborate = () => {
  const t = useTranslations('collaborate')

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
    <section id="collaborators">
      <article>
        <div className="w-full py-8 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className=" place-self-center mr-auto text-primary-950">
            <View>
              <h1 className="lg:mb-20 sm: mb-10 marker: text-3xl font-extrabold leading-none md:text-5xl xl:text-6x">
                {t('collaborateTitle')}
              </h1>
            </View>
            <View>
              <p className="mb-4 max-w-screen-lg font-light  lg:mb-8 md:text-lg lg:text-xl">
                {t('collaborateDescription1')}
              </p>
            </View>
            <View>
              <p className="mb-4 max-w-screen-lg font-light  lg:mb-8 md:text-lg lg:text-xl">
                {t('collaborateDescription2')}
              </p>
            </View>
          </div>
          <View>
            <div className="flex flex-col w-40 md:w-full lg:w-full lg:flex-row gap-12">
              <a href="https://github.com/alexrobaina/frontend_petsLove" target="_blank">
                <Image src={IconGithub} alt="IconGithub" />
              </a>
            </div>
          </View>
        </div>
        <View direction={true}>
          <GitHubCollaborators />
        </View>
      </article>
    </section>
  )
}

export default Collaborate
