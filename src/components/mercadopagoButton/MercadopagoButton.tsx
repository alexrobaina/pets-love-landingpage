import { useState } from 'react'
import axios from 'axios'
import Button from '../button/Button'
import { IconMercadopagoLogo } from '@/assets/icons'

interface MercadoPagoButtonProps {
  product: any
}

export const MercadoPagoButton = ({ product }: MercadoPagoButtonProps) => {
  const [isLoading, setLoading] = useState<boolean>(false)

  const generateLink = async () => {
    setLoading(true)

    try {
      const { data } = await axios.post('/api/checkout', {
        product,
      })

      window.open(data.response.init_point, '_blank')
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <Button
      type='primary'
      isLoading={isLoading}
      backgroundColor='#039FE3'
      text='Donar con Mercado Pago'
      onClick={() => generateLink()}
      icon={IconMercadopagoLogo}
    />
  )
}
