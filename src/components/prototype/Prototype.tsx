import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { PrototypeDemo } from '@/assets/images'
import Button from '../Button/Button'
import View from '@/components/useView/useInView'

const Prototype = () => {
  const t = useTranslations('prototype')

  return (
    <View direction={true}>
      <section
        id="prototype"
        className="gap-20 grid-cols-1 center py-8  mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16  sm:grid-cols-1"
      >
        <div className="font-light  sm:text-lg text-primary-950">
          <div className="font-light  sm:text-lg text-primary-950">
            <h2 className="mb-4 text-4xl font-extrabold ">{t('prototypeTitle')}</h2>
            <p className="mb-4 ">{t('prototypeDescription')}</p>
            <div className="mb-4 ">
              <a
                target="_blank"
                href="https://www.figma.com/proto/MK1mSVutBHbVXEo4VyfzVf/Pets-love-system-design?type=design&node-id=3128-20360&t=MgjD73vm1cgGAxns-1&scaling=min-zoom&page-id=3128%3A20335&starting-point-node-id=3128%3A20360&show-proto-sidebar=1&mode=design"
              >
                <Button text={t('prototypeButtonName')} type="primary" />
              </a>
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
