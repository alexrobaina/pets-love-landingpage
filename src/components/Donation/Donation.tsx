'use client'

import { CheckIcon } from '@/assets/icons'
import React, { useEffect, useState } from 'react'
import DonationCard from './components/DonationCard'
import { useTranslations } from 'next-intl'
import axios from 'axios'
import { Loader } from '../loader/Loader'

const Donation = () => {
  const [isLoading, setIsloading] = useState(false)
  const [products, setProducts]: any = useState(null)
  const t = useTranslations('donationCard')

  const getProducts = async () => {
    try {
      setIsloading(true)

      const result = await axios.get('/api/products')

      setProducts(result?.data)
      setIsloading(false)
    } catch (error) {
      setIsloading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

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
              minValue={product.price}
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
