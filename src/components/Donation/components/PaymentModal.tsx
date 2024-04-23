'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { FC } from 'react'
import { ReactModal } from '@/components/ReactModal/ReactModal'
import { useTranslations } from 'next-intl'
import useScreenWidth from '@/hook/useScreenWidth'
import { MercadoPagoButton } from '@/components/MercadopagoButton'
import { initMercadoPago } from '@mercadopago/sdk-react'
import Link from 'next/link'
import Image from 'next/image'

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
  const [argPesos, setArgPesos]: any = useState('')
  const t = useTranslations('donationCard')

  useEffect(() => {
    const dolarBlue: any = localStorage.getItem('dolarblue')
    const result = dolarBlue * price

    if (dolarBlue) setArgPesos(result)
  }, [])

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
        <p className="text-primary-900 mb-2 text-md py-4 hidden md:flex">{description}</p>
        <>
          <label className="flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium">
            {`USD ${price}`}
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
        <>
          <div className="flex justify-between">
            <h2 className="flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium">
              Argentina
            </h2>
            <h2 className="flex justify-end text-primary-950 lg:mb-2 marker: text-xl font-medium">{`${argPesos} Pesos`}</h2>
          </div>
          <MercadoPagoButton
            product={{
              id,
              image,
              title,
              price: argPesos,
              reward,
              description,
            }}
          />
        </>
      </div>
    </ReactModal>
  )
}
