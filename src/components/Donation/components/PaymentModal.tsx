'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import React, { useCallback, useEffect, useState } from 'react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { ReactModal } from '../../ReactModal'
import { useTranslations } from 'next-intl'
import useScreenWidth from '@/hook/useScreenWidth'
import { MercadoPagoButton } from '@/components/mercadopagoButton/MercadopagoButton'

interface Props {
  id: string
  title: string
  image: string
  price: number
  reward: String[]
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
  description,
  isOpenDonationModal,
  handleOpenDonationModal,
}) => {
  const isScreenSmall = useScreenWidth(780)
  const t = useTranslations('donationCard')
  const [email, setEmail] = useState({
    value: '',
    error: '',
    required: true,
    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  })

  const checkLocation = useCallback(() => {
    const country = localStorage.getItem('country')

    return country
  }, [])

  const validateEmail = (value: any) => {
    if (email.required) {
      if (email.pattern.test(value)) {
        setEmail({ ...email, error: '', value: value })
        return true
      }
    }
    setEmail({
      ...email,
      value: value,
      error: t('emailError'),
    })
    return false
  }

  const handleChangeEmail = (e: any) => {
    validateEmail(e.target.value)
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const onApprove = async () => {
    window.open(
      `/paySuccess?productId=${id}&title=${title}&price=${price}&email=${email}&donationId=${id}&payType=paypal`,
      '_blank',
    )
  }

  const onError = async () => {
    window.open(
      `/payError/?productId=${id}&title=${title}&price=${price}&email=${email}&donationId=${id}&payType=paypal`,
      '_blank',
    )
  }

  useEffect(() => {
    setEmail({
      value: '',
      error: '',
      required: true,
      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    })
  }, [isOpenDonationModal])

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
              <h2 className='flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium'>{`Total: ${price} Pesos`}</h2>
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
                  email: email.value,
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
                  <PayPalScriptProvider
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
                        disabled={email.error !== '' || email.value === ''}
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
                        onApprove={onApprove}
                        onError={onError}
                      />
                    </motion.div>
                  </PayPalScriptProvider>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </ReactModal>
  )
}
