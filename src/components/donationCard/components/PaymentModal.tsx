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
  const [email, setEmail] = useState('')
  const [dolarBlue, setSolarBlue] = useState(0)

  const getDolarPriceArgentina = async () => {
    const dolarBlue = await axios.get('https://dolarapi.com/v1/dolares/blue')
    setSolarBlue(dolarBlue.data.venta)
  }

  useEffect(() => {
    getDolarPriceArgentina()
  }, [isOpenDonationModal])

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const onApprove = async (data: any) => {
    window.open(
      `/paySuccess?productId=${id}&title=${title}&price=${inputValue}&email=${email}&donationId=${id}&payType=paypal`,
      '_blank',
    )
  }

  useEffect(() => {
    setEmail('')
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
          <label className='text-primary-800'>Email</label>
          <div className='flex rounded-md shadow-sm ring-1'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={handleChangeEmail}
              placeholder='daniel48@gmail.com (Opcional)'
              className='block  flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        {inputValue && (
          <>
            <label className='flex justify-end text-primary-950 lg:mb-2 py-2 mt-5 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl'>
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
                  />
                </motion.div>
              </PayPalScriptProvider>
            </div>
            <div className='flex justify-between'>
              <h2 className=' text-lg font-medium text-start py-2 text-primary-800'>
                Argentina
              </h2>
              <h2 className=' text-lg font-medium text-start py-2 text-primary-800'>{`Total: $${
                parseInt(inputValue) * dolarBlue
              } Pesos`}</h2>
            </div>
            <MercadoPagoButton
              product={{
                title,
                reward,
                email,
                id,
                inputValue: parseInt(inputValue) * dolarBlue,
                description,
                image,
              }}
            />
          </>
        )}
      </div>
    </ReactModal>
  )
}
