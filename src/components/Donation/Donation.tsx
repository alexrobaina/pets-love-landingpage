'use client'

import { CheckIcon } from '@/assets/icons'
import React, { useEffect, useState } from 'react'
import DonationCard from './components/DonationCard'
import { useTranslations } from 'next-intl'
import axios from 'axios'
import { Loader } from '../loader/Loader'
import { DOLAR_BLUE_URL } from '@/constants/URL'

const Donation = () => {
  const [isLoading, setIsloading] = useState(false)
  const country = localStorage.getItem('country')
  const [products, setProducts]: any = useState(null)
  const [dolarBlue, setDolarBlue]: any = useState(0)
  const t = useTranslations('donationCard')

  const getDolarBlue = async () => {
    try {
      const result = await axios.get(DOLAR_BLUE_URL)

      const dolarBlue = result?.data?.compra
      setDolarBlue(dolarBlue)
      localStorage.setItem('dolarBlue', dolarBlue)
    } catch (error) {
      console.log(error)
    }
  }

  const getProducts = async () => {
    try {
      setIsloading(true)

      const result = await axios.get('/api/products')
      await getDolarBlue()

      setProducts(result?.data)
      setIsloading(false)
    } catch (error) {
      setIsloading(false)
    }
  }

  const calculatePrice = (price: number) => {
    const country = localStorage.getItem('country')
    console.log(country)

    if (country === 'AR') {
      return price * parseInt(dolarBlue)
    }
    return price
  }

  useEffect(() => {
    getProducts()
  }, [country])

  return (
    <>
      <section className='flex lg:flex-row flex-col gap-2 py-8'>
        {isLoading && <Loader />}
        {products &&
          products.map((product: any) => (
            <DonationCard
              id={product.id}
              key={product.id}
              icon={CheckIcon}
              image={product.image}
              reward={product.peaks}
              location={country || ''}
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
