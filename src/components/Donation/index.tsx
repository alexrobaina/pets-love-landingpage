'use client'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import axios from 'axios'
import { DOLAR_BLUE_URL } from '@/constants/URL'
import human from '@/assets/lottie/humanMountain.json'
import { LottieAnimation } from '../LottieAnimations'

const Donation = () => {
  const [dolarBlue, setDolarBlue]: any = useState(0)
  const t = useTranslations('donationCard')

  const getLocalstorageCountry = async () => {
    // await getLocation()
  }

  const getDolarBlue = async () => {
    try {
      const result = await axios.get(DOLAR_BLUE_URL)

      const dolarBlue = result?.data?.compra
      localStorage.setItem('dolarblue', result?.data?.compra)

      setDolarBlue(dolarBlue)
    } catch (error) {
      console.log(error)
    }
  }

  const calculatePrice = (price: number) => {
    if (typeof window !== 'undefined') {
      const country = localStorage.getItem('country')

      if (country === 'AR') {
        const arPrice = price * parseInt(dolarBlue)
        return Math.round(arPrice / 100) * 100
      }
      return price
    }
  }

  const getCurrency = () => {
    if (typeof window !== 'undefined') {
      const country = localStorage.getItem('country')
      if (country === 'AR') {
        return 'ARS'
      }
      return 'USD'
    }
  }

  useEffect(() => {
    getDolarBlue()
    getLocalstorageCountry()
  }, [])

  return (
    <section>
      <div className="flex gap-4 sm:flex-row">
        <div className="shadow-md w-full bg-primary-50 rounded-3xl ring-1 ring-primary-100 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8">
          <div className="w-[50%] h-[500] flex justify-center rounded-md">
            <LottieAnimation width={200} animation={human} />
          </div>
          <div className="flex flex-col justify-between flex-grow w-[50%]">
            <p className="text-base leading-7 text-gray-600">
              {t('donationCard4.description')}
            </p>
            <button
              className="mt-5 py-2 px-4 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              onClick={() => {
                window.open('https://linktr.ee/petslove.app', '_blank')
              }}
            >
              {t('donate')}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex lg:flex-row flex-col gap-2">
        {donations.map((product: any) => {
          return (
            <DonationCard
              id={product.id}
              key={product.id}
              icon={CheckIcon}
              price={product.price}
              image={product.image}
              reward={product.peaks}
              currency={getCurrency() || 'USD'}
              title={t(`donationCard${product.id}.title`)}
              description={t(`donationCard${product.id}.description1`)}
              description2={t(`donationCard${product.id}.description2`)}
            />
          )
        })}
      </div> */}
    </section>
  )
}

export default Donation
