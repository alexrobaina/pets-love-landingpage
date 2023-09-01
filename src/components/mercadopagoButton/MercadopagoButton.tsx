'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Loader } from '../loader/Loader'

interface MercadoPagoButtonProps {
  product: any
  validations: any
}
initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY as string)

export const MercadoPagoButton = ({ product, validations }: MercadoPagoButtonProps) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [preferenceId, setPreferenceId] = useState<string>('')
  const t = useTranslations('donationCard')

  const generateLink = async () => {
    // if (!validations()) return
    setLoading(true)

    try {
      const { data } = await axios.post('/api/mercadoPago', {
        product,
      })
      setPreferenceId(data.response.id)
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    generateLink()
  }, [])

  return (
    <>
      {isLoading && (
        <div className='flex justify-center'>
          <Loader />
        </div>
      )}

      {!isLoading && <Wallet initialization={{ preferenceId }} />}
    </>
  )
}
