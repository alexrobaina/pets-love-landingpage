'use client'

import { CheckIcon } from '@/assets/icons'
import React, { useEffect, useState } from 'react'
import DonationCard from './components/DonationCard'
import { useTranslations } from 'next-intl'
import axios from 'axios'
import { Loader } from '../loader/Loader'
import { Product } from '@prisma/client'

const DonationMain = () => {
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
      <section className='flex flex-wrap gap-10 justify-around py-8'>
        {isLoading && <Loader />}
        {products &&
          products.map((product: Product, index: number) => (
            <DonationCard
              key={product.id}
              icon={CheckIcon}
              image={product.image}
              reward={product.peaks}
              minValue={product.price}
              title={t(`donationCard${index + 1}.title`)}
              description={t(`donationCard${index + 1}.description1`)}
              description2={t(`donationCard${index + 1}.description2`)}
            />
          ))}
      </section>
    </>
  )
}

export default DonationMain
