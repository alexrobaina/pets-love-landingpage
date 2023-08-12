'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FC } from 'react'
import { ReactModal } from '../../ReactModal'
import { useTranslations } from 'next-intl'
import useScreenWidth from '@/hook/useScreenWidth'

interface Props {
  title: string
  description: string
  inputValue: number
  image: string | StaticImageData
  isOpenDonationModal: boolean
  handleOpenDonationModal: Function
}

export const PaymentModal: FC<Props> = ({
  image,
  title,
  inputValue,
  description,
  isOpenDonationModal,
  handleOpenDonationModal,
}) => {
  const isScreenSmall = useScreenWidth(780)
  const t = useTranslations('donationCard')
  const PayPalButton = ({ amount }: any) => {
    return (
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            })
          }}
        />
      </PayPalScriptProvider>
    )
  }

  return (
    <ReactModal
      buttonClose
      height='80%'
      title={t('titleModal')}
      isOpen={isOpenDonationModal}
      closeModal={() => handleOpenDonationModal()}
    >
      <div className='flex flex-col w-full mt-10'>
        <div className='xs:flex-col flex gap-12'>
          {title && (
            <h5 className='text-primary-950  py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl'>
              {title}
            </h5>
          )}
          {image && (
            <Image
              src={image}
              width={isScreenSmall ? 150 : 380}
              alt={'cardImage'}
              className='rounded-3xl border-primary-100 '
            />
          )}
        </div>
        <p className='text-primary-900 mb-2 text-md py-4'>{description}</p>
        {inputValue && (
          <>
            <label className='flex justify-end text-primary-950 lg:mb-2 py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl'>
              {t('total')} ${inputValue}
            </label>
            <PayPalButton amount={inputValue} />
          </>
        )}
      </div>
    </ReactModal>
  )
}
