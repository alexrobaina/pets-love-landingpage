'use client'
import React, { useCallback } from 'react'
import { FC } from 'react'
import { ReactModal } from '@/components/ReactModal/ReactModal'
import { useTranslations } from 'next-intl'
import useScreenWidth from '@/hook/useScreenWidth'
import { MercadoPagoButton } from '@/components/MercadopagoButton/MercadopagoButton'
import { initMercadoPago } from '@mercadopago/sdk-react'
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
      height="auto"
      title={title}
      buttonClose
      isOpen={isOpenDonationModal}
      closeModal={() => handleOpenDonationModal()}
    >
      {/* @ts-ignore */}
      <div className="flex justify-between flex-col w-full mt-5">
        <div className="xs:flex-row flex xs:gap-12 flex-col">
          {image && (
            <div className="w-full flex justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="cardImage"
                className={`rounded-3xl border-primary-100 w-[200px] md:mt-0 ${
                  isScreenSmall ? 'w-auto' : 'w-[200px]'
                }`}
              />
            </div>
          )}
        </div>
        <p className="text-primary-900 mb-2 text-md py-4 hidden md:flex">{description}</p>
        {checkLocation() === 'AR' && (
          <>
            <div className="flex justify-between mt-4">
              <h2 className="flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium">
                Argentina
              </h2>
              <h2 className="flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium">{`Total: ${price} ${currency}`}</h2>
            </div>
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
          </>
        )}
        {checkLocation() !== 'AR' && (
          <>
            <hr className="my-8 h-[0.3px] border-t-0 bg-gray-400 opacity-100 dark:opacity-50" />
            <label className="flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium">
              {t('total')} ${price}
            </label>
            <div className="min-h-[100px]">
              <Link
                target="_blank"
                onClick={() => handleOpenDonationModal()}
                href={`https://paypal.me/petsloveapp/${price}?country.x=AR&locale.x=es_XC`}
                className="flex bg-[#FCC439] text-white font-bold py-2 px-4 rounded-md w-full justify-center"
              >
                <div className="flex">
                  <p className="text-[#053087]">Pay</p>
                  <p className="text-[#269DDE] ">Pal</p>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </ReactModal>
  )
}
