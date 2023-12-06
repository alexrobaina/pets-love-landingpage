'use client'
import React from 'react'
import { FC, useState } from 'react'
import { useTranslations } from 'next-intl'
import Button from '../../../components/Button/Button'
import useScreenWidth from '@/hook/useScreenWidth'
import View from '@/components/useView/useInView'

const HorizontalDonationCard: FC = () => {
  const [isOpenDonationModal, setIsOpenDonationModal] = useState(false)
  const t = useTranslations('donationCard')
  const query = useScreenWidth(768)

  const handleOpenDonationModal = () => {
    if (window !== undefined) {
      window.open('https://opensea.io/wayex', '_blank')
    }
  }

  return (
    <View>
      <section className="shadow-md bg-primary-50 flex-col rounded-3xl ring-1 ring-primary-100 mt-4 flex justify-between ">
        <div className="p-8 justify-between flex flex-col md:flex-row gap-4">
          <img
            alt="cardImage"
            src="https://i.seadn.io/gcs/files/64fcb213a0a5630e2f9455ddd5aca804.png?auto=format&dpr=1&w=1000"
            className="rounded-lg h-64 rounded-md object-top object-cover"
          />

          <div className="flex flex-col justify-between">
            <div>
              <View>
                <h3 className="text-2xl font-bold tracking-tight text-primary-950">
                  {t('donationCard4.title')}
                </h3>
              </View>
              <div className="gap-5">
                <View>
                  <p className=" text-base leading-7 text-gray-600">
                    {t('donationCard4.description')}
                  </p>
                </View>
              </div>
            </div>
            <View>
              <div className="mt-12  md:mt-0 flex md:justify-end">
                <Button
                  wFull={query}
                  type="primary"
                  onClick={handleOpenDonationModal}
                  text={t('openseaCollection')}
                />
              </div>
            </View>
          </div>
        </div>
      </section>
    </View>
  )
}

export default HorizontalDonationCard
