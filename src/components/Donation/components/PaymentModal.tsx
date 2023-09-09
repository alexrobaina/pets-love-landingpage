'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import React, { useCallback } from 'react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { ReactModal } from '../../ReactModal'
import { useTranslations } from 'next-intl'
import useScreenWidth from '@/hook/useScreenWidth'
import { MercadoPagoButton } from '@/components/mercadopagoButton/MercadopagoButton'

import { initMercadoPago } from '@mercadopago/sdk-react'
import Button from '@/components/Button/Button'
import Link from 'next/link'

initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY as string)

interface Props {
  id: string
  title: string
  image: string
  price: number
  reward: String[]
  currency: string
  description: string
  isOpenDonationModal: boolean
  handleOpenDonationModal: Function
}

export const PaymentModal: FC<Props> = ({
  id,
  image,
  price,
  title,
  reward,
  currency,
  description,
  isOpenDonationModal,
  handleOpenDonationModal,
}) => {
  const isScreenSmall = useScreenWidth(780)
  const t = useTranslations('donationCard')

  const checkLocation = useCallback(() => {
    const country = localStorage.getItem('country')

    return country
  }, [])

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <ReactModal
      height='auto'
      title={title}
      buttonClose
      isOpen={isOpenDonationModal}
      closeModal={() => handleOpenDonationModal()}
    >
      <div className='flex justify-between flex-col w-full mt-5'>
        <div className='xs:flex-row flex xs:gap-12 flex-col'>
          {image && (
            <div className='w-full flex justify-start'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt='cardImage'
                className={`rounded-3xl border-primary-100 w-[200px] md:mt-0 ${
                  isScreenSmall ? 'w-auto' : 'w-[200px]'
                }`}
              />
            </div>
          )}
        </div>
        <p className='text-primary-900 mb-2 text-md py-4 hidden md:flex'>{description}</p>
        {price && (
          <>
            <div className='flex justify-between mt-4'>
              <h2 className='flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium'>
                Argentina
              </h2>
              <h2 className='flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium'>{`Total: ${price} ${currency}`}</h2>
            </div>
            {checkLocation() === 'AR' && (
              <MercadoPagoButton
                product={{
                  id,
                  image,
                  title,
                  price,
                  reward,
                  description,
                }}
              />
            )}
            {checkLocation() !== 'AR' && (
              <>
                <div className='relative'>
                  <hr className='my-8 h-[0.3px] border-t-0 bg-gray-400 opacity-100 dark:opacity-50' />
                  <div className='w-full flex justify-center'>
                    <p className='top-[9px] flex justify-center text-gray-400 text-sm bg-primary-50 py-3 px-4 absolute'>
                      {t('or')}
                    </p>
                  </div>
                </div>
                <label className='flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium'>
                  {t('total')} ${price}
                </label>
                <div className='min-h-[100px]'>
                  <Link
                    target='_blank'
                    onClick={() => handleOpenDonationModal()}
                    href={`https://paypal.me/petsloveapp/${price}?country.x=AR&locale.x=es_XC`}
                    className='flex bg-[#FCC439] text-white font-bold py-2 px-4 rounded-md w-full justify-center'
                  >
                    <div className='flex'>
                      <p className='text-[#053087]'>Pay</p>
                      <p className='text-[#269DDE] '>Pal</p>
                    </div>
                  </Link>
                  {/* <PayPalScriptProvider
                    options={{
                      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
                    }}
                  >
                    <motion.div
                      initial='hidden'
                      animate='visible'
                      variants={variants}
                      transition={{ ease: 'easeOut' }}
                    >
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: price.toString(),
                                },
                              },
                            ],
                          })
                        }}
                      />
                    </motion.div>
                  </PayPalScriptProvider> */}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </ReactModal>
  )
}
