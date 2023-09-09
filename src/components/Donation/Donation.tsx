'use client'
import { CheckIcon } from '@/assets/icons'
import React, { useEffect, useState } from 'react'
import DonationCard from './components/DonationCard'
import { useTranslations } from 'next-intl'
import axios from 'axios'
import { Loader } from '../loader/Loader'
import { DOLAR_BLUE_URL } from '@/constants/URL'
import { getLocation } from '@/services/getLocation'
import { useQuery } from 'react-query'

const Donation = () => {
  const { data, isLoading } = useQuery('products', () => axios.get('/api/products'))
  const [dolarBlue, setDolarBlue]: any = useState(0)
  const t = useTranslations('donationCard')

  const getLocalstorageCountry = async () => {
    await getLocation()
  }

  const getDolarBlue = async () => {
    try {
      const result = await axios.get(DOLAR_BLUE_URL)

      const dolarBlue = result?.data?.compra
      console.log(dolarBlue)

      setDolarBlue(dolarBlue)
    } catch (error) {
      console.log(error)
    }
  }

  const calculatePrice = (price: number) => {
    const country = localStorage.getItem('country')
    if (country === 'AR') return price * parseInt(dolarBlue)
    return price
  }

  const getCurrency = () => {
    const country = localStorage.getItem('country')
    if (country === 'AR') {
      return 'ARS'
    }
    return 'USD'
  }

  useEffect(() => {
    getDolarBlue()
    getLocalstorageCountry()
  }, [])

  return (
    <>
      <section className='flex lg:flex-row flex-col gap-2 py-8'>
        {isLoading && <Loader />}
        {data?.data &&
          data?.data.map((product: any) => (
            <DonationCard
              id={product.id}
              key={product.id}
              icon={CheckIcon}
              image={product.image}
              reward={product.peaks}
              currency={getCurrency()}
              price={calculatePrice(product.price)}
              title={t(`donationCard${product.id}.title`)}
              description={t(`donationCard${product.id}.description1`)}
              description2={t(`donationCard${product.id}.description2`)}
            />
          ))}
      </section>
    </>
  )
}

export default Donation
