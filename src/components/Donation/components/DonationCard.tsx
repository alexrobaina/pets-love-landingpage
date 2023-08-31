'use client'
import React, { useEffect } from 'react'
import { FC, useState } from 'react'
import { useTranslations } from 'next-intl'
import { PaymentModal } from './PaymentModal'
import Button from '@/components/button/Button'
import axios from 'axios'
import { DOLAR_BLUE_URL } from '@/constants/URL'

interface Props {
  id: string
  icon: string
  title: string
  reward: string[]
  minValue?: number | string
  description: string
  description2?: string
  image: string
}

const DonationCard: FC<Props> = ({
  id,
  image,
  title,
  reward,
  description,
  description2,
  minValue = 1,
}) => {
  const [isOpenDonationModal, setIsOpenDonationModal] = useState(false)
  const [price, setPrice]: any = useState(minValue)
  const t = useTranslations('donationCard')
  const [country, setCountry]: any = useState('')
  const [dolarBlue, setSolarBlue] = useState(0)

  const handleOpenDonationModal = () => {
    setIsOpenDonationModal(!isOpenDonationModal)
  }

  const setDonationPrice = () => {
    setCountry(localStorage.getItem('country'))
    if (country === 'AR') return setPrice(dolarBlue * price)

    setPrice(price)
  }
  const getDolarBluePriceArgentina = async () => {
    const dolarBlue = await axios.get(DOLAR_BLUE_URL)
    setSolarBlue(dolarBlue.data.venta)

    setDonationPrice()
  }

  const setCurrencty = () => (country === 'AR' ? 'ARS' : 'USD')

  useEffect(() => {
    getDolarBluePriceArgentina()
  }, [country])

  return (
    <>
      <div className='shadow-md w-full h-auto bg-primary-50 rounded-3xl ring-1 ring-primary-100 mt-10 flex justify-betweenflex flex-col justify-between'>
        <div className='p-8 lg:flex-auto flex flex-col '>
          <h3 className='text-2xl font-bold tracking-tight text-primary-950'>{title}</h3>
          <div className='gap-5'>
            <img
              src={image}
              alt='cardImage'
              className='pt-4 w-full rounded-md h-[120px] object-cover'
            />
            <p className='mt-6 text-base leading-7 text-gray-600'>{description}</p>
          </div>
          <div className='mt-4 items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary-600'>
              {t('whatsincluded')}
            </h4>
          </div>
          <ul
            role='list'
            className='mt-8 grid gap-4 text-sm leading-6 text-gray-600 sm:gap-6'
          >
            {reward.map((rewards, index) => {
              return (
                <li key={index} className='flex gap-x-3'>
                  <svg
                    className='h-6 w-5 flex-none text-primary-600'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {rewards}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='-mt-2 p-2 lg:mt-0 w-full lg:flex-shrink-0'>
          <div className='rounded-2xl bg-primary-100 py-10 text-center ring-1 ring-inset ring-primary-950/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='text-base font-semibold text-gray-600'>
                Pay once, own it forever
              </p>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight text-primary-950'>
                  {`$${price}`}
                </span>
                <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                  {setCurrencty()}
                </span>
              </p>
              <Button
                onClick={handleOpenDonationModal}
                text={t('donate')}
                type='primary'
                wFull
              />
              <p className='mt-6 text-xs leading-5 text-gray-600'>{description2}</p>
            </div>
          </div>
        </div>
      </div>
      <PaymentModal
        id={id}
        price={price}
        title={title}
        image={image}
        reward={reward}
        location={country}
        description={description}
        isOpenDonationModal={isOpenDonationModal}
        handleOpenDonationModal={handleOpenDonationModal}
      />
    </>
  )
}

export default DonationCard