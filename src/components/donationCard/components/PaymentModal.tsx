'use client'
import axios from 'axios'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import React, { useEffect, useState } from 'react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { ReactModal } from '../../ReactModal'
import { useTranslations } from 'next-intl'
import useScreenWidth from '@/hook/useScreenWidth'
import { MercadoPagoButton } from '@/components/mercadopagoButton/MercadopagoButton'
import { DOLAR_BLUE_URL } from '@/constants/URL'

interface Props {
  id: string
  title: string
  image: string
  reward: String[]
  inputValue: string
  description: string
  isOpenDonationModal: boolean
  handleOpenDonationModal: Function
}

export const PaymentModal: FC<Props> = ({
  id,
  image,
  title,
  reward,
  inputValue,
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
  const [dolarBlue, setSolarBlue] = useState(0)

  const getDolarPriceArgentina = async () => {
    const dolarBlue = await axios.get(DOLAR_BLUE_URL)
    setSolarBlue(dolarBlue.data.venta)
  }

  useEffect(() => {
    getDolarPriceArgentina()
  }, [isOpenDonationModal])

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
      `/paySuccess?productId=${id}&title=${title}&price=${inputValue}&email=${email}&donationId=${id}&payType=paypal`,
      '_blank',
    )
  }

  const onError = async () => {
    window.open(
      `/payError/?productId=${id}&title=${title}&price=${inputValue}&email=${email}&donationId=${id}&payType=paypal`,
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
      height='90%'
      isOpen={isOpenDonationModal}
      closeModal={() => handleOpenDonationModal()}
    >
      <div className='flex flex-col w-full mt-10 mb-10'>
        <div className='xs:flex-row flex xs:gap-12 flex-col'>
          {title && (
            <h5 className='text-primary-950 py-2 marker:text-xl font-bold leading-none md:text-xl xl:text-2xl lg:flex'>
              {title}
            </h5>
          )}
          {image && (
            <div className='w-full flex justify-start'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt='cardImage'
                className={`rounded-3xl border-primary-100 w-[200px] md:mt-0 ${
                  isScreenSmall ? 'w-[150px]' : 'w-[200px]'
                }`}
              />
            </div>
          )}
        </div>
        <p className='text-primary-900 mb-2 text-md py-4'>{description}</p>
        <div className='mt-2'>
          <label className='text-primary-800'>{t('email')}</label>
          <div className='flex rounded-md shadow-sm ring-1'>
            <input
              type='email'
              name='email'
              value={email.value}
              onChange={handleChangeEmail}
              placeholder='daniel48@gmail.com'
              className='block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
            />
          </div>
          {email.error && <p className='text-red-500 text-xs mt-1'>{email.error}</p>}
        </div>
        {inputValue && (
          <>
            <div className='flex justify-between mt-4'>
              <h2 className='flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium'>
                Argentina
              </h2>
              <h2 className='flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium'>{`Total: $${
                parseInt(inputValue) * dolarBlue
              } Pesos`}</h2>
            </div>
            <MercadoPagoButton
              product={{
                id,
                image,
                title,
                reward,
                description,
                email: email.value,
                // inputValue: parseInt(inputValue) * dolarBlue,
                inputValue: parseInt(inputValue),
              }}
              validations={() => validateEmail(email.value)}
            />
            <div className='relative'>
              <hr className='my-8 h-[0.3px] border-t-0 bg-gray-400 opacity-100 dark:opacity-50' />
              <div className='w-full flex justify-center'>
                <p className='top-[9px] flex justify-center text-gray-400 text-sm bg-primary-50 py-3 px-4 absolute'>
                  {t('or')}
                </p>
              </div>
            </div>
            <label className='flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium'>
              {t('total')} ${inputValue}
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
                              value: inputValue,
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
      </div>
    </ReactModal>
  )
}
